import { OrdersService } from './../orders.service';
import { OrdersEditComponent } from './../orders-edit/orders-edit.component';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { TableComponent, TableOption, ModalService, DataService, TemplateViewModel, TableColumnType, TableText, TableMessage } from 'ngx-fw4c';
import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  public option: TableOption;
  constructor(private _modalService: ModalService,
    private _authenticationService: AuthenticationServices,
    private _dataService: DataService,
    private _orderService: OrdersService) { }

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
    //tableMessage.notFoundMessage='No data found';
    tableMessage.selectedItemsMessage=`record selected.`;
    tableMessage.confirmClearAllRecordsMessage='Deselect all';
    tableMessage.refMessage='related to';
    this.option = new TableOption({
      selectedChange:(item)=>{
        tableMessage.selectedItemsMessage=`${this.tableList.selectedItems.length} record selected.`;
      },
      paging: true,
      title: 'Orders Management',
      actions: [
        {
          icon: AppIcons.Edit,
          customClass: 'primary',
          hide: () =>{
            tableMessage.foundMessage=`Found ${this.tableList.totalRecords} results.`;
            return !this._authenticationService.checkAuthenticate('EDIT ORDERS');
          },
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Orders',
              customSize: 'modal-xlg',
              icon: AppIcons.Edit,
              template: OrdersEditComponent,
              validationKey: 'OrdersEditComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              cancelCallback:()=>this.tableList.reload(),
              hideAcceptBtn:true
            })
            );
          }
        }
      ],
      message:tableMessage,
      displayText:tableText,
      inlineEdit: false,
      hideCheckboxColumn:true,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'UserName',
          valueRef: () => 'userName',
          allowSort:true,
        },
        {
          type: TableColumnType.Description,
          title: () => 'Name receive',
          allowFilter: true,
          valueRef: () => 'name',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Address',
          allowFilter: true,

          valueRef: () => 'address',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Phone',
          valueRef: () => 'phone',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Status',
          valueRef: () => 'statusName'
        },
        {
          type: TableColumnType.Date,
          title: () => 'Date ',
          allowFilter: false,
          valueRef: () => 'created'
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          return this._orderService.search(request).pipe(map(val => {
            var data = [];
            for (let index = 0; index < val.items.length; index++) {
              const element = val.items[index];
              element.userName = element.userId.userName;
              switch (element.status) {
                case -1:
                  element.statusName ="<span class='btn btn-danger'>cancel</span>" ;
                  break;
                case 0:
                  element.statusName ="<span class='btn btn-info'>pending</span>";
                  break;
                case 1:
                  element.statusName ="<span class='btn btn-primary'>ready</span>";
                  break;
                case 2:
                  element.statusName = "<span class='btn btn-primary'>ordering</span>";
                  break;
                case 3:
                  element.statusName ="<span class='btn btn-success'>ordered</span>";
                  break;
                default:
                  element.statusName ="<span class='btn btn-success'>ordered</span>";
                  break;
              }
              data.push(element);
            }
            val.items = data;
            return val;
          }
          ));
        }
      }
    });
  }
}
