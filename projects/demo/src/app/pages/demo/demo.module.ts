import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';

import { CustomMenuBarDemoComponent } from './custom-menu-bar-demo/custom-menu-bar-demo.component';
import { DocsAppMenuBarDemoComponent } from './docs-app-menu-bar-demo/docs-app-menu-bar-demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { DynamicMenuBarDemoComponent } from './dynamic-menu-bar-demo/dynamic-menu-bar-demo.component';
import { MenuBarModule } from '../../components/menu-bar/menu-bar.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
