import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import * as CanvasJS from './canvasjs.min';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit, AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      zoomEnabled: true,
      title: {
        text: ''
      },
      axisY: {
        title: 'metrics',
        prefix: ''
      },
      data: [{
        type: 'boxAndWhisker',
        upperBoxColor: '#0479d9',
        lowerBoxColor: '#007ee5',
        color: 'black',
        dataPoints: [
          { label: 'entropy', y:
                [
                    this.data["points"]["minmax"][0],
                  this.data["points"]["q25"],
                  this.data["points"]["q50"],
                  this.data["points"]["q75"],
                  this.data["points"]["minmax"][1]]
          }
        ]
      }]
    });
    chart.render();
  }

  ngAfterViewInit() {
  }

}
