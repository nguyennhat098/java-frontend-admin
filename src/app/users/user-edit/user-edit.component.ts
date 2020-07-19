import { RoleService } from './../../roles/role.service';
import { AppConsts } from './../../shared/AppConsts';
import { Roles } from './../../roles/Role';
import { UserService } from './../user.service';
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { Users } from './../user';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ValidationOption, RequiredValidationRule, CustomValidationRule, ValidationRuleResponse, ClientValidator, ValidationService, DataService } from 'ngx-fw4c';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  @ViewChild('formRef', { static: true }) public formRef: ElementRef;
  @Input() item: Users;
  // private urls = [];
  // private downloadURL: Observable<string>;
  private roles: Roles[];
  // private fb;
  // private image;
  private role = new Roles();
  private oldItem: Users;
  constructor(private _storage: AngularFireStorage,
    private _userService:UserService,
    private _validationService: ValidationService,
    private _roleService:RoleService,
    private _dataService:DataService) { }

  ngOnInit() {
    this._roleService.getAll().subscribe(val=>{
      this.roles=val;
      if (!this.item.id) this.role.id = this.roles[0].id;
    });
    if (this.item.id) {
      this.oldItem =this._dataService.cloneItem(this.item);
      this.role.id = this.item.roleId.id;
      this.item.password2=this.item.password;
    }
    this.initValidations();
  }
  updateImage(event) {
    if (!event.target.files[0]) return;
    this.uploadFireBase(event.target.files[0]);
  }
  public roleChange(id :number): void {
    this.role.id = id;
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
             this.item.image=url;
            }
          });
        })
      )
      .subscribe();
  }
  private initValidations(): void {
    var options = [
      new ValidationOption({
        validationName: 'UserName',
        dynamic: true,
        valueResolver: () => this.item.userName,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
            if (this.oldItem && this.oldItem.userName == value) {
              return of(new ValidationRuleResponse({
                status: true,
              }))
            }
            
            return this._userService.checkUniqueUserName(value);
          }),
          new CustomValidationRule(value => {
            var regexp = /^\S+$/;
            return of(new ValidationRuleResponse({
              status: regexp.test(value),
              message:'User Name is not contain space'
            }))
        }),
        ]
      }),
      new ValidationOption({
        validationName: 'Email',
        dynamic: true,
        valueResolver: () => this.item.email,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
            if (this.oldItem && this.oldItem.email == value) {
              return of(new ValidationRuleResponse({
                status: true,
              }))
            }
            return this._userService.checkUniqueEmail(value);
          }),
        ]
      }),
      new ValidationOption({
        validationName: 'Password',
        valueResolver: () => this.item.password,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
              return of(new ValidationRuleResponse({
                status: !this.item.password2||value==this.item.password2,
                message:'Password is not match'
              }))
          }),
        ]
      }),
      new ValidationOption({
        validationName: 'Password2',
        valueResolver: () => this.item.password2,
        dynamic: true,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
          new CustomValidationRule(value => {
            return of(new ValidationRuleResponse({
              status: !this.item.password||value==this.item.password,
              message:'Password is not match'
            }))
        }),
        ]
      }),
      new ValidationOption({
        validationName: 'FullName',
        dynamic: true,
        valueResolver: () => this.item.fullName,
        rules: [
          new RequiredValidationRule(() => AppConsts.RequiredError),
        ]
      }),
      new ValidationOption({
        validationName: 'Phone',
        valueResolver: () => this.item.phone,
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
     this.item.roleId = this.role;
    return of(this.item);
  }
}
