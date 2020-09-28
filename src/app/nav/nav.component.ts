import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {NavService} from '../service/nav.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private _navbarOpen = false;
  private _navbarShrink = false;
  private _navBarCollapse = false;
  constructor(private navService: NavService) {
  }

  public toggleNavbar() {
    this._navbarOpen = !this._navbarOpen;
  }

  ngOnInit() {
    const self = this;
    // Collapse the navbar when page is scrolled
    $(window).scroll(() => {
      if ($('#mainNav').offset().top > 100) {
        self._navBarCollapse = true;
      } else {
        self._navBarCollapse = false;
      }
    });

    this.navService.changeNavColor.subscribe( color => {
      this.navbarShrink = color;
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
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
  get navBarCollapse(): boolean {
    return this._navBarCollapse;
  }

  set navBarCollapse(value: boolean) {
    this._navBarCollapse = value;
  }
}
