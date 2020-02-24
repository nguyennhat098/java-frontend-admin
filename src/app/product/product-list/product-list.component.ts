import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConstant, TableOption, DataService, PermisisonProvider, AuthenticationService, ModalService, TableComponent, TemplateViewModel } from 'ngx-fw4c';
import { of } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild("activity", { static: true }) public activitiy: TemplateRef<any>;
  public option: TableOption;
public data=[{
  id:1,
  name:'f'
},
{
  id:2,
  name:'f1'
},
{
  id:3,
  name:'f2'
},
{
  id:4,
  name:'f3'
},
{
  id:5,
  name:'f4'
},
{
  id:6,
  name:'f5'
}]
  constructor(
    private _modalService: ModalService,
    private _authenticationService: AuthenticationService,
    private _permissionprovider: PermisisonProvider,
    private _dataService: DataService,
  ) { }

  public ngOnInit(): void {
    this.initList();
  }

  private initList(): void {
  
    this.option = new TableOption({
      localData:()=>of(this.data),
      topButtons: [
        {
          icon: '',
          customClass: "primary",
          title: () => '',
        
          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                // template: CreatePermissionComponent,
                customSize: 'modal-lg',
                validationKey: 'CreatePermissionComponent',
                // icon: AppIcons.Add,
                // data: {
                //   permission: new Permissions()
                // },
                title: "system permission",
                acceptCallback: permission => {
                  // return this._permissionService.createPermission(permission).subscribe(() => {
                  //   this.tableList.reload();
                  //   this._toastr.success('Changes saved', 'Success');
                  // });
                }
              })
            );
          }
        }
      ],
      actions: [
        {
          icon: 'AppIcons.Edit',
          customClass: "primary",
         
          // executeAsync: item => {
          //   this._modalService.showTemplateDialog(new TemplateViewModel({
          //     title: "system permission",
          //     customSize: 'modal-lg',
          //     icon: 'AppIcons.Edit',
          //     template: CreatePermissionComponent,
          //     validationKey: "EditPermissionComponent",
          //     data: {
          //       permission: this._dataService.cloneItem(item)
          //     },
          //     acceptCallback: permission => {
          //       return this._permissionService.updatePermission(permission).subscribe(() => {
          //         this.tableList.reload();
          //         this._toastr.success('Changes saved', 'Success');
          //       });
          //     }
          //   })
          //   );
          // }
        },
        {
          icon: 'AppIcons.Remove',
          customClass: "danger",
        
          // executeAsync: item => {
          //   this._modalService.showConfirmDialog(
          //     new ConfirmViewModel({
          //       autoClose: true,
          //       title: AppConsts.Confirm,
          //       message: AppConsts.ConfirmDelete,
          //       acceptCallback: () => {
          //         this._permissionService.deletePermission(new ActionRequest<Permissions>({ deleteId: item.id })).subscribe(() => {
          //           this.tableList.reload();
          //           this._toastr.success('Changes saved', 'Success');
          //         })
          //       }
          //     })
          //   );
          // }
        },
        {
					type: TableConstant.ActionType.Toolbar,
					icon: 'AppIcons.Remove',
					title: () => 'Delete',
					customClass: 'danger',
				
					// executeAsync: () => {
					// 	this._modalService.showConfirmDialog(new ConfirmViewModel({
					// 		title: AppConsts.Confirm,
					// 		message:  AppConsts.ConfirmDelete,
					// 		acceptCallback: () => {
          //       var data = this.tableList.selectedItems;
          //       var listId=[];
          //       for (let index = 0; index < data.length; index++) {
          //         listId.push(data[index].id);
          //       }
          //       this._permissionService.deletePermission(new ActionRequest<Permissions>({ deleteId: listId })).subscribe(() => {
          //           this.tableList.reload();
          //           this._toastr.success('Changes saved', 'Success');
          //       })
					// 		}
					// 	}))
					// }
				},
      ],
     
      inlineEdit: false,
      searchFields: ['name'],
      mainColumns: [
        {
          title: () => 'name',
          valueRef: () => 'name',
        
        },
       
      ],
      serviceProvider: {
        // searchAsync: (request) => {
        //   return this._permissionService.searchPermission(request);
        // }
      },
    });
  }
}
