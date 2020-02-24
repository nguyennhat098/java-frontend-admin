/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/file/file.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { take, finalize, tap } from 'rxjs/operators';
import { HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { FileViewModel, FileRequest, FileResponse } from './file.model';
import { CropperComponent } from '../cropper/cropper.component';
import { FileService } from './file.service';
import { NotificationViewModel } from '../modals/modal.model';
import { AuthenticationService } from '../../auth/auth.service';
import { ModalService } from '../modals/modal.service';
var UploaderComponent = /** @class */ (function () {
    function UploaderComponent(modalService, fileService, authenticationService) {
        this.modalService = modalService;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
        this.icon = 'fa fa-twitter';
        this.title = 'Chỉnh sửa ảnh';
        this.multiple = true;
        this.maxSize = 10 * 1024 * 1024;
        this.fileType = 'default';
        this.changeLoading = new EventEmitter();
        this.changeProgress = new EventEmitter();
        this.fileUploaded = new EventEmitter();
        this.progress = 0;
        this.subscriptions = new Subscription();
    }
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    UploaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
    };
    /**
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    UploaderComponent.prototype.onFileUploaded = /**
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    function (files, event) {
        if (!files || files.length == 0)
            return;
        this.execute(files, event);
    };
    /**
     * @private
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    UploaderComponent.prototype.execute = /**
     * @private
     * @param {?} files
     * @param {?} event
     * @return {?}
     */
    function (files, event) {
        var _this = this;
        if (files.length == 0)
            return;
        /** @type {?} */
        var file = files[0];
        /** @type {?} */
        var validationResult = this.initValidation(file);
        if (!validationResult.isValid) {
            validationResult.errors.forEach((/**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                switch (x) {
                    case 'Size':
                        _this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: "K\u00EDch th\u01B0\u1EDBc file ph\u1EA3i nh\u1ECF h\u01A1n " + _this.maxSize / (1024 * 1024) + " mb"
                        }));
                        break;
                    case 'Type':
                        _this.modalService.showNotificationDialog(new NotificationViewModel({
                            message: "Lo\u1EA1i file kh\u00F4ng ph\u00F9 h\u1EE3p"
                        }));
                        break;
                }
            }));
            return;
        }
        if (this.cropImage) {
            /** @type {?} */
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = (/**
             * @param {?} loadEvent
             * @return {?}
             */
            function (loadEvent) {
                /** @type {?} */
                var image = new FileViewModel({
                    createdDate: new Date(),
                    lastModifiedDate: new Date(),
                    createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                    lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
                });
                image.src = loadEvent.target.result;
                _this.modalService.showTemplateDialog({
                    title: _this.title,
                    validationKey: 'CropperComponent',
                    customSize: 'modal-lg',
                    mode: 'Custom',
                    autoClose: true,
                    icon: _this.icon,
                    data: {
                        imageElement: image,
                        eventFile: event,
                        cutRatio: _this.cutRatio,
                        maintainAspectRatio: _this.maintainAspectRatio,
                        resizeToWidth: _this.resizeToWidth
                    },
                    template: CropperComponent,
                    acceptCallback: (/**
                     * @param {?} base64String
                     * @return {?}
                     */
                    function (base64String) {
                        /** @type {?} */
                        var base64FileParts = base64String.split(',');
                        if (base64FileParts.length < 2) {
                            return;
                        }
                        /** @type {?} */
                        var base64FileData = base64FileParts[1];
                        _this.loading = true;
                        _this.changeLoading.emit(_this.loading);
                        _this.fileService.uploadFiles(new FileRequest({
                            createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                            items: [new FileViewModel({
                                    src: base64FileData,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
                                })],
                            mockData: new FileResponse({
                                status: true,
                                items: [
                                    new FileViewModel({
                                        src: base64String,
                                        size: file.size,
                                        name: file.name,
                                        createdDate: new Date(),
                                        lastModifiedDate: new Date(),
                                        createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                                        lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
                                    })
                                ]
                            })
                        })).pipe(take(1), finalize((/**
                         * @return {?}
                         */
                        function () {
                            _this.loading = false;
                            _this.changeLoading.emit(_this.loading);
                        }))).subscribe((/**
                         * @param {?} response
                         * @return {?}
                         */
                        function (response) {
                            if (response.items.length > 0) {
                                /** @type {?} */
                                var uploadedFilePath = response.items[0].src;
                                _this.fileUploaded.emit(new FileViewModel({
                                    src: uploadedFilePath,
                                    name: file.name,
                                    size: file.size,
                                    type: file.type,
                                    createdDate: new Date(),
                                    lastModifiedDate: new Date(),
                                    createdBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null,
                                    lastModifiedBy: _this.authenticationService.currentUser ? _this.authenticationService.currentUser.id : null
                                }));
                            }
                        }));
                    })
                });
            });
        }
        else {
            this.loading = true;
            this.changeLoading.emit(this.loading);
            /** @type {?} */
            var uploadFileSubscription = this.fileService.uploadProgress(file).pipe(tap(((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                if (event.type === HttpEventType.UploadProgress) {
                    _this.progress = Math.round((100 * event.loaded) / event.total);
                    _this.changeProgress.emit(_this.progress);
                }
                else if (event.type === HttpEventType.Response) {
                    /** @type {?} */
                    var response = event.body;
                    _this.progress = 0;
                    _this.loading = false;
                    _this.changeProgress.emit(_this.progress);
                    _this.changeLoading.emit(_this.loading);
                    _this.fileUploaded.emit(new FileViewModel({
                        src: response.items && response.items.length > 0 ? response.items[0].src : null,
                        name: file.name
                    }));
                }
            })), (/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log(err);
            }))).subscribe();
            this.subscriptions.add(uploadFileSubscription);
        }
    };
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    UploaderComponent.prototype.initValidation = /**
     * @private
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var isValid = true;
        /** @type {?} */
        var errors = [];
        if (this.fileType) {
            this.initExtentionFile(this.fileType);
            /** @type {?} */
            var types = file.name.split('.');
            /** @type {?} */
            var extension = types[types.length - 1];
            isValid = this.currentTypes.indexOf(extension) >= 0;
            if (!isValid) {
                errors.push('Type');
                return { isValid: isValid, errors: errors };
            }
        }
        if (this.maxSize && this.maxSize !== 0) {
            isValid = +file.size < +this.maxSize;
            if (!isValid) {
                errors.push('Size');
                return { isValid: isValid, errors: errors };
            }
            ;
        }
        return { isValid: isValid, errors: errors };
    };
    /**
     * @private
     * @param {?} fileType
     * @return {?}
     */
    UploaderComponent.prototype.initExtentionFile = /**
     * @private
     * @param {?} fileType
     * @return {?}
     */
    function (fileType) {
        switch (fileType) {
            case 'doc':
                this.currentTypes = ['csv', 'doc', 'docx', 'log', 'msg', 'rtf', 'txt', 'wpf', 'pdf', 'csv', 'ppt', 'pps', 'vcf', 'xlr', 'xls', 'xlsx'];
                break;
            case 'image':
                this.currentTypes = ['bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'thm', 'tif', 'jpe', 'jpeg'];
                break;
            case 'audio':
                this.currentTypes = ['aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma'];
                break;
            case 'video':
                this.currentTypes = ['3g2', '3gp', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'wmv'];
                break;
            case 'default':
                this.currentTypes = ['csv', 'doc', 'docx', 'log', 'msg', 'rtf', 'txt', 'wpf', 'pdf', 'csv', 'ppt', 'pps', 'vcf', 'xlr', 'xls', 'xlsx',
                    'bmp', 'dds', 'gif', 'heic', 'jpg', 'png', 'psd', 'thm', 'tif', 'jpe', 'jpeg',
                    'aif', 'iff', 'm3u', 'm4a', 'mid', 'mp3', 'mpa', 'wav', 'wma',
                    '3g2', '3gp', 'avi', 'flv', 'm4v', 'mov', 'mp4', 'mpg', 'wmv'
                ];
                break;
            default: return;
        }
    };
    UploaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-file-uploader',
                    template: "<div>\r\n  <a (click)=\"file.click()\">\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin loading-icon fa-fw\"></i>\r\n  <input [attr.validation-name]=\"validationName\" type=\"file\" #file (click)=\"file.value = null\"\r\n    (change)=\"onFileUploaded($event.target.files, $event)\" style=\"visibility:hidden; width: 0; height: 0;\" />\r\n</div>",
                    styles: [".tiny{width:50px}.small{width:90px}.medium{width:200px}.large{width:400px}.full{width:100%}.image-radious{border-radius:50%;overflow:hidden}.image-gallery-wrapper .title-gallery{font-weight:500;text-transform:uppercase;color:#6c757d}.image-gallery-wrapper .ngx-dnd-container{display:flex;flex-wrap:wrap;position:relative}.image-gallery-wrapper .ngx-dnd-container.big-image{padding-left:212px;min-height:205px}.image-gallery-wrapper .ngx-dnd-container.big-image .ngx-dnd-item:first-child{position:absolute;left:0;top:0;width:200px}.cover-tool{display:none}.selected-file .deletable-image .selected-icon,.selected-file .deletable-image::before{opacity:1}.deletable-image{display:inline-block;position:relative}.deletable-image::before{content:\"\";position:absolute;width:100%;height:100%;background-color:rgba(255,255,255,.3);opacity:0;z-index:1;transition:.4s ease-in-out}.deletable-image .selected-icon{color:#0f0;opacity:0;transition:.4s ease-in-out;font-size:30px;position:absolute;bottom:0;right:0;z-index:2;display:unset!important}.deletable-image .cover-tool{display:block;position:absolute;background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;visibility:hidden;opacity:0;transform:translateY(0);z-index:3}.deletable-image .cover-tool a{text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool a.edit{color:#052d3e}.deletable-image .cover-tool a.remove{color:#d61e00}.deletable-image .cover-tool a:hover{background:#fff}.deletable-image .cover-tool katana-file-uploader{display:block;text-decoration:none;text-align:center;width:25px;line-height:25px;height:25px;background:rgba(255,255,255,.5);transition:.1s}.deletable-image .cover-tool katana-file-uploader a{position:relative;top:0;display:block;color:#052d3e}.deletable-image:hover .selected-icon,.deletable-image:hover::before{opacity:0}.deletable-image:hover .cover-tool{display:block;transform:translateY(0);visibility:visible;opacity:1}.selected-icon{display:none}.img-ratio-4-3{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:75%}.img-ratio-4-3 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-4-3 img .img-width{width:100%;height:auto}.img-ratio-4-3 img.img-height{height:100%;width:auto}.img-ratio-4-3 .iframe--wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}.img-ratio-4-3 iframe{left:0;top:0;height:100%;width:100%;position:absolute}.img-ratio-1-1{position:relative;width:100%;height:0;overflow:hidden;padding-bottom:100%}.img-ratio-1-1 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);width:100%;height:auto}.img-ratio-1-1 img.img-width{width:100%;height:auto}.img-ratio-1-1 img.img-height{height:100%;width:auto}.img-ratio-16-9{padding-bottom:56.25%;height:0;width:100%;position:relative;overflow:hidden}.img-ratio-16-9 img{position:absolute;top:50%;left:50%;transform:translate3D(-50%,-50%,0);height:100%}.img-ratio-16-9 img.full-width,.img-ratio-16-9 img.img-width{width:100%;height:auto}.img-ratio-16-9 .iframe--wrapper,.img-ratio-16-9 .videocall__wrapper{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%}a{text-decoration:none}.loading-image{background:rgba(255,255,255,.3);transition:.4s ease-in-out;width:100%;height:100%;top:0;right:0;text-align:center;align-items:center}.loading-image i{color:#eb5d13}.progress-bar-striped.active{-webkit-animation:.4s linear infinite progress-bar-stripes;animation:.4s linear infinite progress-bar-stripes}"]
                }] }
    ];
    /** @nocollapse */
    UploaderComponent.ctorParameters = function () { return [
        { type: ModalService },
        { type: FileService },
        { type: AuthenticationService }
    ]; };
    UploaderComponent.propDecorators = {
        icon: [{ type: Input }],
        title: [{ type: Input }],
        multiple: [{ type: Input }],
        cropImage: [{ type: Input }],
        validationName: [{ type: Input }],
        maxSize: [{ type: Input }],
        fileType: [{ type: Input }],
        cutRatio: [{ type: Input }],
        resizeToWidth: [{ type: Input }],
        maintainAspectRatio: [{ type: Input }],
        changeLoading: [{ type: Output, args: ['checkedLoading',] }],
        changeProgress: [{ type: Output, args: ['checkedProgress',] }],
        fileUploaded: [{ type: Output }]
    };
    return UploaderComponent;
}());
export { UploaderComponent };
if (false) {
    /** @type {?} */
    UploaderComponent.prototype.icon;
    /** @type {?} */
    UploaderComponent.prototype.title;
    /** @type {?} */
    UploaderComponent.prototype.multiple;
    /** @type {?} */
    UploaderComponent.prototype.cropImage;
    /** @type {?} */
    UploaderComponent.prototype.validationName;
    /** @type {?} */
    UploaderComponent.prototype.maxSize;
    /** @type {?} */
    UploaderComponent.prototype.fileType;
    /** @type {?} */
    UploaderComponent.prototype.cutRatio;
    /** @type {?} */
    UploaderComponent.prototype.resizeToWidth;
    /** @type {?} */
    UploaderComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    UploaderComponent.prototype.changeLoading;
    /** @type {?} */
    UploaderComponent.prototype.changeProgress;
    /** @type {?} */
    UploaderComponent.prototype.fileUploaded;
    /** @type {?} */
    UploaderComponent.prototype.loading;
    /** @type {?} */
    UploaderComponent.prototype.progress;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.currentTypes;
    /**
     * @type {?}
     * @private
     */
    UploaderComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.fileService;
    /**
     * @type {?}
     * @protected
     */
    UploaderComponent.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9maWxlL2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNwQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RDtJQXlCRSwyQkFDWSxZQUEwQixFQUMxQixXQUF3QixFQUN4QixxQkFBNEM7UUFGNUMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQXJCeEMsU0FBSSxHQUFXLGVBQWUsQ0FBQztRQUMvQixVQUFLLEdBQVcsZUFBZSxDQUFDO1FBQ2hDLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsWUFBTyxHQUFXLEVBQUUsR0FBRyxJQUFJ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QyxvQ0FBbUQ7O0lBQ25ELHFDQUFzRjs7SUFDdEYscUNBQWlDOztJQUNqQywwQ0FBc0M7O0lBQ3RDLGdEQUE2Qzs7SUFDN0MsMENBQXNFOztJQUN0RSwyQ0FBdUU7O0lBQ3ZFLHlDQUFnRjs7SUFDaEYsb0NBQXdCOztJQUN4QixxQ0FBNEI7Ozs7O0lBQzVCLHlDQUE0Qjs7Ozs7SUFDNUIsMENBQXlEOzs7OztJQUd2RCx5Q0FBb0M7Ozs7O0lBQ3BDLHdDQUFrQzs7Ozs7SUFDbEMsa0RBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRha2UsIGZpbmFsaXplLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEh0dHBFdmVudFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGaWxlVmlld01vZGVsLCBGaWxlUmVxdWVzdCwgRmlsZVJlc3BvbnNlIH0gZnJvbSAnLi9maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgQ3JvcHBlckNvbXBvbmVudCB9IGZyb20gJy4uL2Nyb3BwZXIvY3JvcHBlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4vZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kYWxzL21vZGFsLm1vZGVsJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi9tb2RhbHMvbW9kYWwuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1maWxlLXVwbG9hZGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmlsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXBsb2FkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgcHVibGljIGljb246IHN0cmluZyA9ICdmYSBmYS10d2l0dGVyJztcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZyA9ICdDaOG7iW5oIHPhu61hIOG6o25oJztcclxuICBASW5wdXQoKSBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjcm9wSW1hZ2U6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIG1heFNpemU6IG51bWJlciA9IDEwICogMTAyNCAqIDEwMjQ7XHJcbiAgQElucHV0KCkgcHVibGljIGZpbGVUeXBlOiAnZG9jJyB8ICdpbWFnZScgfCAnYXVkaW8nIHwgJ3ZpZGVvJyB8ICdkZWZhdWx0JyA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBwdWJsaWMgY3V0UmF0aW86IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgcmVzaXplVG9XaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYWludGFpbkFzcGVjdFJhdGlvOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoJ2NoZWNrZWRMb2FkaW5nJykgY2hhbmdlTG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCdjaGVja2VkUHJvZ3Jlc3MnKSBjaGFuZ2VQcm9ncmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgZmlsZVVwbG9hZGVkOiBFdmVudEVtaXR0ZXI8RmlsZVZpZXdNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgcHVibGljIGxvYWRpbmc6IGJvb2xlYW47XHJcbiAgcHVibGljIHByb2dyZXNzOiBudW1iZXIgPSAwO1xyXG4gIHByaXZhdGUgY3VycmVudFR5cGVzOiBhbnlbXTtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uRmlsZVVwbG9hZGVkKGZpbGVzOiBGaWxlW10sIGV2ZW50OiBhbnkpIHtcclxuICAgIGlmICghZmlsZXMgfHwgZmlsZXMubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgIHRoaXMuZXhlY3V0ZShmaWxlcywgZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBleGVjdXRlKGZpbGVzOiBGaWxlW10sIGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgdmFyIGZpbGUgPSBmaWxlc1swXTtcclxuICAgIGNvbnN0IHZhbGlkYXRpb25SZXN1bHQgPSB0aGlzLmluaXRWYWxpZGF0aW9uKGZpbGUpO1xyXG4gICAgaWYgKCF2YWxpZGF0aW9uUmVzdWx0LmlzVmFsaWQpIHtcclxuICAgICAgdmFsaWRhdGlvblJlc3VsdC5lcnJvcnMuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICBzd2l0Y2ggKHgpIHtcclxuICAgICAgICAgIGNhc2UgJ1NpemUnOlxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93Tm90aWZpY2F0aW9uRGlhbG9nKG5ldyBOb3RpZmljYXRpb25WaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IGBLw61jaCB0aMaw4bubYyBmaWxlIHBo4bqjaSBuaOG7jyBoxqFuICR7dGhpcy5tYXhTaXplIC8gKDEwMjQgKiAxMDI0KX0gbWJgXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICdUeXBlJzpcclxuICAgICAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd05vdGlmaWNhdGlvbkRpYWxvZyhuZXcgTm90aWZpY2F0aW9uVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBgTG/huqFpIGZpbGUga2jDtG5nIHBow7kgaOG7o3BgXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuY3JvcEltYWdlKSB7XHJcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKGxvYWRFdmVudDogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICBjcmVhdGVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgbGFzdE1vZGlmaWVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gbG9hZEV2ZW50LnRhcmdldC5yZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd1RlbXBsYXRlRGlhbG9nKHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgdmFsaWRhdGlvbktleTogJ0Nyb3BwZXJDb21wb25lbnQnLFxyXG4gICAgICAgICAgY3VzdG9tU2l6ZTogJ21vZGFsLWxnJyxcclxuICAgICAgICAgIG1vZGU6ICdDdXN0b20nLFxyXG4gICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgaWNvbjogdGhpcy5pY29uLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBpbWFnZUVsZW1lbnQ6IGltYWdlLFxyXG4gICAgICAgICAgICBldmVudEZpbGU6IGV2ZW50LFxyXG4gICAgICAgICAgICBjdXRSYXRpbzogdGhpcy5jdXRSYXRpbyxcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdGhpcy5tYWludGFpbkFzcGVjdFJhdGlvLFxyXG4gICAgICAgICAgICByZXNpemVUb1dpZHRoOiB0aGlzLnJlc2l6ZVRvV2lkdGhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB0ZW1wbGF0ZTogQ3JvcHBlckNvbXBvbmVudCxcclxuICAgICAgICAgIGFjY2VwdENhbGxiYWNrOiAoYmFzZTY0U3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJhc2U2NEZpbGVQYXJ0cyA9IGJhc2U2NFN0cmluZy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBpZiAoYmFzZTY0RmlsZVBhcnRzLmxlbmd0aCA8IDIpIHtcclxuICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgYmFzZTY0RmlsZURhdGEgPSBiYXNlNjRGaWxlUGFydHNbMV07XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTG9hZGluZy5lbWl0KHRoaXMubG9hZGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZVNlcnZpY2UudXBsb2FkRmlsZXMobmV3IEZpbGVSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgIGl0ZW1zOiBbbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRGaWxlRGF0YSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICAgICAgICB9KV0sXHJcbiAgICAgICAgICAgICAgbW9ja0RhdGE6IG5ldyBGaWxlUmVzcG9uc2Uoe1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHNyYzogYmFzZTY0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pKS5waXBlKHRha2UoMSksIGZpbmFsaXplKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICAgICAgICB9KSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkZWRGaWxlUGF0aCA9IHJlc3BvbnNlLml0ZW1zWzBdLnNyYztcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZGVkLmVtaXQobmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICBzcmM6IHVwbG9hZGVkRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWRCeTogdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIgPyB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCA6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICBjb25zdCB1cGxvYWRGaWxlU3Vic2NyaXB0aW9uID0gdGhpcy5maWxlU2VydmljZS51cGxvYWRQcm9ncmVzcyhmaWxlKS5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09IEh0dHBFdmVudFR5cGUuVXBsb2FkUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzcyA9IE1hdGgucm91bmQoKDEwMCAqIGV2ZW50LmxvYWRlZCkgLyBldmVudC50b3RhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlUHJvZ3Jlc3MuZW1pdCh0aGlzLnByb2dyZXNzKTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gSHR0cEV2ZW50VHlwZS5SZXNwb25zZSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGV2ZW50LmJvZHk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9ncmVzcy5lbWl0KHRoaXMucHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUxvYWRpbmcuZW1pdCh0aGlzLmxvYWRpbmcpO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVVcGxvYWRlZC5lbWl0KG5ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICBzcmM6IHJlc3BvbnNlLml0ZW1zICYmIHJlc3BvbnNlLml0ZW1zLmxlbmd0aCA+IDAgPyByZXNwb25zZS5pdGVtc1swXS5zcmMgOiBudWxsLFxyXG4gICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodXBsb2FkRmlsZVN1YnNjcmlwdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRWYWxpZGF0aW9uKGZpbGU6IEZpbGUpOiB7IGlzVmFsaWQ6IEJvb2xlYW47IGVycm9yczogYW55W10gfSB7XHJcbiAgICBsZXQgaXNWYWxpZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBsZXQgZXJyb3JzID0gW107XHJcbiAgICBpZiAodGhpcy5maWxlVHlwZSkge1xyXG4gICAgICB0aGlzLmluaXRFeHRlbnRpb25GaWxlKHRoaXMuZmlsZVR5cGUpO1xyXG4gICAgICBjb25zdCB0eXBlcyA9IGZpbGUubmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICBjb25zdCBleHRlbnNpb24gPSB0eXBlc1t0eXBlcy5sZW5ndGggLSAxXTtcclxuICAgICAgaXNWYWxpZCA9IHRoaXMuY3VycmVudFR5cGVzLmluZGV4T2YoZXh0ZW5zaW9uKSA+PSAwO1xyXG4gICAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgICBlcnJvcnMucHVzaCgnVHlwZScpO1xyXG4gICAgICAgIHJldHVybiB7IGlzVmFsaWQ6IGlzVmFsaWQsIGVycm9yczogZXJyb3JzIH07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tYXhTaXplICYmIHRoaXMubWF4U2l6ZSAhPT0gMCkge1xyXG4gICAgICBpc1ZhbGlkID0gK2ZpbGUuc2l6ZSA8ICt0aGlzLm1heFNpemU7XHJcbiAgICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICAgIGVycm9ycy5wdXNoKCdTaXplJyk7XHJcbiAgICAgICAgcmV0dXJuIHsgaXNWYWxpZDogaXNWYWxpZCwgZXJyb3JzOiBlcnJvcnMgfTtcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGlzVmFsaWQ6IGlzVmFsaWQsIGVycm9yczogZXJyb3JzIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRFeHRlbnRpb25GaWxlKGZpbGVUeXBlOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAoZmlsZVR5cGUpIHtcclxuICAgICAgY2FzZSAnZG9jJzpcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlcyA9IFsnY3N2JywgJ2RvYycsICdkb2N4JywgJ2xvZycsICdtc2cnLCAncnRmJywgJ3R4dCcsICd3cGYnLCAncGRmJywgJ2NzdicsICdwcHQnLCAncHBzJywgJ3ZjZicsICd4bHInLCAneGxzJywgJ3hsc3gnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnaW1hZ2UnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydibXAnLCAnZGRzJywgJ2dpZicsICdoZWljJywgJ2pwZycsICdwbmcnLCAncHNkJywgJ3RobScsICd0aWYnLCAnanBlJywgJ2pwZWcnXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYXVkaW8nOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydhaWYnLCAnaWZmJywgJ20zdScsICdtNGEnLCAnbWlkJywgJ21wMycsICdtcGEnLCAnd2F2JywgJ3dtYSddO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VHlwZXMgPSBbJzNnMicsICczZ3AnLCAnYXZpJywgJ2ZsdicsICdtNHYnLCAnbW92JywgJ21wNCcsICdtcGcnLCAnd212J107XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2RlZmF1bHQnOlxyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGVzID0gWydjc3YnLCAnZG9jJywgJ2RvY3gnLCAnbG9nJywgJ21zZycsICdydGYnLCAndHh0JywgJ3dwZicsICdwZGYnLCAnY3N2JywgJ3BwdCcsICdwcHMnLCAndmNmJywgJ3hscicsICd4bHMnLCAneGxzeCcsXHJcbiAgICAgICAgICAnYm1wJywgJ2RkcycsICdnaWYnLCAnaGVpYycsICdqcGcnLCAncG5nJywgJ3BzZCcsICd0aG0nLCAndGlmJywgJ2pwZScsICdqcGVnJyxcclxuICAgICAgICAgICdhaWYnLCAnaWZmJywgJ20zdScsICdtNGEnLCAnbWlkJywgJ21wMycsICdtcGEnLCAnd2F2JywgJ3dtYScsXHJcbiAgICAgICAgICAnM2cyJywgJzNncCcsICdhdmknLCAnZmx2JywgJ200dicsICdtb3YnLCAnbXA0JywgJ21wZycsICd3bXYnXHJcbiAgICAgICAgXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDogcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=