/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/data.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var DataService = /** @class */ (function () {
    function DataService(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    /**
     * @param {?=} callback
     * @return {?}
     */
    DataService.prototype.getToken = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        /** @type {?} */
        var jsonToken = localStorage.getItem(AuthConst.Token);
        /** @type {?} */
        var token = (/** @type {?} */ (JSON.parse(jsonToken)));
        if (callback)
            callback(token);
        return token;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    DataService.prototype.cloneItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item)
            return null;
        /** @type {?} */
        var response = {};
        /** @type {?} */
        var fields = Object.keys(item);
        if (fields) {
            fields.forEach((/**
             * @param {?} field
             * @return {?}
             */
            function (field) {
                response[field] = item[field];
            }));
        }
        return response;
    };
    /**
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    DataService.prototype.cloneItems = /**
     * @param {?} items
     * @param {?=} id
     * @return {?}
     */
    function (items, id) {
        var _this = this;
        if (id === void 0) { id = true; }
        if (!items || items.length == 0)
            return null;
        /** @type {?} */
        var response = [];
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            /** @type {?} */
            var newItem = _this.cloneItem(item);
            if (id)
                newItem.id = _this.newGuid();
            response.push(newItem);
        }));
        return response;
    };
    /**
     * @param {?} input
     * @return {?}
     */
    DataService.prototype.transformToSafeHtml = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return this._sanitizer.bypassSecurityTrustHtml(input);
    };
    /**
     * @param {?=} time
     * @return {?}
     */
    DataService.prototype.initDebounceTime = /**
     * @param {?=} time
     * @return {?}
     */
    function (time) {
        if (time === void 0) { time = 500; }
        /** @type {?} */
        var delegator = new Subject();
        delegator.pipe(debounceTime(time)).subscribe((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action) {
                action();
            }
        }));
        return delegator;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    DataService.prototype.removeHTML = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        if (!str)
            return str;
        return str.replace(/<\/?[^>]+>/gi, '').replace(/&nbsp;/g, '');
    };
    /**
     * @param {?=} str
     * @return {?}
     */
    DataService.prototype.removeAllSpaces = /**
     * @param {?=} str
     * @return {?}
     */
    function (str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    };
    /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    DataService.prototype.replaceAt = /**
     * @param {?} s
     * @param {?} n
     * @param {?} t
     * @return {?}
     */
    function (s, n, t) {
        return s.substring(0, n) + t + s.substring(n + 1);
    };
    /**
     * @param {?} email
     * @return {?}
     */
    DataService.prototype.isValidEmail = /**
     * @param {?} email
     * @return {?}
     */
    function (email) {
        if (!email)
            return true;
        /** @type {?} */
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    DataService.prototype.convertUCode = /**
     * @param {?} c
     * @return {?}
     */
    function (c) {
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
    };
    /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    DataService.prototype.fuzzysearch = /**
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    function (needle, haystack) {
        /** @type {?} */
        var haystackLC = this.removeAllSpaces(haystack.toLowerCase());
        /** @type {?} */
        var needleLC = this.removeAllSpaces(needle.toLowerCase());
        /** @type {?} */
        var hlen = haystack.length;
        /** @type {?} */
        var nlen = needleLC.length;
        if (nlen > hlen) {
            return false;
        }
        if (nlen === hlen) {
            return needleLC === haystackLC;
        }
        outer: for (var i = 0, j = 0; i < nlen; i++) {
            /** @type {?} */
            var nch = this.convertUCode(needleLC[i]);
            while (j < hlen) {
                if (this.convertUCode(haystackLC[j++]) === nch) {
                    continue outer;
                }
            }
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    DataService.prototype.newGuid = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    DataService.prototype.isNullOrEmpty = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj == null || obj === undefined || obj == '';
    };
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    DataService.prototype.toPascalCase = /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    function (text, lowerCase) {
        if (!text)
            return '';
        if (!lowerCase) {
            return text[0].toString().toUpperCase() + text.substring(1, text.length);
        }
        else {
            return text[0].toString().toLowerCase() + text.substring(1, text.length);
        }
    };
    /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    DataService.prototype.compareObjects = /**
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        var e_1, _a;
        /** @type {?} */
        var changes = [];
        /** @type {?} */
        var sourceProperties = Object.getOwnPropertyNames(source);
        /** @type {?} */
        var targetProperties = Object.getOwnPropertyNames(target);
        /** @type {?} */
        var addedProperties = targetProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return sourceProperties.indexOf(x) < 0; }));
        /** @type {?} */
        var removedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return targetProperties.indexOf(x) < 0; }));
        /** @type {?} */
        var modifiedProperties = sourceProperties.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return removedProperties.indexOf(x) < 0; }));
        try {
            for (var modifiedProperties_1 = tslib_1.__values(modifiedProperties), modifiedProperties_1_1 = modifiedProperties_1.next(); !modifiedProperties_1_1.done; modifiedProperties_1_1 = modifiedProperties_1.next()) {
                var property = modifiedProperties_1_1.value;
                if (!_.isEqual(source[property], target[property])) {
                    changes.push(new ObjectChange({
                        propertyName: property,
                        changeType: ChangeType.Update,
                        oldValue: source[property],
                        newValue: target[property]
                    }));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (modifiedProperties_1_1 && !modifiedProperties_1_1.done && (_a = modifiedProperties_1.return)) _a.call(modifiedProperties_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        changes.push.apply(changes, tslib_1.__spread(addedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Add,
            oldValue: target[x],
            newValue: target[x]
        }); }))));
        changes.push.apply(changes, tslib_1.__spread(removedProperties.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return new ObjectChange({
            propertyName: x,
            changeType: ChangeType.Delete,
            oldValue: source[x],
            newValue: source[x]
        }); }))));
        return changes;
    };
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    DataService.prototype.getField = /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    function (valueRef, lowerCase) {
        if (!valueRef)
            return '';
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    };
    /**
     * @param {?} input
     * @return {?}
     */
    DataService.prototype.isNumber = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        /** @type {?} */
        var regex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        return regex.test(input);
    };
    /**
     * @param {?} input
     * @return {?}
     */
    DataService.prototype.isDigit = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^[0-9]$/.test(input);
    };
    DataService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    DataService.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    /** @nocollapse */ DataService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DataService_Factory() { return new DataService(i0.ɵɵinject(i1.DomSanitizer)); }, token: DataService, providedIn: "root" });
    return DataService;
}());
export { DataService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DataService.prototype._sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvc2VydmljZXMvZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFFbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFbEQ7SUFFSSxxQkFDWSxVQUF3QjtRQUF4QixlQUFVLEdBQVYsVUFBVSxDQUFjO0lBQ2hDLENBQUM7Ozs7O0lBRUUsOEJBQVE7Ozs7SUFBZixVQUFnQixRQUFzRDs7WUFDOUQsU0FBUyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQzs7WUFDakQsS0FBSyxHQUFHLG1CQUE2QixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFBO1FBQzlELElBQUksUUFBUTtZQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7OztJQUVNLCtCQUFTOzs7O0lBQWhCLFVBQWlCLElBQVM7UUFDdEIsSUFBSSxDQUFDLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQzs7WUFDakIsUUFBUSxHQUFRLEVBQUU7O1lBQ2xCLE1BQU0sR0FBRyxNQUFN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QUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEY7YUFBTTtZQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7Ozs7O0lBRU0sOEJBQVE7Ozs7SUFBZixVQUFnQixLQUFhOztZQUNyQixLQUFLLEdBQUcsbUNBQW1DO1FBQy9DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUVNLDZCQUFPOzs7O0lBQWQsVUFBZSxLQUFhO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkFoTEosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFKekIsWUFBWTs7O3NCQU5yQjtDQTJMQyxBQWpMRCxJQWlMQztTQWhMWSxXQUFXOzs7Ozs7SUFFaEIsaUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ2hhbmdlVHlwZSB9IGZyb20gJy4uL2VudW1zL2Jhc2UuZW51bSc7XHJcbmltcG9ydCB7IE9iamVjdENoYW5nZSB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5tb2RlbCc7XHJcbmltcG9ydCB7IEF1dGhDb25zdCB9IGZyb20gJy4uLy4uL2F1dGgvYXV0aC5jb25zdCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcclxuICAgICkgeyB9XHJcblxyXG4gICAgcHVibGljIGdldFRva2VuKGNhbGxiYWNrPzogKHRva2VuOiBBdXRoZW50aWNhdGlvbkxvZ2luUmVzcG9uc2UpID0+IGFueSk6IEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZSB7XHJcbiAgICAgICAgdmFyIGpzb25Ub2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEF1dGhDb25zdC5Ub2tlbik7XHJcbiAgICAgICAgdmFyIHRva2VuID0gPEF1dGhlbnRpY2F0aW9uTG9naW5SZXNwb25zZT5KU09OLnBhcnNlKGpzb25Ub2tlbik7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayh0b2tlbik7XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZUl0ZW0oaXRlbTogYW55KTogYW55IHtcclxuICAgICAgICBpZiAoIWl0ZW0pIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnkgPSB7fTtcclxuICAgICAgICBjb25zdCBmaWVsZHMgPSBPYmplY3Qua2V5cyhpdGVtKTtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VbZmllbGRdID0gaXRlbVtmaWVsZF07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb25lSXRlbXMoaXRlbXM6IGFueVtdLCBpZDogYm9vbGVhbiA9IHRydWUpOiBhbnkge1xyXG4gICAgICAgIGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgdmFyIG5ld0l0ZW0gPSB0aGlzLmNsb25lSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgaWYgKGlkKSBuZXdJdGVtLmlkID0gdGhpcy5uZXdHdWlkKCk7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0cmFuc2Zvcm1Ub1NhZmVIdG1sKGlucHV0OiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluaXREZWJvdW5jZVRpbWUodGltZTogbnVtYmVyID0gNTAwKTogU3ViamVjdDxhbnk+IHtcclxuICAgICAgICBjb25zdCBkZWxlZ2F0b3I6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICAgICAgZGVsZWdhdG9yLnBpcGUoZGVib3VuY2VUaW1lKHRpbWUpKS5zdWJzY3JpYmUoKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBhY3Rpb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBkZWxlZ2F0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUhUTUwoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghc3RyKSByZXR1cm4gc3RyO1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvPFxcLz9bXj5dKz4vZ2ksICcnKS5yZXBsYWNlKC8mbmJzcDsvZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVBbGxTcGFjZXMoc3RyPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXN0cikgcmV0dXJuICcnO1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2csICcnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVwbGFjZUF0KHM6IHN0cmluZywgbjogbnVtYmVyLCB0OiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gcy5zdWJzdHJpbmcoMCwgbikgKyB0ICsgcy5zdWJzdHJpbmcobiArIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkRW1haWwoZW1haWw6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghZW1haWwpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gL14oW2EtekEtWjAtOV8uKy1dKStcXEAoKFthLXpBLVowLTktXSkrXFwuKSsoW2EtekEtWjAtOV17Miw0fSkrJC87XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QoZW1haWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb252ZXJ0VUNvZGUoYzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoJ2HDo+G6ocOgw6HhuqPEg8SD4bq14bq34bqx4bqzw6Lhuqvhuq3huqfhuqXhuqknLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdhJztcclxuICAgICAgICBpZiAoJ2TEkScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2QnO1xyXG4gICAgICAgIGlmICgnb8O14buNw7LDs+G7j8O04buX4buZ4buT4buRxqHhu6Hhu6Phu53hu5vhu58nLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdvJztcclxuICAgICAgICBpZiAoJ3XFqeG7pcO5w7rhu6fGsOG7r+G7seG7q+G7qeG7rcaw4buv4bux4bur4bup4butJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAndSc7XHJcbiAgICAgICAgaWYgKCdpxKnhu4vDrMOt4buJJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnaSc7XHJcbiAgICAgICAgaWYgKCd54bu54bu14buzw73hu7cnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICd5JztcclxuICAgICAgICBpZiAoJ2Xhur3hurnDqMOp4bq9w6rhu4Xhu4fhu4HDquG7gycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2UnO1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmdXp6eXNlYXJjaChuZWVkbGU6IHN0cmluZywgaGF5c3RhY2s6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IGhheXN0YWNrTEMgPSB0aGlzLnJlbW92ZUFsbFNwYWNlcyhoYXlzdGFjay50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBuZWVkbGVMQyA9IHRoaXMucmVtb3ZlQWxsU3BhY2VzKG5lZWRsZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICBjb25zdCBobGVuID0gaGF5c3RhY2subGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG5sZW4gPSBuZWVkbGVMQy5sZW5ndGg7XHJcbiAgICAgICAgaWYgKG5sZW4gPiBobGVuKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5sZW4gPT09IGhsZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5lZWRsZUxDID09PSBoYXlzdGFja0xDO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdXRlcjogZm9yIChsZXQgaSA9IDAsIGogPSAwOyBpIDwgbmxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5jaCA9IHRoaXMuY29udmVydFVDb2RlKG5lZWRsZUxDW2ldKTtcclxuICAgICAgICAgICAgd2hpbGUgKGogPCBobGVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb252ZXJ0VUNvZGUoaGF5c3RhY2tMQ1tqKytdKSA9PT0gbmNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWUgb3V0ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV3R3VpZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcclxuICAgICAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc051bGxPckVtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiA9PSBudWxsIHx8IG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9QYXNjYWxDYXNlKHRleHQ6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0ZXh0KSByZXR1cm4gJyc7XHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRbMF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0WzBdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSArIHRleHQuc3Vic3RyaW5nKDEsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBhcmVPYmplY3RzKHNvdXJjZTogYW55LCB0YXJnZXQ6IGFueSk6IE9iamVjdENoYW5nZVtdIHtcclxuICAgICAgICBsZXQgY2hhbmdlczogT2JqZWN0Q2hhbmdlW10gPSBbXTtcclxuICAgICAgICBjb25zdCBzb3VyY2VQcm9wZXJ0aWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRQcm9wZXJ0aWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkZWRQcm9wZXJ0aWVzID0gdGFyZ2V0UHJvcGVydGllcy5maWx0ZXIoeCA9PiBzb3VyY2VQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuICAgICAgICBjb25zdCByZW1vdmVkUHJvcGVydGllcyA9IHNvdXJjZVByb3BlcnRpZXMuZmlsdGVyKHggPT4gdGFyZ2V0UHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRQcm9wZXJ0aWVzID0gc291cmNlUHJvcGVydGllcy5maWx0ZXIoeCA9PiByZW1vdmVkUHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IG9mIG1vZGlmaWVkUHJvcGVydGllcykge1xyXG4gICAgICAgICAgICBpZiAoIV8uaXNFcXVhbChzb3VyY2VbcHJvcGVydHldLCB0YXJnZXRbcHJvcGVydHldKSkge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlcy5wdXNoKG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHksXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5VcGRhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHNvdXJjZVtwcm9wZXJ0eV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IHRhcmdldFtwcm9wZXJ0eV1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlcy5wdXNoKC4uLmFkZGVkUHJvcGVydGllcy5tYXAoeCA9PiBuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB4LFxyXG4gICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLkFkZCxcclxuICAgICAgICAgICAgb2xkVmFsdWU6IHRhcmdldFt4XSxcclxuICAgICAgICAgICAgbmV3VmFsdWU6IHRhcmdldFt4XVxyXG4gICAgICAgIH0pKSk7XHJcblxyXG4gICAgICAgIGNoYW5nZXMucHVzaCguLi5yZW1vdmVkUHJvcGVydGllcy5tYXAoeCA9PiBuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiB4LFxyXG4gICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLkRlbGV0ZSxcclxuICAgICAgICAgICAgb2xkVmFsdWU6IHNvdXJjZVt4XSxcclxuICAgICAgICAgICAgbmV3VmFsdWU6IHNvdXJjZVt4XVxyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgcmV0dXJuIGNoYW5nZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEZpZWxkKHZhbHVlUmVmOiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWVSZWYpIHJldHVybiAnJztcclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVSZWZbMF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpICsgdmFsdWVSZWYuc3Vic3RyaW5nKDEsIHZhbHVlUmVmLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlUmVmWzBdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSArIHZhbHVlUmVmLnN1YnN0cmluZygxLCB2YWx1ZVJlZi5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNOdW1iZXIoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciByZWdleCA9IC9eWystXT9cXGQrKFxcLlxcZCspPyhbZUVdWystXT9cXGQrKT8kLztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChpbnB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRGlnaXQoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAvXlswLTldJC8udGVzdChpbnB1dCk7XHJcbiAgICB9XHJcbn1cclxuIl19