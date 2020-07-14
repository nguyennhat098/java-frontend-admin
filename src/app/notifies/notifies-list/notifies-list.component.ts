import { NotifiesExistComponent } from './../notifies-exist/notifies-exist.component';
import { NotifiesUserComponent } from './../notifies-user/notifies-user.component';
import { ActionResponse } from './../../shared/action-response';
import { NotifiesEditComponent } from './../notifies-edit/notifies-edit.component';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { NotifiesService } from './../notifies.service';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TableComponent, TableOption, ModalService, DataService, TableText, TableMessage, TemplateViewModel, ConfirmViewModel, TableConstant, TableColumnType, ValidationOption, RequiredValidationRule } from 'ngx-fw4c';
import { ToastrService } from 'ngx-toastr';
import { Notifies } from '../notifies';

@Component({
  selector: 'app-notifies-list',
  templateUrl: './notifies-list.component.html',
  styleUrls: ['./notifies-list.component.scss']
})
export class NotifiesListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  @ViewChild("image", { static: true }) public image: TemplateRef<any>;

  public option: TableOption;
  constructor(private _modalService: ModalService,
    private _authenticationService: AuthenticationServices,
    private _dataService: DataService,
    private _notifiesService: NotifiesService,
    private _toastr: ToastrService,) { }

  ngOnInit() {
    this.initList();
  }
  private initList(): void {
    var tableText=new TableText();
    tableText.action='Action';
    tableText.advancedSearchTitle='Search advance';
    tableText.placeholderSearch='Enter search keywords';
    tableText.allTitle='All';
    tableText.advancedBtnCancelTitle='cancel';
    tableText.filterTitle='Search By'
    tableText.advancedBtnTitle='search';
    tableText.selectPageSize='Display';
    var tableMessage=new TableMessage();
    tableMessage.loadingMessage='Loading',
    tableMessage.notFoundMessage='No data found';
    tableMessage.selectedItemsMessage=`record selected.`;
    tableMessage.confirmClearAllRecordsMessage='Deselect all';
    this.option = new TableOption({
      selectedChange:(item)=>{
        tableMessage.selectedItemsMessage=`${this.tableList.selectedItems.length} record selected.`;
      },
      paging: true,
      title: 'Notifies Management',
      topButtons: [
        {
          icon: AppIcons.Edit,
          customClass: "success",
          hide: () => {
            tableMessage.foundMessage=`Found ${this.tableList.totalRecords} results.`;
            if (this.tableList.changedRows.length === 0) {
              return true;
            } else {
              return false;
            }
          },
          title: () => AppConsts.SaveChange,
          executeAsync: () => {
            var data=[];
            for (let i = 0; i < this.tableList.changedRows.length; i++) {
              data.push(this.tableList.changedRows[i].currentItem);
            }
            this._notifiesService.updateMutiple(data).subscribe(val=>{
              
              this._toastr.success('Changes saved', 'Success');
              this.tableList.reload();
              this.tableList.resetChanges();
            })
          }
        },
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {
            return !this._authenticationService.checkAuthenticate('ADD NOTIFIES');
          },

          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                template: NotifiesEditComponent,
                customSize: 'modal-lg',
                validationKey: 'NotifiesAddComponent',
                icon: AppIcons.Add,
                data: {
                  item: new Notifies()
                },
                title: "New Notify",
                acceptCallback: item => {
                  return this._notifiesService.create(item).subscribe((val: any) => {
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
          hide: () => !this._authenticationService.checkAuthenticate('EDIT NOTIFIES'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Notify',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: NotifiesEditComponent,
              validationKey: 'NotifiesEditComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._notifiesService.update(item).subscribe(() => {
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
          hide: () => !this._authenticationService.checkAuthenticate('EDIT NOTIFIES'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Assign Notifies',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: NotifiesUserComponent,
              validationKey: 'NotifiesUserComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._notifiesService.update(item).subscribe(() => {
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
          customClass: 'danger',
          hide: () => !this._authenticationService.checkAuthenticate('EDIT NOTIFIES'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Active Notifies',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: NotifiesExistComponent,
              validationKey: 'NotifiesExistComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._notifiesService.update(item).subscribe(() => {
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
          hide: () => !this._authenticationService.checkAuthenticate('DELETE NOTIFIES'),
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  this._notifiesService.delete(item.id).subscribe(() => {
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
          hide: () => !this._authenticationService.checkAuthenticate('DELETE NOTIFIES'),
					executeAsync: () => {
						this._modalService.showConfirmDialog(new ConfirmViewModel({
							title: AppConsts.Confirm,
							message:  AppConsts.ConfirmDelete,
							acceptCallback: () => {
                var data = this.tableList.selectedItems;
                this._notifiesService.deleteMutiple(data).subscribe((val:ActionResponse<Notifies>) => {
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
      displayText:tableText,
      message:tableMessage,
      inlineEdit: true,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'Content',
          valueRef: () => 'content',
          allowFilter: true,
          inlineEdit:true,
          validationOption: new ValidationOption({
            rules: [
             new RequiredValidationRule(()=>AppConsts.RequiredError)
            ]
          })
        },
        {
          type: TableColumnType.Description,
          title: () => 'Image',
          valueRef: () => 'content',
          customTemplate: () => this.image,
        },
        {
          type: TableColumnType.Description,
          title: () => 'Link',
          valueRef: () => 'link',
          validationOption: new ValidationOption({
            rules: [
             new RequiredValidationRule(()=>AppConsts.RequiredError)
            ]
          })
        },
        {
          type: TableColumnType.Date,
          title: () => 'Created Date',
          valueRef: () => 'createdDate',
          inlineEdit:false
        },
        {
          type: TableColumnType.Date,
          title: () => 'Modify Date',
          inlineEdit:false,
          valueRef: () => 'modifyDate',
        },
        {
          type: TableColumnType.Number,
          title: () => 'Status',
          valueRef: () => 'status',
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          return this._notifiesService.search(request);
        }
      }
    });
  }
}
