/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/data.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { ChangeType } from '../enums/base.enum';
import { ObjectChange } from '../models/base.model';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthConst } from '../../auth/auth.const';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
export class DataService {
    /**
     * @param {?} _sanitizer
     */
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    getToken(callback) {
        /** @type {?} */
        var jsonToken = localStorage.getItem(AuthConst.Token);
        /** @type {?} */
        var token = (/** @type {?} */ (JSON.parse(jsonToken)));
        if (callback)
            callback(token);
        return token;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    cloneItem(item) {
        if (!item)
            return null;
        /** @type {?} */
        const response = {};
        /** @type {?} */
        const fields = Object.keys(item);
        if (fields) {
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            (field) => {
                response[field] = item[field];
            }));
        }
        return response;
    }
    /**
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    cloneItems(items, id = true) {
        if (!items || items.length == 0)
            return null;
        /** @type {?} */
        const response = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            var newItem = this.cloneItem(item);
            if (id)
                newItem.id = this.newGuid();
            response.push(newItem);
        }));
        return response;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    transformToSafeHtml(input) {
        return this._sanitizer.bypassSecurityTrustHtml(input);
    }
    /**
     * @param {?=} time
     * @return {?}
     */
    initDebounceTime(time = 500) {
        /** @type {?} */
        const delegator = new Subject();
        delegator.pipe(debounceTime(time)).subscribe((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (action) {
                action();
            }
        }));
        return delegator;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    removeHTML(str) {
        if (!str)
            return str;
        return str.replace(/<\/?[^>]+>/gi, '').replace(/&nbsp;/g, '');
    }
    /**
     * @param {?=} str
     * @return {?}
     */
    removeAllSpaces(str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    }
    /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    replaceAt(s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    }
    /**
     * @param {?} email
     * @return {?}
     */
    isValidEmail(email) {
        if (!email)
            return true;
        /** @type {?} */
        const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    convertUCode(c) {
        if ('aãạàáảăăẵặằẳâẫậầấẩ'.indexOf(c) > -1)
            return 'a';
        if ('dđ'.indexOf(c) > -1)
            return 'd';
        if ('oõọòóỏôỗộồốơỡợờớở'.indexOf(c) > -1)
            return 'o';
        if ('uũụùúủưữựừứửưữựừứử'.indexOf(c) > -1)
            return 'u';
        if ('iĩịìíỉ'.indexOf(c) > -1)
            return 'i';
        if ('yỹỵỳýỷ'.indexOf(c) > -1)
            return 'y';
        if ('eẽẹèéẽêễệềêể'.indexOf(c) > -1)
            return 'e';
        return c;
    }
    /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    fuzzysearch(needle, haystack) {
        /** @type {?} */
        const haystackLC = this.removeAllSpaces(haystack.toLowerCase());
        /** @type {?} */
        const needleLC = this.removeAllSpaces(needle.toLowerCase());
        /** @type {?} */
        const hlen = haystack.length;
        /** @type {?} */
        const nlen = needleLC.length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (let i = 0, j = 0; i < nlen; i++) {
            /** @type {?} */
            const nch = this.convertUCode(needleLC[i]);
            while (j < hlen) {
                if (this.convertUCode(haystackLC[j++]) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            /** @type {?} */
            var r = Math.random() * 16 | 0;
            /** @type {?} */
            var v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    isNullOrEmpty(obj) {
        return obj == null || obj === undefined || obj == '';
    }
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    toPascalCase(text, lowerCase) {
        if (!text)
            return '';
        if (!lowerCase) {
            return text[0].toString().toUpperCase() + text.substring(1, text.length);
        }
        else {
            return text[0].toString().toLowerCase() + text.substring(1, text.length);
        }
    }
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    compareObjects(source, target) {
        /** @type {?} */
        let changes = [];
        /** @type {?} */
        const sourceProperties = Object.getOwnPropertyNames(source);
        /** @type {?} */
        const targetProperties = Object.getOwnPropertyNames(target);
        /** @type {?} */
        const addedProperties = targetProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => sourceProperties.indexOf(x) < 0));
        /** @type {?} */
        const removedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => targetProperties.indexOf(x) < 0));
        /** @type {?} */
        const modifiedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => removedProperties.indexOf(x) < 0));
        for (let property of modifiedProperties) {
            if (!_.isEqual(source[property], target[property])) {
                changes.push(new ObjectChange({
                    propertyName: property,
                    changeType: ChangeType.Update,
                    oldValue: source[property],
                    newValue: target[property]
                }));
            }
        }
        changes.push(...addedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Add,
            oldValue: target[x],
            newValue: target[x]
        }))));
        changes.push(...removedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        x => new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Delete,
            oldValue: source[x],
            newValue: source[x]
        }))));
        return changes;
    }
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    getField(valueRef, lowerCase) {
        if (!valueRef)
            return '';
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isNumber(input) {
        /** @type {?} */
        var regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        return regex.test(input);
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isDigit(input) {
        return /^[0-9]$/.test(input);
    }
}
DataService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
DataService.ctorParameters = () => [
    { type: DomSanitizer }
];
/** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.DomSanitizer)); }, token: DataService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBRSxZQUFZLEVBQVksTUFBTSwyQkFBMkIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUdsRCxNQUFNLE9BQU8sV0FBVzs7OztJQUNwQixZQUNZLFVBQXdCO1FBQXhCLGVBQVUsR0FBVixVQUFVLENBQWM7SUFDaEMsQ0FBQzs7Ozs7SUFFRSxRQUFRLENBQUMsUUFBc0Q7O1lBQzlELFNBQVMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7O1lBQ2pELEtBQUssR0FBRyxtQkFBNkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQTtRQUM5RCxJQUFJLFFBQVE7WUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsSUFBUztRQUN0QixJQUFJLENBQUMsSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDOztjQUNqQixRQUFRLEdBQVEsRUFBRTs7Y0FDbEIsTUFBTSxHQUFHLE1BQU0sQ0FB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QUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLE9BQU8sQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFoTEosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztZQUp6QixZQUFZOzs7Ozs7OztJQU9iLGlDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IENoYW5nZVR5cGUgfSBmcm9tICcuLi9lbnVtcy9iYXNlLmVudW0nO1xyXG5pbXBvcnQgeyBPYmplY3RDaGFuZ2UgfSBmcm9tICcuLi9tb2RlbHMvYmFzZS5tb2RlbCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGgubW9kZWwnO1xyXG5pbXBvcnQgeyBBdXRoQ29uc3QgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguY29uc3QnO1xyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIERhdGFTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyXHJcbiAgICApIHsgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRUb2tlbihjYWxsYmFjaz86ICh0b2tlbjogQXV0aGVudGljYXRpb25Mb2dpblJlc3BvbnNlKSA9PiBhbnkpOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2Uge1xyXG4gICAgICAgIHZhciBqc29uVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShBdXRoQ29uc3QuVG9rZW4pO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IDxBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2U+SlNPTi5wYXJzZShqc29uVG9rZW4pO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodG9rZW4pO1xyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmVJdGVtKGl0ZW06IGFueSk6IGFueSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogYW55ID0ge307XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXMoaXRlbSk7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlW2ZpZWxkXSA9IGl0ZW1bZmllbGRdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZUl0ZW1zKGl0ZW1zOiBhbnlbXSwgaWQ6IGJvb2xlYW4gPSB0cnVlKTogYW55IHtcclxuICAgICAgICBpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgICAgICBjb25zdCByZXNwb25zZTogYW55W10gPSBbXTtcclxuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBuZXdJdGVtID0gdGhpcy5jbG9uZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpZCkgbmV3SXRlbS5pZCA9IHRoaXMubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICByZXNwb25zZS5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJhbnNmb3JtVG9TYWZlSHRtbChpbnB1dDogc3RyaW5nKTogU2FmZUh0bWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0RGVib3VuY2VUaW1lKHRpbWU6IG51bWJlciA9IDUwMCk6IFN1YmplY3Q8YW55PiB7XHJcbiAgICAgICAgY29uc3QgZGVsZWdhdG9yOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdCgpO1xyXG4gICAgICAgIGRlbGVnYXRvci5waXBlKGRlYm91bmNlVGltZSh0aW1lKSkuc3Vic2NyaWJlKChhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gZGVsZWdhdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVIVE1MKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXN0cikgcmV0dXJuIHN0cjtcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLzxcXC8/W14+XSs+L2dpLCAnJykucmVwbGFjZSgvJm5ic3A7L2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlQWxsU3BhY2VzKHN0cj86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFzdHIpIHJldHVybiAnJztcclxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlcGxhY2VBdChzOiBzdHJpbmcsIG46IG51bWJlciwgdDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIG4pICsgdCArIHMuc3Vic3RyaW5nKG4gKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZEVtYWlsKGVtYWlsOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIWVtYWlsKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBjb25zdCByZWdleCA9IC9eKFthLXpBLVowLTlfListXSkrXFxAKChbYS16QS1aMC05LV0pK1xcLikrKFthLXpBLVowLTldezIsNH0pKyQvO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KGVtYWlsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udmVydFVDb2RlKGM6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCdhw6PhuqHDoMOh4bqjxIPEg+G6teG6t+G6seG6s8Oi4bqr4bqt4bqn4bql4bqpJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnYSc7XHJcbiAgICAgICAgaWYgKCdkxJEnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdkJztcclxuICAgICAgICBpZiAoJ2/DteG7jcOyw7Phu4/DtOG7l+G7meG7k+G7kcah4buh4buj4bud4bub4bufJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnbyc7XHJcbiAgICAgICAgaWYgKCd1xanhu6XDucO64bunxrDhu6/hu7Hhu6vhu6nhu63GsOG7r+G7seG7q+G7qeG7rScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ3UnO1xyXG4gICAgICAgIGlmICgnacSp4buLw6zDreG7iScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2knO1xyXG4gICAgICAgIGlmICgneeG7ueG7teG7s8O94bu3Jy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAneSc7XHJcbiAgICAgICAgaWYgKCdl4bq94bq5w6jDqeG6vcOq4buF4buH4buBw6rhu4MnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdlJztcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZnV6enlzZWFyY2gobmVlZGxlOiBzdHJpbmcsIGhheXN0YWNrOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBoYXlzdGFja0xDID0gdGhpcy5yZW1vdmVBbGxTcGFjZXMoaGF5c3RhY2sudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgbmVlZGxlTEMgPSB0aGlzLnJlbW92ZUFsbFNwYWNlcyhuZWVkbGUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgaGxlbiA9IGhheXN0YWNrLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBubGVuID0gbmVlZGxlTEMubGVuZ3RoO1xyXG4gICAgICAgIGlmIChubGVuID4gaGxlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChubGVuID09PSBobGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZWVkbGVMQyA9PT0gaGF5c3RhY2tMQztcclxuICAgICAgICB9XHJcbiAgICAgICAgb3V0ZXI6IGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IG5sZW47IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBuY2ggPSB0aGlzLmNvbnZlcnRVQ29kZShuZWVkbGVMQ1tpXSk7XHJcbiAgICAgICAgICAgIHdoaWxlIChqIDwgaGxlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29udmVydFVDb2RlKGhheXN0YWNrTENbaisrXSkgPT09IG5jaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5ld0d1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdWxsT3JFbXB0eShvYmo6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBvYmogPT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvUGFzY2FsQ2FzZSh0ZXh0OiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdGV4dCkgcmV0dXJuICcnO1xyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0WzBdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSArIHRleHQuc3Vic3RyaW5nKDEsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21wYXJlT2JqZWN0cyhzb3VyY2U6IGFueSwgdGFyZ2V0OiBhbnkpOiBPYmplY3RDaGFuZ2VbXSB7XHJcbiAgICAgICAgbGV0IGNoYW5nZXM6IE9iamVjdENoYW5nZVtdID0gW107XHJcbiAgICAgICAgY29uc3Qgc291cmNlUHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHNvdXJjZSk7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0UHJvcGVydGllcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZGVkUHJvcGVydGllcyA9IHRhcmdldFByb3BlcnRpZXMuZmlsdGVyKHggPT4gc291cmNlUHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHRhcmdldFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkUHJvcGVydGllcyA9IHNvdXJjZVByb3BlcnRpZXMuZmlsdGVyKHggPT4gcmVtb3ZlZFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBvZiBtb2RpZmllZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwoc291cmNlW3Byb3BlcnR5XSwgdGFyZ2V0W3Byb3BlcnR5XSkpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaChuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuVXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbcHJvcGVydHldLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZXMucHVzaCguLi5hZGRlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5BZGQsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiB0YXJnZXRbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbeF1cclxuICAgICAgICB9KSkpO1xyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4ucmVtb3ZlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5EZWxldGUsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBzb3VyY2VbeF1cclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRGaWVsZCh2YWx1ZVJlZjogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXZhbHVlUmVmKSByZXR1cm4gJyc7XHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlUmVmWzBdLnRvU3RyaW5nKCkudG9VcHBlckNhc2UoKSArIHZhbHVlUmVmLnN1YnN0cmluZygxLCB2YWx1ZVJlZi5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzTnVtYmVyKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICB2YXIgcmVnZXggPSAvXlsrLV0/XFxkKyhcXC5cXGQrKT8oW2VFXVsrLV0/XFxkKyk/JC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoaW5wdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RpZ2l0KGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gL15bMC05XSQvLnRlc3QoaW5wdXQpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==