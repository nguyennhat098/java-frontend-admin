/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/file/file.provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FileService } from './file.service';
import { ModalService } from '../modals';
import { FileConst } from './file.const';
import { AuthenticationService } from '../../auth/auth.service';
import { ActionService } from '../services/action.service';
import * as i0 from "@angular/core";
import * as i1 from "./file.service";
import * as i2 from "../modals/modal.service";
import * as i3 from "../services/action.service";
import * as i4 from "../../auth/auth.service";
var FileProvider = /** @class */ (function () {
    function FileProvider(_fileService, _modalService, _actionService, _authenticationService) {
        this._fileService = _fileService;
        this._modalService = _modalService;
        this._actionService = _actionService;
        this._authenticationService = _authenticationService;
    }
    /**
     * @param {?} files
     * @param {?} attachments
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    FileProvider.prototype.uploadAsync = /**
     * @param {?} files
     * @param {?} attachments
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    function (files, attachments, fileRef, callback) {
        var _this = this;
        /** @type {?} */
        var request = this.buildRequest(files, attachments);
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var totalAttachmentSize = _this.calculateTotalBytes(attachments, request.items);
            if (totalAttachmentSize > FileConst.MaxSize * 1024 * 1024) {
                _this._modalService.showNotificationDialog({
                    autoClose: true,
                    title: 'Thông báo',
                    message: 'Dung lượng không được vượt quá <span class="text-bold text-primary">' + FileConst.MaxSize + '</span> MB.',
                    btnTitle: 'Đóng'
                });
                if (callback) {
                    callback();
                }
            }
            else {
                if (request.others.length == 0) {
                    _this.uploadFileAsync(request, fileRef, callback);
                }
                else {
                    /** @type {?} */
                    var otherTypes_1 = '';
                    request.others.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    function (file) {
                        if (file) {
                            if (otherTypes_1.indexOf(file.type) == -1) {
                                otherTypes_1 += file.type + '|';
                            }
                        }
                    }));
                    if (otherTypes_1)
                        otherTypes_1 = otherTypes_1.substring(0, otherTypes_1.length - 1);
                    if (request.items.length == 0) {
                        _this._modalService.showNotificationDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes_1 + '</span>.',
                            btnTitle: 'Đóng'
                        });
                        if (callback) {
                            callback();
                        }
                    }
                    else {
                        _this._modalService.showConfirmDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Có <span class="text-bold text-primary">' + request.others.length + '</span> định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes_1 + '</span>.<br/> Bạn có muốn tiếp tục tải tệp tin khác không?',
                            btnAcceptTitle: 'Tiếp tục',
                            btnCancelTitle: 'Hủy',
                            acceptCallback: (/**
                             * @return {?}
                             */
                            function () {
                                _this.uploadFileAsync(request, fileRef, callback);
                            })
                        });
                        if (callback) {
                            callback();
                        }
                    }
                }
            }
        }));
    };
    /**
     * @private
     * @param {?} request
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    FileProvider.prototype.uploadFileAsync = /**
     * @private
     * @param {?} request
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    function (request, fileRef, callback) {
        this._fileService.uploadFiles(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (fileRef && fileRef.value) {
                fileRef.value = '';
            }
            if (response && response.items) {
                if (callback) {
                    callback();
                }
                response.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                function (item) {
                    /** @type {?} */
                    var currentAttachment = request.items.find((/**
                     * @param {?} s
                     * @return {?}
                     */
                    function (s) { return s.src == item.src && s.name == item.name; }));
                    if (!currentAttachment) {
                        request.items.push(item);
                    }
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} attachments
     * @param {?=} items
     * @return {?}
     */
    FileProvider.prototype.calculateTotalBytes = /**
     * @private
     * @param {?} attachments
     * @param {?=} items
     * @return {?}
     */
    function (attachments, items) {
        /** @type {?} */
        var totalAmount = 0;
        if (attachments) {
            if (attachments) {
                attachments.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                function (attachment) {
                    totalAmount += attachment.size;
                }));
            }
            if (items) {
                items.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                function (attachment) {
                    totalAmount += attachment.size;
                }));
            }
        }
        return totalAmount;
    };
    /**
     * @private
     * @param {?} files
     * @param {?} attachments
     * @return {?}
     */
    FileProvider.prototype.buildRequest = /**
     * @private
     * @param {?} files
     * @param {?} attachments
     * @return {?}
     */
    function (files, attachments) {
        /** @type {?} */
        var request = {
            createdBy: this._authenticationService.currentUser.id,
            items: []
        };
        /** @type {?} */
        var otherFiles = [];
        var _loop_1 = function (i) {
            if (files[i]) {
                /** @type {?} */
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(files[i]);
                reader_1.onloadend = (/**
                 * @return {?}
                 */
                function () {
                    /** @type {?} */
                    var base64String = (/** @type {?} */ (reader_1.result));
                    if (files[i].type && FileConst.AcceptedFiles.indexOf(files[i].type) > -1) {
                        request.items.push({
                            size: files[i].size,
                            type: files[i].type,
                            src: base64String,
                            name: files[i].name
                        });
                    }
                    else {
                        otherFiles.push({
                            size: files[i].size,
                            type: files[i].type,
                            src: base64String,
                            name: files[i].name
                        });
                    }
                });
            }
        };
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        if (attachments) {
            attachments.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                /** @type {?} */
                var currentAttachment = request.items.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                function (s) { return s.src == item.src && s.name == item.name; }));
                if (!currentAttachment) {
                    request.items.push(item);
                }
            }));
        }
        request.others = otherFiles;
        return request;
    };
    FileProvider.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    FileProvider.ctorParameters = function () { return [
        { type: FileService },
        { type: ModalService },
        { type: ActionService },
        { type: AuthenticationService }
    ]; };
    /** @nocollapse */ FileProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileProvider_Factory() { return new FileProvider(i0.ɵɵinject(i1.FileService), i0.ɵɵinject(i2.ModalService), i0.ɵɵinject(i3.ActionService), i0.ɵɵinject(i4.AuthenticationService)); }, token: FileProvider, providedIn: "root" });
    return FileProvider;
}());
export { FileProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._fileService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._modalService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    FileProvider.prototype._authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQUUzRDtJQUVJLHNCQUNZLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzNCLGNBQTZCLEVBQzdCLHNCQUE2QztRQUg3QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO0lBQ3JELENBQUM7Ozs7Ozs7O0lBRUUsa0NBQVc7Ozs7Ozs7SUFBbEIsVUFBbUIsS0FBYSxFQUFFLFdBQTRCLEVBQUUsT0FBWSxFQUFFLFFBQW9CO1FBQWxHLGlCQXVEQzs7WUF0RE8sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztRQUFDOztnQkFDdkIsbUJBQW1CLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ2hGLElBQUksbUJBQW1CLEdBQUcsU0FBUyxDQUFDLE9BQU8sR0FBRyxJQUFJLEdB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aUJBQWlCLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksRUFBeEMsQ0FBd0MsRUFBQztnQkFDM0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFO29CQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDNUI7WUFDTCxDQUFDLEVBQUMsQ0FBQztTQUNOO1FBRUQsT0FBTyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDNUIsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7Z0JBdkpKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0JBUHpCLFdBQVc7Z0JBQ1gsWUFBWTtnQkFJWixhQUFhO2dCQURiLHFCQUFxQjs7O3VCQUw5QjtDQWdLQyxBQXhKRCxJQXdKQztTQXZKWSxZQUFZOzs7Ozs7SUFFakIsb0NBQWlDOzs7OztJQUNqQyxxQ0FBbUM7Ozs7O0lBQ25DLHNDQUFxQzs7Ozs7SUFDckMsOENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4vZmlsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kYWxzJztcclxuaW1wb3J0IHsgRmlsZVZpZXdNb2RlbCwgRmlsZVJlcXVlc3QgfSBmcm9tICcuL2ZpbGUubW9kZWwnO1xyXG5pbXBvcnQgeyBGaWxlQ29uc3QgfSBmcm9tICcuL2ZpbGUuY29uc3QnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3Rpb24uc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRmlsZVByb3ZpZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2ZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2F1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRBc3luYyhmaWxlczogRmlsZVtdLCBhdHRhY2htZW50czogRmlsZVZpZXdNb2RlbFtdLCBmaWxlUmVmOiBhbnksIGNhbGxiYWNrPzogKCkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmJ1aWxkUmVxdWVzdChmaWxlcywgYXR0YWNobWVudHMpO1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdG90YWxBdHRhY2htZW50U2l6ZSA9IHRoaXMuY2FsY3VsYXRlVG90YWxCeXRlcyhhdHRhY2htZW50cywgcmVxdWVzdC5pdGVtcyk7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbEF0dGFjaG1lbnRTaXplID4gRmlsZUNvbnN0Lk1heFNpemUgKiAxMDI0ICogMTAyNCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9kYWxTZXJ2aWNlLnNob3dOb3RpZmljYXRpb25EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Row7RuZyBiw6FvJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRHVuZyBsxrDhu6NuZyBraMO0bmcgxJHGsOG7o2Mgdsaw4bujdCBxdcOhIDxzcGFuIGNsYXNzPVwidGV4dC1ib2xkIHRleHQtcHJpbWFyeVwiPicgKyBGaWxlQ29uc3QuTWF4U2l6ZSArICc8L3NwYW4+IE1CLicsXHJcbiAgICAgICAgICAgICAgICAgICAgYnRuVGl0bGU6ICfEkMOzbmcnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5vdGhlcnMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVBc3luYyhyZXF1ZXN0LCBmaWxlUmVmLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvdGhlclR5cGVzID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5vdGhlcnMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdGhlclR5cGVzLmluZGV4T2YoZmlsZS50eXBlKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyVHlwZXMgKz0gZmlsZS50eXBlICsgJ3wnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyVHlwZXMpIG90aGVyVHlwZXMgPSBvdGhlclR5cGVzLnN1YnN0cmluZygwLCBvdGhlclR5cGVzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXF1ZXN0Lml0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93Tm90aWZpY2F0aW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9DbG9zZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnVGjDtG5nIGLDoW8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ8SQ4buLbmggZOG6oW5nIHThu4dwIHRpbiBraMO0bmcgaOG7o3AgbOG7hyA8c3BhbiBjbGFzcz1cInRleHQtYm9sZCB0ZXh0LXByaW1hcnlcIj4nICsgb3RoZXJUeXBlcyArICc8L3NwYW4+LicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5UaXRsZTogJ8SQw7NuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93Q29uZmlybURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Row7RuZyBiw6FvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDw7MgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGQgdGV4dC1wcmltYXJ5XCI+JyArIHJlcXVlc3Qub3RoZXJzLmxlbmd0aCArICc8L3NwYW4+IMSR4buLbmggZOG6oW5nIHThu4dwIHRpbiBraMO0bmcgaOG7o3AgbOG7hyA8c3BhbiBjbGFzcz1cInRleHQtYm9sZCB0ZXh0LXByaW1hcnlcIj4nICsgb3RoZXJUeXBlcyArICc8L3NwYW4+Ljxici8+IELhuqFuIGPDsyBtdeG7kW4gdGnhur9wIHThu6VjIHThuqNpIHThu4dwIHRpbiBraMOhYyBraMO0bmc/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkFjY2VwdFRpdGxlOiAnVGnhur9wIHThu6VjJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNhbmNlbFRpdGxlOiAnSOG7p3knLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXB0Q2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZEZpbGVBc3luYyhyZXF1ZXN0LCBmaWxlUmVmLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwbG9hZEZpbGVBc3luYyhyZXF1ZXN0OiBGaWxlUmVxdWVzdCwgZmlsZVJlZjogYW55LCBjYWxsYmFjaz86ICgpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2ZpbGVTZXJ2aWNlLnVwbG9hZEZpbGVzKHJlcXVlc3QpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlUmVmICYmIGZpbGVSZWYudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVSZWYudmFsdWUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlICYmIHJlc3BvbnNlLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlLml0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50QXR0YWNobWVudCA9IHJlcXVlc3QuaXRlbXMuZmluZChzID0+IHMuc3JjID09IGl0ZW0uc3JjICYmIHMubmFtZSA9PSBpdGVtLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudEF0dGFjaG1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVUb3RhbEJ5dGVzKGF0dGFjaG1lbnRzOiBGaWxlVmlld01vZGVsW10sIGl0ZW1zPzogRmlsZVZpZXdNb2RlbFtdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgdG90YWxBbW91bnQgPSAwO1xyXG4gICAgICAgIGlmIChhdHRhY2htZW50cykge1xyXG4gICAgICAgICAgICBpZiAoYXR0YWNobWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRzLmZvckVhY2goKGF0dGFjaG1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEFtb3VudCArPSBhdHRhY2htZW50LnNpemU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGl0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtcy5mb3JFYWNoKChhdHRhY2htZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxBbW91bnQgKz0gYXR0YWNobWVudC5zaXplO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsQW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSZXF1ZXN0KGZpbGVzOiBGaWxlW10sIGF0dGFjaG1lbnRzOiBGaWxlVmlld01vZGVsW10pOiBGaWxlUmVxdWVzdCB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdDogRmlsZVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZWRCeTogdGhpcy5fYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkLFxyXG4gICAgICAgICAgICBpdGVtczogW11cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG90aGVyRmlsZXM6IEZpbGVWaWV3TW9kZWxbXSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWxlc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzW2ldKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0U3RyaW5nID0gPHN0cmluZz5yZWFkZXIucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlICYmIEZpbGVDb25zdC5BY2NlcHRlZEZpbGVzLmluZGV4T2YoZmlsZXNbaV0udHlwZSkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Lml0ZW1zLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZXNbaV0uc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaWxlc1tpXS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYmFzZTY0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVzW2ldLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG90aGVyRmlsZXMucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlc1tpXS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGZpbGVzW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBiYXNlNjRTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZXNbaV0ubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoYXR0YWNobWVudHMpIHtcclxuICAgICAgICAgICAgYXR0YWNobWVudHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEF0dGFjaG1lbnQgPSByZXF1ZXN0Lml0ZW1zLmZpbmQocyA9PiBzLnNyYyA9PSBpdGVtLnNyYyAmJiBzLm5hbWUgPT0gaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmICghY3VycmVudEF0dGFjaG1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Lml0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdC5vdGhlcnMgPSBvdGhlckZpbGVzO1xyXG4gICAgICAgIHJldHVybiByZXF1ZXN0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ==