import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-menu-bar-demo',
  templateUrl: './dynamic-menu-bar-demo.component.html',
  styles: []
})
export class DynamicMenuBarDemoComponent {
  addMenuBarItemForm: FormGroup;
  constructor(
    fb: FormBuilder
  ) {
    this.addMenuBarItemForm = fb.group({
      title: [null, Validators.required],
      items: fb.array([
        fb.group({
          title: [null, Validators.required],
          command: null,
          disabled: false
        })
      ])
    })
  }
}