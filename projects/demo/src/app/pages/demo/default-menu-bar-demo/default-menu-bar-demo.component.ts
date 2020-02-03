import { Component } from '@angular/core';

import { MenuBarService } from '../../../menu-bar.service';

@Component({
  selector: 'app-default-menu-bar-demo',
  templateUrl: 'default-menu-bar-demo.component.html',
  styles: []
})
export class DefaultMenuBarDemoComponent {
  constructor(public menuBarService: MenuBarService) { }
}
