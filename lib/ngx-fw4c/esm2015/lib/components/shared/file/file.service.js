/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/file/file.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { FileResponse, FileViewModel } from './file.model';
import { MockService } from '../services';
import { AuthenticationService } from '../../auth/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../auth/auth.service";
export class FileService extends MockService {
    /**
     * @param {?} httpClient
     * @param {?} authenticationService
     */
    constructor(httpClient, authenticationService) {
        super();
        this.httpClient = httpClient;
        this.authenticationService = authenticationService;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    uploadFiles(request) {
        return this.verify(this.httpClient.post('v1/Files/', request), request.mockData);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    uploadProgress(file) {
        /** @type {?} */
        const response = new HttpResponse({
            body: new FileResponse({
                items: [new FileViewModel({
                        src: 'https://znews-photo.zadn.vn/w660/Uploaded/xbhunku/2017_06_02/338006.jpg',
                        createdDate: new Date(),
                        lastModifiedDate: new Date(),
                        createdBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null,
                        lastModifiedBy: this.authenticationService.currentUser ? this.authenticationService.currentUser.id : null
                    })]
            })
        });
        return of(response);
    }
}
FileService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
FileService.ctorParameters = () => [
    { type: HttpClient },
    { type: AuthenticationService }
];
/** @nocollapse */ FileService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function FileService_Factory() { return new FileService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AuthenticationService)); }, token: FileService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    FileService.prototype.httpClient;
    /**
     * @type {?}
     * @protected
     */
    FileService.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvZmlsZS9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWEsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQWUsWUFBWSxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7O0FBR2hFLE1BQU0sT0FBTyxXQUFZLFNBQVEsV0FBVzs7Ozs7SUFDeEMsWUFDYyxVQUFzQixFQUN0QixxQkFBNEM7UUFFdEQsS0FBSyxFQUFFLENBQUM7UUFIRSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFHMUQsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsT0FBb0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFlLFdBQVcsRUFBRSxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkcsQ0FBQzs7Ozs7SUFFTSxjQUFjLENBQUMsSUFBVTs7Y0FDdEIsUUFBUSxHQUFHLElBQUksWUFBWSxDQUFlO1lBQzVDLElBQUksRUFBRSxJQUFJLFlBQVksQ0FBQztnQkFDbkIsS0FBSyxFQUFFLENBQUMsSUFBSSxhQUFhLENBQUM7d0JBQ3RCLEdBQUcsRUFBRSx5RUFBeUU7d0JBQzlFLFdBQVcsRUFBRSxJQUFJLElBQUksRUFBRTt3QkFDdkIsZ0JBQWdCLEVBQUUsSUFBSSxJQUFJLEVBQUU7d0JBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTt3QkFDcEcsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJO3FCQUM1RyxDQUFDLENBQUM7YUFDTixDQUFDO1NBQ0wsQ0FBQztRQUNGLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7OztZQTFCSixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBTnpCLFVBQVU7WUFJVixxQkFBcUI7Ozs7Ozs7O0lBS3RCLGlDQUFnQzs7Ozs7SUFDaEMsNENBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwRXZlbnQsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRmlsZVJlcXVlc3QsIEZpbGVSZXNwb25zZSwgRmlsZVZpZXdNb2RlbCB9IGZyb20gJy4vZmlsZS5tb2RlbCc7XHJcbmltcG9ydCB7IE1vY2tTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xyXG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2F1dGguc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgRmlsZVNlcnZpY2UgZXh0ZW5kcyBNb2NrU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgaHR0cENsaWVudDogSHR0cENsaWVudCxcclxuICAgICAgICBwcm90ZWN0ZWQgYXV0aGVudGljYXRpb25TZXJ2aWNlOiBBdXRoZW50aWNhdGlvblNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwbG9hZEZpbGVzKHJlcXVlc3Q6IEZpbGVSZXF1ZXN0KTogT2JzZXJ2YWJsZTxGaWxlUmVzcG9uc2U+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52ZXJpZnkodGhpcy5odHRwQ2xpZW50LnBvc3Q8RmlsZVJlc3BvbnNlPigndjEvRmlsZXMvJywgcmVxdWVzdCksIHJlcXVlc3QubW9ja0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGxvYWRQcm9ncmVzcyhmaWxlOiBGaWxlKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8RmlsZVJlc3BvbnNlPj4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZTxGaWxlUmVzcG9uc2U+KHtcclxuICAgICAgICAgICAgYm9keTogbmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogW25ldyBGaWxlVmlld01vZGVsKHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6ICdodHRwczovL3puZXdzLXBob3RvLnphZG4udm4vdzY2MC9VcGxvYWRlZC94Ymh1bmt1LzIwMTdfMDZfMDIvMzM4MDA2LmpwZycsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZERhdGU6IG5ldyBEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkRGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQnk6IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyID8gdGhpcy5hdXRoZW50aWNhdGlvblNlcnZpY2UuY3VycmVudFVzZXIuaWQgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZEJ5OiB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZS5jdXJyZW50VXNlciA/IHRoaXMuYXV0aGVudGljYXRpb25TZXJ2aWNlLmN1cnJlbnRVc2VyLmlkIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSldXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9mKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19