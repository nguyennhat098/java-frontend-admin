import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConstant, TableOption, DataService, PermisisonProvider, AuthenticationService, ModalService, TableComponent, TemplateViewModel, TableColumnType } from 'ngx-fw4c';
import { of } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @ViewChild("activity", { static: true }) public activitiy: TemplateRef<any>;
  public option: TableOption;

  constructor(
    private _modalService: ModalService,
    private _authenticationService: AuthenticationService,
    private _permissionprovider: PermisisonProvider,
    private _dataService: DataService,
    private _productService:ProductService
  ) { }

  public ngOnInit(): void {
    this.initList();
  }

  private initList(): void {
  
    this.option = new TableOption({
      paging: true,
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
          type: TableColumnType.Description,
          title: () => 'name',
          valueRef: () => 'name',
        
        },
        {
          type: TableColumnType.Description,
          title: () =>'test',
          allowSort: false,
          valueRef: () => 'content',
          width: 180,
          inlineEdit: false
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          this._productService.search(request).subscribe(s=>console.log(s))
        
          return this._productService.search(request);
        }
      }
    });
  }
}
