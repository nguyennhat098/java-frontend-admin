import { AppConsts } from './../../shared/AppConsts';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Notifies } from './../notifies';
import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { ValidationService, ValidationOption, RequiredValidationRule, ClientValidator } from 'ngx-fw4c';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-notifies-edit',
  templateUrl: './notifies-edit.component.html',
  styleUrls: ['./notifies-edit.component.scss']
})
export class NotifiesEditComponent implements OnInit {
  @ViewChild('formRef', { static: true }) public formRef: ElementRef;
  @Input() item: Notifies;
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
              this.item.image = url;
            }
          });
        })
      )
      .subscribe();
  }
  private initValidations(): void {
    var options = [
      new ValidationOption({
        validationName: 'Content',
        dynamic: true,
        valueResolver: () => this.item.content,
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
        validationName: 'Link',
        valueResolver: () => this.item.link,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
        ]
      }),
      new ValidationOption({
        validationName: 'Image',
        valueResolver: () => this.item.image,
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
    if (this.item.id) {
      this.item.modifyDate = new Date();
    } else {
      this.item.createdDate = new Date();
    }
    this.item.status = this.item.status ? 1 : 0;
    return of(this.item);
  }
}
