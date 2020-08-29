import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Constant} from '../constants/Constants';
import {PARTICLES, PARTICLES_VALUES} from '../constants/configuration';

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

  /**
   * this onit method will call the interval setting via timeout where an
   * asynchronous task will begin to change the qoute and the trait within
   * the specified interval defined.
   */
  ngOnInit() {
    let position = 1;
    this.myStyle = PARTICLES_VALUES;

    this.myParams = PARTICLES;
    const self = this;
  }
}
