/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/utils.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { ObjectChange } from '../models/base.model';
import { ChangeType } from '../enums/base.enum';
import * as i0 from "@angular/core";
var UtilityService = /** @class */ (function () {
    function UtilityService() {
    }
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    UtilityService.prototype.getField = /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    function (valueRef, lowerCase) {
        if (!valueRef) {
            return '';
        }
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    };
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    UtilityService.prototype.toPascalCase = /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    function (text, lowerCase) {
        if (!text) {
            return '';
        }
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
    UtilityService.prototype.compareObjects = /**
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
    UtilityService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ UtilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
    return UtilityService;
}());
export { UtilityService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUVoRDtJQUFBO0tBMkRDOzs7Ozs7SUF6RFUsaUNBQVE7Ozs7O0lBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxTQUFtQjtRQUNqRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDWixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEY7YUFBTTtZQUNILE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RjtJQUNMLENBQUM7Ozs7OztJQUVNLHFDQUFZOzs7OztJQUFuQixVQUFvQixJQUFZLEVBQUUsU0FBbUI7UUFDakQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNQLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUU7SUFDTCxDQUFDOzs7Ozs7SUFFTSx1Q0FBYzs7Ozs7SUFBckIsVUFBc0IsTUFBVyxFQUFFLE1BQVc7OztZQUN0QyxPQUFPLEdBQW1CLEVBQUU7O1lBQzFCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7O1lBQ3JELGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7O1lBQ3JELGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixFQUFDOztZQUMvRSxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUEvQixDQUErQixFQUFDOztZQUNqRixrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDOztZQUV6RixLQUFxQixJQUFBLHVCQUFBLGlCQUFBLGtCQUFrQixDQUFBLHNEQUFBLHNGQUFFO2dCQUFwQyxJQUFJLFFBQVEsK0JBQUE7Z0JBQ2IsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO29CQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDO3dCQUMxQixZQUFZLEVBQUUsUUFBUTt3QkFDdEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxNQUFNO3dCQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQzt3QkFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUM7cUJBQzdCLENBQUMsQ0FBQyxDQUFDO2lCQUNQO2FBQ0o7Ozs7Ozs7OztRQUVELE9BQU8sQ0FBQyxJQUFJLE9BQVosT0FBTyxtQkFBUyxlQUFlLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxZQUFZLENBQUM7WUFDdEQsWUFBWSxFQUFFLENBQUM7WUFDZixVQUFVLEVBQUUsVUFBVSxDQUFDLEdBQUc7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQyxFQUx1QyxDQUt2QyxFQUFDLEdBQUU7UUFFTCxPQUFPLENBQUMsSUFBSSxPQUFaLE9BQU8sbUJBQVMsaUJBQWlCLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxZQUFZLENBQUM7WUFDeEQsWUFBWSxFQUFFLENBQUM7WUFDZixVQUFVLEVBQUUsVUFBVSxDQUFDLE1BQU07WUFDN0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQyxFQUx5QyxDQUt6QyxFQUFDLEdBQUU7UUFFTCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDOztnQkExREosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O3lCQUxsQztDQWdFQyxBQTNERCxJQTJEQztTQTFEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9iamVjdENoYW5nZSB9IGZyb20gJy4uL21vZGVscy9iYXNlLm1vZGVsJztcclxuaW1wb3J0IHsgQ2hhbmdlVHlwZSB9IGZyb20gJy4uL2VudW1zL2Jhc2UuZW51bSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVXRpbGl0eVNlcnZpY2Uge1xyXG4gICAgcHVibGljIGdldEZpZWxkKHZhbHVlUmVmOiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdmFsdWVSZWYpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVSZWZbMF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpICsgdmFsdWVSZWYuc3Vic3RyaW5nKDEsIHZhbHVlUmVmLmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlUmVmWzBdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSArIHZhbHVlUmVmLnN1YnN0cmluZygxLCB2YWx1ZVJlZi5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9QYXNjYWxDYXNlKHRleHQ6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRbMF0udG9TdHJpbmcoKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0WzBdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSArIHRleHQuc3Vic3RyaW5nKDEsIHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbXBhcmVPYmplY3RzKHNvdXJjZTogYW55LCB0YXJnZXQ6IGFueSk6IE9iamVjdENoYW5nZVtdIHtcclxuICAgICAgICBsZXQgY2hhbmdlczogT2JqZWN0Q2hhbmdlW10gPSBbXTtcclxuICAgICAgICBjb25zdCBzb3VyY2VQcm9wZXJ0aWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoc291cmNlKTtcclxuICAgICAgICBjb25zdCB0YXJnZXRQcm9wZXJ0aWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBhZGRlZFByb3BlcnRpZXMgPSB0YXJnZXRQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHNvdXJjZVByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IHJlbW92ZWRQcm9wZXJ0aWVzID0gc291cmNlUHJvcGVydGllcy5maWx0ZXIoeCA9PiB0YXJnZXRQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuICAgICAgICBjb25zdCBtb2RpZmllZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHJlbW92ZWRQcm9wZXJ0aWVzLmluZGV4T2YoeCkgPCAwKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgb2YgbW9kaWZpZWRQcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmICghXy5pc0VxdWFsKHNvdXJjZVtwcm9wZXJ0eV0sIHRhcmdldFtwcm9wZXJ0eV0pKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VzLnB1c2gobmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VUeXBlOiBDaGFuZ2VUeXBlLlVwZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogc291cmNlW3Byb3BlcnR5XSxcclxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdGFyZ2V0W3Byb3BlcnR5XVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4uYWRkZWRQcm9wZXJ0aWVzLm1hcCh4ID0+IG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHgsXHJcbiAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuQWRkLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogdGFyZ2V0W3hdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogdGFyZ2V0W3hdXHJcbiAgICAgICAgfSkpKTtcclxuXHJcbiAgICAgICAgY2hhbmdlcy5wdXNoKC4uLnJlbW92ZWRQcm9wZXJ0aWVzLm1hcCh4ID0+IG5ldyBPYmplY3RDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHgsXHJcbiAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuRGVsZXRlLFxyXG4gICAgICAgICAgICBvbGRWYWx1ZTogc291cmNlW3hdLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogc291cmNlW3hdXHJcbiAgICAgICAgfSkpKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gY2hhbmdlcztcclxuICAgIH1cclxufSJdfQ==