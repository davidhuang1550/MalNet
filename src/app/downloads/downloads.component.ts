import { Component, OnInit } from '@angular/core';
import {LoaderConfigService} from '../service/loader-config-service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  downloadsData: [any];

  constructor(private readonly loaderConfigService: LoaderConfigService) { }

  ngOnInit() {
    this.loaderConfigService
        .fetchDownloads()
        .then(result => {
            this.downloadsData = result;
        });
  }

  goToLink(url) {
      window.open(url, "_blank");
  }
}
