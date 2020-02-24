/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/radio/radio.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ContentChildren, QueryList, Input, Output, EventEmitter, Directive } from '@angular/core';
import { RadioItemComponent } from './radio-item/radio-item.component';
export class RadioComponent {
    constructor() {
        this.modelChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.items.forEach((/**
         * @param {?} s
         * @param {?} index
         * @return {?}
         */
        (s, index) => {
            s.groupIndex = index;
            if (this.model !== null && this.model !== undefined && this.model === s.value) {
                s.checked = true;
            }
            s.registerSelectedCallback((/**
             * @param {?} componentRef
             * @return {?}
             */
            (componentRef) => {
                this.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                item => {
                    item.checked = false;
                }));
                /** @type {?} */
                let selectedItem = this.items.find((/**
                 * @param {?} y
                 * @return {?}
                 */
                y => y.groupIndex === componentRef.groupIndex));
                selectedItem.checked = true;
                this.model = componentRef.value;
                this.modelChange.emit(componentRef.value);
            }));
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.modelChange.emit(null);
    }
}
RadioComponent.decorators = [
    { type: Directive, args: [{
                selector: 'katana-radio-items'
            },] }
];
RadioComponent.propDecorators = {
    items: [{ type: ContentChildren, args: [RadioItemComponent,] }],
    modelChange: [{ type: Output }],
    model: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    formControlName: [{ type: Input }],
    validationName: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    RadioComponent.prototype.items;
    /** @type {?} */
    RadioComponent.prototype.modelChange;
    /** @type {?} */
    RadioComponent.prototype.model;
    /** @type {?} */
    RadioComponent.prototype.label;
    /** @type {?} */
    RadioComponent.prototype.disabled;
    /** @type {?} */
    RadioComponent.prototype.formControlName;
    /** @type {?} */
    RadioComponent.prototype.validationName;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFvQixlQUFlLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU12RSxNQUFNLE9BQU8sY0FBYztJQUozQjtRQU1xQixnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBNEJ6RSxDQUFDOzs7O0lBckJHLGtCQUFrQjtRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUM1QixDQUFDLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTtnQkFDM0UsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDcEI7WUFDRCxDQUFDLENBQUMsd0JBQXdCOzs7O1lBQUMsQ0FBQyxZQUFnQyxFQUFFLEVBQUU7Z0JBQzVELElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUMsRUFBQyxDQUFDOztvQkFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsS0FBSyxZQUFZLENBQUMsVUFBVSxFQUFDO2dCQUNqRixZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDUCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7O1lBakNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsb0JBQW9CO2FBQ2pDOzs7b0JBR0ksZUFBZSxTQUFDLGtCQUFrQjswQkFDbEMsTUFBTTtvQkFDTixLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7Ozs7SUFOTiwrQkFBaUY7O0lBQ2pGLHFDQUFxRTs7SUFDckUsK0JBQTJCOztJQUMzQiwrQkFBOEI7O0lBQzlCLGtDQUFrQzs7SUFDbEMseUNBQXdDOztJQUN4Qyx3Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGRyZW4sIFF1ZXJ5TGlzdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSYWRpb0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL3JhZGlvLWl0ZW0vcmFkaW8taXRlbS5jb21wb25lbnQnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2thdGFuYS1yYWRpby1pdGVtcydcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgICBAQ29udGVudENoaWxkcmVuKFJhZGlvSXRlbUNvbXBvbmVudCkgcHVibGljIGl0ZW1zOiBRdWVyeUxpc3Q8UmFkaW9JdGVtQ29tcG9uZW50PjtcclxuICAgIEBPdXRwdXQoKSBwdWJsaWMgbW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgQElucHV0KCkgcHVibGljIG1vZGVsOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgbGFiZWw6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIEBJbnB1dCgpIHB1YmxpYyBmb3JtQ29udHJvbE5hbWU6IHN0cmluZztcclxuICAgIEBJbnB1dCgpIHB1YmxpYyB2YWxpZGF0aW9uTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goKHMsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHMuZ3JvdXBJbmRleCA9IGluZGV4O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb2RlbCAhPT0gbnVsbCAmJiB0aGlzLm1vZGVsICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tb2RlbCA9PT0gcy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzLnJlZ2lzdGVyU2VsZWN0ZWRDYWxsYmFjaygoY29tcG9uZW50UmVmOiBSYWRpb0l0ZW1Db21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkSXRlbSA9IHRoaXMuaXRlbXMuZmluZCh5ID0+IHkuZ3JvdXBJbmRleCA9PT0gY29tcG9uZW50UmVmLmdyb3VwSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IGNvbXBvbmVudFJlZi52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChjb21wb25lbnRSZWYudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQobnVsbCk7XHJcbiAgICB9XHJcbn1cclxuIl19