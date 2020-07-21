import { RolesListComponent } from './roles/roles-list/roles-list.component';
import { NotifiesListComponent } from './notifies/notifies-list/notifies-list.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NotFoundComponent, AccessDeniedComponent } from 'ngx-fw4c';

import { AuthGuard } from './helpers/auth.guard';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';
import { ChatComponent } from './chat/chat.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  {
    path: '', component: IndexComponent, canActivate: [AuthGuard]
  },
  {
    path: 'product', component: ProductListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'role', component: RolesListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'category', component: CategoriesListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'user', component: UserListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'order', component: OrdersListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'login', component: LoginAdminComponent,
  },
  {
    path: 'chat', component: ChatComponent, canActivate: [AuthGuard],
  },
  {
    path: 'notifies', component: NotifiesListComponent, canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AccessDeniedComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
