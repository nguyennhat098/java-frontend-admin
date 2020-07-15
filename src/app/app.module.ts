import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UserModule } from './users/user.module';
import { RoleModule } from './roles/role.module';
import { LoginModule } from './login-admin/login.module';
import { ChatModule } from './chat/chat.module';
import { NotifiesModule } from './notifies/notifies.module';
import { CategoryModule } from './categories/categories.module';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { BUCKET } from "@angular/fire/storage";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { OrdersModule } from './orders/orders.module';
import { AngularFireDatabaseModule } from '@angular/fire/database';
const ListModule = [
  ProductModule,
  RoleModule,
  UserModule,
  OrdersModule,
  CategoryModule,
  NotifiesModule,
  ChatModule,
  LoginModule
];

@NgModule({
  declarations: [
    AppComponent,
    // LoginAdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  exports: [
    ListModule
  ],
  providers: [
    // { provide: BUCKET, useValue: "shopdemo-a7f84.appspot.com" },
    { provide: BUCKET, useValue: "https://oganic-shopping.firebaseio.com" },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
