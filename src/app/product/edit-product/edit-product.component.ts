import { AppConsts } from './../../shared/AppConsts';
import { CategoryService } from './../../categories/categories.service';
import { Categories } from './../../categories/categories';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { EditorComponent, ValidationOption, RequiredValidationRule, CustomValidationRule, ClientValidator, ValidationService, ValidationRuleResponse, DataService, ValidationRule } from 'ngx-fw4c';
import { ProductService } from '../product.service';
import { Products } from '../product';
import { Observable, of } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, map } from 'rxjs/operators';
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
  private categories: Categories[];
  private category = new Categories();
  private oldItem: Products;
  constructor(private _productService: ProductService,
    private _categoryService: CategoryService,
    private _validationService: ValidationService,
    private _storage: AngularFireStorage) { }

  ngOnInit() {
    this.item.content = this.item.content ? this.item.content : null;
    this._categoryService.getAll().subscribe(val => {
      this.categories = val;
      if (!this.item.id) this.category.id = this.categories[0].id;
    });

    if (this.item.moreImages) {
      this.urls = this.item.moreImages.split(',');
    }
    if (this.item.id) {
      this.oldItem = this.item;
      this.category.id = this.item.categoryId;
    }
    this.initValidations();
  }
  updateImage(event) {
    if (!event.target.files[0]) return;
    this.uploadFireBase(event.target.files[0]);
  }
  updateMutilImages(event) {
    if (event.target.files && event.target.files[0]) {
      this.item.moreImages = null;
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        this.uploadMutipleFireBase(event.target.files[i]);
      }
    }
  }
  public categoryChange(id): void {
    this.category.id = id;
  }
  private uploadMutipleFireBase(file: any): void {
    this.urls = [];
    var n = Date.now();
    const filePath = `test/${n}`;
    const fileRef = this._storage.ref(filePath);
    const task = this._storage.upload(`test/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          var downloadURL = fileRef.getDownloadURL();
          downloadURL.subscribe(url => {
            if (url) {
              this.item.moreImages = this.item.moreImages ? this.item.moreImages += ',' + url : url;
              this.urls.push(url);
            }
          });
        })
      )
      .subscribe();
  }
  private uploadFireBase(file: any): void {
    var n = Date.now();
    const filePath = `test/${n}`;
    const fileRef = this._storage.ref(filePath);
    const task = this._storage.upload(`test/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          var downloadURL = fileRef.getDownloadURL();
          downloadURL.subscribe(url => {
            if (url) {
              this.item.images = url;
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
        valueResolver: () => this.item.name,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
            this.item.slug = this.item.name.toString().toLowerCase();

            //Đổi ký tự có dấu thành không dấu
            this.item.slug = this.item.slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
            this.item.slug = this.item.slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
            this.item.slug = this.item.slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
            this.item.slug = this.item.slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
            this.item.slug = this.item.slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
            this.item.slug = this.item.slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
            this.item.slug = this.item.slug.replace(/đ/gi, 'd');
            this.item.slug = this.item.slug.replace(/ /gi, "-");
            if (this.oldItem && this.oldItem.name == value) {
              return of(new ValidationRuleResponse({
                status: true,
              }))
            }
            return this._productService.checkUniqueName(value);
          }),
        ]
      }),
      new ValidationOption({
        validationName: 'Content',
        valueResolver: () => this.item.content,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
        ]
      }),
      new ValidationOption({
        validationName: 'Price',
        dynamic: true,
        valueResolver: () => this.item.price,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
            return this._productService.validatePrice(value,this.item);
          }),
          new CustomValidationRule(value => {
            return of(new ValidationRuleResponse({
              message: 'The price is not negative',
              status:  !(this.item.price <0)
          }));
          }),
        ]
      }),
      new ValidationOption({
        validationName: 'SalePrice',
        valueResolver: () => this.item.salePrice,
        dynamic: true,
        rules: [
          new CustomValidationRule(value => {
            return this._productService.validateSalePrice(value,this.item);
          }),
          new CustomValidationRule(value => {
            return of(new ValidationRuleResponse({
              message: 'The Sale Price is not negative',
              status:  !(this.item.salePrice <0)
          }));
          }),
        ]
      }),

      new ValidationOption({
        validationName: 'Image',
        valueResolver: () => this.item.images,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
        ]
      }),
      new ValidationOption({
        validationName: 'category',
        valueResolver: () => this.category.id,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
        ]
      })
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
    this.item.categories = this.category;
    if (this.item.id) {
      this.item.modifileDate = new Date;
    } else {
      this.item.created = new Date;
    }
    return of(this.item);
  }
}
