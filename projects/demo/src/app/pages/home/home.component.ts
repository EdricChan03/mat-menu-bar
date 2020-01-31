import { Component } from '@angular/core';

import { DemosService } from '../../demos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: []
})
export class HomeComponent {
  constructor(public demosService: DemosService) {}
}