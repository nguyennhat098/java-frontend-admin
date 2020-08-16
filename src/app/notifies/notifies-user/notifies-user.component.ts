import { ActionResponse } from './../../shared/action-response';
import { NotifiesService } from './../notifies.service';
import { NotifiesUser } from './../notifies-user';
import { UserService } from './../../users/user.service';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { TableComponent, TableOption, ModalService, TableMessage, TableText, ConfirmViewModel, TableConstant, TableColumnType, TemplateViewModel } from 'ngx-fw4c';
import { ToastrService } from 'ngx-toastr';
import { Notifies } from '../notifies';

@Component({
  selector: 'app-notifies-user',
  templateUrl: './notifies-user.component.html',
  styleUrls: ['./notifies-user.component.scss']
})
export class NotifiesUserComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  @ViewChild("image", { static: true }) public image: TemplateRef<any>;
  @Input() item:Notifies;
  public option: TableOption;
  constructor(
    private _modalService: ModalService,
    private _authenticationService: AuthenticationServices,
    private _toastr: ToastrService,
    private _userService:UserService,
    private _notifiesService: NotifiesService,
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
      selectedChange:(item)=>{
        tableMessage.selectedItemsMessage=`${this.tableList.selectedItems.length} record selected.`;
      },
      paging: true,
      title:'Assign Notifies to Users',
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {
            tableMessage.foundMessage=`Found ${this.tableList.totalRecords} results.`;
            return true;
          },
        }
      ],
      actions: [
        {
					type: TableConstant.ActionType.Toolbar,
					icon: AppIcons.Add,
					title: () => 'Add',
					customClass: 'primary',
          hide:()=> {
            return !this._authenticationService.checkAuthenticate('EDIT NOTIFIES');
          },
					executeAsync: () => {
						this._modalService.showConfirmDialog(new ConfirmViewModel({
							title: AppConsts.Confirm,
							message:  AppConsts.ConfirmSave,
							acceptCallback: () => {
                var data = this.tableList.selectedItems;
                var list=[];
                for (let index = 0; index < data.length; index++) {
                  list.push(new NotifiesUser({userId:data[index].id,notifiesId:this.item.id}));
                }
                this._notifiesService.assignNotifies(list).subscribe((val:ActionResponse<NotifiesUser>) => {
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
      inlineEdit: false,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'UserName',
          valueRef: () => 'userName',
        },
        {
          type: TableColumnType.Description,
          title: () =>'Address',
          
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
        searchAsync: (request) => {
          request.notifiesId=this.item.id;
          return this._notifiesService.searchNotExistUsers(request);
        }
      }
    });
  }
}
