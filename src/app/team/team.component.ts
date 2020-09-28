import { Component, OnInit } from '@angular/core';
import {LoaderConfigService} from '../service/loader-config-service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMember: [any];

  constructor(private readonly loaderConfigService: LoaderConfigService) { }

  ngOnInit() {
    this.loaderConfigService
        .fetchTeam()
        .then(result => {
          this.teamMember = result;
        });
  }

}
