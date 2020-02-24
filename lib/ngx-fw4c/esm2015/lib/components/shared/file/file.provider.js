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
export class FileProvider {
    /**
     * @param {?} _fileService
     * @param {?} _modalService
     * @param {?} _actionService
     * @param {?} _authenticationService
     */
    constructor(_fileService, _modalService, _actionService, _authenticationService) {
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
    uploadAsync(files, attachments, fileRef, callback) {
        /** @type {?} */
        var request = this.buildRequest(files, attachments);
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const totalAttachmentSize = this.calculateTotalBytes(attachments, request.items);
            if (totalAttachmentSize > FileConst.MaxSize * 1024 * 1024) {
                this._modalService.showNotificationDialog({
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
                    this.uploadFileAsync(request, fileRef, callback);
                }
                else {
                    /** @type {?} */
                    let otherTypes = '';
                    request.others.forEach((/**
                     * @param {?} file
                     * @return {?}
                     */
                    file => {
                        if (file) {
                            if (otherTypes.indexOf(file.type) == -1) {
                                otherTypes += file.type + '|';
                            }
                        }
                    }));
                    if (otherTypes)
                        otherTypes = otherTypes.substring(0, otherTypes.length - 1);
                    if (request.items.length == 0) {
                        this._modalService.showNotificationDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes + '</span>.',
                            btnTitle: 'Đóng'
                        });
                        if (callback) {
                            callback();
                        }
                    }
                    else {
                        this._modalService.showConfirmDialog({
                            autoClose: true,
                            title: 'Thông báo',
                            message: 'Có <span class="text-bold text-primary">' + request.others.length + '</span> định dạng tệp tin không hợp lệ <span class="text-bold text-primary">' + otherTypes + '</span>.<br/> Bạn có muốn tiếp tục tải tệp tin khác không?',
                            btnAcceptTitle: 'Tiếp tục',
                            btnCancelTitle: 'Hủy',
                            acceptCallback: (/**
                             * @return {?}
                             */
                            () => {
                                this.uploadFileAsync(request, fileRef, callback);
                            })
                        });
                        if (callback) {
                            callback();
                        }
                    }
                }
            }
        }));
    }
    /**
     * @private
     * @param {?} request
     * @param {?} fileRef
     * @param {?=} callback
     * @return {?}
     */
    uploadFileAsync(request, fileRef, callback) {
        this._fileService.uploadFiles(request).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
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
                (item) => {
                    /** @type {?} */
                    const currentAttachment = request.items.find((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s.src == item.src && s.name == item.name));
                    if (!currentAttachment) {
                        request.items.push(item);
                    }
                }));
            }
        }));
    }
    /**
     * @private
     * @param {?} attachments
     * @param {?=} items
     * @return {?}
     */
    calculateTotalBytes(attachments, items) {
        /** @type {?} */
        let totalAmount = 0;
        if (attachments) {
            if (attachments) {
                attachments.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                (attachment) => {
                    totalAmount += attachment.size;
                }));
            }
            if (items) {
                items.forEach((/**
                 * @param {?} attachment
                 * @return {?}
                 */
                (attachment) => {
                    totalAmount += attachment.size;
                }));
            }
        }
        return totalAmount;
    }
    /**
     * @private
     * @param {?} files
     * @param {?} attachments
     * @return {?}
     */
    buildRequest(files, attachments) {
        /** @type {?} */
        const request = {
            createdBy: this._authenticationService.currentUser.id,
            items: []
        };
        /** @type {?} */
        const otherFiles = [];
        for (let i = 0; i < files.length; i++) {
            if (files[i]) {
                /** @type {?} */
                const reader = new FileReader();
                reader.readAsDataURL(files[i]);
                reader.onloadend = (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const base64String = (/** @type {?} */ (reader.result));
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
        }
        if (attachments) {
            attachments.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                /** @type {?} */
                const currentAttachment = request.items.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => s.src == item.src && s.name == item.name));
                if (!currentAttachment) {
                    request.items.push(item);
                }
            }));
        }
        request.others = otherFiles;
        return request;
    }
}
FileProvider.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FileProvider.ctorParameters = () => [
    { type: FileService },
    { type: ModalService },
    { type: ActionService },
    { type: AuthenticationService }
];
/** @nocollapse */ FileProvider.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileProvider_Factory() { return new FileProvider(i0.ɵɵinject(i1.FileService), i0.ɵɵinject(i2.ModalService), i0.ɵɵinject(i3.ActionService), i0.ɵɵinject(i4.AuthenticationService)); }, token: FileProvider, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2ZpbGUvZmlsZS5wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFekMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7OztBQUczRCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQUNyQixZQUNZLFlBQXlCLEVBQ3pCLGFBQTJCLEVBQzNCLGNBQTZCLEVBQzdCLHNCQUE2QztRQUg3QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUMzQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXVCO0lBQ3JELENBQUM7Ozs7Ozs7O0lBRUUsV0FBVyxDQUFDLEtBQWEsRUFBRSxXQUE0QixFQUFFLE9BQVksRUFBRSxRQUFvQjs7WUFDMUYsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztRQUNuRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztRQUFDLEdBQUcsRUFBRTs7a0JBQzVCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNoRixJQUFJLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFB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QUNuQixpQkFBaUIsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUk7Ozs7Z0JBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFDO2dCQUMzRixJQUFJLENBQUMsaUJBQWlCLEVBQUU7b0JBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1QjtZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ047UUFFRCxPQUFPLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOzs7WUF2SkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQVB6QixXQUFXO1lBQ1gsWUFBWTtZQUlaLGFBQWE7WUFEYixxQkFBcUI7Ozs7Ozs7O0lBTXRCLG9DQUFpQzs7Ozs7SUFDakMscUNBQW1DOzs7OztJQUNuQyxzQ0FBcUM7Ozs7O0lBQ3JDLDhDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRmlsZVNlcnZpY2UgfSBmcm9tICcuL2ZpbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uL21vZGFscyc7XHJcbmltcG9ydCB7IEZpbGVWaWV3TW9kZWwsIEZpbGVSZXF1ZXN0IH0gZnJvbSAnLi9maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgRmlsZUNvbnN0IH0gZnJvbSAnLi9maWxlLmNvbnN0JztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEZpbGVQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9maWxlU2VydmljZTogRmlsZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZVxyXG4gICAgKSB7IH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkQXN5bmMoZmlsZXM6IEZpbGVbXSwgYXR0YWNobWVudHM6IEZpbGVWaWV3TW9kZWxbXSwgZmlsZVJlZjogYW55LCBjYWxsYmFjaz86ICgpID0+IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5idWlsZFJlcXVlc3QoZmlsZXMsIGF0dGFjaG1lbnRzKTtcclxuICAgICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsQXR0YWNobWVudFNpemUgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsQnl0ZXMoYXR0YWNobWVudHMsIHJlcXVlc3QuaXRlbXMpO1xyXG4gICAgICAgICAgICBpZiAodG90YWxBdHRhY2htZW50U2l6ZSA+IEZpbGVDb25zdC5NYXhTaXplICogMTAyNCAqIDEwMjQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21vZGFsU2VydmljZS5zaG93Tm90aWZpY2F0aW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUaMO0bmcgYsOhbycsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0R1bmcgbMaw4bujbmcga2jDtG5nIMSRxrDhu6NjIHbGsOG7o3QgcXXDoSA8c3BhbiBjbGFzcz1cInRleHQtYm9sZCB0ZXh0LXByaW1hcnlcIj4nICsgRmlsZUNvbnN0Lk1heFNpemUgKyAnPC9zcGFuPiBNQi4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ0blRpdGxlOiAnxJDDs25nJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVlc3Qub3RoZXJzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlQXN5bmMocmVxdWVzdCwgZmlsZVJlZiwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3RoZXJUeXBlcyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Qub3RoZXJzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXJUeXBlcy5pbmRleE9mKGZpbGUudHlwZSkgPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlclR5cGVzICs9IGZpbGUudHlwZSArICd8JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdGhlclR5cGVzKSBvdGhlclR5cGVzID0gb3RoZXJUeXBlcy5zdWJzdHJpbmcoMCwgb3RoZXJUeXBlcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWVzdC5pdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd05vdGlmaWNhdGlvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ2xvc2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1Row7RuZyBiw6FvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfEkOG7i25oIGThuqFuZyB04buHcCB0aW4ga2jDtG5nIGjhu6NwIGzhu4cgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGQgdGV4dC1wcmltYXJ5XCI+JyArIG90aGVyVHlwZXMgKyAnPC9zcGFuPi4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnRuVGl0bGU6ICfEkMOzbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd0NvbmZpcm1EaWFsb2coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0Nsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdUaMO0bmcgYsOhbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ8OzIDxzcGFuIGNsYXNzPVwidGV4dC1ib2xkIHRleHQtcHJpbWFyeVwiPicgKyByZXF1ZXN0Lm90aGVycy5sZW5ndGggKyAnPC9zcGFuPiDEkeG7i25oIGThuqFuZyB04buHcCB0aW4ga2jDtG5nIGjhu6NwIGzhu4cgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGQgdGV4dC1wcmltYXJ5XCI+JyArIG90aGVyVHlwZXMgKyAnPC9zcGFuPi48YnIvPiBC4bqhbiBjw7MgbXXhu5FuIHRp4bq/cCB04bulYyB04bqjaSB04buHcCB0aW4ga2jDoWMga2jDtG5nPycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5BY2NlcHRUaXRsZTogJ1Rp4bq/cCB04bulYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidG5DYW5jZWxUaXRsZTogJ0jhu6d5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdENhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRGaWxlQXN5bmMocmVxdWVzdCwgZmlsZVJlZiwgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGxvYWRGaWxlQXN5bmMocmVxdWVzdDogRmlsZVJlcXVlc3QsIGZpbGVSZWY6IGFueSwgY2FsbGJhY2s/OiAoKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9maWxlU2VydmljZS51cGxvYWRGaWxlcyhyZXF1ZXN0KS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZmlsZVJlZiAmJiBmaWxlUmVmLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmaWxlUmVmLnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEF0dGFjaG1lbnQgPSByZXF1ZXN0Lml0ZW1zLmZpbmQocyA9PiBzLnNyYyA9PSBpdGVtLnNyYyAmJiBzLm5hbWUgPT0gaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRBdHRhY2htZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3QuaXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2FsY3VsYXRlVG90YWxCeXRlcyhhdHRhY2htZW50czogRmlsZVZpZXdNb2RlbFtdLCBpdGVtcz86IEZpbGVWaWV3TW9kZWxbXSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IHRvdGFsQW1vdW50ID0gMDtcclxuICAgICAgICBpZiAoYXR0YWNobWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKGF0dGFjaG1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50cy5mb3JFYWNoKChhdHRhY2htZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxBbW91bnQgKz0gYXR0YWNobWVudC5zaXplO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtcykge1xyXG4gICAgICAgICAgICAgICAgaXRlbXMuZm9yRWFjaCgoYXR0YWNobWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQW1vdW50ICs9IGF0dGFjaG1lbnQuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbEFtb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUmVxdWVzdChmaWxlczogRmlsZVtdLCBhdHRhY2htZW50czogRmlsZVZpZXdNb2RlbFtdKTogRmlsZVJlcXVlc3Qge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3Q6IEZpbGVSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuX2F1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlci5pZCxcclxuICAgICAgICAgICAgaXRlbXM6IFtdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvdGhlckZpbGVzOiBGaWxlVmlld01vZGVsW10gPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZmlsZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1tpXSk7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NFN0cmluZyA9IDxzdHJpbmc+cmVhZGVyLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZSAmJiBGaWxlQ29uc3QuQWNjZXB0ZWRGaWxlcy5pbmRleE9mKGZpbGVzW2ldLnR5cGUpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5pdGVtcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGVzW2ldLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogZmlsZXNbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NFN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlc1tpXS5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdGhlckZpbGVzLnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZXNbaV0uc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBmaWxlc1tpXS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogYmFzZTY0U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVzW2ldLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGF0dGFjaG1lbnRzKSB7XHJcbiAgICAgICAgICAgIGF0dGFjaG1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRBdHRhY2htZW50ID0gcmVxdWVzdC5pdGVtcy5maW5kKHMgPT4gcy5zcmMgPT0gaXRlbS5zcmMgJiYgcy5uYW1lID09IGl0ZW0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRBdHRhY2htZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5pdGVtcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3Qub3RoZXJzID0gb3RoZXJGaWxlcztcclxuICAgICAgICByZXR1cm4gcmVxdWVzdDtcclxuICAgIH1cclxufVxyXG4iXX0=