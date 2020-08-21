import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

const declarations = [
  IndexComponent
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
    ChartsModule,
    RouterModule.forRoot([]),
  ],
})


export class IndexModule { }
