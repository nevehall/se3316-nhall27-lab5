import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatIconModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { MenuComponent } from './menu.component';
import { MenuDirective } from './menu.directive';
export { MenuComponent } from './menu.component';
export { MenuDirective } from './menu.directive';


@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    MenuComponent, 
    MenuDirective

  ],
  exports: [
    MenuComponent, 
    MenuDirective
  ]
})
export class MenuModule { }