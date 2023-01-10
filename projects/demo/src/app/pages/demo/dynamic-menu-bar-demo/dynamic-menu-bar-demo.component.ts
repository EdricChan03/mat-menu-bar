import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuBarItem } from '../../../components/menu-bar/models/menu-bar';

@Component({
  selector: 'app-dynamic-menu-bar-demo',
  templateUrl: './dynamic-menu-bar-demo.component.html',
  styles: []
})
export class DynamicMenuBarDemoComponent {
  addMenuBarItemForm: FormGroup;
  menuItemFormGroup: FormGroup;
  menuBarItems: MenuBarItem[] = [];

  constructor(
    private fb: FormBuilder
  ) {
    this.addMenuBarItemForm = fb.group({
      title: ['', Validators.required],
      items: fb.array([
        fb.group({
          title: ['', Validators.required],
          command: '',
          icon: '',
          isSvgIcon: false,
          disabled: false
        })
      ]),
      disabled: false
    });
  }

  get items() {
    return this.addMenuBarItemForm.get('items') as FormArray;
  }

  addMenuItem() {
    this.items.push(this.fb.group({
      title: ['', Validators.required],
      command: '',
      icon: '',
      isSvgIcon: false,
      disabled: false
    }));
  }

  addMenuBarItem() {
    const tempValue: any = {};
    const formValue = this.addMenuBarItemForm.value;
    for (const key in formValue) {
      switch (key) {
        case 'items':
          formValue[key].forEach((arrayVal: any, i: number) => {
            let tempItemsValue: any = {};
            if ('icon' in arrayVal && arrayVal['icon'].length > 0) {
              if (arrayVal['isSvgIcon']) {
                arrayVal['svgIcon'] = `mdi:${arrayVal['icon']}`;
                delete arrayVal['icon'];
              }
            }
            delete arrayVal['isSvgIcon'];
            
            tempItemsValue = arrayVal;
            if (!Array.isArray(tempValue[key])) {
              tempValue[key] = [];
            }
            tempValue[key].push(tempItemsValue);
          })
          break;
        default:
          tempValue[key] = formValue[key];
      }
    }
    console.log('Menu bar item to add:', tempValue);
    this.menuBarItems.push(tempValue);
  }
}
