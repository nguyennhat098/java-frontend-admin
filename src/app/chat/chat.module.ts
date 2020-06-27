import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './chat.component';

const declarations = [
ChatComponent
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


export class ChatModule { }
