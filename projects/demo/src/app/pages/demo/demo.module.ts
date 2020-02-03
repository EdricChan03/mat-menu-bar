import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { CustomMenuBarDemoComponent } from './custom-menu-bar-demo/custom-menu-bar-demo.component';
import { DocsAppMenuBarDemoComponent } from './docs-app-menu-bar-demo/docs-app-menu-bar-demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DynamicMenuBarDemoComponent } from './dynamic-menu-bar-demo/dynamic-menu-bar-demo.component';
import { MenuBarModule } from '../../components/menu-bar/menu-bar.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MenuBarModule,
    MATERIAL_MODULES,
    DemoRoutingModule
  ],
  declarations: [
    CustomMenuBarDemoComponent,
    DocsAppMenuBarDemoComponent,
    DynamicMenuBarDemoComponent
  ]
})
export class DemoModule { }
