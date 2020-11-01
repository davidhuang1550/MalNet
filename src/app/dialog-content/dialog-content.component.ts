import {AfterViewInit, Component, ElementRef, Inject, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import 'chartjs-chart-box-and-violin-plot';
import {Plotly} from "angular-plotly.js/lib/plotly.interface";
@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit, AfterViewInit {

  public graph;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private readonly elementRef: ElementRef, private readonly ngZone: NgZone) { }

  ngOnInit() {
    this.graph = {
      data: [
        {
          y: [this.data["points"]["minmax"][0],
            this.data["points"]["q25"],
            this.data["points"]["q50"],
            this.data["points"]["q75"],
            this.data["points"]["minmax"][1]],
          type: 'box',
          name: '',
          marker: {color: '#007ee5'}
        }
      ],
      layout: {
        plot_bgcolor:"#182026",
        paper_bgcolor:"#182026",
        font: {
          color: 'white'
        },
        boxgap: 0.9,
        title: this.data["name"].toUpperCase()
      }
    }

  }


  ngAfterViewInit() {
  }

}
