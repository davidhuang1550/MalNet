import { Component, OnInit } from '@angular/core';
import {LoaderConfigService} from '../service/loader-config-service';

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css']
})
export class CitationsComponent implements OnInit {

  citations;
  constructor(private readonly loaderConfigService: LoaderConfigService) { }

  ngOnInit() {
    this.loaderConfigService
        .fetchCitations()
        .then(result => {
          this.citations = result;
        });
  }

}
