import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

const ListModule = [
  ProductModule,
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    ListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
