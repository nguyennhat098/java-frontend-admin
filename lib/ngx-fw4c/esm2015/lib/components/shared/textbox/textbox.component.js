/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/textbox/textbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild, ViewChild, ElementRef } from '@angular/core';
import { FormDirectorExtraItemDirective } from '../form';
import { ActionService } from '../services/action.service';
import { DataService } from '../services/data.service';
export class TextboxComponent {
    /**
     * @param {?} _actionService
     * @param {?} _dataService
     */
    constructor(_actionService, _dataService) {
        this._actionService = _actionService;
        this._dataService = _dataService;
        this.type = 'text';
        this.placeholder = 'Please input...';
        this.readonly = false;
        this.disabled = false;
        this.maxCharacters = 100;
        this.defaultIfEmpty = 0;
        this.direction = 'vertical';
        this.alignVertical = true;
        this.emitNullOnDestroy = false;
        this.modelChange = new EventEmitter();
        this.typing = new EventEmitter();
        this.enter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.focus) {
            this._actionService.executeAsync((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                var elements = document.getElementsByTagName('input');
                if (elements) {
                    for (let i = 0; i < elements.length; i++) {
                        if (elements[i].id == this.item.id) {
                            elements[i].focus();
                            break;
                        }
                    }
                }
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.emitNullOnDestroy === true) {
            this.modelChange.emit(null);
        }
    }
    /**
     * @return {?}
     */
    setDefault() {
        if (this.defaultIfEmpty && !this.model)
            this.model = this.defaultIfEmpty;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyup($event) {
        this._dataService.initDebounceTime(500).next((/**
         * @return {?}
         */
        () => {
            this.typing.emit(this.model + $event.which);
        }));
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleEnter($event) {
        if ($event.which == 13) {
            $event.preventDefault();
            this.enter.emit(this.model);
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    submitNumeric(newValue) {
        if (this.minNumber && newValue < this.minNumber) {
            this.modelChange.emit(+this.minNumber);
            event.preventDefault();
            return;
        }
        if (this.maxNumber && newValue > this.maxNumber) {
            this.modelChange.emit(+this.maxNumber);
            event.preventDefault();
            return;
        }
        this.modelChange.emit(+newValue);
    }
    /**
     * @return {?}
     */
    getElement() {
        /** @type {?} */
        var elements = document.getElementsByTagName('input');
        if (elements) {
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].id == this.item.id) {
                    return elements[i];
                }
            }
        }
    }
}
TextboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-textbox',
                template: "<katana-form-director [title]=\"title\" [direction]=\"direction\" [alignVertical]=\"alignVertical\"\r\n  [description]=\"description\" [extraLabelItem]=\"extraLabelItem\">\r\n  <ng-container *ngIf=\"!readonly; else textLabel\">\r\n    <div [ngClass]=\"suffix ? 'input-group' : null\">\r\n      <ng-container [ngSwitch]=\"type\">\r\n        <input #element (blur)=\"setDefault()\" (keypress)=\"handleEnter($event)\" *ngSwitchCase=\"'text'\" id=\"{{item?.id}}\"\r\n          class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\" type=\"text\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input #element (blur)=\"setDefault()\" (keypress)=\"handleEnter($event)\" *ngSwitchCase=\"'password'\"\r\n          id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"password\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input (blur)=\"setDefault()\" (keypress)=\"handleEnter($event)\" #element *ngSwitchCase=\"'number'\"\r\n          id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"number\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\" (focusout)=\"submitNumeric($event.target.value)\"\r\n          [attr.name]=\"controlName\" [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input (blur)=\"setDefault()\" (keypress)=\"handleEnter($event)\" #element *ngSwitchCase=\"'currency'\"\r\n          id=\"{{item?.id}}\" class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"submitNumeric($event)\" currencyMask [attr.maxlength]=\"maxCharacters\"\r\n          [attr.min]=\"minNumber\" [attr.max]=\"maxNumber\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n\r\n        <input (blur)=\"setDefault()\" (keypress)=\"handleEnter($event)\" #element *ngSwitchCase=\"'phone'\" id=\"{{item?.id}}\"\r\n          class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"text\" [(ngModel)]=\"model\"\r\n          (ngModelChange)=\"modelChange.emit($event)\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          mask=\"0000000000\" [attr.scope]=\"validationScope ? validationScope : null\" placeholder=\"V\u00ED d\u1EE5 097123456\" />\r\n\r\n        <input (blur)=\"setDefault()\" (keypress)=\"handleEnter($event)\" #element *ngSwitchCase=\"'email'\" id=\"{{item?.id}}\"\r\n          class=\"form-control\" spellcheck=\"false\" [disabled]=\"disabled\"\r\n          [attr.validation-name]=\"validationName ? validationName : title\" type=\"email\" [placeholder]=\"placeholder\"\r\n          [(ngModel)]=\"model\" (ngModelChange)=\"modelChange.emit($event)\"\r\n          pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [attr.maxlength]=\"maxCharacters\" [attr.name]=\"controlName\"\r\n          [attr.scope]=\"validationScope ? validationScope : null\" />\r\n      </ng-container>\r\n      <ng-container *ngIf=\"suffix\">\r\n        <span class=\"input-group-addon custom-suffix\">{{suffix}}</span>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  <ng-template #textLabel>\r\n    <ng-container [ngSwitch]=\"type\">\r\n      <label *ngSwitchCase=\"'text'\">{{model}}</label>\r\n      <label *ngSwitchCase=\"'currency'\">{{model | number: '1.0'}}</label>\r\n    </ng-container>\r\n  </ng-template>\r\n</katana-form-director>",
                styles: [".custom-suffix{background-color:#e2e2e2;color:#545454;font-weight:500;line-height:32px;padding:0 8px;letter-spacing:1px;border-radius:0 3px 3px 0}"]
            }] }
];
/** @nocollapse */
TextboxComponent.ctorParameters = () => [
    { type: ActionService },
    { type: DataService }
];
TextboxComponent.propDecorators = {
    title: [{ type: Input }],
    model: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    readonly: [{ type: Input }],
    disabled: [{ type: Input }],
    maxCharacters: [{ type: Input }],
    minNumber: [{ type: Input }],
    maxNumber: [{ type: Input }],
    defaultIfEmpty: [{ type: Input }],
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    direction: [{ type: Input }],
    alignVertical: [{ type: Input }],
    controlName: [{ type: Input }],
    description: [{ type: Input }],
    emitNullOnDestroy: [{ type: Input }],
    suffix: [{ type: Input }],
    item: [{ type: Input }],
    focus: [{ type: Input }],
    modelChange: [{ type: Output }],
    typing: [{ type: Output }],
    enter: [{ type: Output }],
    extraLabelItem: [{ type: ContentChild, args: [FormDirectorExtraItemDirective, { static: true },] }],
    itemRef: [{ type: ViewChild, args: ['itemRef', { static: true },] }]
};
if (false) {
    /** @type {?} */
    TextboxComponent.prototype.title;
    /** @type {?} */
    TextboxComponent.prototype.model;
    /** @type {?} */
    TextboxComponent.prototype.type;
    /** @type {?} */
    TextboxComponent.prototype.name;
    /** @type {?} */
    TextboxComponent.prototype.placeholder;
    /** @type {?} */
    TextboxComponent.prototype.readonly;
    /** @type {?} */
    TextboxComponent.prototype.disabled;
    /** @type {?} */
    TextboxComponent.prototype.maxCharacters;
    /** @type {?} */
    TextboxComponent.prototype.minNumber;
    /** @type {?} */
    TextboxComponent.prototype.maxNumber;
    /** @type {?} */
    TextboxComponent.prototype.defaultIfEmpty;
    /** @type {?} */
    TextboxComponent.prototype.validationName;
    /** @type {?} */
    TextboxComponent.prototype.validationScope;
    /** @type {?} */
    TextboxComponent.prototype.direction;
    /** @type {?} */
    TextboxComponent.prototype.alignVertical;
    /** @type {?} */
    TextboxComponent.prototype.controlName;
    /** @type {?} */
    TextboxComponent.prototype.description;
    /** @type {?} */
    TextboxComponent.prototype.emitNullOnDestroy;
    /** @type {?} */
    TextboxComponent.prototype.suffix;
    /** @type {?} */
    TextboxComponent.prototype.item;
    /** @type {?} */
    TextboxComponent.prototype.focus;
    /** @type {?} */
    TextboxComponent.prototype.modelChange;
    /** @type {?} */
    TextboxComponent.prototype.typing;
    /** @type {?} */
    TextboxComponent.prototype.enter;
    /** @type {?} */
    TextboxComponent.prototype.extraLabelItem;
    /** @type {?} */
    TextboxComponent.prototype.itemRef;
    /**
     * @type {?}
     * @private
     */
    TextboxComponent.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    TextboxComponent.prototype._dataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC90ZXh0Ym94L3RleHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBYSxZQUFZLEVBQStCLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEosT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFRdkQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUE0QjNCLFlBQ1UsY0FBNkIsRUFDN0IsWUFBeUI7UUFEekIsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0IsaUJBQVksR0FBWixZQUFZLENBQWE7UUEzQm5CLFNBQUksR0FBb0UsTUFBTSxDQUFDO1FBRS9FLGdCQUFXLEdBQVcsaUJBQWlCLENBQUM7UUFDeEMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsR0FBRyxDQUFDO1FBRzVCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRzNCLGNBQVMsR0FBOEIsVUFBVSxDQUFDO1FBQ2xELGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUlsQyxnQkFBVyxHQUFrQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ2hFLFdBQU0sR0FBa0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMzRCxVQUFLLEdBQWtDLElBQUksWUFBWSxFQUFFLENBQUM7SUFPdkUsQ0FBQzs7OztJQUVMLGVBQWU7UUFDYixJQUFJLElB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IE9uRGVzdHJveSwgQ29udGVudENoaWxkLCBBZnRlclZpZXdJbml0LCBWaWV3Q2hpbGRyZW4sIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtRGlyZWN0b3JFeHRyYUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuLi9mb3JtJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdrYXRhbmEtdGV4dGJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHRib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RleHRib3guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtb2RlbDogc3RyaW5nIHwgbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0eXBlOiAndGV4dCcgfCAnY3VycmVuY3knIHwgJ3Bob25lJyB8ICdlbWFpbCcgfCAnbnVtYmVyJyB8ICdwYXNzd29yZCcgPSAndGV4dCc7XHJcbiAgQElucHV0KCkgcHVibGljIG5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgcGxhY2Vob2xkZXI6IHN0cmluZyA9ICdQbGVhc2UgaW5wdXQuLi4nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhDaGFyYWN0ZXJzOiBudW1iZXIgPSAxMDA7XHJcbiAgQElucHV0KCkgcHVibGljIG1pbk51bWJlcjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBtYXhOdW1iZXI6IG51bWJlcjtcclxuICBASW5wdXQoKSBwdWJsaWMgZGVmYXVsdElmRW1wdHk6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHZhbGlkYXRpb25TY29wZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBhbGlnblZlcnRpY2FsOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBwdWJsaWMgY29udHJvbE5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgZW1pdE51bGxPbkRlc3Ryb3k6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBwdWJsaWMgc3VmZml4OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGl0ZW06IGFueTtcclxuICBASW5wdXQoKSBwdWJsaWMgZm9jdXM6IGJvb2xlYW47XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBtb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyB0eXBpbmc6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBwdWJsaWMgZW50ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBDb250ZW50Q2hpbGQoRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBleHRyYUxhYmVsSXRlbTogRm9ybURpcmVjdG9yRXh0cmFJdGVtRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ2l0ZW1SZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgaXRlbVJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9hY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5fYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICAgIHZhciBlbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbnB1dCcpO1xyXG4gICAgICAgIGlmIChlbGVtZW50cykge1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudHNbaV0uaWQgPT0gdGhpcy5pdGVtLmlkKSB7XHJcbiAgICAgICAgICAgICAgZWxlbWVudHNbaV0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVtaXROdWxsT25EZXN0cm95ID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdChudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXREZWZhdWx0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGVmYXVsdElmRW1wdHkgJiYgIXRoaXMubW9kZWwpIHRoaXMubW9kZWwgPSB0aGlzLmRlZmF1bHRJZkVtcHR5O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhbmRsZUtleXVwKCRldmVudDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRhU2VydmljZS5pbml0RGVib3VuY2VUaW1lKDUwMCkubmV4dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMudHlwaW5nLmVtaXQodGhpcy5tb2RlbCArICRldmVudC53aGljaCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVFbnRlcigkZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudC53aGljaCA9PSAxMykge1xyXG4gICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5lbnRlci5lbWl0KHRoaXMubW9kZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN1Ym1pdE51bWVyaWMobmV3VmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMubWluTnVtYmVyICYmIG5ld1ZhbHVlIDwgdGhpcy5taW5OdW1iZXIpIHtcclxuICAgICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KCt0aGlzLm1pbk51bWJlcik7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1heE51bWJlciAmJiBuZXdWYWx1ZSA+IHRoaXMubWF4TnVtYmVyKSB7XHJcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCgrdGhpcy5tYXhOdW1iZXIpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoK25ld1ZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRFbGVtZW50KCk6IGFueSB7XHJcbiAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKTtcclxuICAgIGlmIChlbGVtZW50cykge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnRzW2ldLmlkID09IHRoaXMuaXRlbS5pZCkge1xyXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=