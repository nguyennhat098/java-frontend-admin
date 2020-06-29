import { OrdersService } from './../orders.service';
import { OrdersEditComponent } from './../orders-edit/orders-edit.component';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { TableComponent, TableOption, ModalService, DataService, TemplateViewModel, TableColumnType } from 'ngx-fw4c';
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
    private _orderService: OrdersService,
    private _toastr: ToastrService,) { }

  ngOnInit() {
    this.initList();
  }
  private initList(): void {

    this.option = new TableOption({
      paging: true,
      title: 'Orders Management',
      actions: [
        {
          icon: AppIcons.Edit,
          customClass: 'primary',
          hide: () => !this._authenticationService.checkAuthenticate('EDIT PRODUCT'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Product',
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

      inlineEdit: false,
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
          this._orderService.search(request).subscribe(s => console.log(s))

          return this._orderService.search(request).pipe(map(val => {
            var data = [];
            for (let index = 0; index < val.items.length; index++) {
              const element = val.items[index];
              element.name = element.phone;
              element.userName = element.userId.userName;
              switch (element.status) {
                case 0:
                  element.statusName = 'pending';
                  break;
                case 1:
                  element.statusName = 'ready';
                  break;
                case 2:
                  element.statusName = 'ordering';
                  break;
                case 3:
                  element.statusName = 'ordered';
                  break;
                default:
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
