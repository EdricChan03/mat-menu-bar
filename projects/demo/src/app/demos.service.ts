import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemosService {
  /** The list of demos. */
  readonly demos = [
    {
      title: 'Docs app menu bar',
      id: 'docs-app-menu-bar'
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
