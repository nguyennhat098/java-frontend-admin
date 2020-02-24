/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/card/card.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
export class CardComponent {
    constructor() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleCard(event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeCard(event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fullScreen(event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cardRefresh(event) {
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.cardLoad = '';
            this.loadCard = false;
        }), 3000);
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-card',
                template: "<div class=\"card {{ fullCard }} {{ cardLoad }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\r\n  <div class=\"card-header\" *ngIf=\"title\">\r\n    <h5>{{ title }}</h5>\r\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\r\n    <span *ngIf=\"classHeader\">\r\n      <ng-content select=\".code-header\"></ng-content>\r\n    </span>\r\n    <div class=\"card-header-right\">\r\n      <ul class=\"list-unstyled card-option\">\r\n        <li *ngIf=\"!isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-left\"></i></li>\r\n        <li *ngIf=\"isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-right\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-maximize {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-minus minimize-card\" cardToggleEvent (click)=\"toggleCard($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-refresh reload-card\" (click)=\"cardRefresh($event)\" ></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-error close-card\" (click)=\"closeCard($event)\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div [@cardToggle]=\"cardToggle\">\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"icofont icofont-refresh rotate-refresh\"></i></div>\r\n</div>\r\n",
                animations: [trigger('cardToggle', [
                        state('collapsed, void', style({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        state('expanded', style({
                            height: AUTO_STYLE,
                        })),
                        transition('collapsed <=> expanded', [
                            animate('400ms ease-in-out')
                        ])
                    ]), trigger('cardClose', [
                        state('open', style({
                            opacity: 1
                        })),
                        state('closed', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        transition('open <=> closed', animate('400ms')),
                    ])],
                styles: [".card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.75rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.75rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:7.5px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-7.5px;margin-left:-7.5px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:7.5px;margin-bottom:0;margin-left:7.5px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:7.5px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}.card-columns{-moz-column-count:3;column-count:3;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.card-columns .card{margin-bottom:.75rem}"]
            }] }
];
CardComponent.propDecorators = {
    headerContent: [{ type: Input }],
    title: [{ type: Input }],
    blockClass: [{ type: Input }],
    cardClass: [{ type: Input }],
    classHeader: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.headerContent;
    /** @type {?} */
    CardComponent.prototype.title;
    /** @type {?} */
    CardComponent.prototype.blockClass;
    /** @type {?} */
    CardComponent.prototype.cardClass;
    /** @type {?} */
    CardComponent.prototype.classHeader;
    /** @type {?} */
    CardComponent.prototype.cardToggle;
    /** @type {?} */
    CardComponent.prototype.cardClose;
    /** @type {?} */
    CardComponent.prototype.fullCard;
    /** @type {?} */
    CardComponent.prototype.fullCardIcon;
    /** @type {?} */
    CardComponent.prototype.loadCard;
    /** @type {?} */
    CardComponent.prototype.isCardToggled;
    /** @type {?} */
    CardComponent.prototype.cardLoad;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFpQzdGLE1BQU0sT0FBTyxhQUFhO0lBL0IxQjtRQW9Da0IsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsZUFBVSxHQUFHLFVBQVUsQ0FBQztRQUN4QixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsa0JBQWEsR0FBRyxLQUFLLENBQUM7SUF3Qi9CLENBQUM7Ozs7O0lBckJRLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBRU0sU0FBUyxDQUFDLEtBQVU7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFTSxVQUFVLENBQUMsS0FBVTtRQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNqRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUM7SUFDckYsQ0FBQzs7Ozs7SUFFTSxXQUFXLENBQUMsS0FBVTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7WUFqRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixzbERBQW9DO2dCQUVwQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO3dCQUNqQyxLQUFLLENBQUMsaUJBQWlCLEVBQ3JCLEtBQUssQ0FBQzs0QkFDSixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsTUFBTSxFQUFFLEtBQUs7eUJBQ2QsQ0FBQyxDQUNIO3dCQUNELEtBQUssQ0FBQyxVQUFVLEVBQ2QsS0FBSyxDQUFDOzRCQUNKLE1BQU0sRUFBRSxVQUFVO3lCQUNuQixDQUFDLENBQ0g7d0JBQ0QsVUFBVSxDQUFDLHdCQUF3QixFQUFFOzRCQUNuQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7eUJBQzdCLENBQUM7cUJBQ0gsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDOzRCQUNsQixPQUFPLEVBQUUsQ0FBQzt5QkFDWCxDQUFDLENBQUM7d0JBQ0gsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUM7NEJBQ3BCLE9BQU8sRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxNQUFNO3lCQUNoQixDQUFDLENBQUM7d0JBQ0gsVUFBVSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztxQkFDaEQsQ0FBQyxDQUFDOzthQUNKOzs7NEJBR0UsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzs7O0lBSk4sc0NBQXNDOztJQUN0Qyw4QkFBOEI7O0lBQzlCLG1DQUFtQzs7SUFDbkMsa0NBQWtDOztJQUNsQyxvQ0FBb0M7O0lBQ3BDLG1DQUErQjs7SUFDL0Isa0NBQTBCOztJQUMxQixpQ0FBd0I7O0lBQ3hCLHFDQUE0Qjs7SUFDNUIsaUNBQXdCOztJQUN4QixzQ0FBNkI7O0lBQzdCLGlDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBBVVRPX1NUWUxFLCB0cmFuc2l0aW9uLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2thdGFuYS1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFt0cmlnZ2VyKCdjYXJkVG9nZ2xlJywgW1xyXG4gICAgc3RhdGUoJ2NvbGxhcHNlZCwgdm9pZCcsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgaGVpZ2h0OiAnMHB4JyxcclxuICAgICAgfSlcclxuICAgICksXHJcbiAgICBzdGF0ZSgnZXhwYW5kZWQnLFxyXG4gICAgICBzdHlsZSh7XHJcbiAgICAgICAgaGVpZ2h0OiBBVVRPX1NUWUxFLFxyXG4gICAgICB9KVxyXG4gICAgKSxcclxuICAgIHRyYW5zaXRpb24oJ2NvbGxhcHNlZCA8PT4gZXhwYW5kZWQnLCBbXHJcbiAgICAgIGFuaW1hdGUoJzQwMG1zIGVhc2UtaW4tb3V0JylcclxuICAgIF0pXHJcbiAgXSksIHRyaWdnZXIoJ2NhcmRDbG9zZScsIFtcclxuICAgIHN0YXRlKCdvcGVuJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAxXHJcbiAgICB9KSksXHJcbiAgICBzdGF0ZSgnY2xvc2VkJywgc3R5bGUoe1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICBkaXNwbGF5OiAnbm9uZSdcclxuICAgIH0pKSxcclxuICAgIHRyYW5zaXRpb24oJ29wZW4gPD0+IGNsb3NlZCcsIGFuaW1hdGUoJzQwMG1zJykpLFxyXG4gIF0pXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJkQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwdWJsaWMgaGVhZGVyQ29udGVudDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBibG9ja0NsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGNhcmRDbGFzczogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBjbGFzc0hlYWRlciA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjYXJkVG9nZ2xlID0gJ2V4cGFuZGVkJztcclxuICBwdWJsaWMgY2FyZENsb3NlID0gJ29wZW4nO1xyXG4gIHB1YmxpYyBmdWxsQ2FyZDogc3RyaW5nO1xyXG4gIHB1YmxpYyBmdWxsQ2FyZEljb246IHN0cmluZztcclxuICBwdWJsaWMgbG9hZENhcmQgPSBmYWxzZTtcclxuICBwdWJsaWMgaXNDYXJkVG9nZ2xlZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBjYXJkTG9hZDogc3RyaW5nO1xyXG5cclxuICBwdWJsaWMgdG9nZ2xlQ2FyZChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmNhcmRUb2dnbGUgPSB0aGlzLmNhcmRUb2dnbGUgPT09ICdjb2xsYXBzZWQnID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlQ2FyZChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmNhcmRDbG9zZSA9IHRoaXMuY2FyZENsb3NlID09PSAnY2xvc2VkJyA/ICdvcGVuJyA6ICdjbG9zZWQnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGZ1bGxTY3JlZW4oZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5mdWxsQ2FyZCA9IHRoaXMuZnVsbENhcmQgPT09ICdmdWxsLWNhcmQnID8gJycgOiAnZnVsbC1jYXJkJztcclxuICAgIHRoaXMuZnVsbENhcmRJY29uID0gdGhpcy5mdWxsQ2FyZEljb24gPT09ICdpY29mb250LXJlc2l6ZScgPyAnJyA6ICdpY29mb250LXJlc2l6ZSc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FyZFJlZnJlc2goZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy5sb2FkQ2FyZCA9IHRydWU7XHJcbiAgICB0aGlzLmNhcmRMb2FkID0gJ2NhcmQtbG9hZCc7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jYXJkTG9hZCA9ICcnO1xyXG4gICAgICB0aGlzLmxvYWRDYXJkID0gZmFsc2U7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9XHJcbn1cclxuIl19