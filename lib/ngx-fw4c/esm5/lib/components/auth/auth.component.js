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
var AuthComponent = /** @class */ (function () {
    function AuthComponent(route, _router, _cacheService, _settingService, _authenticationService, _validationService, _dataService) {
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
    AuthComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.route.data.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data) {
                _this._dataService.getToken((/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) {
                    if (data.succeedPath)
                        _this.succeedPath = (/** @type {?} */ (data.succeedPath));
                    if (data.success != undefined)
                        _this.success = (/** @type {?} */ (data.success));
                    if (data.api)
                        _this.api = (/** @type {?} */ (data.api));
                    if (data.mock)
                        _this.mock = (/** @type {?} */ (data.mock));
                    _this._authenticationService.setApi(_this.api);
                    if (response && response.user) {
                        _this._router.navigate([_this.succeedPath]);
                    }
                }));
            }
        }));
    };
    /**
     * @return {?}
     */
    AuthComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.initValidations();
    };
    /**
     * @param {?} close
     * @return {?}
     */
    AuthComponent.prototype.login = /**
     * @param {?} close
     * @return {?}
     */
    function (close) {
        var _this = this;
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
        function (response) {
            close();
            if (response.status) {
                _this._cacheService.set(AuthConst.Token, response);
                _this.completed.emit(response);
                if (_this.succeedPath)
                    _this._router.navigate([_this.succeedPath]);
            }
            else {
                _this._cacheService.remove(AuthConst.Token);
                _this.completed.emit(response);
                _this.errorMessage = response.errorMessage;
            }
        }));
    };
    /**
     * @return {?}
     */
    AuthComponent.prototype.trigger = /**
     * @return {?}
     */
    function () {
        this.btn.handleAction({});
    };
    /**
     * @private
     * @return {?}
     */
    AuthComponent.prototype.useMock = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentValue = JSON.parse(window.localStorage.getItem('mock'));
        if (!currentValue)
            return false;
        return currentValue;
    };
    /**
     * @private
     * @return {?}
     */
    AuthComponent.prototype.initValidations = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.formRef)
            throw new Error('formRef is null');
        /** @type {?} */
        var options = [
            new ValidationOption({
                validationName: 'Username',
                valueResolver: (/**
                 * @return {?}
                 */
                function () { return _this.request.payload.userName; }),
                rules: [
                    new CustomValidationRule((/**
                     * @return {?}
                     */
                    function () {
                        _this.errorMessage = null;
                        return of(new ValidationRuleResponse({
                            status: _this.request.payload.userName != undefined && _this.request.payload.userName != '',
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
                function () { return _this.request.payload.password; }),
                rules: [
                    new CustomValidationRule((/**
                     * @return {?}
                     */
                    function () {
                        _this.errorMessage = null;
                        return of(new ValidationRuleResponse({
                            status: _this.request.payload.password != undefined && _this.request.payload.password != '',
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
            function () { return _this; })
        });
        this._validationService.init({
            validator: this.validator ? this.validator : validator
        });
    };
    AuthComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-auth',
                    template: "<div #formRef>\r\n    <!-- <ng-container *ngIf=\"!template then default; else custom\">\r\n    </ng-container> -->\r\n    <div class=\"col-xs-12 col-sm-6 col-md-3 auth-wrapper\">\r\n        <div class=\"col-xs-12\" style=\"margin: 10px; margin-bottom: 30px;\">\r\n            <div class=\"auth-img\">\r\n                <img src=\"https://accounts.cmcglobal.com.vn/images/logo_cmc.png\" />\r\n            </div>\r\n            <h4 style=\"text-align: center; font-weight: 400; opacity: 0.9;\">{{title}}</h4>\r\n        </div>\r\n        <div class=\"col-xs-12 auth-wrapper-input\">\r\n            <label>\r\n                <span class=\"fa fa-user\"></span> Username\r\n            </label>\r\n            <katana-textbox [item]=\"{id: 1}\" [focus]=\"true\" (enter)=\"trigger()\" [placeholder]=\"'Nh\u1EADp user name...'\"\r\n                [(model)]=\"request.payload.userName\" [validationName]=\"'Username'\"></katana-textbox>\r\n            <label>\r\n                <span class=\"fa fa-key\"></span> Password\r\n            </label>\r\n            <katana-textbox [item]=\"{id: 2}\" (enter)=\"trigger()\" [type]=\"'password'\" [maxCharacters]=\"32\"\r\n                [placeholder]=\"'Nh\u1EADp password...'\" [(model)]=\"request.payload.password\" [validationName]=\"'Password'\">\r\n            </katana-textbox>\r\n            <div>\r\n                <ul *ngIf=\"errorMessage\">\r\n                    <li class=\"text-danger\">{{errorMessage}}</li>\r\n                </ul>\r\n            </div>\r\n            <div>\r\n                <katana-button #btn [lazyload]=\"true\" style=\"width: 100%;\" [icon]=\"'fa fa-sign-in'\"\r\n                    [customClass]=\"'primary full'\" (execute)=\"login($event)\" [title]=\"'Login'\">\r\n                </katana-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #custom>\r\n    <katana-loader *ngIf=\"template\" [data]=\"template?.data\" [template]=\"template?.template\"></katana-loader>\r\n</ng-template>\r\n\r\n<ng-template #default>\r\n</ng-template>",
                    animations: [fadeInOut],
                    styles: ["input[type=password],input[type=text]{width:100%;padding:12px 20px;margin:5px 0;display:inline-block;box-sizing:border-box}button{background-color:#007bff;color:#fff;padding:14px 20px;margin:8px 0;border:none;cursor:pointer;width:100%}button:hover{opacity:.8}.cancelbtn{width:auto;padding:10px 18px;background-color:#d61e00}.imgcontainer{text-align:center;margin:24px 0 12px}img.avatar{width:40%;border-radius:50%}.container{padding:16px}span.psw{float:right;padding-top:16px}@media screen and (max-width:300px){span.psw{display:block;float:none}.cancelbtn{width:100%}}katana-button .fa-check{color:#6fbb35}katana-button .fa-check:hover{color:#519121}.ng-invalid{border:1px solid #ee4930}.full{width:100%}.auth-img{width:120px;margin:0 auto 15px;padding-top:25px}.btn-login :hover{color:#fff}.auth-wrapper{margin:0 auto}.auth-wrapper-input{margin:0 auto;border:2px solid #007bff;padding:50px;background-color:#fff;opacity:.9}"]
                }] }
    ];
    /** @nocollapse */
    AuthComponent.ctorParameters = function () { return [
        { type: ActivatedRoute },
        { type: Router },
        { type: CacheService },
        { type: SettingService },
        { type: AuthenticationService },
        { type: ValidationService },
        { type: DataService }
    ]; };
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
    return AuthComponent;
}());
export { AuthComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLDBCQUEwQixFQUErQixNQUFNLGNBQWMsQ0FBQztBQUN2RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDMUIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRXpDO0lBcUJFLHVCQUNTLEtBQXFCLEVBQ3BCLE9BQWUsRUFDZixhQUEyQixFQUMzQixlQUErQixFQUMvQixzQkFBNkMsRUFDN0Msa0JBQXFDLEVB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RSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3ZELENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTlIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLHFoRUFBb0M7b0JBRXBDLFVBQVUsRUFBRSxDQUFDLFNBQVMsQ0FBQzs7aUJBQ3hCOzs7O2dCQWxCZ0IsY0FBYztnQkFBdEIsTUFBTTtnQkFVTixZQUFZO2dCQURaLGNBQWM7Z0JBUGQscUJBQXFCO2dCQUVyQixpQkFBaUI7Z0JBRGpCLFdBQVc7Ozt3QkFrQmpCLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzJCQUNMLEtBQUs7c0JBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLE1BQU07MEJBQ04sU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7c0JBQ3JDLFNBQVMsU0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQStHcEMsb0JBQUM7Q0FBQSxBQS9IRCxJQStIQztTQXhIWSxhQUFhOzs7SUFDeEIsOEJBQW1FOztJQUNuRSxrQ0FBMkM7O0lBQzNDLG9DQUFvQzs7SUFDcEMsaUNBQXVDOztJQUN2Qyw0QkFBNEI7O0lBQzVCLGdDQUF3Qzs7SUFDeEMsa0NBQTZFOztJQUM3RSxnQ0FBbUU7O0lBQ25FLDRCQUFnRTs7SUFDaEUsZ0NBQThFOztJQUM5RSxxQ0FBNEI7Ozs7O0lBQzVCLDZCQUE0Qzs7SUFHMUMsOEJBQTRCOzs7OztJQUM1QixnQ0FBdUI7Ozs7O0lBQ3ZCLHNDQUFtQzs7Ozs7SUFDbkMsd0NBQXVDOzs7OztJQUN2QywrQ0FBcUQ7Ozs7O0lBQ3JELDJDQUE2Qzs7Ozs7SUFDN0MscUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCwgQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlIH0gZnJvbSAnLi9hdXRoLm1vZGVsJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uU2VydmljZSwgVmFsaWRhdGlvbk9wdGlvbiwgQ2xpZW50VmFsaWRhdG9yLCBDdXN0b21WYWxpZGF0aW9uUnVsZSwgVmFsaWRhdGlvblJ1bGVSZXNwb25zZSB9IGZyb20gJy4uL3NoYXJlZC92YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgZmFkZUluT3V0IH0gZnJvbSAnLi4vc2hhcmVkL3RyaWdnZXJzJztcclxuaW1wb3J0IHsgQmFzZVRlbXBsYXRlIH0gZnJvbSAnLi4vc2hhcmVkL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vc2hhcmVkL2J1dHRvbi9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNldHRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3NlcnZpY2VzL3NldHRpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IENhY2hlU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9zZXJ2aWNlcy9jYWNoZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aENvbnN0IH0gZnJvbSAnLi9hdXRoLmNvbnN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWF1dGgnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRoLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW2ZhZGVJbk91dF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdQZXJtaXNzaW9uIEF1dGhlbnRpY2F0aW9uIFN5c3RlbSc7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRvcjogQ2xpZW50VmFsaWRhdG9yO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBzdWNjZWVkUGF0aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0ZW1wbGF0ZTogQmFzZVRlbXBsYXRlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhcGk6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgc3VjY2VzczogYm9vbGVhbiA9IHRydWU7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBjb21wbGV0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4oKTtcclxuICBAVmlld0NoaWxkKCdmb3JtUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGZvcm1SZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYnRuJywgeyBzdGF0aWM6IHRydWUgfSkgcHVibGljIGJ0bjogQnV0dG9uQ29tcG9uZW50O1xyXG4gIHB1YmxpYyByZXF1ZXN0OiBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCA9IG5ldyBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCgpO1xyXG4gIHB1YmxpYyBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBwcm90ZWN0ZWQgbW9jazogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcbiAgICBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcixcclxuICAgIHByaXZhdGUgX2NhY2hlU2VydmljZTogQ2FjaGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfc2V0dGluZ1NlcnZpY2U6IFNldHRpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF92YWxpZGF0aW9uU2VydmljZTogVmFsaWRhdGlvblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVNlcnZpY2UuZ2V0VG9rZW4oKHJlc3BvbnNlOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLnN1Y2NlZWRQYXRoKSB0aGlzLnN1Y2NlZWRQYXRoID0gPHN0cmluZz5kYXRhLnN1Y2NlZWRQYXRoO1xyXG4gICAgICAgICAgaWYgKGRhdGEuc3VjY2VzcyAhPSB1bmRlZmluZWQpIHRoaXMuc3VjY2VzcyA9IDxib29sZWFuPmRhdGEuc3VjY2VzcztcclxuICAgICAgICAgIGlmIChkYXRhLmFwaSkgdGhpcy5hcGkgPSA8c3RyaW5nPmRhdGEuYXBpO1xyXG4gICAgICAgICAgaWYgKGRhdGEubW9jaykgdGhpcy5tb2NrID0gPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT5kYXRhLm1vY2s7XHJcbiAgICAgICAgICB0aGlzLl9hdXRoZW50aWNhdGlvblNlcnZpY2Uuc2V0QXBpKHRoaXMuYXBpKTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS51c2VyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbdGhpcy5zdWNjZWVkUGF0aF0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaW5pdFZhbGlkYXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9naW4oY2xvc2UpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdmFsaWRhdGlvblNlcnZpY2UuaXNWYWxpZCgpKSB7XHJcbiAgICAgIGNsb3NlKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnVzZU1vY2soKSkge1xyXG4gICAgICB0aGlzLnJlcXVlc3QubW9ja0RhdGEgPSB0aGlzLm1vY2s7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlcXVlc3QucGF5bG9hZC5rZXkgPSB0aGlzLl9zZXR0aW5nU2VydmljZS51c2VLZXkoKTtcclxuICAgIHRoaXMucmVxdWVzdC5wYXlsb2FkLnNlY3JldCA9IHRoaXMuX3NldHRpbmdTZXJ2aWNlLnVzZVNlY3JldEtleSgpO1xyXG4gICAgdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmxvZ2luKHRoaXMucmVxdWVzdCkuc3Vic2NyaWJlKChyZXNwb25zZTogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNsb3NlKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2Uuc2V0KEF1dGhDb25zdC5Ub2tlbiwgcmVzcG9uc2UpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkLmVtaXQocmVzcG9uc2UpO1xyXG4gICAgICAgIGlmICh0aGlzLnN1Y2NlZWRQYXRoKSB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3RoaXMuc3VjY2VlZFBhdGhdKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9jYWNoZVNlcnZpY2UucmVtb3ZlKEF1dGhDb25zdC5Ub2tlbik7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQuZW1pdChyZXNwb25zZSk7XHJcbiAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSByZXNwb25zZS5lcnJvck1lc3NhZ2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyaWdnZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ0bi5oYW5kbGVBY3Rpb24oe30pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1c2VNb2NrKCk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIGN1cnJlbnRWYWx1ZSA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2NrJykpO1xyXG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBjdXJyZW50VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRWYWxpZGF0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb3JtUmVmKSB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1SZWYgaXMgbnVsbCcpO1xyXG4gICAgdmFyIG9wdGlvbnM6IFZhbGlkYXRpb25PcHRpb25bXSA9IFtcclxuICAgICAgbmV3IFZhbGlkYXRpb25PcHRpb24oe1xyXG4gICAgICAgIHZhbGlkYXRpb25OYW1lOiAnVXNlcm5hbWUnLFxyXG4gICAgICAgIHZhbHVlUmVzb2x2ZXI6ICgpID0+IHRoaXMucmVxdWVzdC5wYXlsb2FkLnVzZXJOYW1lLFxyXG4gICAgICAgIHJ1bGVzOiBbXHJcbiAgICAgICAgICBuZXcgQ3VzdG9tVmFsaWRhdGlvblJ1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yTWVzc2FnZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBvZihuZXcgVmFsaWRhdGlvblJ1bGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnJlcXVlc3QucGF5bG9hZC51c2VyTmFtZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5yZXF1ZXN0LnBheWxvYWQudXNlck5hbWUgIT0gJycsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXJuYW1lIGtow7RuZyDEkcaw4bujYyDEkeG7gyB0cuG7kW5nJ1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9LCB0cnVlKVxyXG4gICAgICAgIF1cclxuICAgICAgfSksXHJcbiAgICAgIG5ldyBWYWxpZGF0aW9uT3B0aW9uKHtcclxuICAgICAgICB2YWxpZGF0aW9uTmFtZTogJ1Bhc3N3b3JkJyxcclxuICAgICAgICB2YWx1ZVJlc29sdmVyOiAoKSA9PiB0aGlzLnJlcXVlc3QucGF5bG9hZC5wYXNzd29yZCxcclxuICAgICAgICBydWxlczogW1xyXG4gICAgICAgICAgbmV3IEN1c3RvbVZhbGlkYXRpb25SdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2UgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gb2YobmV3IFZhbGlkYXRpb25SdWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgIHN0YXR1czogdGhpcy5yZXF1ZXN0LnBheWxvYWQucGFzc3dvcmQgIT0gdW5kZWZpbmVkICYmIHRoaXMucmVxdWVzdC5wYXlsb2FkLnBhc3N3b3JkICE9ICcnLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBraMO0bmcgxJHGsOG7o2MgxJHhu4MgdHLhu5FuZydcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSwgdHJ1ZSlcclxuICAgICAgICBdXHJcbiAgICAgIH0pXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciB2YWxpZGF0b3IgPSBuZXcgQ2xpZW50VmFsaWRhdG9yKHtcclxuICAgICAgZm9ybVJlZjogdGhpcy5mb3JtUmVmLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICBwYXlsb2FkUmVmOiAoKSA9PiB0aGlzXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl92YWxpZGF0aW9uU2VydmljZS5pbml0KHtcclxuICAgICAgdmFsaWRhdG9yOiB0aGlzLnZhbGlkYXRvciA/IHRoaXMudmFsaWRhdG9yIDogdmFsaWRhdG9yXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19