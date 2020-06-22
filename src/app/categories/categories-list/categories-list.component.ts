import { AppIcons, AppConsts } from './../../shared/AppConsts';
import { CategoriesEditComponent } from './../categories-edit/categories-edit.component';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationServices } from './../../helpers/authentication.service';
import { ModalService, TableOption, TableComponent, DataService, TemplateViewModel, TableColumnType } from 'ngx-fw4c';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../categories.service';
import { Categories } from '../categories';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  @ViewChild('tableList', { static: true }) tableList: TableComponent;
  public option: TableOption;
  constructor(private _modalService: ModalService,
    private _authenticationService: AuthenticationServices,
    private _dataService: DataService,
    private _categoryService: CategoryService,
    private _toastr: ToastrService,) { }

  ngOnInit() {
    this.initList();
  }
  private initList(): void {

    this.option = new TableOption({
      paging: true,
      title: 'Category Management',
      topButtons: [
        {
          icon: AppIcons.Add,
          customClass: 'primary',
          title: () => AppConsts.New,
          hide: () => {            
          return !this._authenticationService.checkAuthenticate('ADD CATEGORY');
          },

          executeAsync: item => {
            this._modalService.showTemplateDialog(
              new TemplateViewModel({
                 template: CategoriesEditComponent,
                customSize: 'modal-lg',
                validationKey: 'NewUserComponent',
                icon: AppIcons.Add,
                data: {
                  item: new Categories()
                },
                title: "New User",
                acceptCallback: item => {
                  return this._categoryService.create(item).subscribe((val : any) => {
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
          hide: () => !this._authenticationService.checkAuthenticate('EDIT PRODUCT'),
          executeAsync: item => {
            this._modalService.showTemplateDialog(new TemplateViewModel({
              title: 'Edit Product',
              customSize: 'modal-lg',
              icon: AppIcons.Edit,
              template: CategoriesEditComponent,
              validationKey: 'CategoriesEditComponent',
              data: {
                item: this._dataService.cloneItem(item)
              },
              acceptCallback: item => {
                return this._categoryService.update(item).subscribe(() => {
                  this.tableList.reload();
                  this._toastr.success('Changes saved', 'Success');
                });
              }
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
          title: () => 'Name',
          valueRef: () => 'name',
          allowFilter:true
        },
        {
          type: TableColumnType.Description,
          title: () => 'Slug',
          valueRef: () => 'slug',

        },
        {
          type: TableColumnType.Date,
          title: () => 'Created Date',

          valueRef: () => 'createdDate',
        },
        {
          type: TableColumnType.Description,
          title: () => 'Status',
          valueRef: () => 'status',
        },
      ],
      serviceProvider: {
        searchAsync: request => {
          this._categoryService.search(request).subscribe(s => console.log(s))

          return this._categoryService.search(request)
          
         
        }
      }
    });
  }
}
