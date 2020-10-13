import { Component, OnInit } from '@angular/core';
import {LoaderConfigService} from '../service/loader-config-service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faq;

  constructor(private readonly loaderConfigService: LoaderConfigService) { }

  ngOnInit() {
    this.loaderConfigService
        .fetchFAQConfig()
        .then(result => {
          this.faq = result;
        });
  }

}
