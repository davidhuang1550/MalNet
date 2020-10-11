import { Component, OnInit } from '@angular/core';
import {NavService} from "../service/nav.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  private _navHidden: false;
  constructor(private navService: NavService) { }

  ngOnInit() {
    this.navService.changeNavColor.subscribe( color => {
      this._navHidden = color;
    });
  }
  get navHidden(): false {
    return this._navHidden;
  }

  set navHidden(value: false) {
    this._navHidden = value;
  }
}
