import { BaseTemplate } from '../models';
import { BsModalRef } from 'ngx-bootstrap';
export declare class LoadingViewModel {
    threshold: number;
    timeout: number;
    template?: string;
    loadingText?: string;
    constructor(init?: Partial<LoadingViewModel>);
}
export declare class NotificationViewModel {
    center?: boolean;
    title?: string;
    customSize?: string;
    ignoreBackdropClick?: boolean;
    message?: string;
    btnTitle?: string;
    callback?: (close: () => any) => any;
    autoClose?: boolean;
    buttons?: ItemViewModel[];
    hideCancelBtn?: boolean;
    constructor(init?: Partial<NotificationViewModel>);
}
export declare class ConfirmViewModel {
    center?: boolean;
    title?: string;
    icon?: string;
    customSize?: string;
    ignoreBackdropClick?: boolean;
    message?: string;
    isDeleted?: boolean;
    btnAcceptTitle?: string;
    btnCancelTitle?: string;
    autoClose?: boolean;
    buttons?: ItemViewModel[];
    hideCancelBtn?: boolean;
    hideAcceptBtn?: boolean;
    acceptCallback?: (close: () => any) => any;
    cancelCallback?: (close: () => any) => any;
    constructor(init?: Partial<ConfirmViewModel>);
}
export declare class ItemViewModel {
    title?: string;
    icon?: string;
    customClass?: string;
    lazyload?: boolean;
    callback?: (modalRef: BsModalRef, e: any) => void;
    constructor(init?: Partial<ItemViewModel>);
}
export declare class TemplateViewModel extends BaseTemplate {
    center?: boolean;
    title?: string;
    mode?: string;
    customSize?: string;
    ignoreBackdropClick?: boolean;
    request?: any;
    icon?: string;
    btnAcceptTitle?: string;
    btnCancelTitle?: string;
    autoClose?: boolean;
    buttons?: ItemViewModel[];
    hideCancelBtn?: boolean;
    hideAcceptBtn?: boolean;
    acceptCallback?: (response?: any, close?: () => any, provider?: any) => any;
    cancelCallback?: (response?: any, close?: () => any, provider?: any) => any;
    constructor(init?: Partial<TemplateViewModel>);
}
