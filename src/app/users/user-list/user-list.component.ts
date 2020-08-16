import { UserService } from './../user.service';
import { ActionResponse } from './../../shared/action-response';
import { UserEditComponent } from './../user-edit/user-edit.component';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableComponent, TableOption, ModalService, DataService, TemplateViewModel, ConfirmViewModel, TableConstant, TableColumnType, TableText, TableMessage } from 'ngx-fw4c';
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
    private _userService: UserService,
    private _toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.initList();
  }
  private initList(): void {
    var tableText = new TableText();
    tableText.action = 'Action';
    tableText.advancedSearchTitle = 'Search advance';
    tableText.placeholderSearch = 'Enter search keywords';
    tableText.allTitle = 'All';
    tableText.advancedBtnCancelTitle = 'cancel';
    tableText.filterTitle = 'Search By'
    tableText.advancedBtnTitle = 'search';
    tableText.selectPageSize = 'Display';
    var tableMessage = new TableMessage();
    tableMessage.loadingMessage = 'Loading',
    //  tableMessage.notFoundMessage = 'No data found';
    tableMessage.selectedItemsMessage = `record selected.`;
    tableMessage.confirmClearAllRecordsMessage = 'Deselect all';
    this.option = new TableOption({
      selectedChange: (item) => {
        tableMessage.selectedItemsMessage = `${this.tableList.selectedItems.length} record selected.`;
      },
      paging: true,
      title: 'User Management',
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {
            tableMessage.foundMessage = `Found ${this.tableList.totalRecords} results.`;
            return !this._authenticationService.checkAuthenticate('ADD USER');
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
                  return this._userService.create(item).subscribe((val: any) => {
                    this.tableList.reload();
                    if (val.errorMessage == "true") {
                      this._toastr.success('Changes saved', 'Success');
                    } else {
                      this._toastr.error('Changes fail', 'Error');
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
          hide: () => !this._authenticationService.checkAuthenticate('EDIT USER'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit User',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: UserEditComponent,
              validationKey: 'UserEditComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._userService.update(item).subscribe(val => {
                  this.tableList.reload();
                  if(val.errorMessage=='true'){
                    this._toastr.success('Changes saved', 'Success');
                  }else {
                    this._toastr.error('Changes fail', 'Error');
                  }
                });
              }
            })
            );
          }
        },
        {
          icon: AppIcons.Remove,
          customClass: "danger",
          hide: () => !this._authenticationService.checkAuthenticate('DELETE USER'),
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  this._userService.delete(item.id).subscribe(val => {
                    this.tableList.reload();
                    if (val.errorMessage == "true") {
                      this._toastr.success('Changes saved', 'Success');
                    } else if(val.errorMessage.indexOf('could not execute statement')>-1){
                      this._toastr.error('The data is being used in another screen so it cannot be deleted', 'Error');
                    }else{
                      this._toastr.error('Changes fail', 'Error');
                    }
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
          hide: () => !this._authenticationService.checkAuthenticate('DELETE USER'),
          executeAsync: () => {
            this._modalService.showConfirmDialog(new ConfirmViewModel({
              title: AppConsts.Confirm,
              message: AppConsts.ConfirmDelete,
              acceptCallback: () => {
                var data = this.tableList.selectedItems;
                var listId = [];
                for (let index = 0; index < data.length; index++) {
                  listId.push(data[index].id);
                }
                this._userService.deleteMutiple(data).subscribe((val: ActionResponse<Users>) => {
                  this.tableList.reload();
                  if (val.failureItems.length == 0) {
                    this._toastr.success('Changes saved', 'Success');
                  } else {
                    this._toastr.success(`Total fail ${val.failureItems.length}\n ToTal succes:${val.successItems.length}`, 'Success');
                  }
                })
              }
            }))
          }
        },
      ],
      displayText: tableText,
      message: tableMessage,
      inlineEdit: false,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'UserName',
          valueRef: () => 'userName',
          allowFilter: true
        },
        {
          type: TableColumnType.Description,
          title: () => 'role Name',
          allowFilter: false,
          valueRef: () => 'roleName',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Address',
          allowFilter: true,

          valueRef: () => 'address',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Image',
          allowFilter: false,
          valueRef: () => '',
          customTemplate: () => this.image,
        },
        {
          type: TableColumnType.Description,
          title: () => 'FullName',
          allowFilter: true,
          valueRef: () => 'fullName',
        },
        {
          type: TableColumnType.Date,
          title: () => 'Created Date',
          valueRef: () => 'createdDate',
        },
        {
          type: TableColumnType.Date,
          title: () => 'Modifile Date',
          valueRef: () => 'editedDate',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Status',
          allowFilter: false,
          valueRef: () => 'status'
        },

      ],
      serviceProvider: {
        searchAsync: request => {
          return this._userService.search(request);
        }
      }
    });
  }
}
