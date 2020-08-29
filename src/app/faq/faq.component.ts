import { Component, OnInit } from '@angular/core';
import {Constant} from '../constants/Constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  private faq = Constant.FAQ;

  constructor() { }

  ngOnInit() {
  }

  toggle() {

  }

}
