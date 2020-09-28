import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatDialog, MatTreeNestedDataSource} from '@angular/material';
import {TreeViewComponent} from '@syncfusion/ej2-angular-navigations';
import {Router} from '@angular/router';
import {VIRUS_IMAGE} from '../constants/virus.image';
import {MatTooltip} from '@angular/material/typings/tooltip';
import {ModalDismissReasons, NgbModal, NgbTooltip} from '@ng-bootstrap/ng-bootstrap';
import ForceGraph from 'force-graph';
import {EdgelistService} from '../service/edgelist.service';
import {VIRUS_GRAPH} from '../constants/virus.graph';
import * as CanvasJS from './canvasjs.min';
import {NavService} from '../service/nav.service';
import {DialogContentComponent} from '../dialog-content/dialog-content.component';
import {LoaderConfigService} from '../service/loader-config-service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit, AfterViewInit {
  @ViewChild("tree", {static: false})
  public tree: TreeViewComponent;

  @ViewChild("treeGraph", {static: false})
  public treeGraph: TreeViewComponent;

  @ViewChild('imageTip', {static: false}) imageTip: NgbTooltip;
  @ViewChild('graphTip', {static: false}) graphTip: NgbTooltip;
  @ViewChild('datatip', {static: false}) dataTip: NgbTooltip;

  position = 0;
  data = VIRUS_IMAGE.filter(data => data.id !== "0");
  graphData = VIRUS_GRAPH.filter(data => data.id !== "0");
  image = 'https://via.placeholder.com/700';
  public fields: any = { dataSource: this.data, id: 'id', text: 'text', child: 'children' };
  public graphFields: any = { dataSource: this.graphData, id: 'id', text: 'text', child: 'children'};
  public parentNodes: any = [];

  // summary stats
  stats = {};
  closeResult = '';

  cachedStats = [];

  // for graph
  width;
  // for graph
  height;

  constructor(private router: Router,
              private edgeListService: EdgelistService,
              private loaderConfigService: LoaderConfigService,
              private modalService: NgbModal,
              private navService: NavService,
              public dialog: MatDialog
              ) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.navService.changeNavColor.next(true);

    this.loaderConfigService
        .fetchStats()
        .then(result => {
          console.log(result);
          this.cachedStats = result;
        });

    if(this.router.getCurrentNavigation().extras.state !== undefined) {
      if(this.router.getCurrentNavigation().extras.state.type === 'Graph') {
        this.loadGraph(this.findNode(this.router.getCurrentNavigation().extras.state.id, this.graphData, '../../assets/graph/'));
        this.position = 0;
      } else {
        this.image = this.findNode(this.router.getCurrentNavigation().extras.state.id, this.data, '../../assets/image/')
        this.position = 1;
      }
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
  openDialog(payload) {
    const dialogRef = this.dialog.open(DialogContentComponent,
        {
          data: {
            points: payload
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
    }
  }

  public onNodeSelectedGraph(args) {
    const path = this.onNodeSelected(args, this.treeGraph);
    const graph = '../../assets/graph/' +  path;
    if(path.endsWith('.json')) {
      this.loadGraph(graph);
      this.stats = this.cachedStats[path.split('/')[0]];
    }
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
          .linkDirectionalParticles(1)
          .height(this.height)
          .width(this.width)
          .zoom(1)
          .backgroundColor("#4c4c4c")
          .linkColor("#fff")
          .graphData(resultset);
    });
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    /*this.imageTip.open();
    this.graphTip.open();
    this.dataTip.open();
    setTimeout( () => {
      this.imageTip.close();
      this.graphTip.close();
      this.dataTip.close();

    }, 7000);*/
    this.loadGraph('../../assets/3E49D863921A32E6CF3A894BCA97FFBF55E54A0E3205DB51EB0487266E8D4085.json');
    //this.dataTip.disableTooltip = true;
  }
}
