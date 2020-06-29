import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { BrowserModule } from '@angular/platform-browser';
import { OrdersEditComponent } from './orders-edit/orders-edit.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersInfoComponent } from './orders-info/orders-info.component';

const declarations = [
OrdersEditComponent,
OrdersListComponent,
OrdersInfoComponent
];
@NgModule({
  declarations: declarations,
  exports: declarations,
	entryComponents: declarations,
  imports: [
    CommonModule,
    FormsModule,
    Framework4CModule.forRoot(),
    BrowserModule,
  ],

})


export class OrdersModule { }
