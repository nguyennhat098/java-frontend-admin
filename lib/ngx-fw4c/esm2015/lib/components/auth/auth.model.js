/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/auth/auth.model.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse } from '../shared/models/base.model';
export class UserViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.system = new SystemViewModel();
        this.roles = [];
        this.permissions = [];
        Object.assign(this, init);
    }
}
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
export class AuthenticationViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class SystemViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    SystemViewModel.prototype.name;
    /** @type {?} */
    SystemViewModel.prototype.key;
    /** @type {?} */
    SystemViewModel.prototype.enabled;
}
export class RoleViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.permissions = [];
        Object.assign(this, init);
    }
}
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
export class PermissionViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        this.page = new PageViewModel();
        this.activities = [];
        Object.assign(this, init);
    }
}
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
export class PageViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
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
export class ActivityViewModel {
    /**
     * @param {?=} init
     */
    constructor(init) {
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    ActivityViewModel.prototype.name;
    /** @type {?} */
    ActivityViewModel.prototype.key;
    /** @type {?} */
    ActivityViewModel.prototype.enabled;
}
export class AuthenticationLoginRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        this.payload = new AuthenticationViewModel();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationLoginRequest.prototype.token;
    /** @type {?} */
    AuthenticationLoginRequest.prototype.payload;
}
export class AuthenticationLoginResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        this.menuTabs = [];
        Object.assign(this, init);
    }
}
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
export class AuthenticationCreateRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationCreateResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationUpdateRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationUpdateResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationRetrieveRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationRetrieveResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationDeleteRequest extends BaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
if (false) {
    /** @type {?} */
    AuthenticationDeleteRequest.prototype.ids;
}
export class AuthenticationDeleteResponse extends BaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationSearchRequest extends SearchBaseRequest {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
export class AuthenticationSearchResponse extends SearchBaseResponse {
    /**
     * @param {?=} init
     */
    constructor(init) {
        super();
        Object.assign(this, init);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYXV0aC9hdXRoLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQVcsTUFBTSw2QkFBNkIsQ0FBQztBQUd4SCxNQUFNLE9BQU8sYUFBYTs7OztJQWN0QixZQUFZLElBQTZCO1FBSHpDLFdBQU0sR0FBcUIsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNqRCxVQUFLLEdBQXFCLEVBQUUsQ0FBQztRQUM3QixnQkFBVyxHQUEyQixFQUFFLENBQUM7UUFFckMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFoQkcsMkJBQVc7O0lBQ1gsaUNBQWlCOztJQUNqQixrQ0FBa0I7O0lBQ2xCLGlDQUFpQjs7SUFDakIsaUNBQWlCOztJQUNqQiw4QkFBZTs7SUFDZiw4QkFBc0I7O0lBQ3RCLDhCQUFlOztJQUNmLG9DQUFtQjs7SUFDbkIscUNBQW1COztJQUNuQiwrQkFBaUQ7O0lBQ2pELDhCQUE2Qjs7SUFDN0Isb0NBQXlDOztBQU03QyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBS2hDLFlBQVksSUFBdUM7UUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKOzs7SUFQRywyQ0FBaUI7O0lBQ2pCLDJDQUFpQjs7SUFDakIsc0NBQWE7O0lBQ2IseUNBQWdCOztBQU1wQixNQUFNLE9BQU8sZUFBZTs7OztJQUl4QixZQUFZLElBQStCO1FBQ3ZDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTkcsK0JBQWM7O0lBQ2QsOEJBQWE7O0lBQ2Is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QTZDO1FBQ3JELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLDhCQUErQixTQUFRLFlBQXFDOzs7O0lBQ3JGLFlBQVksSUFBOEM7UUFDdEQsS0FBSyxFQUFFLENBQUM7UUFDUixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0o7QUFFRCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsV0FBb0M7Ozs7SUFFakYsWUFBWSxJQUEyQztRQUNuRCxLQUFLLEVBQUUsQ0FBQztRQUNSLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDSjs7O0lBTEcsMENBQWM7O0FBT2xCLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxZQUFxQzs7OztJQUNuRixZQUFZLElBQTRDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLGlCQUFpQjs7OztJQUM5RCxZQUFZLElBQTJDO1FBQ25ELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKO0FBRUQsTUFBTSxPQUFPLDRCQUE2QixTQUFRLGtCQUEyQzs7OztJQUN6RixZQUFZLElBQTRDO1FBQ3BELEtBQUssRUFBRSxDQUFDO1FBQ1IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVJlcXVlc3QsIEJhc2VSZXNwb25zZSwgU2VhcmNoQmFzZVJlcXVlc3QsIFNlYXJjaEJhc2VSZXNwb25zZSwgTWVudVRhYiB9IGZyb20gJy4uL3NoYXJlZC9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwgfSBmcm9tICcuLi9zaGFyZWQvZmlsZS9maWxlLm1vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyVmlld01vZGVsIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgdXNlck5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsPzogc3RyaW5nO1xyXG4gICAgaW1hZ2U/OiBGaWxlVmlld01vZGVsO1xyXG4gICAgcGhvbmU/OiBzdHJpbmc7XHJcbiAgICBkYXRlT2ZCaXJ0aD86IERhdGU7XHJcbiAgICBleHRlcm5hbEluZm8/OiBhbnk7XHJcbiAgICBzeXN0ZW0/OiBTeXN0ZW1WaWV3TW9kZWwgPSBuZXcgU3lzdGVtVmlld01vZGVsKCk7XHJcbiAgICByb2xlcz86IFJvbGVWaWV3TW9kZWxbXSA9IFtdO1xyXG4gICAgcGVybWlzc2lvbnM/OiBQZXJtaXNzaW9uVmlld01vZGVsW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFVzZXJWaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVmlld01vZGVsIHtcclxuICAgIHVzZXJOYW1lOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgc2VjcmV0Pzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFN5c3RlbVZpZXdNb2RlbCB7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxTeXN0ZW1WaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvbGVWaWV3TW9kZWwge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIHBlcm1pc3Npb25zPzogUGVybWlzc2lvblZpZXdNb2RlbFtdID0gW107XHJcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFBlcm1pc3Npb25WaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25WaWV3TW9kZWwge1xyXG4gICAgcGFnZT86IFBhZ2VWaWV3TW9kZWwgPSBuZXcgUGFnZVZpZXdNb2RlbCgpO1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIGtleT86IHN0cmluZztcclxuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xyXG4gICAgYWN0aXZpdGllcz86IEFjdGl2aXR5Vmlld01vZGVsW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPFBlcm1pc3Npb25WaWV3TW9kZWw+KSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VWaWV3TW9kZWwge1xyXG4gICAgbmFtZT86IHN0cmluZztcclxuICAgIHN0YXRlPzogc3RyaW5nO1xyXG4gICAgcGFyZW50PzogUGFnZVZpZXdNb2RlbDtcclxuICAgIGljb24/OiBzdHJpbmc7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxQYWdlVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpdml0eVZpZXdNb2RlbCB7XHJcbiAgICBuYW1lPzogc3RyaW5nO1xyXG4gICAga2V5Pzogc3RyaW5nO1xyXG4gICAgZW5hYmxlZD86IGJvb2xlYW47XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxQYWdlVmlld01vZGVsPikge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0PEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICB0b2tlbj86IHN0cmluZztcclxuICAgIHBheWxvYWQ6IEF1dGhlbnRpY2F0aW9uVmlld01vZGVsID0gbmV3IEF1dGhlbnRpY2F0aW9uVmlld01vZGVsKCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvbkxvZ2luUmVxdWVzdD4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIHVzZXI/OiBVc2VyVmlld01vZGVsO1xyXG4gICAgbWVudVRhYnM/OiBNZW51VGFiW10gPSBbXTtcclxuICAgIHRva2VuPzogc3RyaW5nO1xyXG4gICAgcmVmcmVzaFRva2VuPzogc3RyaW5nO1xyXG4gICAgZXJyb3JNZXNzYWdlPzogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlPikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ3JlYXRlUmVxdWVzdCBleHRlbmRzIEJhc2VSZXF1ZXN0PEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvbkNyZWF0ZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25DcmVhdGVSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25DcmVhdGVSZXNwb25zZT4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdDxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25VcGRhdGVSZXF1ZXN0Pikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2UgZXh0ZW5kcyBCYXNlUmVzcG9uc2U8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPEF1dGhlbnRpY2F0aW9uVXBkYXRlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25SZXRyaWV2ZVJlcXVlc3QgZXh0ZW5kcyBCYXNlUmVxdWVzdDxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25SZXRyaWV2ZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25SZXRyaWV2ZVJlc3BvbnNlIGV4dGVuZHMgQmFzZVJlc3BvbnNlPEF1dGhlbnRpY2F0aW9uVmlld01vZGVsPiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvblJldHJpZXZlUmVzcG9uc2U+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25EZWxldGVSZXF1ZXN0IGV4dGVuZHMgQmFzZVJlcXVlc3Q8QXV0aGVudGljYXRpb25WaWV3TW9kZWw+IHtcclxuICAgIGlkczogc3RyaW5nW107XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvbkRlbGV0ZVJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25EZWxldGVSZXNwb25zZSBleHRlbmRzIEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25EZWxldGVSZXNwb25zZT4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvblNlYXJjaFJlcXVlc3QgZXh0ZW5kcyBTZWFyY2hCYXNlUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0PzogUGFydGlhbDxBdXRoZW50aWNhdGlvblNlYXJjaFJlcXVlc3Q+KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluaXQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZSBleHRlbmRzIFNlYXJjaEJhc2VSZXNwb25zZTxBdXRoZW50aWNhdGlvblZpZXdNb2RlbD4ge1xyXG4gICAgY29uc3RydWN0b3IoaW5pdD86IFBhcnRpYWw8QXV0aGVudGljYXRpb25TZWFyY2hSZXNwb25zZT4pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgaW5pdCk7XHJcbiAgICB9XHJcbn0iXX0=