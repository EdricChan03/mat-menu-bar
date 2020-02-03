import { Component } from '@angular/core';

import { MenuBarService } from '../../../menu-bar.service';

@Component({
  selector: 'app-custom-menu-bar-demo',
  templateUrl: './custom-menu-bar-demo.component.html',
  styles: []
})
export class CustomMenuBarDemoComponent {
  constructor(public menuBarService: MenuBarService) { }
}
