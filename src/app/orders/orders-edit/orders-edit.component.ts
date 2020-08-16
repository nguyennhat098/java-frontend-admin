import { OrdersService } from './../orders.service';
import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { Orders } from '../orders';
import { TableComponent, TableOption, TableColumnType, TableText, TableMessage } from 'ngx-fw4c';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.component.html',
  styleUrls: ['./orders-edit.component.scss']
})
export class OrdersEditComponent implements OnInit {
  @Input() item: Orders;
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  @ViewChild("image", { static: true }) public image: TemplateRef<any>;
  public option: TableOption;
  actionStatus: string;
  message: string;
  showError:boolean;
  constructor(
    private _orderService: OrdersService,
    private _toastr: ToastrService) { }
  ngOnInit() {
    this._orderService.getOrderDetails(this.item.id).subscribe((val: any) => {
      this.item.orderDetailsCollection = val;
    });
    this.getStatus();
    this.initList();
  }
  getStatus() {
    switch (this.item.status) {
      case -1:
        this.item.statusName = 'cancel';
        this.actionStatus = null;
        break;
      case 0:
        this.item.statusName = 'pendding';
        this.actionStatus = 'approal';
        break;
      case 1:
        this.item.statusName = 'approal';
        this.actionStatus = 'delivery';
        break;
      case 2:
        this.item.statusName = 'delivery';
        this.actionStatus = 'finished';
        break;

      default:
        this.item.statusName = 'finished';
        this.actionStatus = null;
        break;
    }
  }
  changeStatus(status: number) {
    if (status == -1) {
      this.item.status = -1;
      if (!this.message) {
        this.showError=true;
        return;
      }
      this.item.message = this.message;
    } else {
      this.item.status += 1;
    }
    this._orderService.update(this.item).subscribe(val => {
      if (val.errorMessage == 'true') {
        this._toastr.success('change status success', 'sucess');
      } else {
        this.item.status -= 1;
      }
      this.getStatus();
    });
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
      localData: () => {
        return this._orderService.getOrderDetails(this.item.id);
      },
      topButtons: [
        {
          hide: () => {
            tableMessage.foundMessage=`Found ${this.tableList.totalRecords} results.`;
            return true;
          },
        }
      ],
      paging: true,
      title: 'Orders Management',
      hideCheckboxColumn: true,
      inlineEdit: false,
      searchFields: ['Name'],
      message: tableMessage,
      displayText: tableText,
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'Name Product',
          allowFilter: true,
          valueRef: () => 'name',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Content',
          allowFilter: true,

          valueRef: () => 'content',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Images',
          valueRef: () => '',
          customTemplate: () => this.image,
        },
        {
          type: TableColumnType.Description,
          title: () => 'Price',
          valueRef: () => 'price'
        },
        {
          type: TableColumnType.Number,
          title: () => 'Quantity ',
          allowFilter: true,
          valueRef: () => 'quantity'
        },
      ]
    });
  }
}
