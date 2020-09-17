import { Component, OnInit } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {PARTICLES, PARTICLES_VALUES} from '../constants/configuration';
import {Router} from '@angular/router';
import {VIRUS_IMAGE} from '../constants/virus.image';
import {Select2OptionData} from 'ng-select2';
import { Options } from 'select2';
import {VIRUS_GRAPH} from '../constants/virus.graph';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [   // :enter is alias to 'void => *'
        style({opacity: 0 }),
        animate(1000, style({opacity: 1 }))
      ])
    ])
  ]
})
export class HomePageComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  toggleBtn: string = 'Graph';
  //binding data source through fields property
  public exampleData: Array<Select2OptionData>;

  graphData = VIRUS_GRAPH.map(this.mapVirus);
  imageData = VIRUS_IMAGE.map(this.mapVirus);

  /**
   * this onit method will call the interval setting via timeout where an
   * asynchronous task will begin to change the qoute and the trait within
   * the specified interval defined.
   */
  ngOnInit() {
    let position = 1;
    this.myStyle = PARTICLES_VALUES;
    this.myParams = PARTICLES;
    this.exampleData = this.graphData;
  }

  mapVirus(val) {
    if(val.id === "0") return val;
    return {
      "id": val.id,
      "text": val.text,
      "children": val.children.map( child => {
        return {
          "id": child.id,
          "text": child.text
        };
      })
    };
  }


  constructor(private router: Router) {
  }

  toggleBtnAction(value) {
    if (value === 'Graph') {
      this.exampleData = this.graphData;
    } else {
      this.exampleData = this.imageData;
    }
  }

  select($event) {
    if( $event !== undefined)
      this.router.navigate(['explore'], { state: { id: $event, type: this.toggleBtn } });
  }

}
