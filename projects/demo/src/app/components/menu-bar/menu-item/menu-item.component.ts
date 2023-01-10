// Code adapted from https://stackoverflow.com/a/53977579/6782707.
import { Component, Input, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

import { MenuItem, MenuItemCheckbox, MenuItemRadio, MenuItemRadioChild } from '../models/menu-bar';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent {
  menuClasses: string[] = ['menu-bar-item-menu'];
  private _dense = true;
  @Input() items: MenuItem[];
  get dense(): boolean {
    return this._dense;
  }
  @Input()
  set dense(value: boolean) {
    this._dense = value;
    if (value) {
      if (!(this.menuClasses.indexOf('menu-bar-item-menu--dense') > -1)) {
        this.menuClasses.push(`${this.menuClass} menu-bar-item-menu--dense`);
      }
    } else {
      if (this.menuClasses.indexOf('menu-bar-item-menu--dense') > -1) {
        this.menuClasses = this.menuClasses.filter(e => e !== 'menu-bar-item-menu--dense');
      }
    }
  }
  get menuClass(): string {
    return this.menuClasses.join(' ');
  }

  @ViewChild('childMenu', { static: true }) public childMenu: MatMenu;

  onRadioMenuItemClick(parentItem: MenuItemRadio, item: MenuItemRadioChild,
    ev: Event) {
    if (item.onClick) {
      item.onClick(item, ev);
    }
  
    const oldValue = parentItem.value;
    const newValue = item.value;
    parentItem.value = item.value;

    if (parentItem.onValueChange) {
      parentItem.onValueChange(oldValue, newValue);
    }
  }

  onCheckboxMenuItemClick(item: MenuItemCheckbox, ev: Event) {
    if (item.onClick) {
      item.onClick(item, ev);
    }

    const oldValue = item.value;
    const newValue = !item.value;
    item.value = !item.value;

    if (item.onValueChange) {
      item.onValueChange(oldValue, newValue);
    }
  }
}
