import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AppConsts } from './../../shared/AppConsts';
import { ValidationOption, RequiredValidationRule, ClientValidator, ValidationService, ValidationRuleResponse, CustomValidationRule } from 'ngx-fw4c';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { Categories } from '../categories';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-categories-edit',
  templateUrl: './categories-edit.component.html',
  styleUrls: ['./categories-edit.component.scss']
})
export class CategoriesEditComponent implements OnInit {
  @ViewChild('formRef', { static: true }) public formRef: ElementRef;
  @Input() item: Categories;
  private oldItem: Categories;
  constructor(private _validationService: ValidationService,
    private _storage: AngularFireStorage) { }

  ngOnInit() {
    this.initValidations();
  }
  updateImage(event) {
    if (!event.target.files[0]) return;
    this.uploadFireBase(event.target.files[0]);
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
             this.item.images=url;
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
              return of(new ValidationRuleResponse({
                status: true,
              }))
          }),
        ]
      }),
      new ValidationOption({
        validationName: 'Slug',
        valueResolver: () => this.item.slug,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
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
    if(this.item.id){
      this.item.modifileDate=new Date;
    }else{
      this.item.createdDate=new Date;
    }
    return of(this.item);
  }
}
