/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/auth.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse } from '../shared/models/base.model';
var UserViewModel = /** @class */ (function () {
    function UserViewModel(init) {
        this.system = new SystemViewModel();
        this.roles = [];
        this.permissions = [];
        Object.assign(this, init);
    }
    return UserViewModel;
}());
export { UserViewModel };
if (false) {
    /** @type {?} */
    UserViewModel.prototype.id;
    /** @type {?} */
    UserViewModel.prototype.fullName;
    /** @type {?} */
    UserViewModel.prototype.firstName;
    /** @type {?} */
    UserViewModel.prototype.lastName;
    /** @type {?} */
    UserViewModel.prototype.userName;
    /** @type {?} */
    UserViewModel.prototype.email;
    /** @type {?} */
    UserViewModel.prototype.image;
    /** @type {?} */
    UserViewModel.prototype.phone;
    /** @type {?} */
    UserViewModel.prototype.dateOfBirth;
    /** @type {?} */
    UserViewModel.prototype.externalInfo;
    /** @type {?} */
    UserViewModel.prototype.system;
    /** @type {?} */
    UserViewModel.prototype.roles;
    /** @type {?} */
    UserViewModel.prototype.permissions;
}
var AuthenticationViewModel = /** @class */ (function () {
    function AuthenticationViewModel(init) {
        Object.assign(this, init);
    }
    return AuthenticationViewModel;
}());
export { AuthenticationViewModel };
if (false) {
    /** @type {?} */
    AuthenticationViewModel.prototype.userName;
    /** @type {?} */
    AuthenticationViewModel.prototype.password;
    /** @type {?} */
    AuthenticationViewModel.prototype.key;
    /** @type {?} */
    AuthenticationViewModel.prototype.secret;
}
var SystemViewModel = /** @class */ (function () {
    function SystemViewModel(init) {
        Object.assign(this, init);
    }
    return SystemViewModel;
}());
export { SystemViewModel };
if (false) {
    /** @type {?} */
    SystemViewModel.prototype.name;
    /** @type {?} */
    SystemViewModel.prototype.key;
    /** @type {?} */
    SystemViewModel.prototype.enabled;
}
var RoleViewModel = /** @class */ (function () {
    function RoleViewModel(init) {
        this.permissions = [];
        Object.assign(this, init);
    }
    return RoleViewModel;
}());
export { RoleViewModel };
if (false) {
    /** @type {?} */
    RoleViewModel.prototype.name;
    /** @type {?} */
    RoleViewModel.prototype.key;
    /** @type {?} */
    RoleViewModel.prototype.permissions;
    /** @type {?} */
    RoleViewModel.prototype.enabled;
}
var PermissionViewModel = /** @class */ (function () {
    function PermissionViewModel(init) {
        this.page = new PageViewModel();
        this.activities = [];
        Object.assign(this, init);
    }
    return PermissionViewModel;
}());
export { PermissionViewModel };
if (false) {
    /** @type {?} */
    PermissionViewModel.prototype.page;
    /** @type {?} */
    PermissionViewModel.prototype.name;
    /** @type {?} */
    PermissionViewModel.prototype.key;
    /** @type {?} */
    PermissionViewModel.prototype.enabled;
    /** @type {?} */
    PermissionViewModel.prototype.activities;
}
var PageViewModel = /** @class */ (function () {
    function PageViewModel(init) {
        Object.assign(this, init);
    }
    return PageViewModel;
}());
export { PageViewModel };
if (false) {
    /** @type {?} */
    PageViewModel.prototype.name;
    /** @type {?} */
    PageViewModel.prototype.state;
    /** @type {?} */
    PageViewModel.prototype.parent;
    /** @type {?} */
    PageViewModel.prototype.icon;
}
var ActivityViewModel = /** @class */ (function () {
    function ActivityViewModel(init) {
        Object.assign(this, init);
    }
    return ActivityViewModel;
}());
export { ActivityViewModel };
if (false) {
    /** @type {?} */
    ActivityViewModel.prototype.name;
    /** @type {?} */
    ActivityViewModel.prototype.key;
    /** @type {?} */
    ActivityViewModel.prototype.enabled;
}
var AuthenticationLoginRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationLoginRequest, _super);
    function AuthenticationLoginRequest(init) {
        var _this = _super.call(this) || this;
        _this.payload = new AuthenticationViewModel();
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationLoginRequest;
}(BaseRequest));
export { AuthenticationLoginRequest };
if (false) {
    /** @type {?} */
    AuthenticationLoginRequest.prototype.token;
    /** @type {?} */
    AuthenticationLoginRequest.prototype.payload;
}
var AuthenticationLoginResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationLoginResponse, _super);
    function AuthenticationLoginResponse(init) {
        var _this = _super.call(this) || this;
        _this.menuTabs = [];
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationLoginResponse;
}(BaseResponse));
export { AuthenticationLoginResponse };
if (false) {
    /** @type {?} */
    AuthenticationLoginResponse.prototype.user;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.menuTabs;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.token;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.refreshToken;
    /** @type {?} */
    AuthenticationLoginResponse.prototype.errorMessage;
}
var AuthenticationCreateRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationCreateRequest, _super);
    function AuthenticationCreateRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationCreateRequest;
}(BaseRequest));
export { AuthenticationCreateRequest };
var AuthenticationCreateResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationCreateResponse, _super);
    function AuthenticationCreateResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationCreateResponse;
}(BaseResponse));
export { AuthenticationCreateResponse };
var AuthenticationUpdateRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationUpdateRequest, _super);
    function AuthenticationUpdateRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationUpdateRequest;
}(BaseRequest));
export { AuthenticationUpdateRequest };
var AuthenticationUpdateResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationUpdateResponse, _super);
    function AuthenticationUpdateResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationUpdateResponse;
}(BaseResponse));
export { AuthenticationUpdateResponse };
var AuthenticationRetrieveRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationRetrieveRequest, _super);
    function AuthenticationRetrieveRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationRetrieveRequest;
}(BaseRequest));
export { AuthenticationRetrieveRequest };
var AuthenticationRetrieveResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationRetrieveResponse, _super);
    function AuthenticationRetrieveResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationRetrieveResponse;
}(BaseResponse));
export { AuthenticationRetrieveResponse };
var AuthenticationDeleteRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationDeleteRequest, _super);
    function AuthenticationDeleteRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationDeleteRequest;
}(BaseRequest));
export { AuthenticationDeleteRequest };
if (false) {
    /** @type {?} */
    AuthenticationDeleteRequest.prototype.ids;
}
var AuthenticationDeleteResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationDeleteResponse, _super);
    function AuthenticationDeleteResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationDeleteResponse;
}(BaseResponse));
export { AuthenticationDeleteResponse };
var AuthenticationSearchRequest = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationSearchRequest, _super);
    function AuthenticationSearchRequest(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationSearchRequest;
}(SearchBaseRequest));
export { AuthenticationSearchRequest };
var AuthenticationSearchResponse = /** @class */ (function (_super) {
    tslib_1.__extends(AuthenticationSearchResponse, _super);
    function AuthenticationSearchResponse(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return AuthenticationSearchResponse;
}(SearchBaseResponse));
export { AuthenticationSearchResponse };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixFQUFXLE1BQU0sNkJBQTZCLENBQUM7QUFHeEg7SUFjSSx1QkFBWSxJQUE2QjtRQUh6QyxXQUFNLEdBQXFCLElBQUksZUFBZSxFQUFFLENBQUM7UUFDakQsVUFBSyxHQUFxQixFQUFFLENBQUM7UUFDN0IsZ0JBQVcsR0FBMkIsRUFBRSxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7Ozs7SUFoQkcsMkJBQVc7O0lBQ1gsaUNBQWlCOztJQUNqQixrQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsaUNBQWlCOztJQUNqQiw4QkFBZTs7SUFDZiw4QkFBc0I7O0lBQ3RCLDhCQUFlOztJQUNmLG9DQUFtQjs7SUFDbkIscUNBQW1COztJQUNuQiwrQkFBaUQ7O0lBQ2pELDhCQUE2Qjs7SUFDN0Isb0NBQXlDOztBQU03QztJQUtJLGlDQUFZLElBQXVDO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTCw4QkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7O0lBUEcsMkNBQWlCOztJQUNqQiwyQ0FBaUI7O0lBQ2pCLHNDQUFhOztJQUNiLHlDQUFnQjs7QUFNcEI7SUFJSSx5QkFBWSxJQUErQjtRQUN2QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQzs7OztJ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QUFNLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUM5QixDQUFDO0lBQ0wsa0NBQUM7QUFBRCxDQUFDLEFBTEQsQ0FBaUQsaUJBQWlCLEdBS2pFOztBQUVEO0lBQWtELHdEQUEyQztJQUN6RixzQ0FBWSxJQUE0QztRQUF4RCxZQUNJLGlCQUFPLFNBRVY7UUFERyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDOUIsQ0FBQztJQUNMLG1DQUFDO0FBQUQsQ0FBQyxBQUxELENBQWtELGtCQUFrQixHQUtuRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VSZXF1ZXN0LCBCYXNlUmVzcG9uc2UsIFNlYXJjaEJhc2VSZXF1ZXN0LCBTZWFyY2hCYXNlUmVzcG9uc2UsIE1lbnVUYWIgfSBmcm9tICcuLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBGaWxlVmlld01vZGVsIH0gZnJvbSAnLi4vc2hhcmVkL2ZpbGUvZmlsZS5tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclZpZXdNb2RlbCB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgZnVsbE5hbWU6IHN0cmluZztcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgbGFzdE5hbWU6IHN0cmluZztcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbD86IHN0cmluZztcclxuICAgIGltYWdlPzogRmlsZVZpZXdNb2RlbDtcclxuICAgIHBob25lPzogc3RyaW5nO1xyXG4gICAgZGF0ZU9mQmlydGg/OiBEYXRlO1xyXG4gICAgZXh0ZXJuYWxJbmZvPzogYW55O1xyXG4gICAgc3lzdGVtPzogU3lzdGVtVmlld01vZGVsID0gbmV3IFN5c3RlbVZpZXdNb2RlbCgpO1xyXG4gICAgcm9sZXM/OiBSb2xlVmlld01vZGVsW10gPSBbXTtcclxuICAgIHBlcm1pc3Npb25zPzogUGVybWlzc2lvblZpZXdNb2RlbFtdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxVc2VyVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblZpZXdNb2RlbCB7XHJcbiAgICB1c2VyTmFtZTogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIHNlY3JldD86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1WaWV3TW9kZWwge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8U3lzdGVtVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb2xlVmlld01vZGVsIHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBrZXk/OiBzdHJpbmc7XHJcbiAgICBwZXJtaXNzaW9ucz86IFBlcm1pc3Npb25WaWV3TW9kZWxbXSA9IFtdO1xyXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxQZXJtaXNzaW9uVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uVmlld01vZGVsIHtcclxuICAgIHBhZ2U/OiBQYWdlVmlld01vZGVsID0gbmV3IFBhZ2VWaWV3TW9kZWwoKTtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBrZXk/OiBzdHJpbmc7XHJcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcclxuICAgIGFjdGl2aXRpZXM/OiBBY3Rpdml0eVZpZXdNb2RlbFtdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxQZXJtaXNzaW9uVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlVmlld01vZGVsIHtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBzdGF0ZT86IHN0cmluZztcclxuICAgIHBhcmVudD86IFBhZ2VWaWV3TW9kZWw7XHJcbiAgICBpY29uPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UGFnZVZpZXdNb2RlbD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlWaWV3TW9kZWwge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8UGFnZVZpZXdNb2RlbD4pIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Mb2dpblJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdDxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgICBwYXlsb2FkOiBBdXRoZW50aWNhdGlvblZpZXdNb2RlbCA9IG5ldyBBdXRoZW50aWNhdGlvblZpZXdNb2RlbCgpO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25Mb2dpblJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlPEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICB1c2VyPzogVXNlclZpZXdNb2RlbDtcclxuICAgIG1lbnVUYWJzPzogTWVudVRhYltdID0gW107XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIHJlZnJlc2hUb2tlbj86IHN0cmluZztcclxuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdDxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25DcmVhdGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25VcGRhdGVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlPEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvblVwZGF0ZVJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uUmV0cmlldmVSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0PEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBpZHM6IHN0cmluZ1tdO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uRGVsZXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0IGV4dGVuZHMgU2VhcmNoQmFzZVJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25TZWFyY2hSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2UgZXh0ZW5kcyBTZWFyY2hCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uU2VhcmNoUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59Il19