/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/modals/modal.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { NotificationComponent } from './components/notification/notification.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { TemplateComponent } from './components/template/template.component';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/modal";
import * as i2 from "ng4-loading-spinner";
export class ModalService {
    /**
     * @param {?} _bsModalService
     * @param {?} Ng4LoadingSpinnerService
     */
    constructor(_bsModalService, Ng4LoadingSpinnerService) {
        this._bsModalService = _bsModalService;
        this.Ng4LoadingSpinnerService = Ng4LoadingSpinnerService;
    }
    /**
     * @return {?}
     */
    showLoading() {
        this.Ng4LoadingSpinnerService.show();
    }
    /**
     * @return {?}
     */
    hideLoading() {
        this.Ng4LoadingSpinnerService.hide();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showNotificationDialog(data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(NotificationComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showConfirmDialog(data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(ConfirmComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    showTemplateDialog(data) {
        /** @type {?} */
        var customCss = data.customSize + (data.center ? ' modal-dialog-centered modal-xlg' : '');
        this._modalInstance = this._bsModalService.show(TemplateComponent, {
            backdrop: 'static',
            class: customCss,
            keyboard: false,
            ignoreBackdropClick: data.ignoreBackdropClick,
            animated: true
        });
        this._modalInstance.content.data = data;
    }
}
ModalService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ModalService.ctorParameters = () => [
    { type: BsModalService },
    { type: Ng4LoadingSpinnerService }
];
/** @nocollapse */ ModalService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ModalService_Factory() { return new ModalService(i0.ɵɵinject(i1.BsModalService), i0.ɵɵinject(i2.Ng4LoadingSpinnerService)); }, token: ModalService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype._modalInstance;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype._bsModalService;
    /**
     * @type {?}
     * @private
     */
    ModalService.prototype.Ng4LoadingSpinnerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL21vZGFscy9tb2RhbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBRTNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRy9ELE1BQU0sT0FBTyxZQUFZOzs7OztJQUV2QixZQUNVLGVBQStCLEVBQy9CLHdCQUFrRDtRQURsRCxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtJQUN4RCxDQUFDOzs7O0lBRUUsV0FBVztRQUNoQixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVNLFdBQVc7UUFDaEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU0sc0JBQXNCLENBQUMsSUFBMkI7O1lBQ25ELFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN6RixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ3JFLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSxTQUFTO1lBQ2hCLFFBQVEsRUFBRSxLQUFLO1lBQ2YsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUM3QyxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDMUMsQ0FBQzs7Ozs7SUFFTSxpQkFBaUIsQ0FBQyxJQUFzQjs7WUFDekMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pGLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEUsUUFBUSxFQUFFLFFBQVE7WUFDbEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFLEtBQUs7WUFDZixtQkFBbUIsRUFBRSxJQUFJLENBQUMsbUJBQW1CO1lBQzdDLFFBQVEsRUFBRSxJQUFJO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUMxQyxDQUFDOzs7OztJQUVNLGtCQUFrQixDQUFDLElBQXVCOztZQUMzQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUNqRSxRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsU0FBUztZQUNoQixRQUFRLEVBQUUsS0FBSztZQUNmLG1CQUFtQixFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDN0MsUUFBUSxFQUFFLElBQUk7U0FDZixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzFDLENBQUM7OztZQWxERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBUHpCLGNBQWM7WUFLZCx3QkFBd0I7Ozs7Ozs7O0lBSS9CLHNDQUFtQzs7Ozs7SUFFakMsdUNBQXVDOzs7OztJQUN2QyxnREFBMEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlLCBCc01vZGFsUmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcCc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvblZpZXdNb2RlbCwgVGVtcGxhdGVWaWV3TW9kZWwsIENvbmZpcm1WaWV3TW9kZWwgfSBmcm9tICcuL21vZGFsLm1vZGVsJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29uZmlybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGVtcGxhdGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGxhdGUvdGVtcGxhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmc0TG9hZGluZ1NwaW5uZXJTZXJ2aWNlIH0gZnJvbSAnbmc0LWxvYWRpbmctc3Bpbm5lcic7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9tb2RhbEluc3RhbmNlOiBCc01vZGFsUmVmO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfYnNNb2RhbFNlcnZpY2U6IEJzTW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBOZzRMb2FkaW5nU3Bpbm5lclNlcnZpY2U6IE5nNExvYWRpbmdTcGlubmVyU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIHB1YmxpYyBzaG93TG9hZGluZygpOiB2b2lkIHtcclxuICAgIHRoaXMuTmc0TG9hZGluZ1NwaW5uZXJTZXJ2aWNlLnNob3coKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoaWRlTG9hZGluZygpOiB2b2lkIHtcclxuICAgIHRoaXMuTmc0TG9hZGluZ1NwaW5uZXJTZXJ2aWNlLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93Tm90aWZpY2F0aW9uRGlhbG9nKGRhdGE6IE5vdGlmaWNhdGlvblZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgdmFyIGN1c3RvbUNzcyA9IGRhdGEuY3VzdG9tU2l6ZSArIChkYXRhLmNlbnRlciA/ICcgbW9kYWwtZGlhbG9nLWNlbnRlcmVkIG1vZGFsLXhsZycgOiAnJyk7XHJcbiAgICB0aGlzLl9tb2RhbEluc3RhbmNlID0gdGhpcy5fYnNNb2RhbFNlcnZpY2Uuc2hvdyhOb3RpZmljYXRpb25Db21wb25lbnQsIHtcclxuICAgICAgYmFja2Ryb3A6ICdzdGF0aWMnLFxyXG4gICAgICBjbGFzczogY3VzdG9tQ3NzLFxyXG4gICAgICBrZXlib2FyZDogZmFsc2UsXHJcbiAgICAgIGlnbm9yZUJhY2tkcm9wQ2xpY2s6IGRhdGEuaWdub3JlQmFja2Ryb3BDbGljayxcclxuICAgICAgYW5pbWF0ZWQ6IHRydWVcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fbW9kYWxJbnN0YW5jZS5jb250ZW50LmRhdGEgPSBkYXRhO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNob3dDb25maXJtRGlhbG9nKGRhdGE6IENvbmZpcm1WaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIHZhciBjdXN0b21Dc3MgPSBkYXRhLmN1c3RvbVNpemUgKyAoZGF0YS5jZW50ZXIgPyAnIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCBtb2RhbC14bGcnIDogJycpO1xyXG4gICAgdGhpcy5fbW9kYWxJbnN0YW5jZSA9IHRoaXMuX2JzTW9kYWxTZXJ2aWNlLnNob3coQ29uZmlybUNvbXBvbmVudCwge1xyXG4gICAgICBiYWNrZHJvcDogJ3N0YXRpYycsXHJcbiAgICAgIGNsYXNzOiBjdXN0b21Dc3MsXHJcbiAgICAgIGtleWJvYXJkOiBmYWxzZSxcclxuICAgICAgaWdub3JlQmFja2Ryb3BDbGljazogZGF0YS5pZ25vcmVCYWNrZHJvcENsaWNrLFxyXG4gICAgICBhbmltYXRlZDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9tb2RhbEluc3RhbmNlLmNvbnRlbnQuZGF0YSA9IGRhdGE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2hvd1RlbXBsYXRlRGlhbG9nKGRhdGE6IFRlbXBsYXRlVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICB2YXIgY3VzdG9tQ3NzID0gZGF0YS5jdXN0b21TaXplICsgKGRhdGEuY2VudGVyID8gJyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwteGxnJyA6ICcnKTtcclxuICAgIHRoaXMuX21vZGFsSW5zdGFuY2UgPSB0aGlzLl9ic01vZGFsU2VydmljZS5zaG93KFRlbXBsYXRlQ29tcG9uZW50LCB7XHJcbiAgICAgIGJhY2tkcm9wOiAnc3RhdGljJyxcclxuICAgICAgY2xhc3M6IGN1c3RvbUNzcyxcclxuICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxyXG4gICAgICBpZ25vcmVCYWNrZHJvcENsaWNrOiBkYXRhLmlnbm9yZUJhY2tkcm9wQ2xpY2ssXHJcbiAgICAgIGFuaW1hdGVkOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHRoaXMuX21vZGFsSW5zdGFuY2UuY29udGVudC5kYXRhID0gZGF0YTtcclxuICB9XHJcbn1cclxuIl19