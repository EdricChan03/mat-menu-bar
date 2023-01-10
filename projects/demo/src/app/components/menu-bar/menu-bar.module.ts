import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { MenuBarComponent } from './menu-bar.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuBarService } from '../../menu-bar.service';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatMenuModule
];

@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  declarations: [
    MenuBarComponent,
    MenuItemComponent
  ],
  providers: [
    MenuBarService
  ],
  exports: [
    MenuBarComponent
  ]
})
export class MenuBarModule { }
