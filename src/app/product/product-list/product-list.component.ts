import { AuthenticationServices } from './../../helpers/authentication.service';
import { ActionResponse } from './../../shared/action-response';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConstant, TableOption, DataService, ModalService, TableComponent, TemplateViewModel, TableColumnType, TableDatetimeFormat, ConfirmViewModel, PermisisonProvider, CheckboxComponent, TableText, TableMessage, ValidationOption, CustomValidationRule, RequiredValidationRule, ValidationRuleResponse } from 'ngx-fw4c';
import { ProductService } from '../product.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ToastrService } from 'ngx-toastr';
import { Products } from '../product';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  @ViewChild("image", { static: true }) public image: TemplateRef<any>;
  public option: TableOption;
  public currentDataChange:Products[]=[];
  public oldData:Products[]=[];
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
    this.option = new TableOption({
      paging: true,
      title: 'Products Management',
      topButtons: [
        {
          icon:AppIcons.Edit,
          customClass: "success",
          hide: () => {
            if (this.tableList.changedRows.length === 0) {
              return true;
            } else {
              return false;
            }
          },
          title: () =>AppConsts.SaveChange,
          executeAsync: () => {
            console.log(this.oldData)
            console.log(this.currentDataChange)
            // for (let i = 0; i < this.tableList.changedRows.length; i++) {
            //   this._serviceManagementService.updateService(this.tableTemplate.changedRows[i].currentItem, new ServiceUpdateRequest({}))
            //     .subscribe(() => {
            //       if (i === (this.tableTemplate.changedRows.length - 1)) {
            //         this.tableTemplate.resetChanges();
            //         this.tableTemplate.reload();
            //       }
            //     });
            // }
          }
        },
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
              icon: 'AppIcons.Edit',
              template: EditProductComponent,
              validationKey: 'EditProductComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._productService.update(item).subscribe(() => {
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
          hide: () => !this._authenticationService.checkAuthenticate('DELETE PRODUCT'),
          executeAsync: item => {
            this._modalService.showConfirmDialog(
              new ConfirmViewModel({
                autoClose: true,
                title: AppConsts.Confirm,
                message: AppConsts.ConfirmDelete,
                acceptCallback: () => {
                  this._productService.delete(item.id).subscribe(() => {
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
          hide: () => !this._authenticationService.checkAuthenticate('DELETE PRODUCT'),
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
      inlineEdit: true ,
      searchFields: ['Name'],
      mainColumns: [
        {
          type: TableColumnType.Description,
          title: () => 'Name',
          valueRef: () => 'name',
          validationOption: new ValidationOption({
            rules: [
             new CustomValidationRule((val,payload,rowIndex)=>{
              //  if(payload[rowIndex].name==this.oldData[rowIndex].name){
              //    return of(new ValidationRuleResponse({status:true}));
              //  }
               return this._productService.checkUniqueName(val);
             })
            ]
          })
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
          validationOption: new ValidationOption({
            rules: [
             new RequiredValidationRule(()=>'Content is required')
            ]
          })
        },
        {
          type: TableColumnType.Number,
          title: () => 'Price',
          valueRef: () => 'price',
          validationOption: new ValidationOption({
            rules: [
             new CustomValidationRule((val,payload,rowIndex)=>{
              this._productService.getDataChange(this.currentDataChange,payload[rowIndex]);
               return this._productService.validatePrice(val,payload[rowIndex]);
             })
            ]
          })
        },
        {
          type: TableColumnType.Number,
          title: () => 'Sale Price',
          valueRef: () => 'salePrice',
          validationOption: new ValidationOption({
            rules: [
             new CustomValidationRule((val,payload,rowIndex)=>{
               return this._productService.validateSalePrice(val,payload[rowIndex]);
             })
            ]
          })
        },
        {
          type: TableColumnType.Date,
          title: () => 'Created Date',
          valueRef: () => 'created',
          inlineEdit:false
        },
        {
          type: TableColumnType.Date,
          title: () => 'Edited Date',
          valueRef: () => 'modifileDate',
          inlineEdit:false
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          return this._productService.search(request).pipe(map(val=>{
            this.oldData=val.items.map(x => Object.assign({}, x));
            return val;
          }));
        }
      }
    });
  }
}
