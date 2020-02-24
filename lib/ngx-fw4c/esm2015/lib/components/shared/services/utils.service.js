/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/services/utils.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { ObjectChange } from '../models/base.model';
import { ChangeType } from '../enums/base.enum';
import * as i0 from "@angular/core";
export class UtilityService {
    /**
     * @param {?} valueRef
     * @param {?=} lowerCase
     * @return {?}
     */
    getField(valueRef, lowerCase) {
        if (!valueRef) {
            return '';
        }
        if (!lowerCase) {
            return valueRef[0].toString().toUpperCase() + valueRef.substring(1, valueRef.length);
        }
        else {
            return valueRef[0].toString().toLowerCase() + valueRef.substring(1, valueRef.length);
        }
    }
    /**
     * @param {?} text
     * @param {?=} lowerCase
     * @return {?}
     */
    toPascalCase(text, lowerCase) {
        if (!text) {
            return '';
        }
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
}
UtilityService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ UtilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UtilityService_Factory() { return new UtilityService(); }, token: UtilityService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdzRjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2hhcmVkL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBR2hELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDaEIsUUFBUSxDQUFDLFFBQWdCLEVBQUUsU0FBbUI7UUFDakQsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1osT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hGO2FBQU07WUFDSCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDeEY7SUFDTCxDQUFDOzs7Ozs7SUFFTSxZQUFZLENBQUMsSUFBWSxFQUFFLFNBQW1CO1FBQ2pELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM1RTthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVFO0lBQ0wsQ0FBQzs7Ozs7O0lBRU0sY0FBYyxDQUFDLE1BQVcsRUFBRSxNQUFXOztZQUN0QyxPQUFPLEdBQW1CLEVBQUU7O2NBQzFCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7O2NBQ3JELGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUM7O2NBQ3JELGVBQWUsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDOztjQUMvRSxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDOztjQUNqRixrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDO1FBRXpGLEtBQUssSUFBSSxRQUFRLElBQUksa0JBQWtCLEVBQUU7WUFDckMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFO2dCQUNoRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxDQUFDO29CQUMxQixZQUFZLEVBQUUsUUFBUTtvQkFDdEIsVUFBVSxFQUFFLFVBQVUsQ0FBQyxNQUFNO29CQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQztvQkFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRLENBQUM7aUJBQzdCLENBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDSjtRQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxlQUFlLENBQUMsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxZQUFZLENBQUM7WUFDdEQsWUFBWSxFQUFFLENBQUM7WUFDZixVQUFVLEVBQUUsVUFBVSxDQUFDLEdBQUc7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7U0FDdEIsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUVMLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFlBQVksQ0FBQztZQUN4RCxZQUFZLEVBQUUsQ0FBQztZQUNmLFVBQVUsRUFBRSxVQUFVLENBQUMsTUFBTTtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUN0QixDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBRUwsT0FBTyxPQUFPLENBQUM7SUFDbkIsQ0FBQzs7O1lBMURKLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JqZWN0Q2hhbmdlIH0gZnJvbSAnLi4vbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBDaGFuZ2VUeXBlIH0gZnJvbSAnLi4vZW51bXMvYmFzZS5lbnVtJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBVdGlsaXR5U2VydmljZSB7XHJcbiAgICBwdWJsaWMgZ2V0RmllbGQodmFsdWVSZWY6IHN0cmluZywgbG93ZXJDYXNlPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZVJlZikge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghbG93ZXJDYXNlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZVJlZlswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZVJlZi5zdWJzdHJpbmcoMSwgdmFsdWVSZWYubGVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVSZWZbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdmFsdWVSZWYuc3Vic3RyaW5nKDEsIHZhbHVlUmVmLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1Bhc2NhbENhc2UodGV4dDogc3RyaW5nLCBsb3dlckNhc2U/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dFswXS50b1N0cmluZygpLnRvVXBwZXJDYXNlKCkgKyB0ZXh0LnN1YnN0cmluZygxLCB0ZXh0Lmxlbmd0aCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHRbMF0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICsgdGV4dC5zdWJzdHJpbmcoMSwgdGV4dC5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcGFyZU9iamVjdHMoc291cmNlOiBhbnksIHRhcmdldDogYW55KTogT2JqZWN0Q2hhbmdlW10ge1xyXG4gICAgICAgIGxldCBjaGFuZ2VzOiBPYmplY3RDaGFuZ2VbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHNvdXJjZVByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2UpO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldFByb3BlcnRpZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGFkZGVkUHJvcGVydGllcyA9IHRhcmdldFByb3BlcnRpZXMuZmlsdGVyKHggPT4gc291cmNlUHJvcGVydGllcy5pbmRleE9mKHgpIDwgMCk7XHJcbiAgICAgICAgY29uc3QgcmVtb3ZlZFByb3BlcnRpZXMgPSBzb3VyY2VQcm9wZXJ0aWVzLmZpbHRlcih4ID0+IHRhcmdldFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkUHJvcGVydGllcyA9IHNvdXJjZVByb3BlcnRpZXMuZmlsdGVyKHggPT4gcmVtb3ZlZFByb3BlcnRpZXMuaW5kZXhPZih4KSA8IDApO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBvZiBtb2RpZmllZFByb3BlcnRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwoc291cmNlW3Byb3BlcnR5XSwgdGFyZ2V0W3Byb3BlcnR5XSkpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZXMucHVzaChuZXcgT2JqZWN0Q2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IHByb3BlcnR5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZVR5cGU6IENoYW5nZVR5cGUuVXBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbcHJvcGVydHldLFxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZXMucHVzaCguLi5hZGRlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5BZGQsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiB0YXJnZXRbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiB0YXJnZXRbeF1cclxuICAgICAgICB9KSkpO1xyXG5cclxuICAgICAgICBjaGFuZ2VzLnB1c2goLi4ucmVtb3ZlZFByb3BlcnRpZXMubWFwKHggPT4gbmV3IE9iamVjdENoYW5nZSh7XHJcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogeCxcclxuICAgICAgICAgICAgY2hhbmdlVHlwZTogQ2hhbmdlVHlwZS5EZWxldGUsXHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBzb3VyY2VbeF0sXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBzb3VyY2VbeF1cclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBjaGFuZ2VzO1xyXG4gICAgfVxyXG59Il19