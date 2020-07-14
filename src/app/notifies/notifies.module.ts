import { NotifiesExistComponent } from './notifies-exist/notifies-exist.component';
import { ImageInfoComponent } from './image-info/image-info.component';
import { NotifiesUserComponent } from './notifies-user/notifies-user.component';

import { NotifiesListComponent } from './notifies-list/notifies-list.component';
import { NotifiesEditComponent } from './notifies-edit/notifies-edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { BrowserModule } from '@angular/platform-browser';

const declarations = [
  NotifiesEditComponent,
  NotifiesListComponent,
  NotifiesUserComponent,
  ImageInfoComponent,
  NotifiesExistComponent
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


export class NotifiesModule { }
