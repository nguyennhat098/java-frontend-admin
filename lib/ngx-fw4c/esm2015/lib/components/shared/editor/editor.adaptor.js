/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/editor/editor.adaptor.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { FileRequest, FileViewModel, FileResponse } from '../file/file.model';
export class EditorAdapter {
    /**
     * @param {?} loader
     * @param {?} fileService
     * @param {?} authenticationService
     */
    constructor(loader, fileService, authenticationService) {
        this.loader = loader;
        this.fileService = fileService;
        this.authenticationService = authenticationService;
    }
    /**
     * @return {?}
     */
    upload() {
        return this.loader.file.then((/**
         * @param {?} file
         * @return {?}
         */
        file => new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const base64Data = reader.result.toString().split(',');
                if (base64Data.length < 2) {
                    return;
                }
                /** @type {?} */
                const base64FileData = base64Data[1];
                this.fileService.uploadFiles(new FileRequest({
                    items: [
                        new FileViewModel({
                            name: file.name,
                            src: base64FileData
                        })
                    ],
                    mockData: new FileResponse({
                        items: [new FileViewModel({
                                src: (/** @type {?} */ (reader.result)),
                                name: file.name
                            })]
                    })
                })).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                response => {
                    /** @type {?} */
                    var src = '';
                    if (response.items && response.items.length > 0) {
                        src = response.items[0].src;
                    }
                    resolve({ default: src });
                }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                (err) => {
                    console.log(err);
                }));
            });
            reader.readAsDataURL(file);
        }))));
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.loader;
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.fileService;
    /**
     * @type {?}
     * @protected
     */
    EditorAdapter.prototype.authenticationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmFkYXB0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9lZGl0b3IvZWRpdG9yLmFkYXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5RSxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBS3RCLFlBQVksTUFBVyxFQUFFLFdBQXdCLEVBQUUscUJBQTRDO1FBQzNGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQztJQUN2RCxDQUFDOzs7O0lBRU0sTUFBTTtRQUNULE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxPQUFPOzs7O1FBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTs7Z0JBQ3JELE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtZQUM3QixNQUFNLENBQUMsU0FBUzs7O1lBQUcsR0FBRyxFQUFFOztzQkFDZCxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2dCQUN0RCxJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUN2QixPQUFPO2lCQUNWOztzQkFDSyxjQUFjLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxXQUFXLENBQUM7b0JBQ3pDLEtBQUssRUFBRTt3QkFDSCxJQUFJLGFBQWEsQ0FBQzs0QkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NEJBQ2YsR0FBRyxFQUFFLGNBQWM7eUJBQ3RCLENBQUM7cUJBQ0w7b0JBQ0QsUUFBUSxFQUFFLElBQUksWUFBWSxDQUFDO3dCQUN2QixLQUFLLEVBQUUsQ0FBQyxJQUFJLGFBQWEsQ0FBQztnQ0FDdEIsR0FBRyxFQUFFLG1CQUFRLE1BQU0sQ0FBQyxNQUFNLEVBQUE7Z0NBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTs2QkFDbEIsQ0FBQyxDQUFDO3FCQUNOLENBQUM7aUJBQ0wsQ0FBQyxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxRQUFRLENBQUMsRUFBRTs7d0JBQ2pCLEdBQUcsR0FBRyxFQUFFO29CQUNaLElBQUksUUFBUSxDQUFDLEtBQUssSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQzdDLEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztxQkFDL0I7b0JBQ0QsT0FBTyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzlCLENBQUM7Ozs7Z0JBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtvQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQixDQUFDLEVBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQSxDQUFBO1lBQ0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUMsRUFBQyxDQUFDO0lBQ1IsQ0FBQztDQUNKOzs7Ozs7SUE3Q0csK0JBQXNCOzs7OztJQUN0QixvQ0FBbUM7Ozs7O0lBQ25DLDhDQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZpbGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmlsZS9maWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGaWxlUmVxdWVzdCwgRmlsZVZpZXdNb2RlbCwgRmlsZVJlc3BvbnNlIH0gZnJvbSAnLi4vZmlsZS9maWxlLm1vZGVsJztcclxuaW1wb3J0IHsgQXV0aGVudGljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9hdXRoLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvckFkYXB0ZXIge1xyXG4gICAgcHJvdGVjdGVkIGxvYWRlcjogYW55O1xyXG4gICAgcHJvdGVjdGVkIGZpbGVTZXJ2aWNlOiBGaWxlU2VydmljZTtcclxuICAgIHByb3RlY3RlZCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2FkZXI6IGFueSwgZmlsZVNlcnZpY2U6IEZpbGVTZXJ2aWNlLCBhdXRoZW50aWNhdGlvblNlcnZpY2U6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xyXG4gICAgICAgIHRoaXMuZmlsZVNlcnZpY2UgPSBmaWxlU2VydmljZTtcclxuICAgICAgICB0aGlzLmF1dGhlbnRpY2F0aW9uU2VydmljZSA9IGF1dGhlbnRpY2F0aW9uU2VydmljZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBsb2FkKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9hZGVyLmZpbGUudGhlbihmaWxlID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmFzZTY0RGF0YSA9IHJlYWRlci5yZXN1bHQudG9TdHJpbmcoKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhc2U2NERhdGEubGVuZ3RoIDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGJhc2U2NEZpbGVEYXRhID0gYmFzZTY0RGF0YVsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVNlcnZpY2UudXBsb2FkRmlsZXMobmV3IEZpbGVSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRmlsZVZpZXdNb2RlbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGJhc2U2NEZpbGVEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBtb2NrRGF0YTogbmV3IEZpbGVSZXNwb25zZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbbmV3IEZpbGVWaWV3TW9kZWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiA8c3RyaW5nPnJlYWRlci5yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSldXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzcmMgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaXRlbXMgJiYgcmVzcG9uc2UuaXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmMgPSByZXNwb25zZS5pdGVtc1swXS5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBkZWZhdWx0OiBzcmMgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufSJdfQ==