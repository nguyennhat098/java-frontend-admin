import { AuthenticationServices } from './../../helpers/authentication.service';
import { ActionResponse } from './../../shared/action-response';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConstant, TableOption, DataService, ModalService, TableComponent, TemplateViewModel, TableColumnType, TableDatetimeFormat, ConfirmViewModel, PermisisonProvider, CheckboxComponent, TableText, TableMessage, ValidationOption, CustomValidationRule, RequiredValidationRule, ValidationRuleResponse } from 'ngx-fw4c';
import { ProductService } from '../product.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ToastrService } from 'ngx-toastr';
import { Products } from '../product';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  @ViewChild("image", { static: true }) public image: TemplateRef<any>;
  public option: TableOption;
  constructor(
    private _modalService: ModalService,
    private _authenticationService: AuthenticationServices,
    private _dataService: DataService,
    private _productService: ProductService,
    private _toastr: ToastrService,
  ) { }

  public ngOnInit(): void {
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
     tableMessage.confirmClearAllRecordsMessage='Deselect all';
     tableMessage.selectedItemsMessage=`record selected.`;
    this.option = new TableOption({
      paging: true,
      title: 'Products Management',
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {
            tableMessage.foundMessage=`Found ${this.tableList.totalRecords} results.`;
            return !this._authenticationService.checkAuthenticate('ADD PRODUCT');
          },

          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                template: EditProductComponent,
                customSize: 'modal-lg',
                validationKey: 'NewProductComponent',
                icon: AppIcons.Add,
                data: {
                  item: new Products()
                },
                title: "New Product",
                acceptCallback: item => {
                  return this._productService.create(item).subscribe((val: any) => {
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
          hide: () => !this._authenticationService.checkAuthenticate('EDIT PRODUCT'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Product',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: EditProductComponent,
              validationKey: 'EditProductComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._productService.update(item).subscribe(val => {
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
          hide: () => !this._authenticationService.checkAuthenticate('DELETE PRODUCT'),
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  this._productService.delete(item.id).subscribe(val => {
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
          hide: () =>{
           return !this._authenticationService.checkAuthenticate('DELETE PRODUCT');
          },
          executeAsync: () => {
            this._modalService.showConfirmDialog(new ConfirmViewModel({
              title: AppConsts.Confirm,
              message: AppConsts.ConfirmDelete,
              acceptCallback: () => {
                var data = this.tableList.selectedItems;
                this._productService.deleteMutiple(data).subscribe((val: ActionResponse<Products>) => {
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
      displayText:tableText,
      message:tableMessage,
      inlineEdit: false ,
      searchFields: ['Name'],
      selectedChange:(item)=>{
        tableMessage.selectedItemsMessage=`${this.tableList.selectedItems.length} record selected.`;
      },
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'Name',
          valueRef: () => 'name',
          allowFilter:true
        },
        {
          type: TableColumnType.Description,
          title: () => 'Category Name',
          valueRef: () => 'catgoryName',
          inlineEdit:false
        },
        {
          type: TableColumnType.Description,
          title: () => 'Image',
          valueRef: () => '',
          customTemplate: () => this.image,
        },
        {
          type: TableColumnType.Description,
          title: () => 'Content',
          allowFilter: true,
          valueRef: () => 'content',
        },
        {
          type: TableColumnType.Number,
          title: () => 'Price',
          valueRef: () => 'price',
        },
        {
          type: TableColumnType.Number,
          title: () => 'Sale Price',
          valueRef: () => 'salePrice',
        },
        {
          type: TableColumnType.Date,
          title: () => 'Created Date',
          valueRef: () => 'created',
        },
        {
          type: TableColumnType.Date,
          title: () => 'Edited Date',
          valueRef: () => 'modifileDate',
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          return this._productService.search(request);
        }
      }
    });
  }
}
