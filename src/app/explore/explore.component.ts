import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material';
import {TreeViewComponent} from '@syncfusion/ej2-angular-navigations';
import {Router} from '@angular/router';
import {NgbModal, NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import ForceGraph from 'force-graph';
import {EdgelistService} from '../service/edgelist.service';
import {NavService} from '../service/nav.service';
import {DialogContentComponent} from '../dialog-content/dialog-content.component';
import {LoaderConfigService} from '../service/loader-config-service';
import {DataService} from "../service/data-service";

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit, AfterViewInit {
  @ViewChild("tree", {static: false})
  public tree: TreeViewComponent;

  @ViewChild("treeGraph", {static: false})
  public treeGraph: TreeViewComponent;

  @ViewChild('closeId', {static: false}) closeId: NgbPopover;
  @ViewChild('helpId', {static: false}) helpId: NgbPopover;
  @ViewChild('expandId', {static: false}) expandId: NgbPopover;
  @ViewChild('helpIdMobile', {static: false}) helpIdMobile: NgbPopover;
  @ViewChild('expandIdMobile', {static: false}) expandIdMobile: NgbPopover;
  @ViewChild('graphId', {static: false}) graphId: NgbPopover;

  toolTips: NgbPopover[] = [];

  position = 0;
  data;
  graphData;
  image = 'https://via.placeholder.com/700';
  public fields;
  public graphFields;
  public parentNodes: any = [];

  private navbarOpen = false;
  // summary stats
  stats = {};
  closeResult = '';

  cachedStats = [];

  // for graph
  width;
  // for graph
  height;

  isImage = false;

  selectedTitle = '';

  expand = true;
  toolTipPosition = 0;
  searchSize = true;
  loadGraphInit = false;
  loadGraphInitId;
  constructor(private router: Router,
              private edgeListService: EdgelistService,
              private loaderConfigService: LoaderConfigService,
              private modalService: NgbModal,
              private navService: NavService,
              public dialog: MatDialog,
              private readonly dataService: DataService
              ) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    if(this.router.getCurrentNavigation().extras.state !== undefined) {
      if(this.router.getCurrentNavigation().extras.state.type === 'Graph') {
        this.loadGraphInit = true;
        this.position = 0;
      } else {
        this.loadGraphInit = false;
        this.position = 1;
      }
      this.loadGraphInitId = this.router.getCurrentNavigation().extras.state.id;
    }

  }
  
  findNode(id, node, path) {
    for(let x = 0; x < node.length; x++) {
      if(id === node[x]["id"]) {
        node[x]['expanded'] = true;
        return path + node[x]['text'];
        break;
      }

      if(x !== node.length-1 && Number(id) < Number(node[x+1]["id"])) {
        node[x]['expanded'] = true;
        this.findNode(id, node[x]["children"], path + node[x]['text'] + "/");
        break;
      } else if(x === node.length - 1 ) {
        node[x]['expanded'] = true;
        this.findNode(id, node[x]["children"], path + node[x]['text'] + "/");
        break;
      }
    }
  }
  openDialog(payload, name) {
    const dialogRef = this.dialog.open(DialogContentComponent,
        {
          data: {
            points: payload,
            name: name,
            title: this.selectedTitle
          },
          autoFocus: false
        });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public onNodeSelected(args, tree): string {
    this.parentNodes.push(args.node)
    this.findParentNodes(args.node);
    let fullpath = "";
    for (let i = this.parentNodes.length - 1; i >= 0; --i) {
      //using getNode method to get the node text
      var data = tree.getNode(this.parentNodes[i]);
      fullpath = fullpath + data.text;
      if (i != 0)
        fullpath = fullpath + '/';
    }
    this.parentNodes = [];
    return fullpath;
  }
  //collect the parent nodes for currently selected node
  public findParentNodes(node: HTMLElement) {
    const parent: HTMLElement = node.parentElement.parentElement;
    if (parent.classList.contains("e-list-item")) {
      this.parentNodes.push(parent);
      this.findParentNodes(parent);
    }
  }

  public onNodeSelectedImage(args) {
    const val = this.onNodeSelected(args, this.tree);
    if(val.endsWith('.png') || val.endsWith('.jpg') || val.endsWith('.jpeg')) {
      this.image = '../../assets/image/' +  val;
      this.selectedTitle = val.split('/')[0];
      const map = this.cachedStats[this.selectedTitle.toLowerCase()];
      this.stats = {'entropy': map['entropy']};
      this.isImage = true;
    }
  }

  public onNodeSelectedGraph(args) {
    const path = this.onNodeSelected(args, this.treeGraph);
    const graph = '../../assets/graph/' +  path;
    if(path.endsWith('.json')) {
      this.loadGraph(graph);
      this.selectedTitle = path.split('/')[0];
      const map = this.cachedStats[this.selectedTitle.toLowerCase()];
      this.stats = {'edges': map['edges'], 'density': map['density'], 'Average Degree': map['Average Degree'], 'nodes': map['nodes']};
      this.isImage = false;
    }
  }

  public toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  public loadGraph(fileName: string) {
    this.edgeListService.load(fileName)
        .then( result => {
          const resultObj = JSON.parse(result);
          return {
            "nodes": resultObj["nodes"],
            "links": resultObj["links"]
          };
        }).then( resultset => {
      ForceGraph()
      (document.getElementById('graph-container'))
          .height(this.height)
          .width(this.width)
          .zoom(1)
          .linkWidth(.2)
          .nodeRelSize(6)
          .backgroundColor("#182026")
          .linkColor(d => "#9c9a9a")
          .graphData(resultset);
    });
  }


  async ngOnInit() {
    this.data = await this.dataService.getImageData().then(async result => {
      return result.filter(data => data.id !== "0")
    });
    this.graphData = await this.dataService.getGraphData().then(async result => {
      return result.filter(data => data.id !== "0")
    });

    this.graphFields = { dataSource: this.graphData, id: 'id', text: 'text', child: 'children'};
    this.fields = { dataSource: this.data, id: 'id', text: 'text', child: 'children'};
    this.navService.changeNavColor.next(true);

    this.loaderConfigService
        .fetchStats()
        .then(result => {
          console.log(result);
          this.cachedStats = result;
        });
    if(this.loadGraphInit) {
      this.loadGraph(this.findNode(this.loadGraphInitId, this.graphData, '../../assets/graph/'));
    } else {
      this.image = this.findNode(this.loadGraphInitId, this.data, '../../assets/image/');
    }
  }

  toggleSearchBar() {
    this.searchSize = !this.searchSize;
  }

  toggleExpand() {
    this.expand = !this.expand;
    this.searchSize = this.expand;
    return false;
  }

  resetPopOver() {
    this.toolTipPosition = 0;
    this.toolTips[this.toolTipPosition].disablePopover = false;
    this.toolTips[this.toolTipPosition].open();
    this.toolTips.forEach( item => item.disablePopover = true);
    return false;
  }

  close(pop:any, popM:any) {
    pop.close();
    pop.disablePopover = true;
    popM.close();
    popM.disablePopover = true;
  }
  nextToolTip() {
    this.toolTips[this.toolTipPosition].close();
    this.toolTips[++this.toolTipPosition].disablePopover = false;
    this.toolTips[this.toolTipPosition].open();
    this.toolTips[this.toolTipPosition].disablePopover = true;
  }
  ngAfterViewInit(): void {
    this.toolTips.push(this.graphId);
    //this.toolTips.push(this.data);
    this.toolTips.push(this.closeId);

    if(window.innerWidth >= 992) {
      this.toolTips.push(this.helpId);
      this.toolTips.push(this.expandId);
    } else {
      this.toolTips.push(this.helpIdMobile);
      this.toolTips.push(this.expandIdMobile);
    }


    this.toolTipPosition = 0;
    this.toolTips.forEach( item => item.disablePopover = true);

    this.loadGraph('../../assets/preview-graph.json');
  }
}
