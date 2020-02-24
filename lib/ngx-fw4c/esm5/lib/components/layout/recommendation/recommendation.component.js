/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/layout/recommendation/recommendation.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Component } from '@angular/core';
import { RecommendationResponse } from '../../shared/models/base.model';
import { AggregatorService } from '../../shared/services/aggregator.service';
import { KeyConst } from '../../shared';
var RecommendationComponent = /** @class */ (function () {
    function RecommendationComponent(aggregatorService) {
        this.aggregatorService = aggregatorService;
        this.data = new RecommendationResponse({});
    }
    /**
     * @return {?}
     */
    RecommendationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.data.show = false;
        this.data.keyword = '';
    };
    /**
     * @param {?=} all
     * @return {?}
     */
    RecommendationComponent.prototype.search = /**
     * @param {?=} all
     * @return {?}
     */
    function (all) {
        if (all === void 0) { all = false; }
        this.data.all = all;
        this.data.show = false;
        this.aggregatorService.publish(KeyConst.Search, this.data);
    };
    RecommendationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'katana-recommendation',
                    template: "<div *ngIf=\"data?.show\" class=\"search-box-popup\">\r\n  <div *ngIf=\"data?.keyword\" class=\"search-supplier\">\r\n    <ul class=\"m-0 p-0\">\r\n      <li (click)=\"search(false)\">\r\n        <a href=\"javascript:void(0)\" class=\"suggest-item text-truncate\">\r\n          <i class=\"fa fa-handshake-o text-muted text-font-18 m-r-3\"></i> <span class=\"text-muted\"> T\u00ECm<span\r\n              class=\"text-info\">\"{{ data?.keyword }}\"</span> trong <span\r\n              style=\"font-weight: 500;\">{{data?.selectedMenu}}</span> </span>\r\n        </a>\r\n      </li>\r\n      <li (click)=\"search(true)\">\r\n        <a href=\"javascript:void(0)\" class=\"suggest-item text-truncate\">\r\n          <i class=\"fa fa-search text-gray-600 text-font-16 m-r-3\" aria-hidden=\"true\"></i> <span class=\"text-muted\">\r\n            <span class=\"text-gray-600\"> T\u00ECm t\u1EA5t c\u1EA3 <span class=\"text-primary\">\"{{ data?.keyword }}\"</span> li\u00EAn\r\n              quan</span></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <div *ngIf=\"data.template\" class=\"list-product-suggest\">\r\n    <h6 class=\"text-muted text-uppercase title-suggest text-font-13 m-b-0 m-t-5\">{{data?.label}}</h6>\r\n    <katana-loader [template]=\"data.template\" [data]=\"data\"></katana-loader>\r\n  </div>\r\n  <div *ngIf=\"data?.keyword\" class=\"view-all--wrapper text-center \">\r\n    <a href=\"javascript:;\" class=\"text-font-13 text-gray-600\"><span style=\"font-weight: 500;\"\r\n        (click)=\"close()\">\u0110\u00F3ng</span></a>\r\n  </div>\r\n</div>",
                    styles: [".search-box-popup-suggestion{position:absolute;z-index:21000;padding-top:5px;width:54%;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.21)}.search-box-popup-suggestion .adsword-recommendation{padding-bottom:10px}.search-box-popup-suggestion .adsword-recommendation .title-suggest{padding:5px 10px}.search-box-popup-suggestion .adsword-recommendation .suggest-item{font-size:13px;color:#584d4d;line-height:1;padding:8px 10px;display:block;outline:0;text-decoration:none;overflow:hidden}.search-box-popup-suggestion .adsword-recommendation .suggest-item:hover{background:#f2f3f7}.search-box-popup-suggestion .adsword-recommendation ul{display:block}.search-box-popup-suggestion .adsword-recommendation li{list-style:none!important}.search-box-popup{position:absolute;z-index:21000;top:95%;padding-top:5px;right:0;left:0;width:100%;background:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.21)}.search-box-popup .history-suggestion{padding-bottom:10px}.search-box-popup .history-suggestion .title-suggest{padding:5px 20px;background:#fafafa}.search-box-popup .history-suggestion .suggest-item{font-size:13px;color:#584d4d;line-height:1;padding:8px 20px;display:block;outline:0;text-decoration:none;overflow:hidden}.search-box-popup .history-suggestion .suggest-item:hover{background:#f2f3f7}.search-box-popup .history-suggestion ul{display:block;margin:0}.search-box-popup .history-suggestion li{list-style:none!important}.search-box-popup .adsword-recommendation{padding-bottom:10px}.search-box-popup .adsword-recommendation .title-suggest{padding:5px 20px}.search-box-popup .adsword-recommendation .suggest-item{font-size:13px;color:#584d4d;line-height:1;padding:8px 20px;display:block;outline:0;text-decoration:none;overflow:hidden}.search-box-popup .adsword-recommendation .suggest-item:hover{background:#f2f3f7}.search-box-popup .adsword-recommendation ul{display:block}.search-box-popup .adsword-recommendation li{list-style:none!important}.search-box-popup .search-supplier .suggest-item{font-size:13px;color:#212121;line-height:1;padding:8px 20px;display:block;outline:0;text-decoration:none;overflow:hidden}.search-box-popup .search-supplier .suggest-item:hover{background:#f2f3f7}.search-box-popup .search-supplier ul{display:block}.search-box-popup .search-supplier li{list-style:none!important}.search-box-popup .suggest-list{padding-bottom:5px}.search-box-popup .suggest-list .suggest-item{font-size:13px;color:#584d4d;line-height:1;padding:8px 20px;display:block;outline:0;text-decoration:none;overflow:hidden}.search-box-popup .suggest-list .suggest-item:hover{background:#f2f3f7}.search-box-popup .suggest-list ul{display:block}.search-box-popup .suggest-list li{list-style:none!important}.search-box-popup .suggest--list--group{border-top:1px solid #ececec}.search-box-popup .suggest--list--group ul{margin-bottom:0}.search-box-popup .suggest--list--group ul li{padding:5px 20px}.search-box-popup .suggest--list--group ul li:hover{background:#f2f3f7}.search-box-popup .suggest--list--group ul li a{color:#584d4d}.search-box-popup .suggest--list--group ul li a span{font-weight:500;color:#eb5d13;font-size:13px}.search-box-popup .list-product-suggest{border-top:1px solid #ececec;border-bottom:1px solid #ececec}.search-box-popup .list-product-suggest .title-suggest{padding:5px 20px}.search-box-popup .list-product-suggest ul{margin-bottom:0}.search-box-popup .list-product-suggest ul li{padding:5px 20px}.search-box-popup .list-product-suggest ul li:hover{background:#f2f3f7;cursor:pointer}.search-box-popup .list-product-suggest ul li .product--info{overflow:hidden}.search-box-popup .list-product-suggest ul li .product--info .product-name{color:#212121;overflow:hidden}.search-box-popup .list-product-suggest ul li .product--info .price-original{font-weight:500;margin-right:10px;color:#eb5d13}.search-box-popup .list-product-suggest ul li .img--wrapper{position:relative;margin-right:10px;width:50px;height:50px;min-width:50px;border:1px solid #ececec}.search-box-popup .list-product-suggest ul li .price-old{text-decoration:line-through}.search-box-popup .view-all--wrapper{background:#fafafa;padding:5px 10px}"]
                }] }
    ];
    /** @nocollapse */
    RecommendationComponent.ctorParameters = function () { return [
        { type: AggregatorService }
    ]; };
    RecommendationComponent.propDecorators = {
        data: [{ type: Input }]
    };
    return RecommendationComponent;
}());
export { RecommendationComponent };
if (false) {
    /** @type {?} */
    RecommendationComponent.prototype.data;
    /** @type {?} */
    RecommendationComponent.prototype.aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb21tZW5kYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9sYXlvdXQvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV4QztJQVNJLGlDQUFtQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUZ2QyxTQUFJLEdBQUcsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVLLENBQUM7Ozs7SUFFckQsdUNBQUs7OztJQUFaO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7OztJQUVNLHdDQUFNOzs7O0lBQWIsVUFBYyxHQUFvQjtRQUFwQixvQkFBQSxFQUFBLFdBQW9CO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnQkFwQkosU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLDZqREFBOEM7O2lCQUVqRDs7OztnQkFQUSxpQkFBaUI7Ozt1QkFVckIsS0FBSzs7SUFjViw4QkFBQztDQUFBLEFBckJELElBcUJDO1NBZlksdUJBQXVCOzs7SUFDaEMsdUNBQXNEOztJQUUxQyxvREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJlY29tbWVuZGF0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbW9kZWxzL2Jhc2UubW9kZWwnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9hZ2dyZWdhdG9yLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlDb25zdCB9IGZyb20gJy4uLy4uL3NoYXJlZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAna2F0YW5hLXJlY29tbWVuZGF0aW9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yZWNvbW1lbmRhdGlvbi5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjb21tZW5kYXRpb25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgcHVibGljIGRhdGEgPSBuZXcgUmVjb21tZW5kYXRpb25SZXNwb25zZSh7fSk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGFnZ3JlZ2F0b3JTZXJ2aWNlOiBBZ2dyZWdhdG9yU2VydmljZSkgeyB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YS5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kYXRhLmtleXdvcmQgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VhcmNoKGFsbDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhLmFsbCA9IGFsbDtcclxuICAgICAgICB0aGlzLmRhdGEuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWdncmVnYXRvclNlcnZpY2UucHVibGlzaChLZXlDb25zdC5TZWFyY2gsIHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuIl19