import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableColumnType, TableComponent, TableOption, ModalService, TemplateViewModel, DataService, ConfirmViewModel, TableConstant } from 'ngx-fw4c';
// import { AppIcons, AppConsts } from 'src/app/shared/AppConsts';
import { RoleService } from '../role.service';
import { ToastrService } from 'ngx-toastr';
import { RolesEditComponent } from '../roles-edit/roles-edit.component';
import { Roles } from '../Role';
import { MatrixManagementComponent } from '../matrix-management/matrix-management.component';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.scss']
})
export class RolesListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  // @ViewChild("list", { static: true }) public list: TemplateRef<any>;
  public option: TableOption;
  constructor( private _modalService: ModalService,
    // private _permissionprovider: PermisisonProvider,
    private _roleService:RoleService,
    private _dataService: DataService,
    private _toastr: ToastrService) { }

  ngOnInit() {
    this.initList();
  }
  private initList(): void { 
    this.option = new TableOption({
      paging: true,
      title:'Roles Management',
      hideCheckboxColumn:true,
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          // hide: () => {
          //   return !this._permissionprovider.hasPermisison(this._authenticationService.currentUser, 'system', 'create');
          // },

          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                 template: RolesEditComponent,
                customSize: 'modal-lg',
                validationKey: 'RolesNewComponent',
                icon: AppIcons.Add,
                data: {
                  item: new Roles()
                },
                title: "New Role",
                acceptCallback: item => {
                  return this._roleService.create(item).subscribe((val : any) => {
                    if(val.errorMessage=="true"){
                      this._toastr.success('Changes saved', 'Success');
                      this.tableList.reload;
                    }else{
                      this._toastr.error('Changes fail','Error');
                      this.tableList.reload;
                    }
                  });
                }
              })
            );
          }
        }
      ],
      actions: [
        {
          icon: AppIcons.Edit,
          customClass: 'primary',
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Role',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: RolesEditComponent,
              validationKey: 'RolesEditComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._roleService.update(item).subscribe(() => {
                  this.tableList.reload();
                  this._toastr.success('Changes saved', 'Success');
                });
              }
            })
            );
          }
        },
        {
          icon: AppIcons.Key,
          customClass: 'primary',
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Assign Permission',
              customSize: 'modal-xlg',
              icon: AppIcons.Key,
              template: MatrixManagementComponent,
              validationKey: 'MatrixManagementComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                // return this._roleService.update(item).subscribe(() => {
                //   this.tableList.reload();
                //   this._toastr.success('Changes saved', 'Success');
                // });
              }
            })
            );
          }
        },
        {
          icon: AppIcons.Remove,
          customClass: "danger",
        
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  // this._productService.delete(item.id).subscribe(() => {
                  //   this.tableList.reload();
                  //   this._toastr.success('Changes saved', 'Success');
                  // })
                }
              })
            );
          }
        },
      ],
     
      inlineEdit: false,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'Name',
          valueRef: () => 'roleName',
        allowFilter:true
        },
        {
          type: TableColumnType.Description,
          title: () =>'Decription',
          allowFilter:true,
          valueRef: () => 'description',
        },
       
      ],
      serviceProvider: {
        searchAsync: request => {
          this._roleService.search(request).subscribe(s=>console.log(s))
          return this._roleService.search(request);
        }
      }
    });
  }
}
