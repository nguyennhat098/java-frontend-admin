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
  constructor(private _validationService: ValidationService,) { }

  ngOnInit() {
    console.log(this.item)
    this.initValidations();
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
