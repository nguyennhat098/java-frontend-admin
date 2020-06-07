import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { EditorComponent, ValidationOption, RequiredValidationRule, CustomValidationRule, ClientValidator, ValidationService, ValidationRuleResponse, DataService } from 'ngx-fw4c';
import { AppConsts } from 'src/app/shared/AppConsts';
import { ProductService } from '../product.service';
import { Products } from '../product';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
import { CategoryService } from 'src/app/categories/categories.service';
import { Categories } from 'src/app/categories/categories';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  @ViewChild('editor', { static: true }) editor: EditorComponent;
  @ViewChild('formRef', { static: true }) public formRef: ElementRef;
  @Input() item: Products;
  private urls = [];
  private downloadURL: Observable<string>;
  private categories:Observable< Categories[]>;
  private fb;
  private image;
  private category=new Categories({id:7});
  constructor(private _productService: ProductService,
    private _categoryService:CategoryService,
    private _validationService: ValidationService,
    private _dataService: DataService,
    private _storage: AngularFireStorage) { }

  ngOnInit() {
    this.item.content=this.item.content?this.item.content:null;
    this.categories=this._categoryService.getAll();
    this._categoryService.getAll().subscribe(s=>console.log(s));
    this.initValidations();
  }
  updateImage(event) {
    if (!event.target.files[0]) return;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.image = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
   this.uploadFireBase(event.target.files[0],false);
  }
  updateMutilImages(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
       this.uploadFireBase(event.target.files[i],true);
      }
    }

  }
  public categoryChange(event):void {
    debugger
    this.category=event;
  }
  public searchCategories = (searchText: string): Observable<{ items: any[] }> => {
    return this.categories.pipe(map(val => {
      return {
        items: val.map(s => ({ name: s.name, value: s.id }))
          .filter(s => !searchText || s.name.toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1)
      };
    }));
  }
  private uploadFireBase(file: any, check: boolean): void {
    var n = Date.now();
    // const file = event.target.files[0];
    const filePath = `test/${n}`;
    const fileRef = this._storage.ref(filePath);
    const task = this._storage.upload(`test/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              if(check)
              this.item.moreImages=  this.item.moreImages?this.item.moreImages+= ','+ url:url;
              else
              this.item.images=url
            }
          });
        })
      )
      .subscribe();
  }
  private initValidations(): void {
    var options = [
      new ValidationOption({
        validationName: 'Name',
        dynamic: true,
        valueResolver:()=>this.item.name,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
          this.item.slug=  this.item.name.toString().toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'');
            this.item.slug =this.item.name.toString().toLowerCase();
 
            //Đổi ký tự có dấu thành không dấu
            this.item.slug = this.item.slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
            this.item.slug = this.item.slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
            this.item.slug = this.item.slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
            this.item.slug = this.item.slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
            this.item.slug = this.item.slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
            this.item.slug = this.item.slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
            this.item.slug = this.item.slug.replace(/đ/gi, 'd');
            this.item.slug =  this.item.slug.replace(/ /gi, "-");
            
						return this._productService.checkUniqueName(value);
          }),
        ]
      }),
      new ValidationOption({
        validationName: 'Content',
        valueResolver:()=>this.item.content,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
        ]
      }),
      new ValidationOption({
        validationName: 'Price',
        dynamic: true,
        valueResolver:()=>this.item.price,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
						return of(new ValidationRuleResponse({
							message: 'sale price not greater price',
							status: !this.item.salePrice ||this.item.salePrice<value
            }))
          }),
          ]
      }),
      new ValidationOption({
        validationName: 'SalePrice',
        valueResolver:()=>this.item.salePrice,
        dynamic: true,
        rules: [
          new CustomValidationRule(value => {
						return of(new ValidationRuleResponse({
							message: 'sale price not greater price',
							status:!this.item.price|| this.item.price>value
						}));
					}),
          ]
        }),
        // new ValidationOption({
        //   validationName: 'CategoryId',
        //   valueResolver:()=>this.category.id,
        //   dynamic: true,
        //   rules: [
        //     new RequiredValidationRule(() =>AppConsts.RequiredError ),
        //     ]
        //   })
    ];
    var validator = new ClientValidator({
      formRef: this.formRef,
      options: options
    });

    this._validationService.init({ validator });
  }

  public getValidator(): ValidationService {
    return this._validationService;
  }

  public isValid(): boolean {
    return this._validationService.isValid(true, false);
  }

  public callback(): Observable<any> {
    // debugger
    // console.log(this.item);
    // if (this.item.id > 0) {
    //   return this._productService.update(this.item);
    // }
    // return this._productService.create(this.item);
    this.item.categoryID=this.category;
    return of(this.item);
  }
}
