/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/editor/editor.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import * as Editor from '@ckeditor/ckeditor5-build-classic';
import { FileService } from '../file';
import { EditorAdapter } from './editor.adaptor';
import { AuthenticationService } from '../../auth/auth.service';
import { ActionService } from '../services/action.service';
export class EditorComponent {
    /**
     * @param {?} fileService
     * @param {?} authenticationService
     * @param {?} _actionService
     */
    constructor(fileService, authenticationService, _actionService) {
        this.fileService = fileService;
        this.authenticationService = authenticationService;
        this._actionService = _actionService;
        this.model = '';
        this.disabled = false;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.plainTextChange = new EventEmitter();
        this.editor = Editor;
        this.config = {
            height: '600px'
        };
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true)
            this.modelChange.emit(null);
    }
    /**
     * @param {?} html
     * @return {?}
     */
    change(html) {
        /** @type {?} */
        const plainText = this.nativeEditor.elementRef.nativeElement.textContent;
        this.plainTextChange.emit(plainText);
        this.modelChange.emit(html);
    }
    /**
     * @param {?} event
     * @param {?} fileService
     * @param {?} authenticationService
     * @return {?}
     */
    ready(event, fileService, authenticationService) {
        event.plugins.get('FileRepository').createUploadAdapter = (/**
         * @param {?} loader
         * @return {?}
         */
        function (loader) {
            return new EditorAdapter(loader, fileService, authenticationService);
        });
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            () => {
                event.ui.getEditableElement().focus();
            }));
        }
    }
    /**
     * @return {?}
     */
    getElement() {
        return this.nativeEditor.elementRef.nativeElement;
    }
}
EditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-editor',
                template: "<div class=\"form-group\">\r\n  <label *ngIf=\"title\">{{title}}</label>\r\n  <ckeditor #nativeEditor [class.disabled]=\"disabled\" [config]=\"config\" [attr.validation-name]=\"validationName\"\r\n    [disabled]=\"disabled\" [editor]=\"editor\" [ngModel]=\"model\" (ngModelChange)=\"change($event)\"\r\n    [attr.scope]=\"validationScope ? validationScope : null\" (ready)=\"ready($event, fileService, authenticationService)\">\r\n  </ckeditor>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
EditorComponent.ctorParameters = () => [
    { type: FileService },
    { type: AuthenticationService },
    { type: ActionService }
];
EditorComponent.propDecorators = {
    nativeEditor: [{ type: ViewChild, args: ['nativeEditor', { static: true },] }],
    model: [{ type: Input }],
    plainText: [{ type: Input }],
    title: [{ type: Input }],
    disabled: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    modelChange: [{ type: Output }],
    focus: [{ type: Input }],
    plainTextChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    EditorComponent.prototype.nativeEditor;
    /** @type {?} */
    EditorComponent.prototype.model;
    /** @type {?} */
    EditorComponent.prototype.plainText;
    /** @type {?} */
    EditorComponent.prototype.title;
    /** @type {?} */
    EditorComponent.prototype.disabled;
    /** @type {?} */
    EditorComponent.prototype.validationName;
    /** @type {?} */
    EditorComponent.prototype.validationScope;
    /** @type {?} */
    EditorComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    EditorComponent.prototype.modelChange;
    /** @type {?} */
    EditorComponent.prototype.focus;
    /** @type {?} */
    EditorComponent.prototype.plainTextChange;
    /** @type {?} */
    EditorComponent.prototype.editor;
    /** @type {?} */
    EditorComponent.prototype.config;
    /** @type {?} */
    EditorComponent.prototype.fileService;
    /** @type {?} */
    EditorComponent.prototype.authenticationService;
    /**
     * @type {?}
     * @private
     */
    EditorComponent.prototype._actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL2VkaXRvci9lZGl0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBYSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxLQUFLLE1BQU0sTUFBTSxtQ0FBbUMsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFRM0QsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQWlCMUIsWUFDUyxXQUF3QixFQUN4QixxQkFBNEMsRUFDM0MsY0FBNkI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUMzQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWxCdkIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUduQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR2pDLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQixnQkFBVyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXZELG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDckUsV0FBTSxHQUFHLE1BQU0sQ0FBQztRQUNoQixXQUFNLEdBQVE7WUFDbkIsTUFBTSxFQUFFLE9BQU87U0FDaEIsQ0FBQztJQU1FLENBQUM7Ozs7SUFFTCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7OztJQUVNLE1BQU0sQ0FBQyxJQUFZOztjQUNsQixTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVc7UUFDeEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Ozs7OztJQUVNLEtBQUssQ0FBQyxLQUFVLEVBQUUsV0FBd0IsRUFBRSxxQkFBNEM7UUFDN0YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxtQkFBbUI7Ozs7UUFBRyxVQUFVLE1BQVc7WUFDN0UsT0FBTyxJQUFJLGFBQWEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDdkUsQ0FBQyxDQUFBLENBQUM7UUFDRixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztZQUFDLEdBQUcsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBRU0sVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3BELENBQUM7OztZQXJERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGtkQUFzQzs7YUFFdkM7Ozs7WUFUUSxXQUFXO1lBRVgscUJBQXFCO1lBQ3JCLGFBQWE7OzsyQkFTbkIsU0FBUyxTQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7b0JBQzFDLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzs4QkFDTCxLQUFLO2dDQUNMLEtBQUs7MEJBQ0wsTUFBTTtvQkFDTixLQUFLOzhCQUNMLE1BQU07Ozs7SUFWUCx1Q0FBc0U7O0lBQ3RFLGdDQUFtQzs7SUFDbkMsb0NBQWtDOztJQUNsQyxnQ0FBOEI7O0lBQzlCLG1DQUEwQzs7SUFDMUMseUNBQXVDOztJQUN2QywwQ0FBd0M7O0lBQ3hDLDRDQUE0Qzs7SUFDNUMsc0NBQXdFOztJQUN4RSxnQ0FBK0I7O0lBQy9CLDBDQUE0RTs7SUFDNUUsaUNBQXVCOztJQUN2QixpQ0FFRTs7SUFHQSxzQ0FBK0I7O0lBQy9CLGdEQUFtRDs7Ozs7SUFDbkQseUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAqIGFzIEVkaXRvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWJ1aWxkLWNsYXNzaWMnO1xyXG5pbXBvcnQgeyBGaWxlU2VydmljZSB9IGZyb20gJy4uL2ZpbGUnO1xyXG5pbXBvcnQgeyBFZGl0b3JBZGFwdGVyIH0gZnJvbSAnLi9lZGl0b3IuYWRhcHRvcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZWRpdG9yLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIEBWaWV3Q2hpbGQoJ25hdGl2ZUVkaXRvcicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBuYXRpdmVFZGl0b3I6IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgbW9kZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBwbGFpblRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgdmFsaWRhdGlvblNjb3BlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcHVibGljIG1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBwdWJsaWMgZm9jdXM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBwbGFpblRleHRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIHB1YmxpYyBlZGl0b3IgPSBFZGl0b3I7XHJcbiAgcHVibGljIGNvbmZpZzogYW55ID0ge1xyXG4gICAgaGVpZ2h0OiAnNjAwcHgnXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLFxyXG4gICAgcHVibGljIGF1dGhlbnRpY2F0aW9uU2VydmljZTogQXV0aGVudGljYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgaWYgKHRoaXMuZW1pdE51bGxPbkRlc3Ryb3kgPT09IHRydWUpXHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2UoaHRtbDogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBwbGFpblRleHQgPSB0aGlzLm5hdGl2ZUVkaXRvci5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICB0aGlzLnBsYWluVGV4dENoYW5nZS5lbWl0KHBsYWluVGV4dCk7XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoaHRtbCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVhZHkoZXZlbnQ6IGFueSwgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSk6IHZvaWQge1xyXG4gICAgZXZlbnQucGx1Z2lucy5nZXQoJ0ZpbGVSZXBvc2l0b3J5JykuY3JlYXRlVXBsb2FkQWRhcHRlciA9IGZ1bmN0aW9uIChsb2FkZXI6IGFueSkge1xyXG4gICAgICByZXR1cm4gbmV3IEVkaXRvckFkYXB0ZXIobG9hZGVyLCBmaWxlU2VydmljZSwgYXV0aGVudGljYXRpb25TZXJ2aWNlKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5mb2N1cykge1xyXG4gICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQudWkuZ2V0RWRpdGFibGVFbGVtZW50KCkuZm9jdXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0RWxlbWVudCgpOiBhbnkge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRWRpdG9yLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICB9XHJcbn0iXX0=