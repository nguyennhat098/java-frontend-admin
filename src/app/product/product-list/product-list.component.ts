import { AuthenticationServices } from './../../helpers/authentication.service';
import { ActionResponse } from './../../shared/action-response';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConstant, TableOption, DataService, AuthenticationService, ModalService, TableComponent, TemplateViewModel, TableColumnType, TableDatetimeFormat, ConfirmViewModel, PermisisonProvider, CheckboxComponent } from 'ngx-fw4c';
import { of } from 'rxjs';
import { ProductService } from '../product.service';
//  import { AppIcons, AppConsts } from 'src/app/shared/AppConsts';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ToastrService } from 'ngx-toastr';
import { Products } from '../product';
// import { ActionItem, ActionResponse, AppConsts } from 'app/shared';
// import { ActionRequest } from 'app/shared';
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
    private _productService:ProductService,
    private _toastr: ToastrService,
  ) { }

  public ngOnInit(): void {
    // this._authenticationService.checkAuthenticate('ADD PRODUCT').subscribe(val=>this.checkCreate= val);

    this.initList();
  }

  private initList(): void {
  
    this.option = new TableOption({
      paging: true,
      title:'Products Management',
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
                 template: EditProductComponent,
                customSize: 'modal-lg',
                validationKey: 'NewProductComponent',
                icon: AppIcons.Add,
                data: {
                  item: new Products()
                },
                title: "New Product",
                acceptCallback: item => {
                  return this._productService.create(item).subscribe((val : any) => {
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
          hide:()=>  !this._authenticationService.checkAuthenticate('DELETE PRODUCT'),
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
                this._productService.deleteMutiple(data).subscribe((val:ActionResponse<Products>) => {
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
          title: () => 'Name',
          valueRef: () => 'name',
        allowFilter:true
        },
        {
          type: TableColumnType.Description,
          title: () =>'Category Name',
          allowFilter:false,
          
          valueRef: () => 'catgoryName',
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
          title: () =>'Content',
          allowFilter:true,
          valueRef: () => 'content',
        },
        {
          type: TableColumnType.Number,
          title: () =>'Price',
          allowFilter:false,
          valueRef: () => 'price'
        },
        {
          type: TableColumnType.Description,
          title: () =>'Sale Price',
          allowFilter:false,
          valueRef: () => 'salePrice',
        },
        {
          type: TableColumnType.Date,
          title: () =>'Created Date',
          allowFilter:false,
          valueRef: () => 'created',
        },
        {
          type: TableColumnType.Date,
          title: () =>'Edited Date',
          allowFilter:false,
          valueRef: () => 'modifileDate',
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          this._productService.search(request).subscribe(s=>console.log(s.items))
          return this._productService.search(request);
        }
      }
    });
  }
}
