import { UserListComponent } from './users/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { NotFoundComponent } from 'ngx-fw4c';
// import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RolesListComponent } from './roles';
import { AuthGuard } from './helpers/auth.guard';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { OrdersListComponent } from './orders/orders-list/orders-list.component';


const routes: Routes = [
      {
        path:'product',component:ProductListComponent, canActivate: [AuthGuard]
      },
      {
        path:'role',component:RolesListComponent, canActivate: [AuthGuard],
      },
      {
        path:'user',component:UserListComponent, canActivate: [AuthGuard],
      },
      {
        path:'order',component:OrdersListComponent, canActivate: [AuthGuard],
      },
      {
        path:'login',component:LoginAdminComponent,
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
