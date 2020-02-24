/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/auth.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationLoginRequest } from './auth.model';
import { AuthenticationService } from './auth.service';
import { DataService } from '../shared/services/data.service';
import { ValidationService, ValidationOption, ClientValidator, CustomValidationRule, ValidationRuleResponse } from '../shared/validation';
import { fadeInOut } from '../shared/triggers';
import { BaseTemplate } from '../shared/models/base.model';
import { ButtonComponent } from '../shared/button/button/button.component';
import { of } from 'rxjs';
import { SettingService } from '../shared/services/setting.service';
import { CacheService } from '../shared/services/cache.service';
import { AuthConst } from './auth.const';
export class AuthComponent {
    /**
     * @param {?} route
     * @param {?} _router
     * @param {?} _cacheService
     * @param {?} _settingService
     * @param {?} _authenticationService
     * @param {?} _validationService
     * @param {?} _dataService
     */
    constructor(route, _router, _cacheService, _settingService, _authenticationService, _validationService, _dataService) {
        this.route = route;
        this._router = _router;
        this._cacheService = _cacheService;
        this._settingService = _settingService;
        this._authenticationService = _authenticationService;
        this._validationService = _validationService;
        this._dataService = _dataService;
        this.title = 'Permission Authentication System';
        this.success = true;
        this.completed = new EventEmitter();
        this.request = new AuthenticationLoginRequest();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data) {
                this._dataService.getToken((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    if (data.succeedPath)
                        this.succeedPath = (/** @type {?} */ (data.succeedPath));
                    if (data.success != undefined)
                        this.success = (/** @type {?} */ (data.success));
                    if (data.api)
                        this.api = (/** @type {?} */ (data.api));
                    if (data.mock)
                        this.mock = (/** @type {?} */ (data.mock));
                    this._authenticationService.setApi(this.api);
                    if (response && response.user) {
                        this._router.navigate([this.succeedPath]);
                    }
                }));
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initValidations();
    }
    /**
     * @param {?} close
     * @return {?}
     */
    login(close) {
        if (!this._validationService.isValid()) {
            close();
            return;
        }
        if (this.useMock()) {
            this.request.mockData = this.mock;
        }
        this.request.payload.key = this._settingService.useKey();
        this.request.payload.secret = this._settingService.useSecretKey();
        this._authenticationService.login(this.request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            close();
            if (response.status) {
                this._cacheService.set(AuthConst.Token, response);
                this.completed.emit(response);
                if (this.succeedPath)
                    this._router.navigate([this.succeedPath]);
            }
            else {
                this._cacheService.remove(AuthConst.Token);
                this.completed.emit(response);
                this.errorMessage = response.errorMessage;
            }
        }));
    }
    /**
     * @return {?}
     */
    trigger() {
        this.btn.handleAction({});
    }
    /**
     * @private
     * @return {?}
     */
    useMock() {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    }
    /**
     * @private
     * @return {?}
     */
    initValidations() {
        if (!this.formRef)
            throw new Error('formRef is null');
        /** @type {?} */
        var options = [
            new ValidationOption({
                validationName: 'Username',
                valueResolver: (/**
                 * @return {?}
                 */
                () => this.request.payload.userName),
                rules: [
                    new CustomValidationRule((/**
                     * @return {?}
                     */
                    () => {
                        this.errorMessage = null;
                        return of(new ValidationRuleResponse({
                            status: this.request.payload.userName != undefined && this.request.payload.userName != '',
                            message: 'Username không được để trống'
                        }));
                    }), true)
                ]
            }),
            new ValidationOption({
                validationName: 'Password',
                valueResolver: (/**
                 * @return {?}
                 */
                () => this.request.payload.password),
                rules: [
                    new CustomValidationRule((/**
                     * @return {?}
                     */
                    () => {
                        this.errorMessage = null;
                        return of(new ValidationRuleResponse({
                            status: this.request.payload.password != undefined && this.request.payload.password != '',
                            message: 'Password không được để trống'
                        }));
                    }), true)
                ]
            })
        ];
        /** @type {?} */
        var validator = new ClientValidator({
            formRef: this.formRef,
            options: options,
            payloadRef: (/**
             * @template THIS
             * @this {THIS}
             * @return {THIS}
             */
            () => this)
        });
        this._validationService.init({
            validator: this.validator ? this.validator : validator
        });
    }
}
AuthComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-auth',
                template: "<div #formRef>\r\n    <!-- <ng-container *ngIf=\"!template then default; else custom\">\r\n    </ng-container> -->\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 auth-wrapper\">\r\n        <div class=\"col-xs-12\" style=\"margin: 10px; margin-bottom: 30px;\">\r\n            <div class=\"auth-img\">\r\n                <img src=\"https://accounts.cmcglobal.com.vn/images/logo_cmc.png\" />\r\n            </div>\r\n            <h4 style=\"text-align: center; font-weight: 400; opacity: 0.9;\">{{title}}</h4>\r\n        </div>\r\n        <div class=\"col-xs-12 auth-wrapper-input\">\r\n            <label>\r\n                <span class=\"fa fa-user\"></span> Username\r\n            </label>\r\n            <katana-textbox [item]=\"{id: 1}\" [focus]=\"true\" (enter)=\"trigger()\" [placeholder]=\"'Nh\u1EADp user name...'\"\r\n                [(model)]=\"request.payload.userName\" [validationName]=\"'Username'\"></katana-textbox>\r\n            <label>\r\n                <span class=\"fa fa-key\"></span> Password\r\n            </label>\r\n            <katana-textbox [item]=\"{id: 2}\" (enter)=\"trigger()\" [type]=\"'password'\" [maxCharacters]=\"32\"\r\n                [placeholder]=\"'Nh\u1EADp password...'\" [(model)]=\"request.payload.password\" [validationName]=\"'Password'\">\r\n            </katana-textbox>\r\n            <div>\r\n                <ul *ngIf=\"errorMessage\">\r\n                    <li class=\"text-danger\">{{errorMessage}}</li>\r\n                </ul>\r\n            </div>\r\n            <div>\r\n                <katana-button #btn [lazyload]=\"true\" style=\"width: 100%;\" [icon]=\"'fa fa-sign-in'\"\r\n                    [customClass]=\"'primary full'\" (execute)=\"login($event)\" [title]=\"'Login'\">\r\n                </katana-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #custom>\r\n    <katana-loader *ngIf=\"template\" [data]=\"template?.data\" [template]=\"template?.template\"></katana-loader>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n</ng-template>",
                animations: [fadeInOut],
                styles: ["input[type=password],input[type=text]{width:100%;padding:12px 20px;margin:5px 0;display:inline-block;box-sizing:border-box}button{background-color:#007bff;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}button:hover{opacity:.8}.cancelbtn{width:auto;padding:10px 18px;background-color:#d61e00}.imgcontainer{text-align:center;margin:24px 0 12px}img.avatar{width:40%;border-radius:50%}.container{padding:16px}span.psw{float:right;padding-top:16px}@media screen and (max-width:300px){span.psw{display:block;float:none}.cancelbtn{width:100%}}katana-button .fa-check{color:#6fbb35}katana-button .fa-check:hover{color:#519121}.ng-invalid{border:1px solid #ee4930}.full{width:100%}.auth-img{width:120px;margin:0 auto 15px;padding-top:25px}.btn-login :hover{color:#fff}.auth-wrapper{margin:0 auto}.auth-wrapper-input{margin:0 auto;border:2px solid #007bff;padding:50px;background-color:#fff;opacity:.9}"]
            }] }
];
/** @nocollapse */
AuthComponent.ctorParameters = () => [
    { type: ActivatedRoute },
    { type: Router },
    { type: CacheService },
    { type: SettingService },
    { type: AuthenticationService },
    { type: ValidationService },
    { type: DataService }
];
AuthComponent.propDecorators = {
    title: [{ type: Input }],
    validator: [{ type: Input }],
    succeedPath: [{ type: Input }],
    template: [{ type: Input }],
    api: [{ type: Input }],
    success: [{ type: Input }],
    completed: [{ type: Output }],
    formRef: [{ type: ViewChild, args: ['formRef', { static: true },] }],
    btn: [{ type: ViewChild, args: ['btn', { static: true },] }]
};
if (false) {
    /** @type {?} */
    AuthComponent.prototype.title;
    /** @type {?} */
    AuthComponent.prototype.validator;
    /** @type {?} */
    AuthComponent.prototype.succeedPath;
    /** @type {?} */
    AuthComponent.prototype.template;
    /** @type {?} */
    AuthComponent.prototype.api;
    /** @type {?} */
    AuthComponent.prototype.success;
    /** @type {?} */
    AuthComponent.prototype.completed;
    /** @type {?} */
    AuthComponent.prototype.formRef;
    /** @type {?} */
    AuthComponent.prototype.btn;
    /** @type {?} */
    AuthComponent.prototype.request;
    /** @type {?} */
    AuthComponent.prototype.errorMessage;
    /**
     * @type {?}
     * @protected
     */
    AuthComponent.prototype.mock;
    /** @type {?} */
    AuthComponent.prototype.route;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._router;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._cacheService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._settingService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._authenticationService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._validationService;
    /**
     * @type {?}
     * @private
     */
    AuthComponent.prototype._dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUErQixNQUFNLGNBQWMsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBU3pDLE1BQU0sT0FBTyxhQUFhOzs7Ozs7Ozs7O0lBY3hCLFlBQ1MsS0FBcUIsRUFDcEIsT0FBZSxFQUNmLGFBQTJCLEVBQzNCLGVBQStCLEVBQy9CLHNCQUE2QyxFQUM3QyxrQkFBcUMsRUFDckMsWUFBeUI7UUFOMUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDcEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUMvQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO1FBQzdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFwQm5CLFVBQUssR0FBVyxrQ0FBa0MsQ0FBQztRQUtuRCxZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBK0IsQ0FBQztRQUd0RSxZQUFPLEdBQStCLElBQUksMEJBQTBCLEVBQUUsQ0FBQztJQVkxRSxDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVE7Ozs7Z0JBQUMsQ0FBQyxRQUFxQyxFQUFFLEVBQUU7b0JBQ25FLElBQUksSUFBSSxDQUFDLFdBQVc7d0JBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxtQkFBUSxJQUFJLENBQUMsV0FBVyxFQUFBLENBQUM7b0JBQ2xFLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxTQUFTO3dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQVMsSUFBSSxDQUFDLE9BQU8sRUFBQSxDQUFDO29CQUNwRSxJQUFJLElBQUksQ0FBQyxHQUFHO3dCQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQVEsSUFBSSxDQUFDLEdBQUcsRUFBQSxDQUFDO29CQUMxQyxJQUFJLElBQUksQ0FBQyxJQUFJO3dCQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQTZCLElBQUksQ0FBQyxJQUFJLEVBQUEsQ0FBQztvQkFDbEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzdDLElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUU7d0JBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7cUJBQzNDO2dCQUNILENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN0QyxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNsRSxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFxQyxFQUFFLEVBQUU7WUFDbEcsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLFFBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLElBQUksQ0FBQyxXQUFXO29CQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDakU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRU0sT0FBTztRQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRU8sT0FBTzs7WUFDVCxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsWUFBWTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2hDLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRU8sZUFBZTtRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU87WUFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O1lBQ2xELE9BQU8sR0FBdUI7WUFDaEMsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDbkIsY0FBYyxFQUFFLFVBQVU7Z0JBQzFCLGFBQWE7OztnQkFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUE7Z0JBQ2xELEtBQUssRUFBRTtvQkFDTCxJQUFJLG9CQUFvQjs7O29CQUFDLEdBQUcsRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7d0JBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksc0JBQXNCLENBQUM7NEJBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxFQUFFOzRCQUN6RixPQUFPLEVBQUUsOEJBQThCO3lCQUN4QyxDQUFDLENBQUMsQ0FBQztvQkFDTixDQUFDLEdBQUUsSUFBSSxDQUFDO2lCQUNUO2FBQ0YsQ0FBQztZQUNGLElBQUksZ0JBQWdCLENBQUM7Z0JBQ25CLGNBQWMsRUFBRSxVQUFVO2dCQUMxQixhQUFhOzs7Z0JBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFBO2dCQUNsRCxLQUFLLEVBQUU7b0JBQ0wsSUFBSSxvQkFBb0I7OztvQkFBQyxHQUFHLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO3dCQUN6QixPQUFPLEVBQUUsQ0FBQyxJQUFJLHNCQUFzQixDQUFDOzRCQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksRUFBRTs0QkFDekYsT0FBTyxFQUFFLDhCQUE4Qjt5QkFDeEMsQ0FBQyxDQUFDLENBQUM7b0JBQ04sQ0FBQyxHQUFFLElBQUksQ0FBQztpQkFDVDthQUNGLENBQUM7U0FDSDs7WUFFRyxTQUFTLEdBQUcsSUFBSSxlQUFlLENBQUM7WUFDbEMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFVBQVU7Ozs7O1lBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFBO1NBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO1lBQzNCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3ZELENBQUMsQ0FBQztJQUNMLENBQUM7OztZQTlIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHFoRUFBb0M7Z0JBRXBDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQzs7YUFDeEI7Ozs7WUFsQmdCLGNBQWM7WUFBdEIsTUFBTTtZQVVOLFlBQVk7WUFEWixjQUFjO1lBUGQscUJBQXFCO1lBRXJCLGlCQUFpQjtZQURqQixXQUFXOzs7b0JBa0JqQixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzt1QkFDTCxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxNQUFNO3NCQUNOLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2tCQUNyQyxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7OztJQVJsQyw4QkFBbUU7O0lBQ25FLGtDQUEyQzs7SUFDM0Msb0NBQW9DOztJQUNwQyxpQ0FBdUM7O0lBQ3ZDLDRCQUE0Qjs7SUFDNUIsZ0NBQXdDOztJQUN4QyxrQ0FBNkU7O0lBQzdFLGdDQUFtRTs7SUFDbkUsNEJBQWdFOztJQUNoRSxnQ0FBOEU7O0lBQzlFLHFDQUE0Qjs7Ozs7SUFDNUIsNkJBQTRDOztJQUcxQyw4QkFBNEI7Ozs7O0lBQzVCLGdDQUF1Qjs7Ozs7SUFDdkIsc0NBQW1DOzs7OztJQUNuQyx3Q0FBdUM7Ozs7O0lBQ3ZDLCtDQUFxRDs7Ozs7SUFDckQsMkNBQTZDOzs7OztJQUM3QyxxQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0LCBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UgfSBmcm9tICcuL2F1dGgubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlLCBWYWxpZGF0aW9uT3B0aW9uLCBDbGllbnRWYWxpZGF0b3IsIEN1c3RvbVZhbGlkYXRpb25SdWxlLCBWYWxpZGF0aW9uUnVsZVJlc3BvbnNlIH0gZnJvbSAnLi4vc2hhcmVkL3ZhbGlkYXRpb24nO1xyXG5pbXBvcnQgeyBmYWRlSW5PdXQgfSBmcm9tICcuLi9zaGFyZWQvdHJpZ2dlcnMnO1xyXG5pbXBvcnQgeyBCYXNlVGVtcGxhdGUgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi9zaGFyZWQvYnV0dG9uL2J1dHRvbi9idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvc2VydmljZXMvc2V0dGluZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL2NhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoQ29uc3QgfSBmcm9tICcuL2F1dGguY29uc3QnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtYXV0aCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dGguY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dGguY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbZmFkZUluT3V0XVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ1Blcm1pc3Npb24gQXV0aGVudGljYXRpb24gU3lzdGVtJztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdG9yOiBDbGllbnRWYWxpZGF0b3I7XHJcbiAgQElucHV0KCkgcHVibGljIHN1Y2NlZWRQYXRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHRlbXBsYXRlOiBCYXNlVGVtcGxhdGU7XHJcbiAgQElucHV0KCkgcHVibGljIGFwaTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWNjZXNzOiBib29sZWFuID0gdHJ1ZTtcclxuICBAT3V0cHV0KCkgcHVibGljIGNvbXBsZXRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2Zvcm1SZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZm9ybVJlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdidG4nLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgYnRuOiBCdXR0b25Db21wb25lbnQ7XHJcbiAgcHVibGljIHJlcXVlc3Q6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0ID0gbmV3IEF1dGhlbnRpY2F0aW9uTG9naW5SZXF1ZXN0KCk7XHJcbiAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBtb2NrOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyLFxyXG4gICAgcHJpdmF0ZSBfY2FjaGVTZXJ2aWNlOiBDYWNoZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9zZXR0aW5nU2VydmljZTogU2V0dGluZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX3ZhbGlkYXRpb25TZXJ2aWNlOiBWYWxpZGF0aW9uU2VydmljZSxcclxuICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9kYXRhU2VydmljZS5nZXRUb2tlbigocmVzcG9uc2U6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2VlZFBhdGgpIHRoaXMuc3VjY2VlZFBhdGggPSA8c3RyaW5nPmRhdGEuc3VjY2VlZFBhdGg7XHJcbiAgICAgICAgICBpZiAoZGF0YS5zdWNjZXNzICE9IHVuZGVmaW5lZCkgdGhpcy5zdWNjZXNzID0gPGJvb2xlYW4+ZGF0YS5zdWNjZXNzO1xyXG4gICAgICAgICAgaWYgKGRhdGEuYXBpKSB0aGlzLmFwaSA9IDxzdHJpbmc+ZGF0YS5hcGk7XHJcbiAgICAgICAgICBpZiAoZGF0YS5tb2NrKSB0aGlzLm1vY2sgPSA8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPmRhdGEubW9jaztcclxuICAgICAgICAgIHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5zZXRBcGkodGhpcy5hcGkpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLnVzZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFt0aGlzLnN1Y2NlZWRQYXRoXSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbml0VmFsaWRhdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2dpbihjbG9zZSk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl92YWxpZGF0aW9uU2VydmljZS5pc1ZhbGlkKCkpIHtcclxuICAgICAgY2xvc2UoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudXNlTW9jaygpKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdC5tb2NrRGF0YSA9IHRoaXMubW9jaztcclxuICAgIH1cclxuICAgIHRoaXMucmVxdWVzdC5wYXlsb2FkLmtleSA9IHRoaXMuX3NldHRpbmdTZXJ2aWNlLnVzZUtleSgpO1xyXG4gICAgdGhpcy5yZXF1ZXN0LnBheWxvYWQuc2VjcmV0ID0gdGhpcy5fc2V0dGluZ1NlcnZpY2UudXNlU2VjcmV0S2V5KCk7XHJcbiAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2UubG9naW4odGhpcy5yZXF1ZXN0KS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgY2xvc2UoKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cykge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5zZXQoQXV0aENvbnN0LlRva2VuLCByZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQuZW1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3VjY2VlZFBhdGgpIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbdGhpcy5zdWNjZWVkUGF0aF0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NhY2hlU2VydmljZS5yZW1vdmUoQXV0aENvbnN0LlRva2VuKTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZC5lbWl0KHJlc3BvbnNlKTtcclxuICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IHJlc3BvbnNlLmVycm9yTWVzc2FnZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJpZ2dlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuYnRuLmhhbmRsZUFjdGlvbih7fSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVzZU1vY2soKTogYm9vbGVhbiB7XHJcbiAgICB2YXIgY3VycmVudFZhbHVlID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vY2snKSk7XHJcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIGN1cnJlbnRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFZhbGlkYXRpb25zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmZvcm1SZWYpIHRocm93IG5ldyBFcnJvcignZm9ybVJlZiBpcyBudWxsJyk7XHJcbiAgICB2YXIgb3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW1xyXG4gICAgICBuZXcgVmFsaWRhdGlvbk9wdGlvbih7XHJcbiAgICAgICAgdmFsaWRhdGlvbk5hbWU6ICdVc2VybmFtZScsXHJcbiAgICAgICAgdmFsdWVSZXNvbHZlcjogKCkgPT4gdGhpcy5yZXF1ZXN0LnBheWxvYWQudXNlck5hbWUsXHJcbiAgICAgICAgcnVsZXM6IFtcclxuICAgICAgICAgIG5ldyBDdXN0b21WYWxpZGF0aW9uUnVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZXJyb3JNZXNzYWdlID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBWYWxpZGF0aW9uUnVsZVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICBzdGF0dXM6IHRoaXMucmVxdWVzdC5wYXlsb2FkLnVzZXJOYW1lICE9IHVuZGVmaW5lZCAmJiB0aGlzLnJlcXVlc3QucGF5bG9hZC51c2VyTmFtZSAhPSAnJyxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlcm5hbWUga2jDtG5nIMSRxrDhu6NjIMSR4buDIHRy4buRbmcnXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0sIHRydWUpXHJcbiAgICAgICAgXVxyXG4gICAgICB9KSxcclxuICAgICAgbmV3IFZhbGlkYXRpb25PcHRpb24oe1xyXG4gICAgICAgIHZhbGlkYXRpb25OYW1lOiAnUGFzc3dvcmQnLFxyXG4gICAgICAgIHZhbHVlUmVzb2x2ZXI6ICgpID0+IHRoaXMucmVxdWVzdC5wYXlsb2FkLnBhc3N3b3JkLFxyXG4gICAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAgICBuZXcgQ3VzdG9tVmFsaWRhdGlvblJ1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBvZihuZXcgVmFsaWRhdGlvblJ1bGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnJlcXVlc3QucGF5bG9hZC5wYXNzd29yZCAhPSB1bmRlZmluZWQgJiYgdGhpcy5yZXF1ZXN0LnBheWxvYWQucGFzc3dvcmQgIT0gJycsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGtow7RuZyDEkcaw4bujYyDEkeG7gyB0cuG7kW5nJ1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9LCB0cnVlKVxyXG4gICAgICAgIF1cclxuICAgICAgfSlcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHZhbGlkYXRvciA9IG5ldyBDbGllbnRWYWxpZGF0b3Ioe1xyXG4gICAgICBmb3JtUmVmOiB0aGlzLmZvcm1SZWYsXHJcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXHJcbiAgICAgIHBheWxvYWRSZWY6ICgpID0+IHRoaXNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3ZhbGlkYXRpb25TZXJ2aWNlLmluaXQoe1xyXG4gICAgICB2YWxpZGF0b3I6IHRoaXMudmFsaWRhdG9yID8gdGhpcy52YWxpZGF0b3IgOiB2YWxpZGF0b3JcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=