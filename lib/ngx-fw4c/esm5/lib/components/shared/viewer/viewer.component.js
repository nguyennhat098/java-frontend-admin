/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/viewer/viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FileResponse } from '../file/file.model';
import { ModalService } from '../modals/modal.service';
import { TemplateViewModel } from '../modals/modal.model';
import { GalleryComponent } from './gallery/gallery.component';
import { DataService } from '../services/data.service';
import { of } from 'rxjs';
import { AuthenticationService } from '../../auth/auth.service';
var ViewerComponent = /** @class */ (function () {
    function ViewerComponent(_modalService, _dataService, authenticationService) {
        this._modalService = _modalService;
        this._dataService = _dataService;
        this.authenticationService = authenticationService;
        this.isLoading = false;
        this.images = [];
        this.useLibrary = true;
        this.headers = ['#', 'Tên', 'Kích thước', 'Ngày tạo'];
        this.componentTitle = 'Thêm ảnh';
        this.uploadDialogTitle = 'Chỉnh sửa ảnh';
        this.uploadDialogIcon = 'fa fa-twitter';
        this.uploadTitle = 'Tải lên';
        this.uploadIcon = 'fa fa-exchange';
        this.openGalleryTitle = 'Chọn từ thư viện';
        this.openGalleryIcon = 'fa fa-google-wallet';
        this.model = [];
        this.zoomPrimaryImage = true;
        this.editable = true;
        this.cutRatio = 1 / 1;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.onOpenUserMediaGallery = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ViewerComponent.prototype.addImage = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        this.images = this.model;
        if (!this.images)
            this.images = [];
        this.images.push({
            src: file.src,
            name: file.name,
            size: file.size,
            createdDate: new Date(),
            lastModifiedDate: new Date(),
            createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
            lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
        });
        this.modelChange.emit(this.images);
    };
    /**
     * @param {?} loading
     * @return {?}
     */
    ViewerComponent.prototype.setLoading = /**
     * @param {?} loading
     * @return {?}
     */
    function (loading) {
        this.isLoading = loading;
    };
    /**
     * @return {?}
     */
    ViewerComponent.prototype.openUserMediaGallery = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.onOpenUserMediaGallery.emit();
        /** @type {?} */
        var items = (/** @type {?} */ (this._dataService.cloneItems(this.images)));
        if (!items)
            items = [];
        this._modalService.showTemplateDialog(new TemplateViewModel({
            template: GalleryComponent,
            validationKey: 'GalleryComponent',
            title: this.openGalleryTitle,
            icon: this.openGalleryIcon,
            customSize: 'modal-lg',
            data: {
                headers: this.headers,
                items: !this.useLibrary ? (/**
                 * @return {?}
                 */
                function () {
                    return of(new FileResponse({
                        code: '200',
                        status: true,
                        totalRecords: 0,
                        items: []
                    }));
                }) : (/**
                 * @return {?}
                 */
                function () {
                    if (!_this.galleryItems) {
                        return of(new FileResponse({
                            code: '200',
                            status: true,
                            totalRecords: items.length,
                            items: items
                        }));
                    }
                    else {
                        return _this.galleryItems;
                    }
                })
            },
            acceptCallback: (/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                response.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    _this.images.push(item);
                }));
                _this.modelChange.emit(_this.images);
            })
        }));
    };
    ViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-viewer',
                    template: "<label *ngIf=\"title\" class=\"title-gallery\">{{title}}</label>\r\n<div class=\"form-group image-gallery-wrapper\">\r\n  <div *ngIf=\"!model || model.length === 0; else main\" class=\"d-flex\">\r\n    <div class=\"add-image-wrapper\">\r\n      <button class=\"btn btn-add-image\">\r\n        <i class=\"plus fa fa-plus\"></i>\r\n        <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n        <ul class=\"add-image-menu\">\r\n          <li>\r\n            <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n              (checkedLoading)=\"setLoading($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n              [resizeToWidth]=\"resizeToWidth\" class=\"katana-upload\" [cropImage]=\"true\" (fileUploaded)=\"addImage($event)\"\r\n              [fileType]=\"'image'\" [cutRatio]=\"cutRatio\">\r\n              <i class=\"{{uploadIcon}}\"></i>\r\n              {{uploadTitle}}\r\n            </katana-file-uploader>\r\n          </li>\r\n          <li *ngIf=\"useLibrary\">\r\n            <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n              <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n              {{openGalleryTitle}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n          (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n          [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n          (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n          <span class=\"upload-shadow\"></span>\r\n        </katana-file-uploader>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #main>\r\n    <div class=\"d-flex\">\r\n      <div ngxDroppable=\"imagesDropZone\" [model]=\"model\" class=\"ngx-dnd-container d-flex\"\r\n        [ngClass]=\"{'big-image': zoomPrimaryImage}\">\r\n        <div class=\"ngx-dnd-item mr-2\" [model]=\"image\" *ngFor=\"let image of model; let i = index\"\r\n          ngxDraggable=\"imagesDropZone\">\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            [cutRatio]=\"cutRatio\" [resizeToWidth]=\"resizeToWidth\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            *ngIf=\"i === 0\" [size]=\"zoomPrimaryImage ? 'medium' : 'small'\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\" [resizeToWidth]=\"resizeToWidth\"\r\n            [cutRatio]=\"cutRatio\" [maintainAspectRatio]=\"maintainAspectRatio\" *ngIf=\"i > 0\" size=\"small\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n        </div>\r\n      </div>\r\n      <div class=\"add-image-wrapper\">\r\n        <button class=\"btn btn-add-image\">\r\n          <i class=\"plus fa fa-plus\"></i>\r\n          <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n          <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n          <ul class=\"add-image-menu\">\r\n            <li>\r\n              <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n                (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n                [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n                (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n                <i class=\"{{uploadIcon}}\"></i>\r\n                {{uploadTitle}}\r\n              </katana-file-uploader>\r\n            </li>\r\n            <li *ngIf=\"useLibrary\">\r\n              <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n                <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n                {{openGalleryTitle}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n            [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload \" [cropImage]=\"true\"\r\n            (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n            <span class=\"upload-shadow\"></span>\r\n          </katana-file-uploader>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ViewerComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: DataService },
        { type: AuthenticationService }
    ]; };
    ViewerComponent.propDecorators = {
        headers: [{ type: Input }],
        multiple: [{ type: Input }],
        galleryItems: [{ type: Input }],
        componentTitle: [{ type: Input }],
        uploadDialogTitle: [{ type: Input }],
        uploadDialogIcon: [{ type: Input }],
        uploadTitle: [{ type: Input }],
        uploadIcon: [{ type: Input }],
        openGalleryTitle: [{ type: Input }],
        openGalleryIcon: [{ type: Input }],
        title: [{ type: Input }],
        model: [{ type: Input }],
        zoomPrimaryImage: [{ type: Input }],
        editable: [{ type: Input }],
        cutRatio: [{ type: Input }],
        resizeToWidth: [{ type: Input }],
        maintainAspectRatio: [{ type: Input }],
        validationName: [{ type: Input }],
        validationScope: [{ type: Input }],
        emitNullOnDestroy: [{ type: Input }],
        modelChange: [{ type: Output }],
        onOpenUserMediaGallery: [{ type: Output }]
    };
    return ViewerComponent;
}());
export { ViewerComponent };
if (false) {
    /** @type {?} */
    ViewerComponent.prototype.isLoading;
    /** @type {?} */
    ViewerComponent.prototype.images;
    /** @type {?} */
    ViewerComponent.prototype.useLibrary;
    /** @type {?} */
    ViewerComponent.prototype.headers;
    /** @type {?} */
    ViewerComponent.prototype.multiple;
    /** @type {?} */
    ViewerComponent.prototype.galleryItems;
    /** @type {?} */
    ViewerComponent.prototype.componentTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadDialogTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadDialogIcon;
    /** @type {?} */
    ViewerComponent.prototype.uploadTitle;
    /** @type {?} */
    ViewerComponent.prototype.uploadIcon;
    /** @type {?} */
    ViewerComponent.prototype.openGalleryTitle;
    /** @type {?} */
    ViewerComponent.prototype.openGalleryIcon;
    /** @type {?} */
    ViewerComponent.prototype.title;
    /** @type {?} */
    ViewerComponent.prototype.model;
    /** @type {?} */
    ViewerComponent.prototype.zoomPrimaryImage;
    /** @type {?} */
    ViewerComponent.prototype.editable;
    /** @type {?} */
    ViewerComponent.prototype.cutRatio;
    /** @type {?} */
    ViewerComponent.prototype.resizeToWidth;
    /** @type {?} */
    ViewerComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    ViewerComponent.prototype.validationName;
    /** @type {?} */
    ViewerComponent.prototype.validationScope;
    /** @type {?} */
    ViewerComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    ViewerComponent.prototype.modelChange;
    /** @type {?} */
    ViewerComponent.prototype.onOpenUserMediaGallery;
    /**
     * @type {?}
     * @private
     */
    ViewerComponent.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    ViewerComponent.prototype._dataService;
    /**
     * @type {?}
     * @protected
     */
    ViewerComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLFlBQVksRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVoRTtJQWlDRSx5QkFDVSxhQUEyQixFQUMzQixZQUF5QixFQUN2QixxQkFBNEM7UUFGOUMsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDdkIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQTdCakQsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMzQixXQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUM3QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQ2xCLFlBQU8sR0FBYSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBRzNELG1CQUFjLEdBQVcsVUFBVSxDQUFDO1FBQ3BDLHNCQUFpQixHQUFXLGVBQWUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBVyxlQUFlLENB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Szs4QkFDTCxNQUFNO3lDQUNOLE1BQU07O0lBd0VULHNCQUFDO0NBQUEsQUF2R0QsSUF1R0M7U0FqR1ksZUFBZTs7O0lBQzFCLG9DQUFrQzs7SUFDbEMsaUNBQW9DOztJQUNwQyxxQ0FBa0M7O0lBQ2xDLGtDQUEyRTs7SUFDM0UsbUNBQWtDOztJQUNsQyx1Q0FBaUY7O0lBQ2pGLHlDQUFvRDs7SUFDcEQsNENBQTREOztJQUM1RCwyQ0FBMkQ7O0lBQzNELHNDQUFnRDs7SUFDaEQscUNBQXNEOztJQUN0RCwyQ0FBOEQ7O0lBQzlELDBDQUFnRTs7SUFDaEUsZ0NBQThCOztJQUM5QixnQ0FBa0M7O0lBQ2xDLDJDQUFpRDs7SUFDakQsbUNBQXlDOztJQUN6QyxtQ0FBeUM7O0lBQ3pDLHdDQUFzQzs7SUFDdEMsOENBQTZDOztJQUM3Qyx5Q0FBZ0M7O0lBQ2hDLDBDQUFpQzs7SUFDakMsNENBQTRDOztJQUM1QyxzQ0FBdUU7O0lBQ3ZFLGlEQUFpRjs7Ozs7SUFHL0Usd0NBQW1DOzs7OztJQUNuQyx1Q0FBaUM7Ozs7O0lBQ2pDLGdEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCwgRmlsZVJlc3BvbnNlLCBGaWxlUmVxdWVzdCB9IGZyb20gJy4uL2ZpbGUvZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFscy9tb2RhbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVGVtcGxhdGVWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwubW9kZWwnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS12aWV3ZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi92aWV3ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHVibGljIGltYWdlczogRmlsZVZpZXdNb2RlbFtdID0gW107XHJcbiAgcHVibGljIHVzZUxpYnJhcnk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJzOiBzdHJpbmdbXSA9IFsnIycsICdUw6puJywgJ0vDrWNoIHRoxrDhu5tjJywgJ05nw6B5IHThuqFvJ107XHJcbiAgQElucHV0KCkgcHVibGljIG11bHRpcGxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBnYWxsZXJ5SXRlbXM6IChyZXF1ZXN0OiBGaWxlUmVxdWVzdCkgPT4gT2JzZXJ2YWJsZTxGaWxlUmVzcG9uc2U+O1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjb21wb25lbnRUaXRsZTogc3RyaW5nID0gJ1Row6ptIOG6o25oJztcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkRGlhbG9nVGl0bGU6IHN0cmluZyA9ICdDaOG7iW5oIHPhu61hIOG6o25oJztcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkRGlhbG9nSWNvbjogc3RyaW5nID0gJ2ZhIGZhLXR3aXR0ZXInO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRUaXRsZTogc3RyaW5nID0gJ1ThuqNpIGzDqm4nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB1cGxvYWRJY29uOiBzdHJpbmcgPSAnZmEgZmEtZXhjaGFuZ2UnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBvcGVuR2FsbGVyeVRpdGxlOiBzdHJpbmcgPSAnQ2jhu41uIHThu6sgdGjGsCB2aeG7h24nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBvcGVuR2FsbGVyeUljb246IHN0cmluZyA9ICdmYSBmYS1nb29nbGUtd2FsbGV0JztcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IGFueVtdID0gW107XHJcbiAgQElucHV0KCkgcHVibGljIHpvb21QcmltYXJ5SW1hZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBlZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGN1dFJhdGlvOiBudW1iZXIgPSAxIC8gMTtcclxuICBASW5wdXQoKSBwdWJsaWMgcmVzaXplVG9XaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYWludGFpbkFzcGVjdFJhdGlvOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgb25PcGVuVXNlck1lZGlhR2FsbGVyeTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX21vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbWl0TnVsbE9uRGVzdHJveSA9PT0gdHJ1ZSlcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KFtdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhZGRJbWFnZShmaWxlOiBGaWxlVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICB0aGlzLmltYWdlcyA9IHRoaXMubW9kZWw7XHJcbiAgICBpZiAoIXRoaXMuaW1hZ2VzKSB0aGlzLmltYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5pbWFnZXMucHVzaCh7XHJcbiAgICAgIHNyYzogZmlsZS5zcmMsXHJcbiAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgY3JlYXRlZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbCxcclxuICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICB9KTtcclxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmltYWdlcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0TG9hZGluZyhsb2FkaW5nOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzTG9hZGluZyA9IGxvYWRpbmc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb3BlblVzZXJNZWRpYUdhbGxlcnkoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uT3BlblVzZXJNZWRpYUdhbGxlcnkuZW1pdCgpO1xyXG4gICAgdmFyIGl0ZW1zID0gPGFueVtdPnRoaXMuX2RhdGFTZXJ2aWNlLmNsb25lSXRlbXModGhpcy5pbWFnZXMpO1xyXG4gICAgaWYgKCFpdGVtcykgaXRlbXMgPSBbXTtcclxuICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93VGVtcGxhdGVEaWFsb2cobmV3IFRlbXBsYXRlVmlld01vZGVsKHtcclxuICAgICAgdGVtcGxhdGU6IEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICAgIHZhbGlkYXRpb25LZXk6ICdHYWxsZXJ5Q29tcG9uZW50JyxcclxuICAgICAgdGl0bGU6IHRoaXMub3BlbkdhbGxlcnlUaXRsZSxcclxuICAgICAgaWNvbjogdGhpcy5vcGVuR2FsbGVyeUljb24sXHJcbiAgICAgIGN1c3RvbVNpemU6ICdtb2RhbC1sZycsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXHJcbiAgICAgICAgaXRlbXM6ICF0aGlzLnVzZUxpYnJhcnkgPyAoKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gb2YobmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgIGNvZGU6ICcyMDAnLFxyXG4gICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgIHRvdGFsUmVjb3JkczogMCxcclxuICAgICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSA6ICgpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5nYWxsZXJ5SXRlbXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9mKG5ldyBGaWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgIGNvZGU6ICcyMDAnLFxyXG4gICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcclxuICAgICAgICAgICAgICB0b3RhbFJlY29yZHM6IGl0ZW1zLmxlbmd0aCxcclxuICAgICAgICAgICAgICBpdGVtczogaXRlbXNcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2FsbGVyeUl0ZW1zO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYWNjZXB0Q2FsbGJhY2s6IChyZXNwb25zZTogRmlsZVZpZXdNb2RlbFtdKSA9PiB7XHJcbiAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KHRoaXMuaW1hZ2VzKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gIH1cclxufVxyXG4iXX0=