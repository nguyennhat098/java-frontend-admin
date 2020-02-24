/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/validation/validation.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, RendererFactory2, EventEmitter, Output } from '@angular/core';
import { ValidationConstant, ChangedItem } from './validation.model';
import { Subscription, forkJoin, merge, of } from 'rxjs';
import { map, defaultIfEmpty, take } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { ValidationProvider } from './validation.provider';
import { ActionService } from '../services/action.service';
import { AggregatorService } from '../services/aggregator.service';
import * as i0 from "@angular/core";
import * as i1 from "./validation.provider";
import * as i2 from "../services/data.service";
import * as i3 from "../services/action.service";
import * as i4 from "../services/aggregator.service";
var ValidationService = /** @class */ (function () {
    function ValidationService(rendererFactory, validationProvider, _dataService, _actionService, _aggregatorService) {
        this.rendererFactory = rendererFactory;
        this.validationProvider = validationProvider;
        this._dataService = _dataService;
        this._actionService = _actionService;
        this._aggregatorService = _aggregatorService;
        this.onDestroy = new EventEmitter();
        this.elements = [];
        this.errClass = ValidationConstant.DefaultErrorClass;
        this.styles = ValidationConstant.DefaultErrorStyles;
        this.attributeName = ValidationConstant.AttributeName;
        this.relatedProviders = [];
        this.subscriptions = new Subscription();
        this.virtualValidationOptions = [];
        this.changedItems = [];
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ValidationService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscriptions.unsubscribe();
        this.onDestroy.emit();
    };
    /**
     * @param {?} model
     * @return {?}
     */
    ValidationService.prototype.init = /**
     * @param {?} model
     * @return {?}
     */
    function (model) {
        var _this = this;
        this.validator = model.validator;
        if (!this.validator.payloadRef)
            this.validator.payloadRef = (/**
             * @return {?}
             */
            function () { return {}; });
        if (this.validator.relatedValidationProviders) {
            this.addRelatedProviders(this.validator.relatedValidationProviders);
        }
        this.validator.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (!option.displayText)
                option.displayText = option.validationName;
            if (!option.payloadRef)
                option.payloadRef = _this.validator.payloadRef;
            option.rules.forEach((/**
             * @param {?} action
             * @return {?}
             */
            function (action) {
                if (!action.id)
                    action.id = _this._dataService.newGuid();
                if (!action.errorMessage) {
                    switch (action.key) {
                        case ValidationConstant.Required: {
                            action.errorMessage = (/**
                             * @param {?} element
                             * @param {?} rowIndex
                             * @return {?}
                             */
                            function (element, rowIndex) {
                                /** @type {?} */
                                var displayingRowIndex = (+rowIndex + 1).toString();
                                return "" + option.displayText + (option.dynamic ? ' [' + displayingRowIndex + ']' : '') + " " + _this.validator.requiredMessage;
                            });
                            break;
                        }
                        default: {
                            action.errorMessage = (/**
                             * @return {?}
                             */
                            function () { return option.displayText + " " + _this.validator.invalidMessage; });
                            break;
                        }
                    }
                }
            }));
        }));
        this.virtualValidationOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.dynamic; }));
        this.updateAsync();
    };
    /**
     * @param {?} key
     * @return {?}
     */
    ValidationService.prototype.setKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this.key = key;
    };
    /**
     * @param {?=} relatedProvidersToRegister
     * @param {?=} item
     * @return {?}
     */
    ValidationService.prototype.updateAsync = /**
     * @param {?=} relatedProvidersToRegister
     * @param {?=} item
     * @return {?}
     */
    function (relatedProvidersToRegister, item) {
        var _this = this;
        this._actionService.executeAsync((/**
         * @return {?}
         */
        function () {
            if (relatedProvidersToRegister && relatedProvidersToRegister.length) {
                _this.addRelatedProviders(relatedProvidersToRegister);
            }
            _this.registerElements(item);
            _this.registerEvents();
        }));
    };
    /**
     * @param {?} validCallback
     * @param {?=} invalidCallback
     * @return {?}
     */
    ValidationService.prototype.executeAsync = /**
     * @param {?} validCallback
     * @param {?=} invalidCallback
     * @return {?}
     */
    function (validCallback, invalidCallback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            if (!response || response.length == 0) {
                if (validCallback)
                    validCallback(response);
                return of(true);
            }
            else {
                if (invalidCallback)
                    invalidCallback(response);
            }
        }));
        return of(true);
    };
    /**
     * @param {?=} show
     * @param {?=} focus
     * @return {?}
     */
    ValidationService.prototype.isValid = /**
     * @param {?=} show
     * @param {?=} focus
     * @return {?}
     */
    function (show, focus) {
        var _this = this;
        if (show === void 0) { show = true; }
        if (focus === void 0) { focus = true; }
        if (show) {
            this.retrieveSummaryErrors().subscribe((/**
             * @param {?} errors
             * @return {?}
             */
            function (errors) {
                _this._aggregatorService.publish(_this.key, errors);
                if (focus) {
                    if (errors && errors.length > 0) {
                        /** @type {?} */
                        var focusElement = errors[0];
                        /** @type {?} */
                        var el = (/** @type {?} */ (focusElement.element));
                        if (el) {
                            _this._actionService.executeAsync((/**
                             * @return {?}
                             */
                            function () {
                                el.focus();
                            }));
                        }
                    }
                }
            }));
        }
        /** @type {?} */
        var valid = true;
        if (this.validator.options) {
            this.validator.options.forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var payload = _this.validator.payloadRef();
                /** @type {?} */
                var fieldValue = option.valueResolver ? option.valueResolver(null, payload) : null;
                if (option.rules) {
                    option.rules.forEach((/**
                     * @param {?} action
                     * @return {?}
                     */
                    function (action) {
                        if (action.isValid != true) {
                            if (action.isValid == false) {
                                valid = false;
                            }
                            else {
                                if (fieldValue)
                                    valid = false;
                            }
                        }
                    }));
                }
            }));
        }
        return valid;
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    ValidationService.prototype.handleErrors = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        this.retrieveSummaryErrors().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (callback)
                callback(res);
        }));
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    ValidationService.prototype.commit = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        return this.retrieveSummaryErrors().pipe(map((/**
         * @param {?} errors
         * @return {?}
         */
        function (errors) {
            if (callback)
                callback(errors);
            if (errors.length == 0)
                return true;
            return false;
        })), take(1));
    };
    /**
     * @param {?} element
     * @param {?} action
     * @param {?} option
     * @return {?}
     */
    ValidationService.prototype.setElementError = /**
     * @param {?} element
     * @param {?} action
     * @param {?} option
     * @return {?}
     */
    function (element, action, option) {
        if (!element)
            return;
        this.renderer.removeClass(element, ValidationConstant.SuccessElementClass);
        this.renderer.addClass(element, option.errorElementClass);
        /** @type {?} */
        var errorElement = this.findErrorElement(element);
        if (!errorElement) {
            errorElement = this.renderer.createElement('ul');
            this.renderer.setAttribute(errorElement, ValidationConstant.ERROR_ELEMENT_ID, "" + this._dataService.newGuid());
            this.renderer.setAttribute(errorElement, 'style', this.styles);
            this.renderer.addClass(errorElement, this.errClass);
            this.renderer.addClass(errorElement, option.errorMessageClass);
            /** @type {?} */
            var parentElement = this.renderer.parentNode(element);
            this.renderer.appendChild(parentElement, errorElement);
        }
        /** @type {?} */
        var errorItemElementKey = "" + action.id;
        /** @type {?} */
        var errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        /** @type {?} */
        var dynamicSequenceId = this.findDynamicSequenceId(element);
        /** @type {?} */
        var errorMessage = action.errorMessage(element, dynamicSequenceId);
        if (!errorItemElement) {
            errorItemElement = this.renderer.createElement('li');
            this.renderer.setAttribute(errorItemElement, ValidationConstant.ERROR_ITEM_ELEMENT_ID, errorItemElementKey);
            this.renderer.appendChild(errorItemElement, this.renderer.createText(errorMessage));
            this.renderer.appendChild(errorElement, errorItemElement);
        }
        return errorMessage;
    };
    /**
     * @param {?} element
     * @param {?} action
     * @return {?}
     */
    ValidationService.prototype.clearErrorItemElement = /**
     * @param {?} element
     * @param {?} action
     * @return {?}
     */
    function (element, action) {
        /** @type {?} */
        var errorElement = this.findErrorElement(element);
        if (!errorElement)
            return;
        /** @type {?} */
        var errorItemElementKey = "" + action.id;
        /** @type {?} */
        var errorItemElement = this.findErrorItemElement(errorElement, errorItemElementKey);
        if (!errorItemElement)
            return;
        errorElement.remove();
        this.renderer.removeChild(errorElement, errorItemElement);
    };
    /**
     * @param {?=} callback
     * @return {?}
     */
    ValidationService.prototype.isDirty = /**
     * @param {?=} callback
     * @return {?}
     */
    function (callback) {
        if (!this.changedItems || this.changedItems.length == 0)
            return false;
        /** @type {?} */
        var response = this.changedItems.filter((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.change; }));
        if (callback)
            callback(response);
        return response.length > 0;
    };
    /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    ValidationService.prototype.syncErrorMessages = /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    function (element, option) {
        var _this = this;
        /** @type {?} */
        var errorMessages = [];
        option.rules.forEach((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (action.isValid) {
                _this.clearErrorItemElement(element, action);
            }
            else {
                /** @type {?} */
                var errorMessage = _this.setElementError(element, action, option);
                errorMessages.push(errorMessage);
            }
        }));
        /** @type {?} */
        var invalidActions = option.rules.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.isValid; }));
        if (invalidActions.length === 0) {
            this.renderer.removeClass(element, option.errorElementClass);
            this.renderer.removeClass(element, option.successElementClass);
            return null;
        }
        return {
            element: element,
            messages: errorMessages
        };
    };
    /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    ValidationService.prototype.validateElementAsync = /**
     * @param {?} element
     * @param {?} option
     * @return {?}
     */
    function (element, option) {
        var _this = this;
        /** @type {?} */
        var errors$ = [this.validateElement(element, option).pipe(map((/**
             * @param {?} newOption
             * @return {?}
             */
            function (newOption) { return option = newOption; })), map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return _this.syncErrorMessages(element, option); })))];
        /** @type {?} */
        var errorBatch = forkJoin(errors$);
        /** @type {?} */
        var relatedErrors = (/** @type {?} */ (this.relatedProviders.reduce((/**
         * @param {?} previous
         * @param {?} provider
         * @return {?}
         */
        function (previous, provider) {
            /** @type {?} */
            var subErrors$ = provider.retrieveSummaryErrors();
            return merge(previous, subErrors$);
        }), of([]))));
        return forkJoin(errorBatch, relatedErrors).pipe(defaultIfEmpty([[], []]), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return tslib_1.__spread(value[0], value[1]); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return [].concat(result.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error; }))); })));
    };
    /**
     * @param {?} element
     * @param {?} option
     * @param {?=} all
     * @return {?}
     */
    ValidationService.prototype.validateElement = /**
     * @param {?} element
     * @param {?} option
     * @param {?=} all
     * @return {?}
     */
    function (element, option, all) {
        var _this = this;
        if (all === void 0) { all = false; }
        /** @type {?} */
        var payload = this.validator.payloadRef();
        /** @type {?} */
        var fieldValue = option.valueResolver ? option.valueResolver(option.itemRef, payload) : null;
        /** @type {?} */
        var validatedActions$ = option.rules.map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            switch (action.key) {
                case ValidationConstant.Required: {
                    return _this.validationProvider.required(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    function (isValid) {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Email: {
                    return _this.validationProvider.email(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    function (isValid) {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Phone: {
                    return _this.validationProvider.phone(fieldValue).pipe(map((/**
                     * @param {?} isValid
                     * @return {?}
                     */
                    function (isValid) {
                        action.isValid = isValid;
                        return action;
                    })));
                }
                case ValidationConstant.Custom: {
                    if (!action.execute)
                        throw new Error('!action.execute');
                    if (!all && !action.required) {
                        if (!fieldValue) {
                            action.isValid = true;
                            return of(action);
                        }
                        else {
                            /** @type {?} */
                            var requiredRule = option.rules.find((/**
                             * @param {?} s
                             * @return {?}
                             */
                            function (s) { return s.key == ValidationConstant.Required; }));
                            if (requiredRule) {
                                requiredRule.isValid = true;
                            }
                        }
                    }
                    /** @type {?} */
                    var sequenceId = _this.findDynamicSequenceId(element);
                    return action.execute(fieldValue, payload, +sequenceId)
                        .pipe(map((/**
                     * @param {?} response
                     * @return {?}
                     */
                    function (response) {
                        if (response) {
                            action.isValid = response.status;
                            if (response.message)
                                action.errorMessage = (/**
                                 * @return {?}
                                 */
                                function () { return response.message; });
                        }
                        return action;
                    })));
                }
                default: throw new Error("Unhandled action: " + action.key);
            }
        }));
        return forkJoin(validatedActions$).pipe(take(1), map((/**
         * @param {?} validatedActions
         * @return {?}
         */
        function (validatedActions) {
            if (option.relevantFields)
                _this.validateRelevantFields(option.relevantFields(payload));
            option.rules = validatedActions;
            return option;
        })));
    };
    /**
     * @private
     * @param {?=} relevantFields
     * @return {?}
     */
    ValidationService.prototype.validateRelevantFields = /**
     * @private
     * @param {?=} relevantFields
     * @return {?}
     */
    function (relevantFields) {
        var _this = this;
        if (!relevantFields || relevantFields.length == 0)
            return;
        if (relevantFields && relevantFields.length > 0) {
            relevantFields.forEach((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                var _loop_1 = function (i) {
                    attributes = _this.elements[i].attributes;
                    if (attributes && attributes.length > 0) {
                        if (attributes[_this.attributeName].value == item) {
                            option = _this.findElementOption(_this.elements[i]);
                            if (option) {
                                _this.validateElement(_this.elements[i], option, true).pipe(map((/**
                                 * @param {?} newOption
                                 * @return {?}
                                 */
                                function (newOption) { return option = newOption; })), map((/**
                                 * @param {?} option
                                 * @return {?}
                                 */
                                function (option) { return _this.syncErrorMessages(_this.elements[i], option); }))).subscribe();
                            }
                            return "break";
                        }
                    }
                };
                var attributes, option;
                for (var i = 0; i < _this.elements.length; i++) {
                    var state_1 = _loop_1(i);
                    if (state_1 === "break")
                        break;
                }
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ValidationService.prototype.retrieveSummaryErrors = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var errors$ = this.elements.map((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            /** @type {?} */
            var validationOption = _this.findElementOption(element);
            if (!validationOption)
                return;
            return _this.validateElement(element, validationOption).pipe(map((/**
             * @param {?} newOption
             * @return {?}
             */
            function (newOption) { return validationOption = newOption; })), map((/**
             * @param {?} option
             * @return {?}
             */
            function (option) { return _this.syncErrorMessages(element, option); })));
        }));
        /** @type {?} */
        var errorBatch = forkJoin(errors$);
        /** @type {?} */
        var relatedErrors = (/** @type {?} */ (this.relatedProviders.reduce((/**
         * @param {?} previous
         * @param {?} provider
         * @return {?}
         */
        function (previous, provider) {
            /** @type {?} */
            var subErrors$ = provider.retrieveSummaryErrors();
            return merge(previous, subErrors$);
        }), of([]))));
        return forkJoin(errorBatch, relatedErrors).pipe(defaultIfEmpty([[], []]), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return tslib_1.__spread(value[0], value[1]); })), map((/**
         * @param {?} result
         * @return {?}
         */
        function (result) { return [].concat(result.filter((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return error; }))); })));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.findElementOption = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var validationIdAttribute = element.attributes[ValidationConstant.VALIDATION_ID];
        if (!validationIdAttribute)
            return null;
        /** @type {?} */
        var validationId = validationIdAttribute.value;
        if (!validationId)
            return null;
        return this.validator.options.find((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.validationId === validationId; }));
    };
    /**
     * @private
     * @param {?} errorElement
     * @param {?} key
     * @return {?}
     */
    ValidationService.prototype.findErrorItemElement = /**
     * @private
     * @param {?} errorElement
     * @param {?} key
     * @return {?}
     */
    function (errorElement, key) {
        /** @type {?} */
        var children = (/** @type {?} */ (Array.from(errorElement.children)));
        return children
            .filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID]; }))
            .find((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.attributes[ValidationConstant.ERROR_ITEM_ELEMENT_ID].value === key; }));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.findDynamicSequenceId = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var sequenceIdAttribute = element.attributes[ValidationConstant.ARRAY_SEQUENCE_ID];
        if (!sequenceIdAttribute)
            return null;
        /** @type {?} */
        var sequenceId = sequenceIdAttribute.value;
        if (!sequenceId)
            return null;
        return sequenceId;
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.findErrorElement = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element.parentElement && element.parentElement.children) {
            /** @type {?} */
            var slibings = (/** @type {?} */ (Array.from(element.parentElement.children)));
            /** @type {?} */
            var result = slibings.filter((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.attributes; })).find((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.attributes[ValidationConstant.ERROR_ELEMENT_ID]; }));
            return result;
        }
        return null;
    };
    /**
     * @private
     * @param {?=} item
     * @return {?}
     */
    ValidationService.prototype.registerElements = /**
     * @private
     * @param {?=} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        /** @type {?} */
        var nonDynamicOptions = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.dynamic; }));
        /** @type {?} */
        var nonDynamicElements = nonDynamicOptions.reduce((/**
         * @param {?} previous
         * @param {?} current
         * @return {?}
         */
        function (previous, current) {
            /** @type {?} */
            var query = "*[" + _this.attributeName + "=\"" + current.validationName + "\"]";
            if (_this.validator.scope) {
                query += "[scope=\"" + _this.validator.scope + "\"]";
            }
            /** @type {?} */
            var elements = (/** @type {?} */ (Array.from(_this.validator.formRef.nativeElement.querySelectorAll(query))));
            elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var validationId = _this._dataService.newGuid();
                _this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                current.validationId = validationId;
            }));
            return previous.concat(elements);
        }), []);
        /** @type {?} */
        var generatedDynamicOptions = [];
        /** @type {?} */
        var dynamicElements = [];
        this.validator.options = this.validator.options.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return !x.dynamic; }));
        this.virtualValidationOptions.forEach((/**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            /** @type {?} */
            var query = "*[" + _this.attributeName + "=\"" + current.validationName + "\"]";
            if (_this.validator.scope) {
                query += "[scope=\"" + _this.validator.scope + "\"]";
            }
            /** @type {?} */
            var elements = Array.from(_this.validator.formRef.nativeElement.querySelectorAll(query));
            /** @type {?} */
            var clonedOptions = elements.map((/**
             * @param {?} element
             * @param {?} index
             * @return {?}
             */
            function (element, index) {
                /** @type {?} */
                var validationId = _this._dataService.newGuid();
                _this.renderer.setAttribute(element, ValidationConstant.VALIDATION_ID, validationId);
                _this.renderer.setAttribute(element, ValidationConstant.ARRAY_SEQUENCE_ID, index.toString());
                return tslib_1.__assign({}, current, { validationId: validationId, itemRef: item, valueResolver: current.valueResolver
                        ? (/**
                         * @param {?} payload
                         * @return {?}
                         */
                        function (payload) { return current.valueResolver(item, payload, index); })
                        : (/**
                         * @return {?}
                         */
                        function () { return ((/** @type {?} */ (element))).value; }) });
            }));
            dynamicElements.push.apply(dynamicElements, tslib_1.__spread(elements));
            generatedDynamicOptions.push.apply(generatedDynamicOptions, tslib_1.__spread(clonedOptions));
        }));
        this.validator.options = nonDynamicOptions.concat(generatedDynamicOptions);
        this.elements = nonDynamicElements.concat(dynamicElements);
        if (this.elements) {
            this.changedItems = [];
            this.elements.forEach((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                /** @type {?} */
                var payload = _this.validator.payloadRef();
                /** @type {?} */
                var elementOption = _this.findElementOption(element);
                _this.changedItems.push(new ChangedItem({
                    id: elementOption.validationId,
                    field: elementOption.validationName,
                    oldValue: elementOption.valueResolver ? elementOption.valueResolver(null, payload) : null
                }));
            }));
        }
    };
    /**
     * @private
     * @return {?}
     */
    ValidationService.prototype.registerEvents = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.elements.filter((/**
         * @param {?} element
         * @return {?}
         */
        function (element) { return element.attributes[_this.attributeName]; })).forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (!element.focusoutListener) {
                element.focusoutListener = _this.renderer.listen(element, 'focusout', (/**
                 * @return {?}
                 */
                function () {
                    _this.handleBlurEvent(element);
                }));
                element.focusoutListener = _this.renderer.listen(element, 'change', (/**
                 * @param {?} $event
                 * @return {?}
                 */
                function ($event) {
                    /** @type {?} */
                    var payload = _this.validator.payloadRef();
                    /** @type {?} */
                    var elementOption = _this.findElementOption(element);
                    /** @type {?} */
                    var value = elementOption.valueResolver ? elementOption.valueResolver(null, payload) : null;
                    if (elementOption && elementOption.dirtyCheck) {
                        /** @type {?} */
                        var currentItem = _this.changedItems.find((/**
                         * @param {?} s
                         * @return {?}
                         */
                        function (s) { return s.id == elementOption.validationId; }));
                        if (!currentItem) {
                            _this.changedItems.push(new ChangedItem({
                                id: elementOption.validationId,
                                field: elementOption.validationName,
                                value: value,
                                change: true
                            }));
                        }
                        else {
                            currentItem.value = value;
                            if (currentItem.oldValue == undefined || currentItem.oldValue == '') {
                                if (value == undefined || value == '') {
                                    currentItem.change = false;
                                }
                                else {
                                    currentItem.change = true;
                                }
                            }
                            else {
                                if (value == undefined || value == '') {
                                    currentItem.change = true;
                                }
                                else {
                                    if (currentItem.oldValue.toString() != currentItem.value.toString()) {
                                        currentItem.change = true;
                                    }
                                    else {
                                        currentItem.change = false;
                                    }
                                }
                            }
                        }
                    }
                    if (elementOption && elementOption.rules) {
                        elementOption.rules.forEach((/**
                         * @param {?} rule
                         * @return {?}
                         */
                        function (rule) {
                            rule.isValid = false;
                        }));
                    }
                }));
            }
        }));
    };
    /**
     * @private
     * @param {?} element
     * @return {?}
     */
    ValidationService.prototype.handleBlurEvent = /**
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        /** @type {?} */
        var elementOption = this.findElementOption(element);
        if (!elementOption)
            throw new Error('!elementOption');
        this.validateElement(element, elementOption).pipe(take(1)).subscribe((/**
         * @param {?} newOption
         * @return {?}
         */
        function (newOption) {
            elementOption = newOption;
            _this.syncErrorMessages(element, elementOption);
        }));
    };
    /**
     * @private
     * @param {?} providers
     * @return {?}
     */
    ValidationService.prototype.addRelatedProviders = /**
     * @private
     * @param {?} providers
     * @return {?}
     */
    function (providers) {
        var _a;
        var _this = this;
        /** @type {?} */
        var newProviders = providers.filter((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return _this.relatedProviders.indexOf(x) < 0; }));
        newProviders.forEach((/**
         * @param {?} provider
         * @return {?}
         */
        function (provider) {
            return provider.onDestroy.subscribe((/**
             * @return {?}
             */
            function () {
                _this.relatedProviders = _this.relatedProviders.filter((/**
                 * @return {?}
                 */
                function () { return _this.relatedProviders.indexOf(provider) < 0; }));
            }));
        }));
        (_a = this.relatedProviders).push.apply(_a, tslib_1.__spread(newProviders));
    };
    ValidationService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    ValidationService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: ValidationProvider },
        { type: DataService },
        { type: ActionService },
        { type: AggregatorService }
    ]; };
    ValidationService.propDecorators = {
        onDestroy: [{ type: Output }]
    };
    /** @nocollapse */ ValidationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ValidationService_Factory() { return new ValidationService(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.ValidationProvider), i0.ɵɵinject(i2.DataService), i0.ɵɵinject(i3.ActionService), i0.ɵɵinject(i4.AggregatorService)); }, token: ValidationService, providedIn: "root" });
    return ValidationService;
}());
export { ValidationService };
if (false) {
    /** @type {?} */
    ValidationService.prototype.onDestroy;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.elements;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.validator;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.errClass;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.styles;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.attributeName;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.relatedProviders;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.subscriptions;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.virtualValidationOptions;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.changedItems;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype.key;
    /**
     * @type {?}
     * @protected
     */
    ValidationService.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    ValidationService.prototype.validationProvider;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._dataService;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._actionService;
    /**
     * @type {?}
     * @private
     */
    ValidationService.prototype._aggregatorService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFhLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBcUMsa0JBQWtCLEVBQWdDLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RJLE9BQU8sRUFBRSxZQUFZLEVBQWMsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7O0FBRW5FO0lBZUksMkJBQ2MsZUFBaUMsRUFDakMsa0JBQXNDLEVBQ3hDLFlBQXlCLEVBQ3pCLGNBQTZCLEVBQzdCLGtCQUFxQztRQUpuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFDakMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBbEJoQyxjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUQsYUFBUSxHQUFjLEVBQUUsQ0FBQztR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LE9BQU87Ozs7UUFBQyxVQUFBLFFBQVE7WUFDekIsT0FBQSxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVM7OztZQUFDO2dCQUN6QixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU07OztnQkFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQTNDLENBQTJDLEVBQUMsQ0FBQztZQUM1RyxDQUFDLEVBQUM7UUFGRixDQUVFLEVBQUMsQ0FBQztRQUNSLENBQUEsS0FBQSxJQUFJLENBQUMsZ0JBQWdCLENBQUEsQ0FBQyxJQUFJLDRCQUFJLFlBQVksR0FBRTtJQUNoRCxDQUFDOztnQkF2ZkosVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFURixnQkFBZ0I7Z0JBS3ZDLGtCQUFrQjtnQkFEbEIsV0FBVztnQkFFWCxhQUFhO2dCQUNiLGlCQUFpQjs7OzRCQUlyQixNQUFNOzs7NEJBWFg7Q0FpZ0JDLEFBeGZELElBd2ZDO1NBdmZZLGlCQUFpQjs7O0lBQzFCLHNDQUFvRTs7Ozs7SUFDcEUscUNBQWlDOzs7OztJQUNqQyxzQ0FBbUM7Ozs7O0lBQ25DLHFDQUFnRTs7Ozs7SUFDaEUsbUNBQStEOzs7OztJQUMvRCwwQ0FBaUU7Ozs7O0lBQ2pFLHFDQUE0Qjs7Ozs7SUFDNUIsNkNBQW1EOzs7OztJQUNuRCwwQ0FBeUQ7Ozs7O0lBQ3pELHFEQUEwRDs7Ozs7SUFDMUQseUNBQXlDOzs7OztJQUN6QyxnQ0FBb0I7Ozs7O0lBR2hCLDRDQUEyQzs7Ozs7SUFDM0MsK0NBQWdEOzs7OztJQUNoRCx5Q0FBaUM7Ozs7O0lBQ2pDLDJDQUFxQzs7Ozs7SUFDckMsK0NBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyLCBJbmplY3RhYmxlLCBSZW5kZXJlckZhY3RvcnkyLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uT3B0aW9uLCBDbGllbnRWYWxpZGF0b3IsIFZhbGlkYXRpb25Db25zdGFudCwgU3VtbWFyeUVycm9yLCBWYWxpZGF0aW9uUnVsZSwgQ2hhbmdlZEl0ZW0gfSBmcm9tICcuL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUsIGZvcmtKb2luLCBtZXJnZSwgb2YgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBkZWZhdWx0SWZFbXB0eSwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uUHJvdmlkZXIgfSBmcm9tICcuL3ZhbGlkYXRpb24ucHJvdmlkZXInO1xyXG5pbXBvcnQgeyBBY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYWN0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBZ2dyZWdhdG9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FnZ3JlZ2F0b3Iuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvblNlcnZpY2Uge1xyXG4gICAgQE91dHB1dCgpIHB1YmxpYyBvbkRlc3Ryb3k6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIHByaXZhdGUgZWxlbWVudHM6IEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSB2YWxpZGF0b3I6IENsaWVudFZhbGlkYXRvcjtcclxuICAgIHByaXZhdGUgZXJyQ2xhc3M6IHN0cmluZyA9IFZhbGlkYXRpb25Db25zdGFudC5EZWZhdWx0RXJyb3JDbGFzcztcclxuICAgIHByaXZhdGUgc3R5bGVzOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuRGVmYXVsdEVycm9yU3R5bGVzO1xyXG4gICAgcHJpdmF0ZSBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcgPSBWYWxpZGF0aW9uQ29uc3RhbnQuQXR0cmlidXRlTmFtZTtcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMjtcclxuICAgIHByaXZhdGUgcmVsYXRlZFByb3ZpZGVyczogVmFsaWRhdGlvblNlcnZpY2VbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxWYWxpZGF0aW9uT3B0aW9uczogVmFsaWRhdGlvbk9wdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIGNoYW5nZWRJdGVtczogQ2hhbmdlZEl0ZW1bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBrZXk6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgICAgIHByb3RlY3RlZCB2YWxpZGF0aW9uUHJvdmlkZXI6IFZhbGlkYXRpb25Qcm92aWRlcixcclxuICAgICAgICBwcml2YXRlIF9kYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9hZ2dyZWdhdG9yU2VydmljZTogQWdncmVnYXRvclNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kuZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KG1vZGVsOiB7IHZhbGlkYXRvcjogQ2xpZW50VmFsaWRhdG9yIH0pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG1vZGVsLnZhbGlkYXRvcjtcclxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYpIHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYgPSAoKSA9PiB7IHJldHVybiB7fSB9O1xyXG5cclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0b3IucmVsYXRlZFZhbGlkYXRpb25Qcm92aWRlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRSZWxhdGVkUHJvdmlkZXJzKHRoaXMudmFsaWRhdG9yLnJlbGF0ZWRWYWxpZGF0aW9uUHJvdmlkZXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5kaXNwbGF5VGV4dCkgb3B0aW9uLmRpc3BsYXlUZXh0ID0gb3B0aW9uLnZhbGlkYXRpb25OYW1lO1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbi5wYXlsb2FkUmVmKSBvcHRpb24ucGF5bG9hZFJlZiA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWY7XHJcbiAgICAgICAgICAgIG9wdGlvbi5ydWxlcy5mb3JFYWNoKGFjdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5pZCkgYWN0aW9uLmlkID0gdGhpcy5fZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24uZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LlJlcXVpcmVkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uZXJyb3JNZXNzYWdlID0gKGVsZW1lbnQ6IEVsZW1lbnQsIHJvd0luZGV4OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5aW5nUm93SW5kZXggPSAoK3Jvd0luZGV4ICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7b3B0aW9uLmRpc3BsYXlUZXh0fSR7b3B0aW9uLmR5bmFtaWMgPyAnIFsnICsgZGlzcGxheWluZ1Jvd0luZGV4ICsgJ10nIDogJyd9ICR7dGhpcy52YWxpZGF0b3IucmVxdWlyZWRNZXNzYWdlfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmVycm9yTWVzc2FnZSA9ICgpID0+IGAke29wdGlvbi5kaXNwbGF5VGV4dH0gJHt0aGlzLnZhbGlkYXRvci5pbnZhbGlkTWVzc2FnZX1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlydHVhbFZhbGlkYXRpb25PcHRpb25zID0gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maWx0ZXIoeCA9PiB4LmR5bmFtaWMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQXN5bmMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0S2V5KGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUFzeW5jKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyPzogVmFsaWRhdGlvblNlcnZpY2VbXSwgaXRlbT86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2FjdGlvblNlcnZpY2UuZXhlY3V0ZUFzeW5jKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyICYmIHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRSZWxhdGVkUHJvdmlkZXJzKHJlbGF0ZWRQcm92aWRlcnNUb1JlZ2lzdGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRWxlbWVudHMoaXRlbSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhlY3V0ZUFzeW5jKHZhbGlkQ2FsbGJhY2s6IChlcnJvcnM/OiBTdW1tYXJ5RXJyb3JbXSkgPT4gYW55LCBpbnZhbGlkQ2FsbGJhY2s/OiAoZXJyb3JzPzogU3VtbWFyeUVycm9yW10pID0+IGFueSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXJlc3BvbnNlIHx8IHJlc3BvbnNlLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRDYWxsYmFjaykgdmFsaWRDYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2YodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW52YWxpZENhbGxiYWNrKSBpbnZhbGlkQ2FsbGJhY2socmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9mKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1ZhbGlkKHNob3c6IGJvb2xlYW4gPSB0cnVlLCBmb2N1czogYm9vbGVhbiA9IHRydWUpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoc2hvdykge1xyXG4gICAgICAgICAgICB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnN1YnNjcmliZSgoZXJyb3JzOiBTdW1tYXJ5RXJyb3JbXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYWdncmVnYXRvclNlcnZpY2UucHVibGlzaCh0aGlzLmtleSwgZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb2N1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMgJiYgZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvY3VzRWxlbWVudCA9IGVycm9yc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsID0gPGFueT5mb2N1c0VsZW1lbnQuZWxlbWVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY3Rpb25TZXJ2aWNlLmV4ZWN1dGVBc3luYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWwuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlID0gb3B0aW9uLnZhbHVlUmVzb2x2ZXIgPyBvcHRpb24udmFsdWVSZXNvbHZlcihudWxsLCBwYXlsb2FkKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnJ1bGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnJ1bGVzLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uLmlzVmFsaWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFjdGlvbi5pc1ZhbGlkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkVmFsdWUpIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFuZGxlRXJyb3JzKGNhbGxiYWNrPzogKHJlc3BvbnNlOiBTdW1tYXJ5RXJyb3JbXSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmV0cmlldmVTdW1tYXJ5RXJyb3JzKCkuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21taXQoY2FsbGJhY2s/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJldHJpZXZlU3VtbWFyeUVycm9ycygpLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChlcnJvcnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9ycy5sZW5ndGggPT0gMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pLCB0YWtlKDEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RWxlbWVudEVycm9yKGVsZW1lbnQ6IEVsZW1lbnQsIGFjdGlvbjogVmFsaWRhdGlvblJ1bGUsIG9wdGlvbjogVmFsaWRhdGlvbk9wdGlvbik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuU3VjY2Vzc0VsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCBvcHRpb24uZXJyb3JFbGVtZW50Q2xhc3MpO1xyXG4gICAgICAgIGxldCBlcnJvckVsZW1lbnQgPSB0aGlzLmZpbmRFcnJvckVsZW1lbnQoZWxlbWVudCk7XHJcbiAgICAgICAgaWYgKCFlcnJvckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXJyb3JFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlcnJvckVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9FTEVNRU5UX0lELCBgJHt0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCl9YCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVycm9yRWxlbWVudCwgJ3N0eWxlJywgdGhpcy5zdHlsZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVycm9yRWxlbWVudCwgdGhpcy5lcnJDbGFzcyk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZXJyb3JFbGVtZW50LCBvcHRpb24uZXJyb3JNZXNzYWdlQ2xhc3MpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHBhcmVudEVsZW1lbnQsIGVycm9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBlcnJvckl0ZW1FbGVtZW50S2V5OiBzdHJpbmcgPSBgJHthY3Rpb24uaWR9YDtcclxuICAgICAgICBsZXQgZXJyb3JJdGVtRWxlbWVudCA9IHRoaXMuZmluZEVycm9ySXRlbUVsZW1lbnQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50S2V5KTtcclxuICAgICAgICBjb25zdCBkeW5hbWljU2VxdWVuY2VJZCA9IHRoaXMuZmluZER5bmFtaWNTZXF1ZW5jZUlkKGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGFjdGlvbi5lcnJvck1lc3NhZ2UoZWxlbWVudCwgZHluYW1pY1NlcXVlbmNlSWQpO1xyXG5cclxuICAgICAgICBpZiAoIWVycm9ySXRlbUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZXJyb3JJdGVtRWxlbWVudCA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUoZXJyb3JJdGVtRWxlbWVudCwgVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0lURU1fRUxFTUVOVF9JRCwgZXJyb3JJdGVtRWxlbWVudEtleSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZXJyb3JJdGVtRWxlbWVudCwgdGhpcy5yZW5kZXJlci5jcmVhdGVUZXh0KGVycm9yTWVzc2FnZSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhckVycm9ySXRlbUVsZW1lbnQoZWxlbWVudDogYW55LCBhY3Rpb246IFZhbGlkYXRpb25SdWxlKSB7XHJcbiAgICAgICAgbGV0IGVycm9yRWxlbWVudCA9IHRoaXMuZmluZEVycm9yRWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVycm9yRWxlbWVudCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBlcnJvckl0ZW1FbGVtZW50S2V5OiBzdHJpbmcgPSBgJHthY3Rpb24uaWR9YDtcclxuICAgICAgICBsZXQgZXJyb3JJdGVtRWxlbWVudCA9IHRoaXMuZmluZEVycm9ySXRlbUVsZW1lbnQoZXJyb3JFbGVtZW50LCBlcnJvckl0ZW1FbGVtZW50S2V5KTtcclxuICAgICAgICBpZiAoIWVycm9ySXRlbUVsZW1lbnQpIHJldHVybjtcclxuICAgICAgICBlcnJvckVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChlcnJvckVsZW1lbnQsIGVycm9ySXRlbUVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0RpcnR5KGNhbGxiYWNrPzogKGl0ZW1zOiBDaGFuZ2VkSXRlbVtdKSA9PiB2b2lkKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoYW5nZWRJdGVtcyB8fCB0aGlzLmNoYW5nZWRJdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciByZXNwb25zZSA9IHRoaXMuY2hhbmdlZEl0ZW1zLmZpbHRlcihzID0+IHMuY2hhbmdlKTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UubGVuZ3RoID4gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3luY0Vycm9yTWVzc2FnZXMoZWxlbWVudDogYW55LCBvcHRpb246IFZhbGlkYXRpb25PcHRpb24pOiBTdW1tYXJ5RXJyb3IgfCBudWxsIHtcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBvcHRpb24ucnVsZXMuZm9yRWFjaChhY3Rpb24gPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJFcnJvckl0ZW1FbGVtZW50KGVsZW1lbnQsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSB0aGlzLnNldEVsZW1lbnRFcnJvcihlbGVtZW50LCBhY3Rpb24sIG9wdGlvbik7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnB1c2goZXJyb3JNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnZhbGlkQWN0aW9ucyA9IG9wdGlvbi5ydWxlcy5maWx0ZXIoeCA9PiAheC5pc1ZhbGlkKTtcclxuICAgICAgICBpZiAoaW52YWxpZEFjdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgb3B0aW9uLmVycm9yRWxlbWVudENsYXNzKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCBvcHRpb24uc3VjY2Vzc0VsZW1lbnRDbGFzcyk7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IGVycm9yTWVzc2FnZXNcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbGlkYXRlRWxlbWVudEFzeW5jKGVsZW1lbnQ6IGFueSwgb3B0aW9uOiBWYWxpZGF0aW9uT3B0aW9uKTogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyQgPSBbdGhpcy52YWxpZGF0ZUVsZW1lbnQoZWxlbWVudCwgb3B0aW9uKS5waXBlKFxyXG4gICAgICAgICAgICBtYXAobmV3T3B0aW9uID0+IG9wdGlvbiA9IG5ld09wdGlvbiksXHJcbiAgICAgICAgICAgIG1hcChvcHRpb24gPT4gdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50LCBvcHRpb24pKSxcclxuICAgICAgICApXTtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JCYXRjaCA9IGZvcmtKb2luKGVycm9ycyQpO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRFcnJvcnMgPSA8T2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4+dGhpcy5yZWxhdGVkUHJvdmlkZXJzLnJlZHVjZSgocHJldmlvdXM6IE9ic2VydmFibGU8U3VtbWFyeUVycm9yW10+LCBwcm92aWRlcjogVmFsaWRhdGlvblNlcnZpY2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViRXJyb3JzJCA9IHByb3ZpZGVyLnJldHJpZXZlU3VtbWFyeUVycm9ycygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2UocHJldmlvdXMsIHN1YkVycm9ycyQpO1xyXG4gICAgICAgIH0sIG9mKFtdKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JrSm9pbihlcnJvckJhdGNoLCByZWxhdGVkRXJyb3JzKS5waXBlKFxyXG4gICAgICAgICAgICBkZWZhdWx0SWZFbXB0eShbW10sIFtdXSksXHJcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbLi4udmFsdWVbMF0sIC4uLnZhbHVlWzFdXSksXHJcbiAgICAgICAgICAgIG1hcChyZXN1bHQgPT4gW10uY29uY2F0KHJlc3VsdC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IpKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdmFsaWRhdGVFbGVtZW50KGVsZW1lbnQ6IGFueSwgb3B0aW9uOiBWYWxpZGF0aW9uT3B0aW9uLCBhbGw6IGJvb2xlYW4gPSBmYWxzZSk6IE9ic2VydmFibGU8VmFsaWRhdGlvbk9wdGlvbj4ge1xyXG4gICAgICAgIGNvbnN0IHBheWxvYWQgPSB0aGlzLnZhbGlkYXRvci5wYXlsb2FkUmVmKCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IG9wdGlvbi52YWx1ZVJlc29sdmVyID8gb3B0aW9uLnZhbHVlUmVzb2x2ZXIob3B0aW9uLml0ZW1SZWYsIHBheWxvYWQpIDogbnVsbDtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZWRBY3Rpb25zJCA9IG9wdGlvbi5ydWxlcy5tYXAoYWN0aW9uID0+IHtcclxuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRpb25Qcm92aWRlci5yZXF1aXJlZChmaWVsZFZhbHVlKS5waXBlKG1hcChpc1ZhbGlkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhc2UgVmFsaWRhdGlvbkNvbnN0YW50LkVtYWlsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblByb3ZpZGVyLmVtYWlsKGZpZWxkVmFsdWUpLnBpcGUobWFwKGlzVmFsaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IGlzVmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBWYWxpZGF0aW9uQ29uc3RhbnQuUGhvbmU6IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0aW9uUHJvdmlkZXIucGhvbmUoZmllbGRWYWx1ZSkucGlwZShtYXAoaXNWYWxpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbi5pc1ZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFZhbGlkYXRpb25Db25zdGFudC5DdXN0b206IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFjdGlvbi5leGVjdXRlKSB0aHJvdyBuZXcgRXJyb3IoJyFhY3Rpb24uZXhlY3V0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxsICYmICFhY3Rpb24ucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2YoYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXF1aXJlZFJ1bGUgPSBvcHRpb24ucnVsZXMuZmluZChzID0+IHMua2V5ID09IFZhbGlkYXRpb25Db25zdGFudC5SZXF1aXJlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWRSdWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRSdWxlLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlSWQgPSB0aGlzLmZpbmREeW5hbWljU2VxdWVuY2VJZChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmV4ZWN1dGUoZmllbGRWYWx1ZSwgcGF5bG9hZCwgK3NlcXVlbmNlSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5waXBlKG1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24uaXNWYWxpZCA9IHJlc3BvbnNlLnN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UubWVzc2FnZSkgYWN0aW9uLmVycm9yTWVzc2FnZSA9ICgpID0+IHsgcmV0dXJuIHJlc3BvbnNlLm1lc3NhZ2U7IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb246ICR7YWN0aW9uLmtleX1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZm9ya0pvaW4odmFsaWRhdGVkQWN0aW9ucyQpLnBpcGUoXHJcbiAgICAgICAgICAgIHRha2UoMSksXHJcbiAgICAgICAgICAgIG1hcCh2YWxpZGF0ZWRBY3Rpb25zID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb24ucmVsZXZhbnRGaWVsZHMpIHRoaXMudmFsaWRhdGVSZWxldmFudEZpZWxkcyhvcHRpb24ucmVsZXZhbnRGaWVsZHMocGF5bG9hZCkpO1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLnJ1bGVzID0gdmFsaWRhdGVkQWN0aW9ucztcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlbGV2YW50RmllbGRzKHJlbGV2YW50RmllbGRzPzogc3RyaW5nW10pOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXJlbGV2YW50RmllbGRzIHx8IHJlbGV2YW50RmllbGRzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHJlbGV2YW50RmllbGRzICYmIHJlbGV2YW50RmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmVsZXZhbnRGaWVsZHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5lbGVtZW50c1tpXS5hdHRyaWJ1dGVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc1t0aGlzLmF0dHJpYnV0ZU5hbWVdLnZhbHVlID09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSB0aGlzLmZpbmRFbGVtZW50T3B0aW9uKHRoaXMuZWxlbWVudHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVFbGVtZW50KHRoaXMuZWxlbWVudHNbaV0sIG9wdGlvbiwgdHJ1ZSkucGlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwKG5ld09wdGlvbiA9PiBvcHRpb24gPSBuZXdPcHRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAob3B0aW9uID0+IHRoaXMuc3luY0Vycm9yTWVzc2FnZXModGhpcy5lbGVtZW50c1tpXSwgb3B0aW9uKSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXRyaWV2ZVN1bW1hcnlFcnJvcnMoKTogT2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4ge1xyXG4gICAgICAgIGNvbnN0IGVycm9ycyQgPSB0aGlzLmVsZW1lbnRzLm1hcChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25PcHRpb24gPSB0aGlzLmZpbmRFbGVtZW50T3B0aW9uKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25PcHRpb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRWxlbWVudChlbGVtZW50LCB2YWxpZGF0aW9uT3B0aW9uKS5waXBlKFxyXG4gICAgICAgICAgICAgICAgbWFwKG5ld09wdGlvbiA9PiB2YWxpZGF0aW9uT3B0aW9uID0gbmV3T3B0aW9uKSxcclxuICAgICAgICAgICAgICAgIG1hcChvcHRpb24gPT4gdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50LCBvcHRpb24pKSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JCYXRjaCA9IGZvcmtKb2luKGVycm9ycyQpO1xyXG4gICAgICAgIGNvbnN0IHJlbGF0ZWRFcnJvcnMgPSA8T2JzZXJ2YWJsZTxTdW1tYXJ5RXJyb3JbXT4+dGhpcy5yZWxhdGVkUHJvdmlkZXJzLnJlZHVjZSgocHJldmlvdXM6IE9ic2VydmFibGU8U3VtbWFyeUVycm9yW10+LCBwcm92aWRlcjogVmFsaWRhdGlvblNlcnZpY2UpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3ViRXJyb3JzJCA9IHByb3ZpZGVyLnJldHJpZXZlU3VtbWFyeUVycm9ycygpO1xyXG4gICAgICAgICAgICByZXR1cm4gbWVyZ2UocHJldmlvdXMsIHN1YkVycm9ycyQpO1xyXG4gICAgICAgIH0sIG9mKFtdKSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmb3JrSm9pbihlcnJvckJhdGNoLCByZWxhdGVkRXJyb3JzKS5waXBlKFxyXG4gICAgICAgICAgICBkZWZhdWx0SWZFbXB0eShbW10sIFtdXSksXHJcbiAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiBbLi4udmFsdWVbMF0sIC4uLnZhbHVlWzFdXSksXHJcbiAgICAgICAgICAgIG1hcChyZXN1bHQgPT4gW10uY29uY2F0KHJlc3VsdC5maWx0ZXIoZXJyb3IgPT4gZXJyb3IpKSksXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRFbGVtZW50T3B0aW9uKGVsZW1lbnQ6IEVsZW1lbnQpOiBWYWxpZGF0aW9uT3B0aW9uIHwgbnVsbCB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbklkQXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5WQUxJREFUSU9OX0lEXTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRpb25JZEF0dHJpYnV0ZSkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25JZCA9IHZhbGlkYXRpb25JZEF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICBpZiAoIXZhbGlkYXRpb25JZCkgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmluZChvcHRpb24gPT4gb3B0aW9uLnZhbGlkYXRpb25JZCA9PT0gdmFsaWRhdGlvbklkKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRFcnJvckl0ZW1FbGVtZW50KGVycm9yRWxlbWVudDogYW55LCBrZXk6IHN0cmluZyk6IGFueSB8IG51bGwge1xyXG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gPEVsZW1lbnRbXT5BcnJheS5mcm9tKGVycm9yRWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0lURU1fRUxFTUVOVF9JRF0pXHJcbiAgICAgICAgICAgIC5maW5kKHggPT4geC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5FUlJPUl9JVEVNX0VMRU1FTlRfSURdLnZhbHVlID09PSBrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmluZER5bmFtaWNTZXF1ZW5jZUlkKGVsZW1lbnQ6IEVsZW1lbnQpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgICAgICBjb25zdCBzZXF1ZW5jZUlkQXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzW1ZhbGlkYXRpb25Db25zdGFudC5BUlJBWV9TRVFVRU5DRV9JRF07XHJcbiAgICAgICAgaWYgKCFzZXF1ZW5jZUlkQXR0cmlidXRlKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VJZCA9IHNlcXVlbmNlSWRBdHRyaWJ1dGUudmFsdWU7XHJcbiAgICAgICAgaWYgKCFzZXF1ZW5jZUlkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICByZXR1cm4gc2VxdWVuY2VJZDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZpbmRFcnJvckVsZW1lbnQoZWxlbWVudDogRWxlbWVudCk6IEVsZW1lbnQge1xyXG4gICAgICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgZWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWJpbmdzID0gPEVsZW1lbnRbXT5BcnJheS5mcm9tKGVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBzbGliaW5ncy5maWx0ZXIoeCA9PiB4LmF0dHJpYnV0ZXMpLmZpbmQoeCA9PiB4LmF0dHJpYnV0ZXNbVmFsaWRhdGlvbkNvbnN0YW50LkVSUk9SX0VMRU1FTlRfSURdKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckVsZW1lbnRzKGl0ZW0/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBub25EeW5hbWljT3B0aW9ucyA9IHRoaXMudmFsaWRhdG9yLm9wdGlvbnMuZmlsdGVyKHggPT4gIXguZHluYW1pYyk7XHJcbiAgICAgICAgY29uc3Qgbm9uRHluYW1pY0VsZW1lbnRzID0gbm9uRHluYW1pY09wdGlvbnMucmVkdWNlKChwcmV2aW91czogRWxlbWVudFtdLCBjdXJyZW50OiBWYWxpZGF0aW9uT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IGAqWyR7dGhpcy5hdHRyaWJ1dGVOYW1lfT1cIiR7Y3VycmVudC52YWxpZGF0aW9uTmFtZX1cIl1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0b3Iuc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGBbc2NvcGU9XCIke3RoaXMudmFsaWRhdG9yLnNjb3BlfVwiXWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSA8RWxlbWVudFtdPkFycmF5LmZyb20odGhpcy52YWxpZGF0b3IuZm9ybVJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRpb25JZCA9IHRoaXMuX2RhdGFTZXJ2aWNlLm5ld0d1aWQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5WQUxJREFUSU9OX0lELCB2YWxpZGF0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudC52YWxpZGF0aW9uSWQgPSB2YWxpZGF0aW9uSWQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gcHJldmlvdXMuY29uY2F0KGVsZW1lbnRzKTtcclxuICAgICAgICB9LCBbXSk7XHJcblxyXG4gICAgICAgIGxldCBnZW5lcmF0ZWREeW5hbWljT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIGxldCBkeW5hbWljRWxlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvci5vcHRpb25zID0gdGhpcy52YWxpZGF0b3Iub3B0aW9ucy5maWx0ZXIoeCA9PiAheC5keW5hbWljKTtcclxuICAgICAgICB0aGlzLnZpcnR1YWxWYWxpZGF0aW9uT3B0aW9ucy5mb3JFYWNoKChjdXJyZW50OiBWYWxpZGF0aW9uT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBxdWVyeSA9IGAqWyR7dGhpcy5hdHRyaWJ1dGVOYW1lfT1cIiR7Y3VycmVudC52YWxpZGF0aW9uTmFtZX1cIl1gO1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0b3Iuc2NvcGUpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5ICs9IGBbc2NvcGU9XCIke3RoaXMudmFsaWRhdG9yLnNjb3BlfVwiXWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKHRoaXMudmFsaWRhdG9yLmZvcm1SZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsb25lZE9wdGlvbnMgPSBlbGVtZW50cy5tYXAoKGVsZW1lbnQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uSWQgPSB0aGlzLl9kYXRhU2VydmljZS5uZXdHdWlkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShlbGVtZW50LCBWYWxpZGF0aW9uQ29uc3RhbnQuVkFMSURBVElPTl9JRCwgdmFsaWRhdGlvbklkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKGVsZW1lbnQsIFZhbGlkYXRpb25Db25zdGFudC5BUlJBWV9TRVFVRU5DRV9JRCwgaW5kZXgudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbklkOiB2YWxpZGF0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVJlZjogaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVJlc29sdmVyOiBjdXJyZW50LnZhbHVlUmVzb2x2ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAocGF5bG9hZDogYW55KSA9PiBjdXJyZW50LnZhbHVlUmVzb2x2ZXIoaXRlbSwgcGF5bG9hZCwgaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKCkgPT4geyByZXR1cm4gKDxhbnk+ZWxlbWVudCkudmFsdWU7IH1cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkeW5hbWljRWxlbWVudHMucHVzaCguLi5lbGVtZW50cyk7XHJcbiAgICAgICAgICAgIGdlbmVyYXRlZER5bmFtaWNPcHRpb25zLnB1c2goLi4uY2xvbmVkT3B0aW9ucyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWRhdG9yLm9wdGlvbnMgPSBub25EeW5hbWljT3B0aW9ucy5jb25jYXQoZ2VuZXJhdGVkRHluYW1pY09wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBub25EeW5hbWljRWxlbWVudHMuY29uY2F0KGR5bmFtaWNFbGVtZW50cyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYoKTtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50T3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlZEl0ZW1zLnB1c2gobmV3IENoYW5nZWRJdGVtKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudE9wdGlvbi52YWxpZGF0aW9uSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGVsZW1lbnRPcHRpb24udmFsaWRhdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IGVsZW1lbnRPcHRpb24udmFsdWVSZXNvbHZlciA/IGVsZW1lbnRPcHRpb24udmFsdWVSZXNvbHZlcihudWxsLCBwYXlsb2FkKSA6IG51bGxcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50cy5maWx0ZXIoZWxlbWVudCA9PiBlbGVtZW50LmF0dHJpYnV0ZXNbdGhpcy5hdHRyaWJ1dGVOYW1lXSkuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZWxlbWVudC5mb2N1c291dExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmZvY3Vzb3V0TGlzdGVuZXIgPSB0aGlzLnJlbmRlcmVyLmxpc3RlbihlbGVtZW50LCAnZm9jdXNvdXQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVCbHVyRXZlbnQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXNvdXRMaXN0ZW5lciA9IHRoaXMucmVuZGVyZXIubGlzdGVuKGVsZW1lbnQsICdjaGFuZ2UnLCAoJGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHRoaXMudmFsaWRhdG9yLnBheWxvYWRSZWYoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudE9wdGlvbiA9IHRoaXMuZmluZEVsZW1lbnRPcHRpb24oZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZWxlbWVudE9wdGlvbi52YWx1ZVJlc29sdmVyID8gZWxlbWVudE9wdGlvbi52YWx1ZVJlc29sdmVyKG51bGwsIHBheWxvYWQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudE9wdGlvbiAmJiBlbGVtZW50T3B0aW9uLmRpcnR5Q2hlY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5jaGFuZ2VkSXRlbXMuZmluZChzID0+IHMuaWQgPT0gZWxlbWVudE9wdGlvbi52YWxpZGF0aW9uSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZWRJdGVtcy5wdXNoKG5ldyBDaGFuZ2VkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnRPcHRpb24udmFsaWRhdGlvbklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBlbGVtZW50T3B0aW9uLnZhbGlkYXRpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudEl0ZW0ub2xkVmFsdWUgPT0gdW5kZWZpbmVkIHx8IGN1cnJlbnRJdGVtLm9sZFZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jaGFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5vbGRWYWx1ZS50b1N0cmluZygpICE9IGN1cnJlbnRJdGVtLnZhbHVlLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJdGVtLmNoYW5nZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uY2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRPcHRpb24gJiYgZWxlbWVudE9wdGlvbi5ydWxlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50T3B0aW9uLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQmx1ckV2ZW50KGVsZW1lbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlbGVtZW50T3B0aW9uID0gdGhpcy5maW5kRWxlbWVudE9wdGlvbihlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVsZW1lbnRPcHRpb24pIHRocm93IG5ldyBFcnJvcignIWVsZW1lbnRPcHRpb24nKTtcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZUVsZW1lbnQoZWxlbWVudCwgZWxlbWVudE9wdGlvbikucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUobmV3T3B0aW9uID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudE9wdGlvbiA9IG5ld09wdGlvbjtcclxuICAgICAgICAgICAgdGhpcy5zeW5jRXJyb3JNZXNzYWdlcyhlbGVtZW50LCBlbGVtZW50T3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFkZFJlbGF0ZWRQcm92aWRlcnMocHJvdmlkZXJzOiBWYWxpZGF0aW9uU2VydmljZVtdKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld1Byb3ZpZGVycyA9IHByb3ZpZGVycy5maWx0ZXIoeCA9PiB0aGlzLnJlbGF0ZWRQcm92aWRlcnMuaW5kZXhPZih4KSA8IDApO1xyXG4gICAgICAgIG5ld1Byb3ZpZGVycy5mb3JFYWNoKHByb3ZpZGVyID0+XHJcbiAgICAgICAgICAgIHByb3ZpZGVyLm9uRGVzdHJveS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGVkUHJvdmlkZXJzID0gdGhpcy5yZWxhdGVkUHJvdmlkZXJzLmZpbHRlcigoKSA9PiB0aGlzLnJlbGF0ZWRQcm92aWRlcnMuaW5kZXhPZihwcm92aWRlcikgPCAwKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMucmVsYXRlZFByb3ZpZGVycy5wdXNoKC4uLm5ld1Byb3ZpZGVycyk7XHJcbiAgICB9XHJcbn0iXX0=