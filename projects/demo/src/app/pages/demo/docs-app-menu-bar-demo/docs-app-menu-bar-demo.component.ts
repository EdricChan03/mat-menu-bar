import { Component } from '@angular/core';

import { MenuBarService } from '../../../menu-bar.service';

@Component({
  selector: 'app-docs-app-menu-bar-demo',
  templateUrl: 'docs-app-menu-bar-demo.component.html',
  styles: []
})
export class DocsAppMenuBarDemoComponent {
  constructor(public menuBarService: MenuBarService) { }
}
