import { ActionResponse } from './../../shared/action-response';
import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TableConstant, TableOption, DataService, AuthenticationService, ModalService, TableComponent, TemplateViewModel, TableColumnType, TableDatetimeFormat, ConfirmViewModel } from 'ngx-fw4c';
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
    private _authenticationService: AuthenticationService,
    // private _permissionprovider: PermisisonProvider,
    private _dataService: DataService,
    private _productService:ProductService,
    private _toastr: ToastrService,
  ) { }

  public ngOnInit(): void {
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
          // hide: () => {
          //   return !this._permissionprovider.hasPermisison(this._authenticationService.currentUser, 'system', 'create');
          // },

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
                    debugger
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
                    this._toastr.success(`Total fail ${val.failureItems}\n ToTal succes:${val.successItems}`, 'Success');
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
          type: TableColumnType.Description,
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
      ],
      serviceProvider: {
        searchAsync: request => {
          this._productService.search(request).subscribe(s=>console.log(s))
        
          return this._productService.search(request);
        }
      }
    });
  }
}
