import { Component, OnInit } from '@angular/core';
import {Constant} from '../constants/Constants';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css']
})
export class CitationsComponent implements OnInit {

  citations = Constant.CITATION_DATA;
  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(this.citations[0].person));
  }

}
