import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AppConsts } from './../../shared/AppConsts';
import { ValidationOption, RequiredValidationRule, ClientValidator, ValidationService } from 'ngx-fw4c';
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
    console.log(this.item)
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
          // new CustomValidationRule(value => {
          //   // if (this.oldItem && this.oldItem.name == value) {
          //   //   return of(new ValidationRuleResponse({
          //   //     status: true,
          //   //   }))
          //   // }
          //   return this._roleService.checkUniqueName(value);
          // }),
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
    return of(this.item);
  }
}
