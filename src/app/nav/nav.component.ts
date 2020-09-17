import { Component, OnInit } from '@angular/core';
import { NavView } from './nav.view';
import $ from 'jquery';
import {Constant} from '../constants/Constants';
import {EdgelistService} from '../service/edgelist.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private _navView: NavView;
  private _navbarOpen = false;
  private _navbarShrink = false;
  constructor() {
    this._navView = new NavView(Array.from(Constant.NAV_ITEMS.keys()), Constant.NAV_ITEMS);
    console.log(this._navView.keys);
  }

  public toggleNavbar() {
    this._navbarOpen = !this._navbarOpen;
  }

  ngOnInit() {
    const self = this;
    // Collapse the navbar when page is scrolled
    $(window).scroll(() => {
      if ($('#mainNav').offset().top > 100) {
        self._navbarShrink = true;
      } else {
        self._navbarShrink = false;
      }
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }

  get navView(): NavView {
    return this._navView;
  }

  set navView(value: NavView) {
    this._navView = value;
  }
  get navbarOpen(): boolean {
    return this._navbarOpen;
  }

  set navbarOpen(value: boolean) {
    this._navbarOpen = value;
  }
  get navbarShrink(): boolean {
    return this._navbarShrink;
  }

  set navbarShrink(value: boolean) {
    this._navbarShrink = value;
  }

}
