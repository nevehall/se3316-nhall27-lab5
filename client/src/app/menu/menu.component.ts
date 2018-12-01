import { Component, Input, ViewChild } from '@angular/core';
import { MenuDirective } from './menu.directive';
import {MatMenu} from '@angular/material';
//import { MenuItemDirective } from './menu-item.directive';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sq-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  constructor() {

  }
   @Input() reference: string;
   @ViewChild('menu') matMenu: MatMenu;
}