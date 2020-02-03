import { Injectable } from '@angular/core';

export interface Demo {
  title: string;
  id: string;
  icon?: string;
  svgIcon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemosService {
  /** The list of demos. */
  readonly demos: Demo[] = [
    {
      title: 'Docs app menu bar',
      id: 'docs-app-menu-bar',
      svgIcon: 'mdi:file-document-box'
    },
    {
      title: 'Custom menu bar',
      id: 'custom-menu-bar'
    },
    {
      title: 'Dynamic menu bar',
      id: 'dynamic-menu-bar'
    }
  ]
}
