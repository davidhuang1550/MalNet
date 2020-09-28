import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {

  opened = false;

  @Input()
  title: string;

  @Input()
  text: string;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.opened = !this.opened;
  }

}
