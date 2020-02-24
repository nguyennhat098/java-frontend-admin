/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/cropper/cropper.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild } from "@angular/core";
import { of } from 'rxjs';
import { ImageCropperComponent } from "ngx-image-cropper";
import { ActionService } from '../services/action.service';
export class CropperComponent {
    /**
     * @param {?} _actionService
     */
    constructor(_actionService) {
        this._actionService = _actionService;
        this.cutRatio = 1 / 1;
        this.resizeToWidth = 800;
        this.maintainAspectRatio = true;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.showCropper = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
    }
    /**
     * @param {?} image
     * @return {?}
     */
    setImage(image) {
        this.imageChangedEvent = this.eventFile;
    }
    /**
     * @return {?}
     */
    imageLoaded() {
        this.showCropper = true;
    }
    /**
     * @return {?}
     */
    cropperReady() {
    }
    /**
     * @return {?}
     */
    loadImageFailed() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    /**
     * @return {?}
     */
    isValid() {
        return true;
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.croppedImage);
    }
    /**
     * @return {?}
     */
    getErrors() {
        return of([]);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this._actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            this.imageChangedEvent = this.eventFile;
        }));
    }
}
CropperComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-cropper',
                template: "<image-cropper #cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"maintainAspectRatio\" [aspectRatio]=\"cutRatio\"\r\n               [resizeToWidth]=\"resizeToWidth\" [onlyScaleDown]=\"true\" format=\"png\" (imageCropped)=\"imageCropped($event)\"\r\n               (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>",
                styles: [""]
            }] }
];
/** @nocollapse */
CropperComponent.ctorParameters = () => [
    { type: ActionService }
];
CropperComponent.propDecorators = {
    cropper: [{ type: ViewChild, args: ['cropper', { static: true },] }],
    imageElement: [{ type: Input }],
    eventFile: [{ type: Input }],
    cutRatio: [{ type: Input }],
    resizeToWidth: [{ type: Input }],
    maintainAspectRatio: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CropperComponent.prototype.cropper;
    /** @type {?} */
    CropperComponent.prototype.imageElement;
    /** @type {?} */
    CropperComponent.prototype.eventFile;
    /** @type {?} */
    CropperComponent.prototype.cutRatio;
    /** @type {?} */
    CropperComponent.prototype.resizeToWidth;
    /** @type {?} */
    CropperComponent.prototype.maintainAspectRatio;
    /** @type {?} */
    CropperComponent.prototype.imageChangedEvent;
    /** @type {?} */
    CropperComponent.prototype.croppedImage;
    /** @type {?} */
    CropperComponent.prototype.showCropper;
    /**
     * @type {?}
     * @private
     */
    CropperComponent.prototype._actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JvcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jcm9wcGVyL2Nyb3BwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFxQixNQUFNLG1CQUFtQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVEzRCxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBV3pCLFlBQ1ksY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFSekIsYUFBUSxHQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDekIsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsd0JBQW1CLEdBQVksSUFBSSxDQUFDO1FBQ3BELHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUM1QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUloQixDQUFDOzs7O0lBRUwsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLFFBQVEsQ0FBQyxLQUFVO1FBQ3RCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFTSxXQUFXO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVNLFlBQVk7SUFDbkIsQ0FBQzs7OztJQUVNLGVBQWU7SUFDdEIsQ0FBQzs7Ozs7SUFFTSxZQUFZLENBQUMsS0FBd0I7UUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQ3JDLENBQUM7Ozs7SUFFTSxPQUFPO1FBQ1YsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7OztJQUVNLFFBQVE7UUFDWCxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVNLFNBQVM7UUFDWixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNsQixDQUFDOzs7OztJQUVPLElBQUk7UUFDUixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7OztRQUFDLEdBQUcsRUFBRTtZQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQTNESixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIscVlBQXVDOzthQUUxQzs7OztZQU5RLGFBQWE7OztzQkFTakIsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7MkJBQ3JDLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzRCQUNMLEtBQUs7a0NBQ0wsS0FBSzs7OztJQUxOLG1DQUE4RTs7SUFDOUUsd0NBQStDOztJQUMvQyxxQ0FBK0I7O0lBQy9CLG9DQUF5Qzs7SUFDekMseUNBQTRDOztJQUM1QywrQ0FBb0Q7O0lBQ3BELDZDQUE0Qjs7SUFDNUIsd0NBQXVCOztJQUN2Qix1Q0FBb0I7Ozs7O0lBR2hCLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyQ29tcG9uZW50LCBJbWFnZUNyb3BwZWRFdmVudCB9IGZyb20gXCJuZ3gtaW1hZ2UtY3JvcHBlclwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1jcm9wcGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jcm9wcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2Nyb3BwZXIuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQFZpZXdDaGlsZCgnY3JvcHBlcicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyBjcm9wcGVyOiBJbWFnZUNyb3BwZXJDb21wb25lbnQ7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgaW1hZ2VFbGVtZW50OiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgQElucHV0KCkgcHVibGljIGV2ZW50RmlsZTogYW55O1xyXG4gICAgQElucHV0KCkgcHVibGljIGN1dFJhdGlvOiBudW1iZXIgPSAxIC8gMTtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyByZXNpemVUb1dpZHRoOiBudW1iZXIgPSA4MDA7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbWFpbnRhaW5Bc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XHJcbiAgICBjcm9wcGVkSW1hZ2U6IGFueSA9ICcnO1xyXG4gICAgc2hvd0Nyb3BwZXIgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgICApIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJbWFnZShpbWFnZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IHRoaXMuZXZlbnRGaWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbWFnZUxvYWRlZCgpIHtcclxuICAgICAgICB0aGlzLnNob3dDcm9wcGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JvcHBlclJlYWR5KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkSW1hZ2VGYWlsZWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gb2YodGhpcy5jcm9wcGVkSW1hZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFcnJvcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gdGhpcy5ldmVudEZpbGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19