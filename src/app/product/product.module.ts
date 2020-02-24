import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
      ProductListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Framework4CModule.forRoot()
  ],

})
export class ProductModule { }
