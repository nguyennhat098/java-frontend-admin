import { UserService } from './../user.service';
import { ActionResponse } from './../../shared/action-response';
// import { ActionResponse } from 'app/shared/action-response';
import { UserEditComponent } from './../user-edit/user-edit.component';
import { AppIcons,AppConsts } from './../../shared/AppConsts';
import { ProductService } from './../../product/product.service';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableComponent, TableOption, ModalService, DataService, TemplateViewModel, ConfirmViewModel, TableConstant, TableColumnType } from 'ngx-fw4c';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  @ViewChild("image", { static: true }) public image: TemplateRef<any>;
  public option: TableOption;
  constructor(
    private _modalService: ModalService,
    private _authenticationService: AuthenticationServices,
    private _dataService: DataService,
    private _userService:UserService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.initList();
  }
  private initList(): void {
  
    this.option = new TableOption({
      paging: true,
      title:'User Management',
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {            
          return !this._authenticationService.checkAuthenticate('ADD PRODUCT');
          },

          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                 template: UserEditComponent,
                customSize: 'modal-lg',
                validationKey: 'NewUserComponent',
                icon: AppIcons.Add,
                data: {
                  item: new Users()
                },
                title: "New User",
                acceptCallback: item => {
                  return this._userService.create(item).subscribe((val : any) => {
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
         hide:()=>  !this._authenticationService.checkAuthenticate('EDIT PRODUCT'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Product',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: UserEditComponent,
              validationKey: 'UserEditComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._userService.update(item).subscribe(() => {
                  this.tableList.reload();
                  this._toastr.success('Changes saved', 'Success');
                });
              }
            })
            );
          }
        },
        {
          icon: AppIcons.Remove,
          customClass: "danger",
          hide:()=>  !this._authenticationService.checkAuthenticate('DELETE PRODUCT'),
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  this._userService.delete(item.id).subscribe(() => {
                    this.tableList.reload();
                    this._toastr.success('Changes saved', 'Success');
                  })
                }
              })
            );
          }
        },
        {
					type: TableConstant.ActionType.Toolbar,
					icon: AppIcons.Remove,
					title: () => 'Delete',
					customClass: 'danger',
          
					executeAsync: () => {
						this._modalService.showConfirmDialog(new ConfirmViewModel({
							title: AppConsts.Confirm,
							message:  AppConsts.ConfirmDelete,
							acceptCallback: () => {
                var data = this.tableList.selectedItems;
                var listId=[];
                for (let index = 0; index < data.length; index++) {
                  listId.push(data[index].id);
                }
                this._userService.deleteMutiple(data).subscribe((val:ActionResponse<Users>) => {
                  if(val.failureItems.length==0){
                    this.tableList.reload();
                    this._toastr.success('Changes saved', 'Success');
                  }else{
                    this.tableList.reload();
                    this._toastr.success(`Total fail ${val.failureItems.length}\n ToTal succes:${val.successItems.length}`, 'Success');
                  }
                   
                })
							}
						}))
					}
				},
      ],
     
      inlineEdit: false,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'UserName',
          valueRef: () => 'userName',
        allowFilter:true
        },
        {
          type: TableColumnType.Description,
          title: () =>'role Name',
          allowFilter:false,
          valueRef: () => 'roleName',
        },
        {
          type: TableColumnType.Description,
          title: () =>'Address',
          allowFilter:true,
          
          valueRef: () => 'address',
        },
        {
          type: TableColumnType.Description,
          title: () =>'Image',
          allowFilter:false,
          valueRef:()=>'',
          customTemplate: () => this.image,
        },
        {
          type: TableColumnType.Description,
          title: () =>'FullName',
          allowFilter:true,
          valueRef: () => 'fullName',
        },
        {
          type: TableColumnType.Description,
          title: () =>'Status',
          allowFilter:false,
          valueRef: () => 'status'
        },
        
      ],
      serviceProvider: {
        searchAsync: request => {
          this._userService.search(request).subscribe(s=>console.log(s))
        
          return this._userService.search(request);
        }
      }
    });
  }
}
