import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
// import { NotFoundComponent } from 'ngx-fw4c';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';


const routes: Routes = [
  {
    path:'',
    component:LayoutAdminComponent,
    children:[
      {
        path:'product',component:ProductListComponent,
      },
      // {
      //   path: 'not-found',
      //   component: NotFoundComponent
      // }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
