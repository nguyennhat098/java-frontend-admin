/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/aggregator.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, EventEmitter } from '@angular/core';
import { AggregatorViewModel } from '../models/base.model';
import * as i0 from "@angular/core";
export class AggregatorService {
    constructor() {
        this.emitters = [];
    }
    /**
     * @template T
     * @param {?} key
     * @param {?=} value
     * @return {?}
     */
    publish(key, value) {
        if (!key)
            return;
        /** @type {?} */
        let currentEmitter = (/** @type {?} */ (this.emitters.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key))));
        if (!currentEmitter) {
            currentEmitter = new AggregatorViewModel({
                value: this.register(key)
            });
        }
        currentEmitter.value.emit(value);
    }
    /**
     * @template T
     * @param {?} key
     * @param {?} callback
     * @return {?}
     */
    subscribe(key, callback) {
        if (!key)
            return;
        /** @type {?} */
        let index = this.emitters.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key));
        if (index > -1) {
            this.emitters.splice(index, 1);
        }
        /** @type {?} */
        var currentEmitter = new AggregatorViewModel({
            value: this.register(key)
        });
        currentEmitter.value.subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            callback(response);
        }));
    }
    /**
     * @param {?} key
     * @return {?}
     */
    hasKey(key) {
        return this.emitters.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.key == key)) > -1;
    }
    /**
     * @private
     * @param {?} key
     * @return {?}
     */
    register(key) {
        /** @type {?} */
        var emitter = new AggregatorViewModel({
            key: key,
            value: new EventEmitter()
        });
        this.emitters.push(emitter);
        return emitter.value;
    }
}
AggregatorService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ AggregatorService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AggregatorService_Factory() { return new AggregatorService(); }, token: AggregatorService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AggregatorService.prototype.emitters;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdncmVnYXRvci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvYWdncmVnYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRzNELE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7UUFFYyxhQUFRLEdBQTBCLEVBQUUsQ0FBQztLQXVDbEQ7Ozs7Ozs7SUFyQ1UsT0FBTyxDQUFJLEdBQVcsRUFBRSxLQUFTO1FBQ3BDLElBQUksQ0FBQyxHQUFHO1lBQUUsT0FBTzs7WUFDYixjQUFjLEdBQUcsbUJBQXFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUMsRUFBQTtRQUMvRSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ2pCLGNBQWMsR0FBRyxJQUFJLG1CQUFtQixDQUFDO2dCQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7YUFDNUIsQ0FBQyxDQUFDO1NBQ047UUFDRCxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7Ozs7O0lBRU0sU0FBUyxDQUFJLEdBQVcsRUFBRSxRQUErQjtRQUM1RCxJQUFJLENBQUMsR0FBRztZQUFFLE9BQU87O1lBQ2IsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUM7UUFDdEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbEM7O1lBQ0csY0FBYyxHQUFHLElBQUksbUJBQW1CLENBQUM7WUFDekMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1NBQzVCLENBQUM7UUFDRixjQUFjLENBQUMsS0FBSyxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVcsRUFBRSxFQUFFO1lBQzNDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRU0sTUFBTSxDQUFDLEdBQVc7UUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRU8sUUFBUSxDQUFDLEdBQVc7O1lBQ3BCLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDO1lBQ2xDLEdBQUcsRUFBRSxHQUFHO1lBQ1IsS0FBSyxFQUFFLElBQUksWUFBWSxFQUFPO1NBQ2pDLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7O1lBeENKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7O0lBRTlCLHFDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEFnZ3JlZ2F0b3JTZXJ2aWNlIHtcclxuICAgIHByb3RlY3RlZCBlbWl0dGVyczogQWdncmVnYXRvclZpZXdNb2RlbFtdID0gW107XHJcblxyXG4gICAgcHVibGljIHB1Ymxpc2g8VD4oa2V5OiBzdHJpbmcsIHZhbHVlPzogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmICgha2V5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGN1cnJlbnRFbWl0dGVyID0gPEFnZ3JlZ2F0b3JWaWV3TW9kZWw+dGhpcy5lbWl0dGVycy5maW5kKHMgPT4gcy5rZXkgPT0ga2V5KTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRFbWl0dGVyKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRFbWl0dGVyID0gbmV3IEFnZ3JlZ2F0b3JWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucmVnaXN0ZXIoa2V5KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudEVtaXR0ZXIudmFsdWUuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN1YnNjcmliZTxUPihrZXk6IHN0cmluZywgY2FsbGJhY2s6IChyZXNwb25zZTogVCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIGlmICgha2V5KSByZXR1cm47XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5lbWl0dGVycy5maW5kSW5kZXgocyA9PiBzLmtleSA9PSBrZXkpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGN1cnJlbnRFbWl0dGVyID0gbmV3IEFnZ3JlZ2F0b3JWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5yZWdpc3RlcihrZXkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY3VycmVudEVtaXR0ZXIudmFsdWUuc3Vic2NyaWJlKChyZXNwb25zZTogVCkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc0tleShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmVtaXR0ZXJzLmZpbmRJbmRleChzID0+IHMua2V5ID09IGtleSkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZ2lzdGVyKGtleTogc3RyaW5nKTogRXZlbnRFbWl0dGVyPGFueT4ge1xyXG4gICAgICAgIHZhciBlbWl0dGVyID0gbmV3IEFnZ3JlZ2F0b3JWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgdmFsdWU6IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0dGVycy5wdXNoKGVtaXR0ZXIpO1xyXG4gICAgICAgIHJldHVybiBlbWl0dGVyLnZhbHVlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==