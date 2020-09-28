import { Component, OnInit } from '@angular/core';
import {LoaderConfigService} from '../service/loader-config-service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.css']
})
export class ProjectDescriptionComponent implements OnInit {

  about: [any];
  constructor(private readonly loaderConfigService: LoaderConfigService) { }

  ngOnInit() {
    this.loaderConfigService
        .fetchAbout()
        .then(result => {
          this.about = result;
        });
  }

}
