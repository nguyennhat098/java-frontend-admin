import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework4CModule } from 'ngx-fw4c';
import { BrowserModule } from '@angular/platform-browser';
import { RolesEditComponent } from './roles-edit/roles-edit.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { MatrixManagementComponent } from './matrix-management/matrix-management.component';
import { AssignRoleComponent } from './assign-role/assign-role.component';

const declarations = [
 RolesEditComponent,
 RolesListComponent,
 MatrixManagementComponent,
 AssignRoleComponent
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


export class RoleModule { }
