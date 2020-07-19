import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesEditComponent } from './categories-edit/categories-edit.component';
import { CategoriesInfoComponent } from './categories-info/categories-info.component';
const declarations = [
  CategoriesListComponent,
  CategoriesEditComponent,
  CategoriesInfoComponent
];
@NgModule({
  declarations: declarations,
  exports: declarations,
	entryComponents: declarations,
  imports: [
    CommonModule,
    FormsModule,
    Framework4CModule.forRoot(),
    BrowserModule
  ],

})


export class CategoryModule { }
