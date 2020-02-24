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
export class ViewerComponent {
    /**
     * @param {?} _modalService
     * @param {?} _dataService
     * @param {?} authenticationService
     */
    constructor(_modalService, _dataService, authenticationService) {
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
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit([]);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    addImage(file) {
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
    }
    /**
     * @param {?} loading
     * @return {?}
     */
    setLoading(loading) {
        this.isLoading = loading;
    }
    /**
     * @return {?}
     */
    openUserMediaGallery() {
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
                () => {
                    return of(new FileResponse({
                        code: '200',
                        status: true,
                        totalRecords: 0,
                        items: []
                    }));
                }) : (/**
                 * @return {?}
                 */
                () => {
                    if (!this.galleryItems) {
                        return of(new FileResponse({
                            code: '200',
                            status: true,
                            totalRecords: items.length,
                            items: items
                        }));
                    }
                    else {
                        return this.galleryItems;
                    }
                })
            },
            acceptCallback: (/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                response.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    this.images.push(item);
                }));
                this.modelChange.emit(this.images);
            })
        }));
    }
}
ViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-viewer',
                template: "<label *ngIf=\"title\" class=\"title-gallery\">{{title}}</label>\r\n<div class=\"form-group image-gallery-wrapper\">\r\n  <div *ngIf=\"!model || model.length === 0; else main\" class=\"d-flex\">\r\n    <div class=\"add-image-wrapper\">\r\n      <button class=\"btn btn-add-image\">\r\n        <i class=\"plus fa fa-plus\"></i>\r\n        <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n        <ul class=\"add-image-menu\">\r\n          <li>\r\n            <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n              (checkedLoading)=\"setLoading($event)\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n              [resizeToWidth]=\"resizeToWidth\" class=\"katana-upload\" [cropImage]=\"true\" (fileUploaded)=\"addImage($event)\"\r\n              [fileType]=\"'image'\" [cutRatio]=\"cutRatio\">\r\n              <i class=\"{{uploadIcon}}\"></i>\r\n              {{uploadTitle}}\r\n            </katana-file-uploader>\r\n          </li>\r\n          <li *ngIf=\"useLibrary\">\r\n            <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n              <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n              {{openGalleryTitle}}\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n          (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n          [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n          (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n          <span class=\"upload-shadow\"></span>\r\n        </katana-file-uploader>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-template #main>\r\n    <div class=\"d-flex\">\r\n      <div ngxDroppable=\"imagesDropZone\" [model]=\"model\" class=\"ngx-dnd-container d-flex\"\r\n        [ngClass]=\"{'big-image': zoomPrimaryImage}\">\r\n        <div class=\"ngx-dnd-item mr-2\" [model]=\"image\" *ngFor=\"let image of model; let i = index\"\r\n          ngxDraggable=\"imagesDropZone\">\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            [cutRatio]=\"cutRatio\" [resizeToWidth]=\"resizeToWidth\" [maintainAspectRatio]=\"maintainAspectRatio\"\r\n            *ngIf=\"i === 0\" [size]=\"zoomPrimaryImage ? 'medium' : 'small'\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n          <katana-image-viewer [uploadIcon]=\"uploadDialogIcon\" [uploadTitle]=\"uploadDialogTitle\" [multiple]=\"multiple\" [resizeToWidth]=\"resizeToWidth\"\r\n            [cutRatio]=\"cutRatio\" [maintainAspectRatio]=\"maintainAspectRatio\" *ngIf=\"i > 0\" size=\"small\" [model]=\"image\"\r\n            (imageRemoved)=\"model.splice(i, 1)\" [editable]=\"editable\"></katana-image-viewer>\r\n        </div>\r\n      </div>\r\n      <div class=\"add-image-wrapper\">\r\n        <button class=\"btn btn-add-image\">\r\n          <i class=\"plus fa fa-plus\"></i>\r\n          <h6 class=\"mt-1\">{{componentTitle}}</h6>\r\n          <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n          <ul class=\"add-image-menu\">\r\n            <li>\r\n              <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n                (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n                [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload\" [cropImage]=\"true\"\r\n                (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n                <i class=\"{{uploadIcon}}\"></i>\r\n                {{uploadTitle}}\r\n              </katana-file-uploader>\r\n            </li>\r\n            <li *ngIf=\"useLibrary\">\r\n              <a href=\"javascript:;\" (click)=\"openUserMediaGallery()\">\r\n                <i class=\"{{openGalleryIcon}}\" aria-hidden=\"true\"></i>\r\n                {{openGalleryTitle}}\r\n              </a>\r\n            </li>\r\n          </ul>\r\n          <katana-file-uploader [icon]=\"uploadDialogIcon\" [title]=\"uploadDialogTitle\" [multiple]=\"multiple\"\r\n            (checkedLoading)=\"setLoading($event)\" [resizeToWidth]=\"resizeToWidth\"\r\n            [maintainAspectRatio]=\"maintainAspectRatio\" class=\"katana-upload \" [cropImage]=\"true\"\r\n            (fileUploaded)=\"addImage($event)\" [cutRatio]=\"cutRatio\">\r\n            <span class=\"upload-shadow\"></span>\r\n          </katana-file-uploader>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\">\r\n  </div>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
ViewerComponent.ctorParameters = () => [
    { type: ModalService },
    { type: DataService },
    { type: AuthenticationService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3ZpZXdlci92aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQWlCLFlBQVksRUFBZSxNQUFNLG9CQUFvQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLEVBQUUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVFoRSxNQUFNLE9BQU8sZUFBZTs7Ozs7O0lBMkIxQixZQUNVLGFBQTJCLEVBQzNCLFlBQXlCLEVBQ3ZCLHFCQUE0QztRQUY5QyxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN2QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBN0JqRCxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLFdBQU0sR0FBb0IsRUFBRSxDQUFDO1FBQzdCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFHM0QsbUJBQWMsR0FBVyxVQUFVLENBQUM7UUFDcEMsc0JBQWlCLEdBQVcsZUFBZSxDQUFDO1FBQzVD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QUFLOzBCQUNMLE1BQU07cUNBQ04sTUFBTTs7OztJQXhCUCxvQ0FBa0M7O0lBQ2xDLGlDQUFvQzs7SUFDcEMscUNBQWtDOztJQUNsQyxrQ0FBMkU7O0lBQzNFLG1DQUFrQzs7SUFDbEMsdUNBQWlGOztJQUNqRix5Q0FBb0Q7O0lBQ3BELDRDQUE0RDs7SUFDNUQsMkNBQTJEOztJQUMzRCxzQ0FBZ0Q7O0lBQ2hELHFDQUFzRDs7SUFDdEQsMkNBQThEOztJQUM5RCwwQ0FBZ0U7O0lBQ2hFLGdDQUE4Qjs7SUFDOUIsZ0NBQWtDOztJQUNsQywyQ0FBaUQ7O0lBQ2pELG1DQUF5Qzs7SUFDekMsbUNBQXlDOztJQUN6Qyx3Q0FBc0M7O0lBQ3RDLDhDQUE2Qzs7SUFDN0MseUNBQWdDOztJQUNoQywwQ0FBaUM7O0lBQ2pDLDRDQUE0Qzs7SUFDNUMsc0NBQXVFOztJQUN2RSxpREFBaUY7Ozs7O0lBRy9FLHdDQUFtQzs7Ozs7SUFDbkMsdUNBQWlDOzs7OztJQUNqQyxnREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwsIEZpbGVSZXNwb25zZSwgRmlsZVJlcXVlc3QgfSBmcm9tICcuLi9maWxlL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwuc2VydmljZSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kYWxzL21vZGFsLm1vZGVsJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbXBvbmVudCB9IGZyb20gJy4vZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtdmlld2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdmlld2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi92aWV3ZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHVibGljIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpbWFnZXM6IEZpbGVWaWV3TW9kZWxbXSA9IFtdO1xyXG4gIHB1YmxpYyB1c2VMaWJyYXJ5OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyczogc3RyaW5nW10gPSBbJyMnLCAnVMOqbicsICdLw61jaCB0aMaw4bubYycsICdOZ8OgeSB04bqhbyddO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtdWx0aXBsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKSBwdWJsaWMgZ2FsbGVyeUl0ZW1zOiAocmVxdWVzdDogRmlsZVJlcXVlc3QpID0+IE9ic2VydmFibGU8RmlsZVJlc3BvbnNlPjtcclxuICBASW5wdXQoKSBwdWJsaWMgY29tcG9uZW50VGl0bGU6IHN0cmluZyA9ICdUaMOqbSDhuqNuaCc7XHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZERpYWxvZ1RpdGxlOiBzdHJpbmcgPSAnQ2jhu4luaCBz4butYSDhuqNuaCc7XHJcbiAgQElucHV0KCkgcHVibGljIHVwbG9hZERpYWxvZ0ljb246IHN0cmluZyA9ICdmYSBmYS10d2l0dGVyJztcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkVGl0bGU6IHN0cmluZyA9ICdU4bqjaSBsw6puJztcclxuICBASW5wdXQoKSBwdWJsaWMgdXBsb2FkSWNvbjogc3RyaW5nID0gJ2ZhIGZhLWV4Y2hhbmdlJztcclxuICBASW5wdXQoKSBwdWJsaWMgb3BlbkdhbGxlcnlUaXRsZTogc3RyaW5nID0gJ0No4buNbiB04burIHRoxrAgdmnhu4duJztcclxuICBASW5wdXQoKSBwdWJsaWMgb3BlbkdhbGxlcnlJY29uOiBzdHJpbmcgPSAnZmEgZmEtZ29vZ2xlLXdhbGxldCc7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1vZGVsOiBhbnlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB6b29tUHJpbWFyeUltYWdlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgZWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjdXRSYXRpbzogbnVtYmVyID0gMSAvIDE7XHJcbiAgQElucHV0KCkgcHVibGljIHJlc2l6ZVRvV2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbjtcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGVtaXROdWxsT25EZXN0cm95OiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGFueVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgcHVibGljIG9uT3BlblVzZXJNZWRpYUdhbGxlcnk6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgIHByaXZhdGUgX2RhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpXHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChbXSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYWRkSW1hZ2UoZmlsZTogRmlsZVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbWFnZXMgPSB0aGlzLm1vZGVsO1xyXG4gICAgaWYgKCF0aGlzLmltYWdlcykgdGhpcy5pbWFnZXMgPSBbXTtcclxuICAgIHRoaXMuaW1hZ2VzLnB1c2goe1xyXG4gICAgICBzcmM6IGZpbGUuc3JjLFxyXG4gICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQodGhpcy5pbWFnZXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldExvYWRpbmcobG9hZGluZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0xvYWRpbmcgPSBsb2FkaW5nO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9wZW5Vc2VyTWVkaWFHYWxsZXJ5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbk9wZW5Vc2VyTWVkaWFHYWxsZXJ5LmVtaXQoKTtcclxuICAgIHZhciBpdGVtcyA9IDxhbnlbXT50aGlzLl9kYXRhU2VydmljZS5jbG9uZUl0ZW1zKHRoaXMuaW1hZ2VzKTtcclxuICAgIGlmICghaXRlbXMpIGl0ZW1zID0gW107XHJcbiAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd1RlbXBsYXRlRGlhbG9nKG5ldyBUZW1wbGF0ZVZpZXdNb2RlbCh7XHJcbiAgICAgIHRlbXBsYXRlOiBHYWxsZXJ5Q29tcG9uZW50LFxyXG4gICAgICB2YWxpZGF0aW9uS2V5OiAnR2FsbGVyeUNvbXBvbmVudCcsXHJcbiAgICAgIHRpdGxlOiB0aGlzLm9wZW5HYWxsZXJ5VGl0bGUsXHJcbiAgICAgIGljb246IHRoaXMub3BlbkdhbGxlcnlJY29uLFxyXG4gICAgICBjdXN0b21TaXplOiAnbW9kYWwtbGcnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxyXG4gICAgICAgIGl0ZW1zOiAhdGhpcy51c2VMaWJyYXJ5ID8gKCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIG9mKG5ldyBGaWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICBjb2RlOiAnMjAwJyxcclxuICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3RhbFJlY29yZHM6IDAsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXVxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gOiAoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZ2FsbGVyeUl0ZW1zKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvZihuZXcgRmlsZVJlc3BvbnNlKHtcclxuICAgICAgICAgICAgICBjb2RlOiAnMjAwJyxcclxuICAgICAgICAgICAgICBzdGF0dXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgdG90YWxSZWNvcmRzOiBpdGVtcy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgaXRlbXM6IGl0ZW1zXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdhbGxlcnlJdGVtcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFjY2VwdENhbGxiYWNrOiAocmVzcG9uc2U6IEZpbGVWaWV3TW9kZWxbXSkgPT4ge1xyXG4gICAgICAgIHJlc3BvbnNlLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmltYWdlcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmltYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH0pKTtcclxuICB9XHJcbn1cclxuIl19