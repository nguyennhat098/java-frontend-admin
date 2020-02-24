import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse, MenuTab } from '../shared/models/base.model';
import { FileViewModel } from '../shared/file/file.model';
export declare class UserViewModel {
    id: string;
    fullName: string;
    firstName: string;
    lastName: string;
    userName: string;
    email?: string;
    image?: FileViewModel;
    phone?: string;
    dateOfBirth?: Date;
    externalInfo?: any;
    system?: SystemViewModel;
    roles?: RoleViewModel[];
    permissions?: PermissionViewModel[];
    constructor(init?: Partial<UserViewModel>);
}
export declare class AuthenticationViewModel {
    userName: string;
    password: string;
    key?: string;
    secret?: string;
    constructor(init?: Partial<AuthenticationViewModel>);
}
export declare class SystemViewModel {
    name?: string;
    key?: string;
    enabled?: boolean;
    constructor(init?: Partial<SystemViewModel>);
}
export declare class RoleViewModel {
    name?: string;
    key?: string;
    permissions?: PermissionViewModel[];
    enabled?: boolean;
    constructor(init?: Partial<PermissionViewModel>);
}
export declare class PermissionViewModel {
    page?: PageViewModel;
    name?: string;
    key?: string;
    enabled?: boolean;
    activities?: ActivityViewModel[];
    constructor(init?: Partial<PermissionViewModel>);
}
export declare class PageViewModel {
    name?: string;
    state?: string;
    parent?: PageViewModel;
    icon?: string;
    constructor(init?: Partial<PageViewModel>);
}
export declare class ActivityViewModel {
    name?: string;
    key?: string;
    enabled?: boolean;
    constructor(init?: Partial<PageViewModel>);
}
export declare class AuthenticationLoginRequest extends BaseRequest<AuthenticationViewModel> {
    token?: string;
    payload: AuthenticationViewModel;
    constructor(init?: Partial<AuthenticationLoginRequest>);
}
export declare class AuthenticationLoginResponse extends BaseResponse<AuthenticationViewModel> {
    user?: UserViewModel;
    menuTabs?: MenuTab[];
    token?: string;
    refreshToken?: string;
    errorMessage?: string;
    constructor(init?: Partial<AuthenticationLoginResponse>);
}
export declare class AuthenticationCreateRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationCreateRequest>);
}
export declare class AuthenticationCreateResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationCreateResponse>);
}
export declare class AuthenticationUpdateRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationUpdateRequest>);
}
export declare class AuthenticationUpdateResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationUpdateResponse>);
}
export declare class AuthenticationRetrieveRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationRetrieveRequest>);
}
export declare class AuthenticationRetrieveResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationRetrieveResponse>);
}
export declare class AuthenticationDeleteRequest extends BaseRequest<AuthenticationViewModel> {
    ids: string[];
    constructor(init?: Partial<AuthenticationDeleteRequest>);
}
export declare class AuthenticationDeleteResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationDeleteResponse>);
}
export declare class AuthenticationSearchRequest extends SearchBaseRequest {
    constructor(init?: Partial<AuthenticationSearchRequest>);
}
export declare class AuthenticationSearchResponse extends SearchBaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationSearchResponse>);
}
