import { AuthenticationServices } from './../../helpers/authentication.service';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableColumnType, TableComponent, TableOption, ModalService, TemplateViewModel, DataService, ConfirmViewModel, TableConstant, TableText, TableMessage } from 'ngx-fw4c';
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
  public option: TableOption;
  constructor(private _modalService: ModalService,
    private _roleService: RoleService,
    private _dataService: DataService,
    private _authenticationService: AuthenticationServices,
    private _toastr: ToastrService) { }

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
      tableMessage.notFoundMessage = 'No data found';
    tableMessage.selectedItemsMessage = `record selected.`;
    tableMessage.confirmClearAllRecordsMessage = 'Deselect all';
    this.option = new TableOption({
      selectedChange: (item) => {
        tableMessage.selectedItemsMessage = `${this.tableList.selectedItems.length} record selected.`;
      },
      paging: true,
      title: 'Roles Management',
      hideCheckboxColumn: true,
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {
            tableMessage.foundMessage = `Found ${this.tableList.totalRecords} results.`;
            return !this._authenticationService.checkAuthenticate('ADD ROLE');
          },
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
                  return this._roleService.create(item).subscribe((val: any) => {
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
          hide: () => !this._authenticationService.checkAuthenticate('EDIT ROLE'),
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
          hide: () => {
            return !this._authenticationService.checkAuthenticate('VIEW PERMISSION');
          },
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
            })
            );
          }
        },
        {
          icon: AppIcons.Remove,
          customClass: "danger",
          hide: () => {
            return !this._authenticationService.checkAuthenticate('DELETE ROLE');
          },
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  this._roleService.delete(item.id).subscribe(() => {
                    this.tableList.reload();
                    this._toastr.success('Changes saved', 'Success');
                  })
                }
              })
            );
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
          title: () => 'Name',
          valueRef: () => 'roleName',
          allowFilter: true
        },
        {
          type: TableColumnType.Description,
          title: () => 'Decription',
          allowFilter: true,
          valueRef: () => 'description',
        },

      ],
      serviceProvider: {
        searchAsync: request => {
          return this._roleService.search(request);
        }
      }
    });
  }
}
