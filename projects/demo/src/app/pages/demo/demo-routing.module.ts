import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomMenuBarDemoComponent } from './custom-menu-bar-demo/custom-menu-bar-demo.component';
import { DocsAppMenuBarDemoComponent } from './docs-app-menu-bar-demo/docs-app-menu-bar-demo.component';
import { DynamicMenuBarDemoComponent } from './dynamic-menu-bar-demo/dynamic-menu-bar-demo.component';

const routes: Routes = [
  {
    path: 'custom-menu-bar',
    component: CustomMenuBarDemoComponent
  },
  {
    path: 'docs-app-menu-bar',
    component: DocsAppMenuBarDemoComponent
  },
  {
    path: 'default-menu-bar',
    redirectTo: 'docs-app-menu-bar'
  },
  {
    path: 'dynamic-menu-bar',
    component: DynamicMenuBarDemoComponent
  }
  // {
  //   path: '**',
  //   redirectTo: 'default-menu-bar'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
