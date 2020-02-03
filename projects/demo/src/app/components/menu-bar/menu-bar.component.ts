import { Component, Input } from '@angular/core';

import { MenuBarService } from '../../menu-bar.service';
import { MenuBarItem } from './models/menu-bar';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  /** Whether the menu-bar should be displayed in dense mode. */
  @Input() dense: boolean = true;

  /** The list of menu bar items. */
  @Input() items: MenuBarItem[];
}
