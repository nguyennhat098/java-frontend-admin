/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/shared/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, ContentChild, RendererFactory2, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TableOption, TableMode, TableConstant, TableText, TableMessage, TableColumnType, ChangedRow, ChangedCell } from './table.model';
import { TableRowDetailDirective } from './table-row-detail.directive';
import { of, BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { delay } from "rxjs/operators";
import { ValidationService } from '../validation/validation.service';
import { ClientValidator } from '../validation/validation.model';
import { IgxExcelExporterService, IgxExcelExporterOptions } from 'igniteui-angular';
import { ActionService } from '../services/action.service';
export class TableComponent {
    /**
     * @param {?} thisElement
     * @param {?} rendererFactory
     * @param {?} dataService
     * @param {?} validationService
     * @param {?} excelExporterService
     * @param {?} actionService
     */
    constructor(thisElement, rendererFactory, dataService, validationService, excelExporterService, actionService) {
        this.thisElement = thisElement;
        this.rendererFactory = rendererFactory;
        this.dataService = dataService;
        this.validationService = validationService;
        this.excelExporterService = excelExporterService;
        this.actionService = actionService;
        this.selectedChange = new EventEmitter();
        this.items = [];
        this.totalRecords = 0;
        this.selectedItems = [];
        this.totalPages = [];
        this.currentPage = 0;
        this.filter = {};
        this.maxPage = 5;
        this.selectedAll = false;
        this.filterColumns = [];
        this.toolbarActions = [];
        this.inlineActions = [];
        this.filterSectionToggle = false;
        this.textSearched = ``;
        this.showReset = false;
        this.defaultPageSize = 5;
        this.changePage$ = new BehaviorSubject(0);
        this.changedRows = [];
        this.localFilter = {};
        this.request = {};
        this.previousRequest = {};
        this.recursiveCounter = 0;
        this.subscriptions = new Subscription();
        this.edittedFields = [];
        this.previousItems = [];
        this._render = rendererFactory.createRenderer(null, null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.init();
        /** @type {?} */
        const changePageSubscription = this.changePage$.pipe(distinctUntilChanged()).subscribe((/**
         * @param {?} pageIndex
         * @return {?}
         */
        pageIndex => {
            if (pageIndex < 0 || pageIndex >= this.totalPages.length)
                return;
            this.currentPage = pageIndex;
            if (!this.option.request) {
                this.option.request = {};
            }
            this.option.request.pageIndex = this.currentPage;
            this.searchAsync(null, null, true).subscribe();
        }));
        this.subscriptions.add(changePageSubscription);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.registerEvents();
        this.initValidations();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /**
     * @return {?}
     */
    init() {
        if (this.option.selectedItems && this.option.selectedItems.length > 0) {
            if (!this.selectedItems)
                this.selectedItems = [];
            this.option.selectedItems.forEach((/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                this.selectedItems.push(item);
            }));
        }
        if (!this.option.mode)
            this.option.mode = TableMode.full;
        if (!this.option.actions)
            this.option.actions = [];
        if (!this.option.key)
            this.option.key = TableConstant.Key;
        if (!this.option.totalToolbarItem)
            this.option.totalToolbarItem = 5;
        if (this.option.maxPage)
            this.maxPage = this.option.maxPage;
        if (!this.option.defaultOrderBy)
            this.option.defaultOrderBy = 'CreatedDate';
        if (!this.option.defautOrderDirection)
            this.option.defautOrderDirection = TableConstant.Direction.DESC;
        if (!this.option.componentClass) {
            this.option.componentClass = TableConstant.ComponentClass;
            this.thisElement.nativeElement.classList.add(this.option.componentClass);
        }
        if (this.option.maxLenghtext === undefined || this.option.maxLenghtext === null) {
            this.option.maxLenghtext = 150;
        }
        this.initTableTableTexts();
        this.initTableTableMessages();
        this.initMainColumns();
        if (this.option.actions) {
            this.option.actions.forEach((/**
             * @param {?} action
             * @return {?}
             */
            (action) => {
                if (!action.type)
                    action.type = TableConstant.ActionType.Inline;
            }));
        }
        this.toolbarActions = this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => [TableConstant.ActionType.Both, TableConstant.ActionType.Toolbar].indexOf(x.type) >= 0));
        this.inlineActions = this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => [TableConstant.ActionType.Both, TableConstant.ActionType.Inline].indexOf(x.type) >= 0));
        /** @type {?} */
        const inFullMode = this.option.mode === TableMode.full;
        this.filterColumns = this.option.mainColumns.filter((/**
         * @param {?} column
         * @return {?}
         */
        column => column.allowFilter))
            .sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order > b.order ? 1 : a.order === b.order ? 0 : -1));
        this.hasFilterSection = inFullMode;
        if (this.option.paging === undefined) {
            this.option.paging = inFullMode;
        }
        if (inFullMode) {
            if (!this.option.pageSizes)
                this.option.pageSizes = TableConstant.PageSizes;
            if (!this.option.defaultPageSize)
                this.option.defaultPageSize = TableConstant.PageSizes[0];
            if (this.option.defaultPageSize)
                this.defaultPageSize = this.option.defaultPageSize;
        }
        /** @type {?} */
        const hasToolbarActions = this.option.actions && this.option.actions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => [TableConstant.ActionType.Toolbar, TableConstant.ActionType.Both].indexOf(x.type) >= 0)).length > 0;
        /** @type {?} */
        const hasTopButtons = this.option.topButtons && this.option.topButtons.length > 0;
        this.hasToolbarSection = inFullMode || hasToolbarActions || hasTopButtons;
        this.hasFooterSection = inFullMode || this.option.paging;
        this.hasPageSizeChooser = this.option.paging;
        if (this.option.hideCheckboxColumn === undefined) {
            this.option.hideCheckboxColumn = !hasToolbarActions;
        }
        if (!this.option.request) {
            this.option.request = {
                pageIndex: 0,
                pageSize: this.defaultPageSize
            };
            if (this.option.defaultPageSize) {
                this.option.request.pageSize = this.option.defaultPageSize;
                this.pageSize = this.option.request.pageSize;
            }
            this.searchAsync().subscribe();
        }
        else {
            if (!this.option.request.pageSize) {
                this.pageSize = this.option.request.pageSize;
            }
            else {
                this.pageSize = this.defaultPageSize;
            }
            this.searchAsync().subscribe();
        }
    }
    /**
     * @return {?}
     */
    callback() {
        return of(this.selectedItems);
    }
    /**
     * @param {?} item
     * @param {?=} refresh
     * @param {?=} execute
     * @param {?=} callback
     * @return {?}
     */
    copy(item, refresh = true, execute, callback) {
        if (!this.items)
            this.items = [];
        /** @type {?} */
        var copyItem = this.dataService.cloneItem(item);
        if (copyItem.id)
            copyItem.id = this.dataService.newGuid();
        if (execute) {
            execute(copyItem);
        }
        if (this.option.localData) {
            this.localData.push(copyItem);
        }
        this.items.push(copyItem);
        if (callback)
            callback(copyItem);
        if (refresh == true) {
            this.searchAsync(true).subscribe();
        }
    }
    /**
     * @param {?=} fileName
     * @param {?=} callback
     * @return {?}
     */
    exportToExcel(fileName, callback) {
        if (!this.option.mainColumns || this.option.mainColumns.length == 0)
            return null;
        /** @type {?} */
        var request = this.buildRequest(0, true);
        request.pageSize = 9999999;
        /** @type {?} */
        let search = this.option.localData ? (/**
         * @param {?} req
         * @return {?}
         */
        (req) => { return this.searchLocalItems(req); }) : (/**
         * @param {?} req
         * @return {?}
         */
        (req) => { return this.option.serviceProvider.searchAsync(req); });
        if (search) {
            /** @type {?} */
            var data = [];
            search(request).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                response.items.forEach((/**
                 * @param {?} item
                 * @return {?}
                 */
                (item) => {
                    /** @type {?} */
                    var exportedItem = {};
                    this.option.mainColumns.forEach((/**
                     * @param {?} column
                     * @return {?}
                     */
                    (column) => {
                        if (column.valueRef) {
                            exportedItem[column.title()] = item[column.valueRef()];
                        }
                    }));
                    data.push(exportedItem);
                }));
                this.excelExporterService.exportData(data, new IgxExcelExporterOptions(fileName ? fileName : new Date().getTime().toString()));
                if (callback)
                    callback();
            }));
        }
    }
    /**
     * @return {?}
     */
    resetChanges() {
        this.previousItems = [];
        this.changedRows = [];
    }
    /**
     * @param {?} value
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @param {?=} ref
     * @param {?=} validationOption
     * @param {?=} callback
     * @return {?}
     */
    changeEditor(value, item, field, index, ref, validationOption, callback) {
        /** @type {?} */
        var val = this.dataService.removeHTML(value);
        item[field] = val;
        this.acceptInlineEdit(item, field, index, ref, validationOption, callback, false);
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @param {?=} ref
     * @param {?=} validationOption
     * @param {?=} callback
     * @param {?=} autoClose
     * @return {?}
     */
    acceptInlineEdit(item, field, index, ref, validationOption, callback, autoClose = true) {
        if (!validationOption) {
            if (autoClose) {
                this.closeInlineEdit(field, index);
                if (callback)
                    callback(item, field);
            }
            return;
        }
        ;
        /** @type {?} */
        var element = ref.getElement();
        validationOption.itemRef = item;
        if (!validationOption.valueResolver) {
            validationOption.valueResolver = (/**
             * @param {?} item
             * @return {?}
             */
            (item) => {
                return item[field];
            });
        }
        this.validationService.validateElementAsync(element, validationOption).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            if (!response || response.length == 0) {
                /** @type {?} */
                var currentItem = this.changedRows.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => s.currentItem.id == item.id));
                /** @type {?} */
                var previousItem = this.previousItems.find((/**
                 * @param {?} s
                 * @return {?}
                 */
                s => s.id == item.id));
                if (!currentItem) {
                    if (item[field] != previousItem[field]) {
                        this.changedRows.push(new ChangedRow({
                            currentItem: this.dataService.cloneItem(item),
                            oldItem: previousItem,
                            cells: [
                                new ChangedCell({
                                    field: field,
                                    currentValue: item[field],
                                    oldValue: previousItem[field]
                                })
                            ]
                        }));
                    }
                }
                else {
                    /** @type {?} */
                    var currentField = currentItem.cells.find((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s.field == field));
                    if (!currentField) {
                        currentItem.cells.push(new ChangedCell({
                            field: field,
                            currentValue: item[field],
                            oldValue: previousItem[field]
                        }));
                    }
                    else {
                        if (item[field] != null && item[field] != undefined && item[field] != '' &&
                            currentField.oldValue != null && currentField.oldValue != undefined && currentField.oldValue != '') {
                            if (item[field].toString() != currentField.oldValue.toString()) {
                                currentField.currentValue = item[field];
                            }
                            else {
                                /** @type {?} */
                                var cellIndex = currentItem.cells.findIndex((/**
                                 * @param {?} s
                                 * @return {?}
                                 */
                                s => s.field == field));
                                currentItem.cells.splice(cellIndex, 1);
                                if (currentItem.cells.length == 0) {
                                    /** @type {?} */
                                    var currentItemIndex = this.changedRows.findIndex((/**
                                     * @param {?} s
                                     * @return {?}
                                     */
                                    s => s.currentItem.id == item.id));
                                    this.changedRows.splice(currentItemIndex, 1);
                                }
                            }
                        }
                        else {
                            currentField.currentValue = item[field];
                        }
                    }
                }
                if (autoClose) {
                    this.closeInlineEdit(field, index);
                    if (callback)
                        callback(item, field);
                }
            }
        }));
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    cancelInlineEdit(item, field, index) {
        /** @type {?} */
        var currentItem = this.retrieveInlineEdit(field, index);
        if (!currentItem)
            return;
        item[field] = currentItem.item[field];
        this.closeInlineEdit(field, index);
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    closeInlineEdit(field, index) {
        /** @type {?} */
        var itemIndex = this.edittedFields.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.field == field && s.index == index));
        if (itemIndex > -1)
            this.edittedFields.splice(itemIndex, 1);
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    editInline(item, field, index) {
        if (!item)
            return;
        if (this.previousItems.findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.id == item.id)) == -1) {
            this.previousItems.push(this.dataService.cloneItem(item));
        }
        /** @type {?} */
        var currentItem = this.retrieveInlineEdit(field, index);
        if (!currentItem) {
            this.edittedFields.push({
                item: this.dataService.cloneItem(item),
                index: index,
                field: field
            });
        }
        else {
            currentItem.item = this.dataService.cloneItem(item);
        }
        this.validationService.updateAsync(null, item);
    }
    /**
     * @param {?} item
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    hasInlineEdit(item, field, index) {
        if (!this.option || this.option.inlineEdit != true)
            return false;
        /** @type {?} */
        var column = this.option.mainColumns.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.valueRef() == field));
        if (!column || column.inlineEdit == false)
            return false;
        if (!item || !this.edittedFields || this.edittedFields.length == 0)
            return false;
        return ((/** @type {?} */ (this.edittedFields))).findIndex((/**
         * @param {?} s
         * @return {?}
         */
        s => s.field == field && s.index == index)) > -1;
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    retrieveInlineEdit(field, index) {
        if (!this.edittedFields || this.edittedFields.length == 0)
            return null;
        return ((/** @type {?} */ (this.edittedFields))).find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.field == field && s.index == index));
    }
    /**
     * @return {?}
     */
    resetFilters() {
        this.filter = {};
        this.selectedItems = [];
        this.selectedAll = false;
        this.filterSectionToggle = false;
        this.totalPages = [];
        this.option.request.pageIndex = 0;
        this.currentPage = 0;
        if (!this.option.request.pageSize) {
            this.pageSize = this.option.request.pageSize;
        }
        else {
            this.pageSize = this.defaultPageSize;
        }
        this.option.request.pageSize = this.pageSize;
        this.searchAsync().subscribe();
        this.showReset = false;
        this.request = {};
    }
    /**
     * @param {?} standard
     * @return {?}
     */
    getToolbarActions(standard) {
        /** @type {?} */
        let actions = [];
        if (this.toolbarActions) {
            this.toolbarActions.forEach((/**
             * @param {?} action
             * @param {?} index
             * @return {?}
             */
            (action, index) => {
                if (!standard) {
                    if (index >= this.option.totalToolbarItem) {
                        actions.push(action);
                    }
                }
                else {
                    if (index < this.option.totalToolbarItem) {
                        actions.push(action);
                    }
                }
            }));
        }
        return actions;
    }
    /**
     * @return {?}
     */
    changePageSize() {
        this.option.request.pageSize = this.pageSize;
        this.option.request.pageIndex = 0;
        this.searchAsync().subscribe();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handkeKeypress($event) {
        if ($event && $event.which == 13) {
            this.searchAsync().subscribe();
        }
    }
    /**
     * @param {?} $event
     * @param {?=} blur
     * @return {?}
     */
    goto($event, blur) {
        if ($event.which == 13 || blur == true) {
            this.currentPage = $event.target.value - 1;
            if (this.currentPage < 0)
                this.currentPage = 0;
            if (this.currentPage >= this.totalPages.length) {
                this.currentPage = this.totalPages.length - 1;
            }
            $event.target.value = this.currentPage + 1;
            this.changePage$.next(this.currentPage);
        }
        else {
            if ($event.which < 48 || $event.which > 57)
                $event.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    toggleFilterSection() {
        this.filterSectionToggle = !this.filterSectionToggle;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    showSorter(column, direction) {
        return column.direction === direction;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleRowDetail(item) {
        item.toggle = !item.toggle;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    sortAsync(column) {
        if (!column.valueRef)
            return;
        this.resetSortAsync(column);
        if (column && column.allowSort != false) {
            if (!column.direction) {
                column.direction = TableConstant.Direction.ASC;
            }
            else {
                column.direction = column.direction == TableConstant.Direction.ASC ? TableConstant.Direction.DESC : TableConstant.Direction.ASC;
            }
        }
        this.orderBy = this.dataService.toPascalCase(column.valueRef());
        this.direction = column.direction;
        this.searchAsync(null, null, false).subscribe();
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    selectAll(selected) {
        this.selectedItems = selected ? [...this.items] : [];
    }
    /**
     * @return {?}
     */
    clearAll() {
        this.selectedItems = [];
        this.selectedAll = false;
        if (this.option.selectedChange)
            this.option.selectedChange(null);
        this.selectedChange.emit(this.selectedItems);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    selectItem(item) {
        /** @type {?} */
        const selectedIds = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        /** @type {?} */
        const existingItemIndex = selectedIds.indexOf(item.id);
        if (existingItemIndex >= 0) {
            this.selectedItems.splice(existingItemIndex, 1);
        }
        else {
            this.selectedItems.push(item);
        }
        if (!this.option.multiple) {
            /** @type {?} */
            const currentItem = this.selectedItems.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id == item.id));
            if (currentItem) {
                this.selectedItems = [currentItem];
            }
        }
        this.selectedChange.emit(item);
        if (this.option.selectedChange)
            this.option.selectedChange(item);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isRowSelected(item) {
        /** @type {?} */
        const selectedIds = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.id));
        return selectedIds.indexOf(item.id) >= 0;
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    hasAnyAction(item) {
        /** @type {?} */
        const aliveActions = this.inlineActions.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.hide || !x.hide(item)));
        return aliveActions.length > 0;
    }
    /**
     * @param {?} action
     * @param {?=} item
     * @param {?=} $event
     * @param {?=} index
     * @param {?=} loadedCallback
     * @return {?}
     */
    executeActionAsync(action, item, $event, index, loadedCallback) {
        if (action) {
            /** @type {?} */
            const target = $event ? $event.target : null;
            action.executeAsync(item, target, this, index, loadedCallback);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    isActive(item) {
        if (this.selectedItems.length === 0)
            return false;
        /** @type {?} */
        const currentItem = this.selectedItems.find((/**
         * @param {?} s
         * @return {?}
         */
        s => s.id === item.id));
        return currentItem && currentItem.checkedRow;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getCurrentIndex(index) {
        if (this.option.request) {
            return this.option.request.pageIndex * this.option.request.pageSize + index + 1;
        }
        return -1;
    }
    /**
     * @param {?} column
     * @param {?} item
     * @return {?}
     */
    getDropdownDisplayText(column, item) {
        /** @type {?} */
        const values = item[column.valueRef()];
        if (!values)
            return '';
        if (values instanceof Array) {
            /** @type {?} */
            const result = (/** @type {?} */ (values.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x)).map((/**
             * @param {?} x
             * @return {?}
             */
            x => x[column.dropdownConfiguration.bindLabel]))));
            return result.join(', ');
        }
        return values[column.dropdownConfiguration.bindLabel];
    }
    /**
     * @param {?} n
     * @return {?}
     */
    getPages(n) {
        /** @type {?} */
        let pages = [];
        if (this.totalPages.length < n) {
            for (let i = this.totalPages.length - 1; i >= 0; i--) {
                pages.push(i);
            }
            return pages;
        }
        if (this.currentPage < n) {
            for (let i = n - 1; i >= 0; i--) {
                pages.push(i);
            }
        }
        else {
            /** @type {?} */
            const count = Math.floor(n / 2);
            /** @type {?} */
            const max = this.currentPage + count >= this.totalPages.length ? this.totalPages.length - 1 : this.currentPage + count;
            for (let i = max; i >= this.currentPage - count; i--) {
                pages.push(i);
            }
        }
        return pages;
    }
    /**
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    reload(keepSelectedItems = false) {
        return this.searchAsync(null, null, keepSelectedItems);
    }
    /**
     * @param {?} status
     * @return {?}
     */
    filterByColumn(status) {
        if (status) {
            this.search(false);
        }
    }
    /**
     * @param {?=} advancedFilter
     * @return {?}
     */
    search(advancedFilter) {
        this.searchAsync(advancedFilter).subscribe();
    }
    /**
     * @param {?} record
     * @return {?}
     */
    trackRecords(record) {
        return record ? record.id : undefined;
    }
    /**
     * @param {?=} advancedFilter
     * @param {?=} currentPage
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    searchAsync(advancedFilter, currentPage, keepSelectedItems = true) {
        this.loading = true;
        /** @type {?} */
        const request = this.buildRequest(currentPage, advancedFilter);
        if (this.option.localData) {
            this.option.localData().subscribe((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                this.localData = data;
                this.searchLocalItems(request).subscribe((/**
                 * @param {?} response
                 * @return {?}
                 */
                (response) => {
                    this.bindResultData(response, keepSelectedItems);
                }));
            }));
        }
        else {
            if (!this.option.serviceProvider || !this.option.serviceProvider.searchAsync)
                throw new Error('!this.option.serviceProvider.searchAsync');
            this.option.serviceProvider.searchAsync(request).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                this.bindResultData(response, keepSelectedItems);
            }));
        }
        return of(true);
    }
    /**
     * @private
     * @return {?}
     */
    checkedAllPageItems() {
        if (!this.selectedItems || !this.items || this.items.length == 0) {
            return false;
        }
        /** @type {?} */
        let check = true;
        this.items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const currentItem = this.selectedItems.find((/**
             * @param {?} s
             * @return {?}
             */
            s => s.id === item.id));
            if (!currentItem) {
                check = false;
                return check;
            }
        }));
        return check;
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    setDefaultOrder(request) {
        if (this.option.defaultOrderBy)
            this.orderBy = this.option.defaultOrderBy;
        if (this.option.defautOrderDirection)
            this.direction = this.option.defautOrderDirection;
        request.orderBy = this.orderBy;
        request.direction = this.direction;
        if (!this.orderBy) {
            this.orderBy = "Id";
            this.direction = TableConstant.Direction.ASC;
        }
    }
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    setFilter(key, value) {
        this.request[key] = value;
        this.currentPage = 0;
        this.filter[key] = value;
        if (this.option && this.option.request)
            this.option.request.pageIndex = 0;
    }
    /**
     * @private
     * @param {?} advancedFilter
     * @param {?} request
     * @return {?}
     */
    retrieveAdvancedFilters(advancedFilter, request) {
        this.filterColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            let value = this.filter[column.valueRef()];
            if (this.option.hasColumnFilter)
                value = this.localFilter[column.valueRef()];
            if (value == undefined || value == 'undefined') {
                value = '';
            }
            if (advancedFilter == true) {
                if (column.type && (column.type.toLowerCase() == 'date' || column.type.toLowerCase() == 'datetime' || column.type.toLowerCase() == 'time')) {
                    if (value && value != '') {
                        /** @type {?} */
                        const datetimeValues = (/** @type {?} */ (value));
                        if (datetimeValues.length == 1) {
                            request[column.valueRef() + 'From'] = this.convertDatetime(datetimeValues[0], 'From');
                        }
                        else if (datetimeValues.length == 2) {
                            request[column.valueRef() + 'From'] = this.convertDatetime(datetimeValues[0], 'From');
                            request[column.valueRef() + 'To'] = this.convertDatetime(datetimeValues[1], 'To');
                        }
                    }
                }
                else {
                    request[column.valueRef()] = value;
                }
            }
            else {
                request[column.valueRef()] = value;
            }
        }));
    }
    /**
     * @private
     * @param {?=} currentPage
     * @param {?=} advancedFilter
     * @return {?}
     */
    buildRequest(currentPage, advancedFilter) {
        this.previousRequest = Object.assign({}, this.request);
        /** @type {?} */
        let searchText = this.filter.searchText;
        this.textSearched = this.filter.searchText;
        if (searchText == undefined || searchText == 'undefined') {
            searchText = '';
        }
        this.request.pageSize = this.option.request.pageSize;
        if (!this.option.paging) {
            this.request.pageSize = 999999;
            this.pageSize = 999999;
        }
        this.request.searchText = searchText;
        this.request.direction = this.direction;
        this.request.orderBy = this.orderBy;
        if (!this.orderBy)
            this.setDefaultOrder(this.request);
        this.retrieveAdvancedFilters(advancedFilter, this.request);
        this.request.pageIndex = this.option.request.pageIndex;
        if (currentPage) {
            this.request.pageIndex = currentPage;
            this.currentPage = currentPage;
        }
        /** @type {?} */
        const changes = this.dataService.compareObjects(this.previousRequest, this.request);
        /** @type {?} */
        const isChanged = changes.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => ['pageIndex', 'pageSize'].indexOf(x.propertyName) < 0)).length > 0;
        if (isChanged) {
            this.option.request.pageIndex = 0;
            this.request.pageIndex = 0;
            this.currentPage = 0;
        }
        if (this.option.hasColumnFilter) {
            /** @type {?} */
            const fields = Object.keys(this.localFilter);
            if (fields) {
                fields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                (field) => {
                    if (!this.option.searchFields)
                        this.option.searchFields = [];
                    if (!this.option.searchFields.find((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => s == field))) {
                        this.option.searchFields.push(field);
                    }
                    this.request[field] = this.localFilter[field];
                }));
            }
        }
        return this.request;
    }
    /**
     * @private
     * @param {?} dt
     * @param {?} type
     * @return {?}
     */
    convertDatetime(dt, type) {
        if (!dt)
            return '';
        /** @type {?} */
        let convertedDatetime = new Date(dt);
        /** @type {?} */
        let days = convertedDatetime.getDate().toString();
        if (days.length < 2)
            days = '0' + days;
        /** @type {?} */
        let months = (convertedDatetime.getMonth() + 1).toString();
        if (months.length < 2)
            months = '0' + months;
        /** @type {?} */
        let hours = convertedDatetime.getHours().toString();
        if (hours.length < 2)
            hours = '0' + hours;
        /** @type {?} */
        let minutes = convertedDatetime.getMinutes().toString();
        if (minutes.length < 2)
            minutes = '0' + minutes;
        /** @type {?} */
        const year = convertedDatetime.getFullYear();
        switch (this.option.datetimeFormat.format) {
            case 'dd/MM/yyyy':
                return days + '/' + months + '/' + year + (type == 'From' ? ' 00:00' : ' 23:59');
            case 'dd/MM/yyyy HH:mm':
                return days + '/' + months + '/' + year + ' ' + hours + ':' + minutes;
            case 'MM/dd/yyyy':
                return months + '/' + days + '/' + year + (type == 'From' ? ' 00:00' : ' 23:59');
            case 'MM/dd/yyyy HH:mm':
                return months + '/' + days + '/' + year + ' ' + hours + ':' + minutes;
        }
    }
    /**
     * @private
     * @param {?} request
     * @return {?}
     */
    searchLocalItems(request) {
        /** @type {?} */
        let result = this.localData;
        /** @type {?} */
        const orderBy = this.dataService.getField(request.orderBy, true);
        if (request.direction == TableConstant.Direction.ASC) {
            if (!this.option.sort) {
                result = result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => a[orderBy] > b[orderBy] ? 1 : a[orderBy] === b[orderBy] ? 0 : -1));
            }
            else {
                result = result.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => this.option.sort(a, b, orderBy)));
            }
        }
        else {
            if (!this.option.sort) {
                result = result.sort((/**
                 * @param {?} b
                 * @param {?} a
                 * @return {?}
                 */
                (b, a) => a[orderBy] > b[orderBy] ? 1 : a[orderBy] === b[orderBy] ? 0 : -1));
            }
            else {
                result = result.sort((/**
                 * @param {?} b
                 * @param {?} a
                 * @return {?}
                 */
                (b, a) => this.option.sort(a, b, orderBy)));
            }
        }
        /** @type {?} */
        let items = [];
        if (request.pageIndex >= 0 && request.pageSize > 0) {
            /** @type {?} */
            const localResult = [];
            if ((request.searchText) && this.option.searchFields && this.option.searchFields.length > 0) {
                this.option.searchFields.forEach((/**
                 * @param {?} field
                 * @return {?}
                 */
                field => {
                    /** @type {?} */
                    const response = result.filter((/**
                     * @param {?} s
                     * @return {?}
                     */
                    s => this.fuzzysearch(request.searchText, s[field])));
                    if (response) {
                        response.forEach((/**
                         * @param {?} item
                         * @return {?}
                         */
                        (item) => {
                            if (localResult.findIndex((/**
                             * @param {?} s
                             * @return {?}
                             */
                            s => s.id == item.id)) == -1) {
                                localResult.push(item);
                            }
                        }));
                    }
                }));
                result = localResult;
            }
            /** @type {?} */
            var filter = {};
            this.retrieveAdvancedFilters(true, filter);
            if (this.filterColumns) {
                this.filterColumns.forEach((/**
                 * @param {?} column
                 * @return {?}
                 */
                (column) => {
                    /** @type {?} */
                    var value = filter[column.valueRef()];
                    if (value) {
                        result = result.filter((/**
                         * @param {?} s
                         * @return {?}
                         */
                        s => this.fuzzysearch(value, s[column.valueRef()])));
                    }
                }));
            }
            items = result.filter((/**
             * @param {?} s
             * @return {?}
             */
            s => (result.indexOf(s) >= request.pageIndex * request.pageSize) && (result.indexOf(s) < (request.pageIndex + 1) * request.pageSize)));
        }
        /** @type {?} */
        const response = {
            items: items,
            totalRecords: result.length
        };
        return of(response).pipe(delay(250));
    }
    /**
     * @private
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
     * @private
     * @param {?} needle
     * @param {?} haystack
     * @return {?}
     */
    fuzzysearch(needle, haystack) {
        if (!needle || !haystack)
            return false;
        /** @type {?} */
        const haystackLC = this.removeAllSpaces(haystack.toString().toLowerCase());
        /** @type {?} */
        const needleLC = this.removeAllSpaces(needle.toString().toLowerCase());
        /** @type {?} */
        const hlen = haystack.toString().length;
        /** @type {?} */
        const nlen = needleLC.toString().length;
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
     * @private
     * @param {?=} str
     * @return {?}
     */
    removeAllSpaces(str) {
        if (!str)
            return '';
        return str.replace(/\s/g, '');
    }
    /**
     * @private
     * @param {?} response
     * @param {?=} keepSelectedItems
     * @return {?}
     */
    bindResultData(response, keepSelectedItems = true) {
        this.actionService.executeAsync((/**
         * @return {?}
         */
        () => {
            this.items = response.items;
            this.totalRecords = response.totalRecords;
            this.calculatePages();
            if (!keepSelectedItems) {
                this.selectedItems = [];
            }
            this.selectedAll = this.checkedAllPageItems();
            if (this.currentPage > this.totalPages.length - 1) {
                this.recursiveCounter++;
                if (this.recursiveCounter < 3) {
                    this.searchAsync(null, this.totalPages.length - 1).subscribe();
                }
            }
            this.loading = false;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    calculatePages() {
        /** @type {?} */
        let pages = Math.floor(this.totalRecords / this.pageSize);
        if (pages <= 0) {
            pages = 1;
        }
        if (this.totalRecords % this.pageSize > 0) {
            pages += 1;
        }
        if (this.totalRecords < this.pageSize) {
            pages = 1;
        }
        this.totalPages = [];
        for (let i = 0; i < pages; i++) {
            this.totalPages.push(i);
        }
    }
    /**
     * @private
     * @param {?} currentColumn
     * @return {?}
     */
    resetSortAsync(currentColumn) {
        this.option.mainColumns = this.option.mainColumns.map((/**
         * @param {?} column
         * @return {?}
         */
        column => {
            if (column.id !== currentColumn.id)
                column.direction = undefined;
            return column;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initTableTableTexts() {
        if (!this.option.displayText) {
            this.option.displayText = new TableText();
        }
        else {
            if (!this.option.displayText)
                this.option.displayText.placeholderSearch = TableConstant.DisplayText.PlaceholderSearch;
            if (!this.option.displayText.btnSearch)
                this.option.displayText.btnSearch = TableConstant.DisplayText.BtnSearch;
            if (!this.option.displayText.btnReset)
                this.option.displayText.btnReset = TableConstant.DisplayText.BtnReset;
            if (!this.option.displayText.action)
                this.option.displayText.action = TableConstant.DisplayText.Action;
            if (!this.option.displayText.selectPageSize)
                this.option.displayText.selectPageSize = TableConstant.DisplayText.SelectPageSize;
            if (!this.option.displayText.deleteTitle)
                this.option.displayText.deleteTitle = TableConstant.DisplayText.DeleteTitle;
            if (!this.option.displayText.btnAcceptTitle)
                this.option.displayText.btnAcceptTitle = TableConstant.DisplayText.BtnAcceptTitle;
            if (!this.option.displayText.btnCancelTitle)
                this.option.displayText.btnCancelTitle = TableConstant.DisplayText.BtnCancelTitle;
            if (!this.option.displayText.filterTitle)
                this.option.displayText.filterTitle = TableConstant.DisplayText.FilterTitle;
            if (!this.option.displayText.applyFilter)
                this.option.displayText.applyFilter = TableConstant.DisplayText.ApplyFilter;
            if (!this.option.displayText.detailTitle)
                this.option.displayText.detailTitle = TableConstant.DisplayText.DetailTitle;
            if (!this.option.displayText.pageTitle)
                this.option.displayText.pageTitle = TableConstant.DisplayText.PageTitle;
            if (!this.option.displayText.advancedSearchTitle)
                this.option.displayText.advancedSearchTitle = TableConstant.DisplayText.AdvancedSearchTitle;
            if (!this.option.displayText.advancedBtnTitle)
                this.option.displayText.advancedBtnTitle = TableConstant.DisplayText.AdvancedBtnTitle;
            if (!this.option.displayText.advancedBtnCancelTitle)
                this.option.displayText.advancedBtnCancelTitle = TableConstant.DisplayText.AdvancedBtnCancelTitle;
            if (!this.option.displayText.allTitle)
                this.option.displayText.allTitle = TableConstant.DisplayText.AllTitle;
            if (!this.option.displayText.actionIcon)
                this.option.displayText.actionIcon = TableConstant.DisplayText.ActionIcon;
        }
    }
    /**
     * @private
     * @return {?}
     */
    initTableTableMessages() {
        if (!this.option.message) {
            this.option.message = new TableMessage();
        }
        else {
            if (!this.option.message.notFoundMessage)
                this.option.message.notFoundMessage = TableConstant.Message.NotFoundMessage;
            if (!this.option.message.foundMessage)
                this.option.message.foundMessage = TableConstant.Message.FoundMessage;
            if (!this.option.message.invalidFormatMessage)
                this.option.message.invalidFormatMessage = TableConstant.Message.InvalidFormatMessage;
            if (!this.option.message.selectedItemsMessage)
                this.option.message.selectedItemsMessage = TableConstant.Message.SelectedItemsMessage;
            if (!this.option.message.confirmSelectAllRecordsMessage)
                this.option.message.confirmSelectAllRecordsMessage = TableConstant.Message.ConfirmSelectAllRecordsMessage;
            if (!this.option.message.confirmClearAllRecordsMessage)
                this.option.message.confirmClearAllRecordsMessage = TableConstant.Message.ConfirmClearAllRecordsMessage;
            if (!this.option.message.deleteMessage)
                this.option.message.deleteMessage = TableConstant.Message.DeleteMessage;
            if (!this.option.message.loadingMessage)
                this.option.message.loadingMessage = TableConstant.Message.LoadingMessage;
            if (!this.option.message.refMessage)
                this.option.message.refMessage = TableConstant.Message.RefMessage;
        }
    }
    /**
     * @private
     * @return {?}
     */
    initMainColumns() {
        if (!this.option.mainColumns) {
            this.option.mainColumns = [];
        }
        this.option.mainColumns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            if (!column.textAlign)
                column.textAlign = TableConstant.TextAlign.Left;
            if (column && !column.id) {
                column.id = this.dataService.newGuid();
            }
            if (column.allowFilter) {
                if (column.type === TableColumnType.Dropdown) {
                    if (!column.dropdownConfiguration)
                        throw new Error('!column.dropdownConfiguration');
                }
                this.filterColumns.push(column);
                this.filter[column.valueRef()] = null;
            }
        }));
        this.option.mainColumns = this.option.mainColumns.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => a.order > b.order ? 1 : a.order === b.order ? 0 : -1));
    }
    /**
     * @private
     * @return {?}
     */
    initValidations() {
        if (this.option && this.option.mainColumns) {
            /** @type {?} */
            var validationOptions = [];
            this.option.mainColumns.forEach((/**
             * @param {?} column
             * @return {?}
             */
            (column) => {
                if (column.validationOption) {
                    column.validationOption.dynamic = true;
                    if (!column.validationOption.validationName) {
                        column.validationOption.validationName = column.valueRef();
                    }
                    validationOptions.push(column.validationOption);
                }
            }));
            if (validationOptions.length > 0) {
                /** @type {?} */
                var validator = new ClientValidator({
                    formRef: this.wrapper,
                    options: validationOptions,
                    payloadRef: (/**
                     * @return {?}
                     */
                    () => this.items)
                });
                this.validationService.init({ validator });
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    registerEvents() {
        if (this.gotoRef) {
            this._render.listen(this.gotoRef.nativeElement, 'keydown', (/**
             * @param {?} $event
             * @return {?}
             */
            ($event) => {
                /** @type {?} */
                const value = $event.which;
                /** @type {?} */
                let max = '9999999';
                if (this.gotoRef.nativeElement.attributes['max']) {
                    max = this.gotoRef.nativeElement.attributes['max'].value;
                }
                if ((value >= 48 && value <= 57) || (value >= 96 && value <= 105) || value == 8 || value == 13) {
                    if (value >= 48 && value <= 57) {
                        if (parseInt(max) < parseInt($event.target.value + (parseInt(value) - 48))) {
                            $event.preventDefault();
                            $event.target.value = max;
                        }
                    }
                    else if (value >= 96 && value <= 105) {
                        if (parseInt(max) < parseInt($event.target.value + (parseInt(value) - 96))) {
                            $event.preventDefault();
                            $event.target.value = max;
                        }
                    }
                    else
                        return;
                }
                else {
                    $event.preventDefault();
                }
            }));
        }
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-table',
                template: "<div #wrapper>\r\n  <label *ngIf=\"option.title\">{{option.title}}</label>\r\n  <ng-container *ngIf=\"hasFilterSection then filterSection\"></ng-container>\r\n  <ng-container *ngIf=\"hasToolbarSection then toolbarSection\"></ng-container>\r\n  <div class=\"katana-table--wrapper mb-3\">\r\n    <div class=\"loading-indicator\" [class.show]=\"loading\">\r\n      <div class=\"spinner\">\r\n        <div class=\"bounce1\"></div>\r\n        <div class=\"bounce2\"></div>\r\n        <div class=\"bounce3\"></div>\r\n      </div>\r\n      <p class=\"text-center text-muted text-bold\">{{option?.message?.loadingMessage}}</p>\r\n    </div>\r\n    <div [class.loading-cover]=\"loading\">\r\n      <div class=\"katana-main-table\">\r\n        <table #tableRef class=\"katana-component\" [ngClass]=\"option.componentClass\">\r\n          <ng-container [ngTemplateOutlet]=\"tableHeader\"></ng-container>\r\n          <ng-container *ngIf=\"items.length > 0 then tableBody; else noResult\"></ng-container>\r\n        </table>\r\n        <ng-container *ngIf=\"hasFooterSection then footerSection\"></ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div [attr.validation-name]=\"validationName\" [attr.scope]=\"validationScope ? validationScope : null\"></div>\r\n\r\n  <ng-template #tableHeader>\r\n    <thead>\r\n      <tr>\r\n        <th *ngIf=\"rowDetailTemplate\" style=\"width: 40px;\"></th>\r\n        <th *ngIf=\"!option.hideSequenceColumn\" class=\"\" style=\"width: 40px; text-align: center;\">#</th>\r\n        <th *ngIf=\"!option.hideCheckboxColumn\" style=\"width: 40px;\" class=\"center\">\r\n          <div class=\"checkbox-fade fade-in-primary\">\r\n            <label *ngIf=\"option?.multiple\" class=\"m-0\">\r\n              <input [(ngModel)]=\"selectedAll\" (ngModelChange)=\"selectAll($event)\" type=\"checkbox\">\r\n              <span class=\"cr m-0\" style=\"border:solid 2px white\">\r\n                <i class=\"cr-icon fa fa-check txt-primary\"></i>\r\n              </span>\r\n              <span></span>\r\n            </label>\r\n          </div>\r\n        </th>\r\n        <ng-container *ngFor=\"let column of option.mainColumns\">\r\n          <th [ngStyle]=\"{'width.px': column.width}\" [ngClass]=\"{'sortable': column.allowSort}\"\r\n            (click)=\"sortAsync(column)\" *ngIf=\"!column.hide || !column.hide()\">\r\n            <span class=\"wrap-text\"><span *ngIf=\"column.icon\" class=\"{{column.icon}}\"></span> {{column.title()}}</span>\r\n            <span *ngIf=\"showSorter(column, 'desc')\"\r\n              class=\"fa fa-sort-alpha-desc text-desc pull-right sort-icon\"></span>\r\n            <span *ngIf=\"showSorter(column, 'asc')\" class=\"fa fa-sort-alpha-asc text-asc pull-right sort-icon\"></span>\r\n          </th>\r\n        </ng-container>\r\n        <th style=\"width: 120px;\" *ngIf=\"hasAnyAction()\"><span class=\"{{option.displayText.actionIcon}}\"></span> {{option.displayText.action}}</th>\r\n      </tr>\r\n    </thead>\r\n  </ng-template>\r\n\r\n  <ng-template #tableBody>\r\n    <tbody *ngIf=\"option?.hasColumnFilter\">\r\n      <tr>\r\n        <td *ngIf=\"rowDetailTemplate\" class=\"katana-td detail\">\r\n        </td>\r\n        <td *ngIf=\"!option.hideSequenceColumn\" class=\"katana-td detail\">\r\n        </td>\r\n        <td *ngIf=\"!option.hideCheckboxColumn\" class=\"center\">\r\n        </td>\r\n        <ng-container *ngFor=\"let column of option.mainColumns\">\r\n          <td *ngIf=\"!column.hide || !column.hide()\" class=\"wrap-text katana-td\">\r\n            <div class=\"d-inline-block custom-input\">\r\n              <div class=\"d-inline-block custom-td\" *ngIf=\"column.allowFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"fieldControlTemplate\"\r\n                  [ngTemplateOutletContext]=\"{item: localFilter, index: 0, column: column, readonly: true, hasFormLabel: false, status: true}\">\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n        <td class=\"text-center action-column-wrapper\">\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n    <tbody *ngFor=\"let item of items; let i = index; let even = event; let odd = odd;\">\r\n      <tr #row class=\"katana-tr {{ isRowSelected(item) ? 'selected' : ''}}\" [ngClass]=\"{odd: odd, even: even}\">\r\n        <td [attr.data-content]=\"'Xem chi ti\u1EBFt'\" *ngIf=\"rowDetailTemplate\" class=\"katana-td detail\">\r\n          <span *ngIf=\"!item.toggle\" (click)=\"toggleRowDetail(item)\" style=\"color: #eb5d13;\" class=\"fa fa-plus\"></span>\r\n          <span *ngIf=\"item.toggle\" (click)=\"toggleRowDetail(item)\" style=\"color: #eb5d13;\" class=\"fa fa-minus\"></span>\r\n        </td>\r\n        <td *ngIf=\"!option.hideSequenceColumn\" [attr.data-content]=\"'#'\" class=\"katana-td detail\">{{getCurrentIndex(i)}}\r\n        </td>\r\n        <td *ngIf=\"!option.hideCheckboxColumn\" class=\"center\">\r\n          <div class=\"checkbox-fade fade-in-primary m-0\">\r\n            <label class=\"m-0\">\r\n              <input type=\"checkbox\" (click)=\"selectItem(item)\" [checked]=\"isRowSelected(item)\">\r\n              <span class=\"cr m-0\">\r\n                <i class=\"cr-icon fa fa-check txt-primary\"></i>\r\n              </span>\r\n              <span></span>\r\n            </label>\r\n          </div>\r\n        </td>\r\n        <ng-container *ngFor=\"let column of option.mainColumns\">\r\n          <td *ngIf=\"!column.hide || !column.hide()\"\r\n            [ngClass]=\"{'link': column.click, 'can-edit': option.inlineEdit && column.inlineEdit != false}\"\r\n            class=\"wrap-text katana-td {{column.textAlign}} {{column.customClass}}\"\r\n            attr.data-content=\"{{column.title()}}\">\r\n            <div class=\"d-inline-block custom-input\">\r\n              <div class=\"d-inline-block custom-td\">\r\n                <ng-container\r\n                  [ngTemplateOutlet]=\"column.customTemplate ? column.customTemplate() : fieldControlTemplate\"\r\n                  [ngTemplateOutletContext]=\"{item: item, index: i, column: column, readonly: true, hasFormLabel: false, status: false}\">\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <td #inlineActionArea *ngIf=\"hasAnyAction(item)\" class=\"text-center action-column-wrapper\">\r\n          <div class=\"katana-tooltip\" *ngFor=\"let action of inlineActions\">\r\n            <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n            <katana-button class=\"mr-1\" *ngIf=\"!action.hide || !action.hide(item)\" [lazyload]=\"action.lazyload\"\r\n              [customClass]=\"action.customClass\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n              (execute)=\"executeActionAsync(action,item,null, i, $event)\" [disabled]=\"action.disabled\"></katana-button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr #rowDetail [@cAnimation] *ngIf=\"item.toggle\" class=\"row-detail-wrapper\">\r\n        <td colspan=\"20\" (click)=\"selectItem(item)\">\r\n          <div *ngIf=\"false\" class=\"d-flex detail-title\">\r\n            <span><i class=\"fa fa-info\" aria-hidden=\"true\"></i> {{option?.displayText?.detailTitle}}</span>\r\n          </div>\r\n          <ng-container *ngIf=\"rowDetailTemplate\" [ngTemplateOutlet]=\"rowDetailTemplate.template\"\r\n            [ngTemplateOutletContext]=\"{item: item}\">\r\n          </ng-container>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </ng-template>\r\n\r\n  <ng-template #noResult>\r\n    <tbody>\r\n      <tr>\r\n        <td colspan=\"20\" class=\"center no-result\">\r\n          <i class=\"fa fa-search\"></i>\r\n          {{option?.message?.notFoundMessage}} <span *ngIf=\"textSearched\"> {{option?.message?.refMessage}} <span\r\n              class=\"text-bold text-primary\">\"{{textSearched}}\"</span>\r\n          </span>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </ng-template>\r\n\r\n  <ng-template #footerSection>\r\n    <div class=\"table-footer\">\r\n      <div class=\"paging d-flex align-items-center\">\r\n        <div *ngIf=\"totalRecords > 0\">\r\n          <span class=\"result-search-text\"\r\n            [innerHTML]=\"option.message.foundMessage.replace('[0]',totalRecords.toString()).replace('[1]',totalPages.length.toString())\"></span>\r\n        </div>\r\n        <div class=\"ml-auto \" *ngIf=\"totalPages.length > 1 && option.paging\">\r\n          <div class=\"d-flex align-items-center page-navigator\">\r\n            <div class=\"mr-5\">\r\n              <span class=\"mr-1 text-muted\">{{option?.displayText?.pageTitle}}</span>\r\n              <input #gotoRef (keypress)=\"goto($event,false)\" (blur)=\"goto($event,true)\" class=\"goto mr-1\"\r\n                value=\"{{currentPage + 1}}\" type=\"text\" max=\"{{totalPages.length}}\" />\r\n              <span>/<span class=\"text-muted ml-1\">{{totalPages.length}}</span></span>\r\n            </div>\r\n            <ul class=\"m-0\">\r\n              <li (click)=\"changePage$.next(totalPages.length - 1)\" class=\"page\"\r\n                *ngIf=\"currentPage < totalPages.length - 1\"\r\n                [ngClass]=\"{'disabled': currentPage >= totalPages.length - 1}\"><span\r\n                  class=\"fa fa-angle-double-right f-17\"></span></li>\r\n              <li class=\"page \" (click)=\"changePage$.next(currentPage + 1)\" *ngIf=\"currentPage < totalPages.length - 1\"\r\n                [ngClass]=\"{'disabled': currentPage >= totalPages.length - 1}\"><span\r\n                  class=\"fa fa-angle-right  f-15\"></span></li>\r\n              <li [ngClass]=\"{'active': currentPage == page}\" *ngFor=\"let page of getPages(maxPage)\"\r\n                (click)=\"changePage$.next(page)\" class=\"page\">\r\n                <a>{{page + 1}}</a>\r\n              </li>\r\n              <li class=\"page \" (click)=\"changePage$.next(currentPage - 1)\" *ngIf=\"currentPage > 0\"><span\r\n                  class=\"fa fa-angle-left  f-15\"></span></li>\r\n              <li class=\"page \" (click)=\"changePage$.next(0)\" *ngIf=\"currentPage > 0\"><span\r\n                  class=\"fa fa-angle-double-left f-17\"></span></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #filterSection>\r\n    <div class=\"row form search-bar form-inline\">\r\n      <div class=\"col col-md-12 col-xs-12\">\r\n        <div class=\"flex-custom\">\r\n          <div class=\"form-group search-input-wrapper\">\r\n            <span class=\"search-icon\">\r\n              <i class=\"fa fa-search\" (click)=\"search()\"></i>\r\n            </span>\r\n            <input spellcheck=\"false\" [(ngModel)]=\"filter.searchText\" type=\"text\" class=\"form-control search-input\"\r\n              (keypress)=\"handkeKeypress($event)\" [placeholder]=\"option.displayText.placeholderSearch\">\r\n            <span class=\"search-reset\" *ngIf=\"filter.searchText\">\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n              <i *ngIf=\"!loading\" class=\"fa fa-times-circle\" (click)=\"filter.searchText = ''\"></i>\r\n            </span>\r\n          </div>\r\n          <button *ngIf=\"filterColumns.length && !option.hasColumnFilter\" class=\"btn btn-link-default\"\r\n            [ngClass]=\"{'btn-link-default' : !filterSectionToggle, 'btn-link': filterSectionToggle}\" type=\"button\"\r\n            aria-hidden=\"true\" (click)=\"toggleFilterSection()\">\r\n            <i class=\"fa fa-sliders m-0\"></i> {{option.displayText.advancedSearchTitle}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div [@cAnimation] *ngIf=\"filterSectionToggle\" class=\"row filter align-items-center\">\r\n      <span class=\"col-xs-12 col-md-12  filter-title\">{{option.displayText.filterTitle}}</span>\r\n      <div class=\"col-md-3 col-xs-12 pull-left filter-element \" *ngFor=\"let column of filterColumns; let i = index\">\r\n        <ng-container [ngTemplateOutlet]=\"column.filterTemplate ? column.filterTemplate() : fieldControlTemplate\"\r\n          [ngTemplateOutletContext]=\"{index: i, item: filter, column: column, readonly: false, hasFormLabel: true, status: false}\">\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"col-sm-12 \">\r\n        <button class=\"btn btn-primary\" type=\"button\" aria-hidden=\"true\" (click)=\"searchAsync(true)\">\r\n          <i *ngIf=\"loading\" class=\"fa fa-spinner rotate-refresh\"></i>\r\n          <i *ngIf=\"!loading\" class=\"fa fa-search\"></i>\r\n          {{option.displayText.advancedBtnTitle}}\r\n        </button>\r\n        <button class=\"btn btn-default m-l-5\" type=\"button\" aria-hidden=\"true\" (click)=\"resetFilters()\">\r\n          {{option.displayText.advancedBtnCancelTitle}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #fieldControlTemplate let-column=\"column\" let-item=\"item\" let-index=\"index\" let-readonly=\"readonly\"\r\n    let-hasFormLabel=\"hasFormLabel\" let-status=\"status\">\r\n    <div [ngSwitch]=\"column.type\">\r\n      <ng-container *ngSwitchDefault>\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index) && !status\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()]}}</div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index) || status\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-textbox #el (change)=\"filterByColumn(status)\"\r\n              [validationName]=\"column?.validationOption?.validationName\" [focus]=\"true\" [item]=\"item\"\r\n              [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\">\r\n            </katana-textbox>\r\n            <div style=\"text-align: right;\" *ngIf=\"!status\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-textbox *ngIf=\"!status\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"filter[column.valueRef()]\">\r\n          </katana-textbox>\r\n          <katana-textbox *ngIf=\"status\" [title]=\"hasFormLabel ? column.title() : null\"\r\n            [(model)]=\"item[column.valueRef()]\">\r\n          </katana-textbox>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'custom'\">\r\n        <ng-container [ngTemplateOutlet]=\"column.customTemplate()\" [ngTemplateOutlet]=\"{item: item}\">\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'description'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\" class=\"katana-tooltip\">\r\n            <span [innerHTML]=\"item[column.valueRef()]\" *ngIf=\"item[column.valueRef()] && column.showTooltip\"\r\n              class=\"tooltiptext tooltip-top\">\r\n            </span>\r\n            <span [innerHTML]=\"item[column.valueRef()] | shorten: option.maxLenghtext : '...'\">\r\n            </span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\" style=\"max-width: 250px; padding: 5px;\">\r\n            <katana-editor\r\n              (modelChange)=\"changeEditor($event, item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n              #el [focus]=\"true\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\">\r\n            </katana-editor>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button [customClass]=\"'text-success'\"\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\"></katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\">\r\n          </katana-textbox>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'number'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()]}}</div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-textbox #el [validationName]=\"column?.validationOption?.validationName\" type=\"number\" [focus]=\"true\"\r\n              [item]=\"item\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\">\r\n            </katana-textbox>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n            type=\"number\">\r\n          </katana-textbox>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'currency'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaCurrency}}\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-textbox #el [validationName]=\"column?.validationOption?.validationName\" [focus]=\"true\" [item]=\"item\"\r\n              [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\" type=\"currency\">\r\n            </katana-textbox>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-textbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n            type=\"currency\">\r\n          </katana-textbox>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'boolean'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">\r\n            <span *ngIf=\"item[column.valueRef()]\" class=\"fa fa-check text-success\"></span>\r\n            <span *ngIf=\"!item[column.valueRef()]\" class=\"fa fa-remove text-danger\"></span>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-checkbox #el [validationName]=\"column?.validationOption?.validationName\"\r\n              [(model)]=\"item[column.valueRef()]\"></katana-checkbox>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-checkbox [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\">\r\n          </katana-checkbox>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'date'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaDate}}</div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-daterange-picker #el [validationName]=\"column?.validationOption?.validationName\"\r\n              [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\"\r\n              pickerType=\"calendar\">\r\n            </katana-daterange-picker>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-daterange-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n            pickerType=\"calendar\"></katana-daterange-picker>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'datetime'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaDateTime}}\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-daterange-picker #el [validationName]=\"column?.validationOption?.validationName\"\r\n              [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\"\r\n              pickerType=\"both\">\r\n            </katana-daterange-picker>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-daterange-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n            pickerType=\"both\"></katana-daterange-picker>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'time'\">\r\n        <ng-container *ngIf=\"readonly && !hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div (dblclick)=\"editInline(item, column.valueRef(), index)\">{{item[column.valueRef()] | katanaTime}}</div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"hasInlineEdit(item, column.valueRef(), index)\">\r\n          <div class=\"col-xs-12\">\r\n            <katana-daterange-picker #el [validationName]=\"column?.validationOption?.validationName\"\r\n              [selectMode]=\"'single'\" [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\"\r\n              pickerType=\"timer\">\r\n            </katana-daterange-picker>\r\n            <div style=\"text-align: right;\">\r\n              <katana-button\r\n                (execute)=\"acceptInlineEdit(item, column.valueRef(), index, el, column?.validationOption, column?.inlineCallback)\"\r\n                [icon]=\"'fa fa-check'\">\r\n              </katana-button>\r\n              <katana-button (execute)=\"cancelInlineEdit(item, column.valueRef(), index)\" [icon]=\"'fa fa-remove'\">\r\n              </katana-button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-datetime-picker [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"filter[column.valueRef()]\"\r\n            pickerType=\"timer\"></katana-datetime-picker>\r\n        </ng-container>\r\n      </ng-container>\r\n\r\n      <ng-container *ngSwitchCase=\"'dropdown'\">\r\n        <ng-container *ngIf=\"readonly\"> {{getDropdownDisplayText(column, item)}}</ng-container>\r\n        <ng-container *ngIf=\"!readonly\">\r\n          <katana-dropdown [title]=\"hasFormLabel ? column.title() : null\" [(model)]=\"item[column.valueRef()]\"\r\n            [searchFunction]=\"column.dropdownConfiguration.searchFunction\"\r\n            [multiple]=\"column.dropdownConfiguration.multiple\" [bindLabel]=\"column.dropdownConfiguration.bindLabel\"\r\n            [bindValue]=\"column.dropdownConfiguration.bindValue\"></katana-dropdown>\r\n        </ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <ng-template #toolbarSection>\r\n    <div class=\"row no-gutters toolbar\">\r\n      <div *ngIf=\"hasPageSizeChooser\" class=\"d-flex align-items-center mr-2 m-l-2 select-page-wrapper\">\r\n        <span>{{option.displayText.selectPageSize}}</span>\r\n        <div class=\"p-0 \">\r\n          <select [(ngModel)]=\"pageSize\" (change)=\"changePageSize()\" class=\"form-control col-xs-12 col-md-12\">\r\n            <option *ngFor=\"let opt of option.pageSizes\" value=\"{{opt}}\">{{opt}}</option>\r\n            <option value=\"999999\">{{option.displayText.allTitle}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div [@cAnimationFadeRight] class=\"table-action\" *ngIf=\"selectedItems.length > 0\">\r\n        <div class=\"d-flex align-items-center\">\r\n          <div class=\"col-xs-12 custom-toolbar  mr-2\">\r\n            <div class=\"btn-group \" role=\"group\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"\"\r\n              data-original-title=\".btn-xlg\">\r\n              <ng-container *ngFor=\"let action of getToolbarActions(true)\">\r\n                <div *ngIf=\"!action.hide || !action.hide()\" class=\"katana-tooltip\">\r\n                  <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n                  <katana-button *ngIf=\"action.type !== 'inline'\" class=\"mr-1\" [customClass]=\"action.customClass\"\r\n                    [lazyload]=\"action.lazyload\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n                    (execute)=\"executeActionAsync(action,null,null, null, $event)\">\r\n                  </katana-button>\r\n                </div>\r\n              </ng-container>\r\n              <katana-dropdown-buttons *ngIf=\"toolbarActions.length > option.totalToolbarItem\" title=\"T\u00F9y ch\u1ECDn\">\r\n                <ng-container *ngFor=\"let action of getToolbarActions(false)\">\r\n                  <katana-dropdown-button *ngIf=\"!action.hide || !action.hide()\"\r\n                    title=\"{{action.title ? action.title() : ''}}\"\r\n                    (execute)=\"executeActionAsync(action,null,null, null, $event)\" [disabled]=\"action.disabled\">\r\n                  </katana-dropdown-button>\r\n                </ng-container>\r\n              </katana-dropdown-buttons>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-summary\">\r\n            <span\r\n              [innerHTML]=\"option.message.selectedItemsMessage.replace('[0]', selectedItems.length.toString())\"></span>&nbsp;\r\n            <a href=\"javascript:;\" (click)=\"clearAll()\" [innerHTML]=\"option.message.confirmClearAllRecordsMessage\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"d-flex ml-auto\">\r\n        <div class=\"katana-tooltip\" *ngFor=\"let action of this.option.topButtons; last as isLast\">\r\n          <span *ngIf=\"action.tooltip\" class=\"tooltiptext tooltip-top\">{{action.tooltip()}}</span>\r\n          <katana-button *ngIf=\"!action.hide || !action.hide()\" [lazyload]=\"action.lazyload\"\r\n            [customClass]=\"action.customClass\" title=\"{{action.title ? action.title() : ''}}\" [icon]=\"action.icon\"\r\n            (execute)=\"executeActionAsync(action,null,null, null, $event)\" [class.mr-2]=\"!isLast\"\r\n            [disabled]=\"action.disabled\"></katana-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>",
                animations: [
                    trigger('cAnimation', [
                        state('void', style({})),
                        state('*', style({})),
                        transition(':enter', [
                            style({ transform: 'translateY(-30px)', opacity: 0 }),
                            animate('300ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'translateY(0)', opacity: 1 }),
                            animate('300ms ease-in-out', style({ transform: 'translateY(-30px)', opacity: 0 }))
                        ])
                    ]),
                    trigger('cAnimationFadeRight', [
                        state('void', style({})),
                        state('*', style({})),
                        transition(':enter', [
                            style({ transform: 'translateX(30px)', opacity: 0 }),
                            animate('300ms ease-in-out', style({ transform: 'translateX(0)', opacity: 1 }))
                        ]),
                        transition(':leave', [
                            style({ transform: 'translateX(0)', opacity: 1 }),
                            animate('300ms ease-in-out', style({ transform: 'translateX(30px)', opacity: 0 }))
                        ])
                    ])
                ],
                styles: [".katana-switch{position:relative;display:inline-block;width:47px;height:25px}.katana-switch input{display:none}.katana-switch input:checked+.katana-slider{background-color:#6fbb35}.katana-switch input:focus+.katana-slider{box-shadow:0 0 1px #6fbb35}.katana-switch input:checked+.katana-slider:before{transform:translateX(26px)}.katana-switch .katana-slider{box-shadow:1px 1px 1px rgba(0,0,0,.145);position:absolute;cursor:pointer;top:6px;left:6px;right:0;bottom:0;background-color:#b7b0ac;transition:.2s;border-radius:34px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:0;width:2.5rem;height:.9375rem}.katana-switch .katana-slider:before{position:absolute;content:\"\";left:-.3125rem;top:-.17rem;box-shadow:1px 1px 1px 1px rgba(0,0,0,.245);background-color:#f4f3f0;transition:.2s;border-radius:50%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:1.3125rem;height:1.3125rem}.katana-tooltip{position:relative;overflow:unset;display:inline-block}.katana-tooltip.primary .tooltiptext{background-color:#007bff;color:#fff}.katana-tooltip.primary .tooltip-top{box-shadow:none}.katana-tooltip.primary .tooltip-top:after{border-color:#007bff transparent transparent}.katana-tooltip.info .tooltiptext{background-color:#1d9ce7;color:#fff}.katana-tooltip.info .tooltip-top{box-shadow:none}.katana-tooltip.info .tooltip-top:after{border-color:#1d9ce7 transparent transparent}.katana-tooltip.dark .tooltiptext{background-color:#052d3e;color:#fff}.katana-tooltip.dark .tooltip-top{box-shadow:none}.katana-tooltip.dark .tooltip-top:after{border-color:#052d3e transparent transparent}.katana-tooltip .tooltiptext{max-width:180px;min-width:120px;line-height:2;word-break:break-word;visibility:hidden;position:absolute;white-space:normal;background-color:#fff;color:#052d3e;text-align:center;padding:5px;border-radius:5px;z-index:1;opacity:0;transition:.3s;font-size:12px;font-weight:500;transform:translateY(20px)}.katana-tooltip .tooltip-top{box-shadow:1px 3px 9px rgba(0,0,0,.18);bottom:120%;left:50%;margin-left:-60px}.katana-tooltip .tooltip-top:after{content:\"\";position:absolute;top:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:#fff transparent transparent}.katana-tooltip:hover .tooltiptext{visibility:visible;opacity:1;transform:translateY(0)}.search-bar .search-input-wrapper{position:relative}.search-bar .search-input-wrapper .search-icon{position:absolute;z-index:9;right:10px;font-size:16px;line-height:32px;color:#87837b;cursor:pointer}.search-bar .search-input-wrapper .search-icon:hover{color:#007bff}.search-bar .search-input-wrapper .search-input{width:420px;padding-left:10px;border-radius:3px;padding-right:56px}@media (max-width:480px){.search-bar .search-input-wrapper .search-input{width:100%}}.search-bar .search-input-wrapper .search-reset{position:absolute;z-index:9;right:36px;font-size:18px;line-height:32px;color:#b7b0ac;cursor:pointer}.search-bar .search-input-wrapper .search-reset:hover{color:#87837b}.katana-table--wrapper{border:1px solid #f4f3f0}.katana-table--wrapper .loading-indicator{display:none}.katana-table--wrapper .loading-indicator.show{display:block;top:50%;position:absolute;right:47%}.katana-table--wrapper .loading-indicator.show .spinner{text-align:center}.katana-table--wrapper .loading-indicator.show .spinner>div{width:18px;height:18px;background-color:#007bff;border-radius:100%;display:inline-block;-webkit-animation:1s ease-in-out infinite both sk-bouncedelay;animation:1s ease-in-out infinite both sk-bouncedelay}.katana-table--wrapper .loading-indicator.show .spinner .bounce1{-webkit-animation-delay:-.32s;animation-delay:-.32s}.katana-table--wrapper .loading-indicator.show .spinner .bounce2{-webkit-animation-delay:-.16s;animation-delay:-.16s}@-webkit-keyframes sk-bouncedelay{0%,100%,80%{-webkit-transform:scale(0)}40%{-webkit-transform:scale(1)}}@keyframes sk-bouncedelay{0%,100%,80%{transform:scale(0)}40%{transform:scale(1)}}.katana-table--wrapper .loading-cover{-webkit-filter:blur(2px);filter:blur(2px);opacity:.3;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none}.toolbar{width:100%;padding:10px 0;margin:0}.toolbar .select-page-wrapper span{font-size:12px;color:#87837b;margin-right:6px}.toolbar .select-page-wrapper select{padding:3px 5px;border:1px solid #e8e8e8;background:#fafafa}.toolbar .table-action .table-summary{background:#fff5e6;padding:5px 16px;border-radius:5px}.toolbar .confirm-highlight,.toolbar .highlight{color:#007bff;font-weight:500}.toolbar .custom-toolbar .dropdown{position:relative;display:inline-block}.toolbar .custom-toolbar .dropdown .dropdown-content{display:none;position:absolute;background-color:#f1f1f1;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);z-index:1;top:30px}.toolbar .custom-toolbar .dropdown .dropdown-content a{padding:6px 12px;line-height:16px;font-size:11px;text-decoration:none;display:block}.toolbar .custom-toolbar .dropdown .dropdown-content a:hover{background-color:#ddd}.toolbar .custom-toolbar .dropdown:hover .dropdown-content{display:block}.toolbar .custom-toolbar .dropdown .custom-btn{border-left:none}.hidden{display:none}.paging{border-top:1px solid #f4f3f0;padding:15px 10px;position:relative}.paging .page{width:30px;height:30px;line-height:30px;border-right:none;float:right;text-align:center;cursor:pointer}.paging .page:hover{background-color:#007bff;color:#fff;font-weight:500}.paging .page:hover.active{background-color:#dbedff;color:#007bff;font-weight:500}.paging .active{background-color:#dbedff;color:#007bff;font-weight:500}.paging .confirm-highlight,.paging .highlight{color:#007bff;font-weight:500}.paging .result-search-text{color:#87837b}.paging .page-navigator .goto{padding:3px 5px;border:1px solid #e8e8e8;font-weight:500;background:#fafafa;color:#007bff;width:45px;text-align:center}.disabled{opacity:.65}.filter{margin:.5rem 0 0;background:#fafafa;padding:1rem;position:relative}.filter .filter-title{font-weight:500;text-transform:uppercase;color:#4b4542}.filter .filter-element{margin-top:5px;margin-bottom:5px}.filter .filter-element .dt-relative{position:relative}.filter .filter-element .dt-relative:hover{color:#5757e7}.filter .filter-element .date-icon{position:absolute;top:0;right:0;font-size:16px;margin-top:7px;margin-right:10px;cursor:pointer}.katana-main-table{width:100%}.katana-component{padding:0;margin:0;width:100%;border-collapse:collapse}@media (max-width:1024px){.katana-component{width:100%}}.katana-component.scroll-mode{min-width:1200px}.katana-component .no-result{padding:3rem;background:#fafafa;font-weight:400;color:#584d4d;font-size:1rem}.katana-component td,.katana-component th{padding:6px;text-align:left;cursor:pointer;vertical-align:middle}.katana-component thead{border-bottom:1px solid #f2f1ee}.katana-component thead th{background:#fff;padding:10px 5px;font-weight:500;text-transform:inherit;vertical-align:middle;border-right:1px solid #f2f1ee}.katana-component thead th.sortable .sort-icon{line-height:19px}.katana-component thead th.sortable:hover{background:#ededed}.katana-component thead th:last-of-type{border-right:0 solid #f4f3f0}.katana-component tbody:nth-child(odd) .katana-tr{background-color:#fafafa}.katana-component tbody .katana-tr:hover{background-color:#ecf7fd}.katana-component tbody .katana-tr:hover .action-column-wrapper .btn-link{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.katana-component tbody .katana-tr.active{background-color:#d5edfb;border-top:1px solid #a7d9f6;border-bottom:1px solid #a7d9f6}.katana-component tbody .katana-tr.active:hover{background-color:#d5edfb;border-top:1px solid #79c4f1;border-bottom:1px solid #79c4f1}.katana-component tbody .katana-tr.active:hover .action-column-wrapper .btn-link{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}.katana-component tbody .katana-tr.link{color:#6767dd}.katana-component tbody .katana-tr.link:hover{color:#151583}.katana-component tbody .katana-tr .katana-td .dt-relative{position:relative}.katana-component tbody .katana-tr .katana-td .dt-relative:hover{color:#5757e7}.katana-component tbody .katana-tr .katana-td .date-icon{position:absolute;top:0;right:0;font-size:16px;margin-top:7px;margin-right:80px;cursor:pointer}.katana-component tbody .katana-tr .action-column-wrapper .btn-link{-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.3}.katana-component tbody .row-detail-wrapper{border-bottom:1px solid #e8e8e8;border-top:1px solid #f4f3f0}.katana-component tbody .row-detail-wrapper .detail-title{background:#fafafa;padding:6px 14px;margin:7px;font-weight:500;color:#052d3e}.katana-component .wrap-text{white-space:normal;word-wrap:break-word;word-break:break-word}.katana-component .center,.katana-component .detail{text-align:center}.katana-component .right{text-align:right}.katana-component.dark>thead>tr>th{background:#052d3e;color:#fff}.katana-component.dark>thead>tr>th.sortable:hover{background:#031c26}.katana-component.primary>thead>tr>th{background:#f7f7f7;color:#4b4542}.katana-component.primary>thead>tr>th.sortable:hover{background:#ededed}.katana-component.info>thead>tr>th{background:#1d9ce7;color:#fff}.katana-component.info>thead>tr>th.sortable:hover{background:#178ed4}.katana-component.list-mode table,.katana-component.list-mode tbody,.katana-component.list-mode td,.katana-component.list-mode th,.katana-component.list-mode thead,.katana-component.list-mode tr{display:block}.katana-component.list-mode thead tr{position:absolute;top:-9999px;left:-9999px}.katana-component.list-mode tr{border-bottom:0}.katana-component.list-mode tr:last-child{border-bottom:1px solid #ddd}.katana-component.list-mode td.katana-td{border:none;position:relative;padding-left:50%}.katana-component.list-mode td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:700;content:attr(data-content)}.katana-component.list-mode .center,.katana-component.list-mode .detail,.katana-component.list-mode .right{text-align:left}.katana-component.list-mode .table-action{margin-top:5px}@media only screen and (max-width:760px),(min-device-width:768px) and (max-device-width:1024px){.katana-component table,.katana-component tbody,.katana-component td,.katana-component th,.katana-component thead,.katana-component tr{display:block}.katana-component thead tr{position:absolute;top:-9999px;left:-9999px}.katana-component tr{border-bottom:0}.katana-component tr:last-child{border-bottom:1px solid #ddd}.katana-component td.katana-td{border:none;position:relative;padding-left:50%}.katana-component td:before{position:absolute;top:6px;left:6px;width:45%;padding-right:10px;white-space:nowrap;font-weight:700;content:attr(data-content)}.katana-component .center,.katana-component .detail,.katana-component .right{text-align:left}.katana-component .table-action{margin-top:5px}}.custom-input{position:relative}.custom-input .custom-td *{margin:0}.custom-input .has-error:not(:focus)+.validation-error{font-size:12px;position:absolute}.custom-input .has-error:not(:focus)+.validation-error:after{font-family:IcoFont!important;position:absolute;top:-30px!important;height:16px;border-radius:50px;right:0;background:#fff;font-size:16px;color:#d61e00}.custom-input .has-error:not(:focus)+.validation-error .mini-pop{position:absolute;top:-35px!important;padding:5px 10px;border-radius:5px;right:26px;z-index:1;background:#fff;box-shadow:0 2px 3px rgba(0,0,0,.12);max-width:212px}.custom-input .has-error:not(:focus)+.validation-error .mini-pop:after{content:\"\";display:block;position:absolute;right:-10px;bottom:7px;width:0;height:0;border:5px solid transparent;border-left-color:#fff}.custom-input .has-error:not(:focus)+.validation-error .mini-pop:before{content:\"\";display:block;position:absolute;right:-12px;bottom:5px;width:0;height:0;border:6px solid transparent;border-left-color:#bfbfbf}.flex-custom{display:flex}.selected{background-color:#d4eaf8!important}@media (max-width:480px){.flex-custom{display:unset}}.loader{-webkit-animation:2s linear infinite spin;animation:2s linear infinite spin}@-webkit-keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.can-edit:hover{color:#007bff}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: RendererFactory2 },
    { type: DataService },
    { type: ValidationService },
    { type: IgxExcelExporterService },
    { type: ActionService }
];
TableComponent.propDecorators = {
    validationName: [{ type: Input }],
    validationScope: [{ type: Input }],
    option: [{ type: Input }],
    searchRef: [{ type: ViewChild, args: ['searchRef', { static: true },] }],
    gotoRef: [{ type: ViewChild, args: ['gotoRef', { static: true },] }],
    tableRef: [{ type: ViewChild, args: ['tableRef', { static: true },] }],
    rowDetailTemplate: [{ type: ContentChild, args: [TableRowDetailDirective, { static: true },] }],
    wrapper: [{ type: ViewChild, args: ['wrapper', { static: false },] }],
    selectedChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableComponent.prototype.validationName;
    /** @type {?} */
    TableComponent.prototype.validationScope;
    /** @type {?} */
    TableComponent.prototype.option;
    /** @type {?} */
    TableComponent.prototype.searchRef;
    /** @type {?} */
    TableComponent.prototype.gotoRef;
    /** @type {?} */
    TableComponent.prototype.tableRef;
    /** @type {?} */
    TableComponent.prototype.rowDetailTemplate;
    /** @type {?} */
    TableComponent.prototype.wrapper;
    /** @type {?} */
    TableComponent.prototype.selectedChange;
    /** @type {?} */
    TableComponent.prototype.items;
    /** @type {?} */
    TableComponent.prototype.totalRecords;
    /** @type {?} */
    TableComponent.prototype.loading;
    /** @type {?} */
    TableComponent.prototype.selectedItems;
    /** @type {?} */
    TableComponent.prototype.pageSize;
    /** @type {?} */
    TableComponent.prototype.orderBy;
    /** @type {?} */
    TableComponent.prototype.direction;
    /** @type {?} */
    TableComponent.prototype.totalPages;
    /** @type {?} */
    TableComponent.prototype.currentPage;
    /** @type {?} */
    TableComponent.prototype.filter;
    /** @type {?} */
    TableComponent.prototype.maxPage;
    /** @type {?} */
    TableComponent.prototype.selectedAll;
    /** @type {?} */
    TableComponent.prototype.filterColumns;
    /** @type {?} */
    TableComponent.prototype.toolbarActions;
    /** @type {?} */
    TableComponent.prototype.inlineActions;
    /** @type {?} */
    TableComponent.prototype.filterSectionToggle;
    /** @type {?} */
    TableComponent.prototype.textSearched;
    /** @type {?} */
    TableComponent.prototype.showReset;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.defaultPageSize;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.localData;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._render;
    /** @type {?} */
    TableComponent.prototype.hasFilterSection;
    /** @type {?} */
    TableComponent.prototype.hasToolbarSection;
    /** @type {?} */
    TableComponent.prototype.hasFooterSection;
    /** @type {?} */
    TableComponent.prototype.hasDetailTemplate;
    /** @type {?} */
    TableComponent.prototype.hasPageSizeChooser;
    /** @type {?} */
    TableComponent.prototype.changePage$;
    /** @type {?} */
    TableComponent.prototype.changedRows;
    /** @type {?} */
    TableComponent.prototype.localFilter;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.request;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.previousRequest;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.recursiveCounter;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.subscriptions;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.edittedFields;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.previousItems;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.thisElement;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.dataService;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.validationService;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.excelExporterService;
    /**
     * @type {?}
     * @protected
     */
    TableComponent.prototype.actionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWZ3NGMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zaGFyZWQvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQWEsZ0JBQWdCLEVBQTRCLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ssT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsV0FBVyxFQUE0QixTQUFTLEVBQUUsYUFBYSxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBZ0IsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNoTSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQWMsRUFBRSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLGdDQUFnQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWtD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Qy9CLGdDQUF3Qjs7SUFDeEIsaUNBQTJCOztJQUMzQixxQ0FBb0M7O0lBQ3BDLHVDQUF5Qzs7SUFDekMsd0NBQTBDOztJQUMxQyx1Q0FBeUM7O0lBQ3pDLDZDQUE0Qzs7SUFDNUMsc0NBQWlDOztJQUNqQyxtQ0FBa0M7Ozs7O0lBQ2xDLHlDQUFvQzs7Ozs7SUFDcEMsbUNBQTBCOzs7OztJQUMxQixpQ0FBMkI7O0lBQzNCLDBDQUFpQzs7SUFDakMsMkNBQWtDOztJQUNsQywwQ0FBaUM7O0lBQ2pDLDJDQUFrQzs7SUFDbEMsNENBQW1DOztJQUNuQyxxQ0FBcUU7O0lBQ3JFLHFDQUFzQzs7SUFDdEMscUNBQTZCOzs7OztJQUM3QixpQ0FBMEI7Ozs7O0lBQzFCLHlDQUFrQzs7Ozs7SUFDbEMsMENBQXFDOzs7OztJQUNyQyx1Q0FBeUQ7Ozs7O0lBQ3pELHVDQUE2Qzs7Ozs7SUFDN0MsdUNBQW9DOzs7OztJQUdsQyxxQ0FBK0I7Ozs7O0lBQy9CLHlDQUEyQzs7Ozs7SUFDM0MscUNBQWtDOzs7OztJQUNsQywyQ0FBOEM7Ozs7O0lBQzlDLDhDQUF1RDs7Ozs7SUFDdkQsdUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIENvbnRlbnRDaGlsZCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBUYWJsZU9wdGlvbiwgVGFibGVDb2x1bW4sIFRhYmxlQWN0aW9uLCBUYWJsZU1vZGUsIFRhYmxlQ29uc3RhbnQsIFRhYmxlUmVzcG9uc2UsIFRhYmxlVGV4dCwgVGFibGVNZXNzYWdlLCBUYWJsZUNvbHVtblR5cGUsIEVkaXR0ZWRGaWVsZCwgQ2hhbmdlZFJvdywgQ2hhbmdlZENlbGwgfSBmcm9tICcuL3RhYmxlLm1vZGVsJztcclxuaW1wb3J0IHsgVGFibGVSb3dEZXRhaWxEaXJlY3RpdmUgfSBmcm9tICcuL3RhYmxlLXJvdy1kZXRhaWwuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIEJlaGF2aW9yU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdmFsaWRhdGlvbi92YWxpZGF0aW9uLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDbGllbnRWYWxpZGF0b3IsIFZhbGlkYXRpb25PcHRpb24gfSBmcm9tICcuLi92YWxpZGF0aW9uL3ZhbGlkYXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSwgSWd4RXhjZWxFeHBvcnRlck9wdGlvbnMgfSBmcm9tICdpZ25pdGV1aS1hbmd1bGFyJztcclxuaW1wb3J0IHsgQWN0aW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjdGlvbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLXRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcignY0FuaW1hdGlvbicsIFtcclxuICAgICAgc3RhdGUoJ3ZvaWQnLCBzdHlsZSh7fSkpLFxyXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHt9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTMwcHgpJywgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6IDEgfSkpXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJywgb3BhY2l0eTogMSB9KSxcclxuICAgICAgICBhbmltYXRlKCczMDBtcyBlYXNlLWluLW91dCcsIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtMzBweCknLCBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSksXHJcbiAgICB0cmlnZ2VyKCdjQW5pbWF0aW9uRmFkZVJpZ2h0JywgW1xyXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHt9KSksXHJcbiAgICAgIHN0YXRlKCcqJywgc3R5bGUoe30pKSxcclxuICAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgzMHB4KScsIG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLCBvcGFjaXR5OiAxIH0pKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignOmxlYXZlJywgW1xyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDEgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgnMzAwbXMgZWFzZS1pbi1vdXQnLCBzdHlsZSh7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMzBweCknLCBvcGFjaXR5OiAwIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSlcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgdmFsaWRhdGlvbk5hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSB2YWxpZGF0aW9uU2NvcGU6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uOiBUYWJsZU9wdGlvbjtcclxuICBAVmlld0NoaWxkKCdzZWFyY2hSZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgc2VhcmNoUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2dvdG9SZWYnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgZ290b1JlZjogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCd0YWJsZVJlZicsIHsgc3RhdGljOiB0cnVlIH0pIHB1YmxpYyB0YWJsZVJlZjogRWxlbWVudFJlZjtcclxuICBAQ29udGVudENoaWxkKFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlLCB7IHN0YXRpYzogdHJ1ZSB9KSBwdWJsaWMgcm93RGV0YWlsVGVtcGxhdGU6IFRhYmxlUm93RGV0YWlsRGlyZWN0aXZlO1xyXG4gIEBWaWV3Q2hpbGQoJ3dyYXBwZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgcHVibGljIHdyYXBwZXI6IEVsZW1lbnRSZWY7XHJcbiAgQE91dHB1dCgpIHB1YmxpYyBzZWxlY3RlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHB1YmxpYyBpdGVtczogYW55W10gPSBbXTtcclxuICBwdWJsaWMgdG90YWxSZWNvcmRzOiBudW1iZXIgPSAwO1xyXG4gIHB1YmxpYyBsb2FkaW5nOiBib29sZWFuO1xyXG4gIHB1YmxpYyBzZWxlY3RlZEl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gIHB1YmxpYyBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIHB1YmxpYyBvcmRlckJ5OiBzdHJpbmc7XHJcbiAgcHVibGljIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyB0b3RhbFBhZ2VzOiBudW1iZXJbXSA9IFtdO1xyXG4gIHB1YmxpYyBjdXJyZW50UGFnZTogbnVtYmVyID0gMDtcclxuICBwdWJsaWMgZmlsdGVyOiBhbnkgPSB7fTtcclxuICBwdWJsaWMgbWF4UGFnZTogbnVtYmVyID0gNTtcclxuICBwdWJsaWMgc2VsZWN0ZWRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgZmlsdGVyQ29sdW1uczogVGFibGVDb2x1bW5bXSA9IFtdO1xyXG4gIHB1YmxpYyB0b29sYmFyQWN0aW9uczogVGFibGVBY3Rpb25bXSA9IFtdO1xyXG4gIHB1YmxpYyBpbmxpbmVBY3Rpb25zOiBUYWJsZUFjdGlvbltdID0gW107XHJcbiAgcHVibGljIGZpbHRlclNlY3Rpb25Ub2dnbGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwdWJsaWMgdGV4dFNlYXJjaGVkOiBzdHJpbmcgPSBgYDtcclxuICBwdWJsaWMgc2hvd1Jlc2V0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBkZWZhdWx0UGFnZVNpemU6IG51bWJlciA9IDU7XHJcbiAgcHJpdmF0ZSBsb2NhbERhdGE/OiBhbnlbXTtcclxuICBwcml2YXRlIF9yZW5kZXI6IFJlbmRlcmVyMjtcclxuICBwdWJsaWMgaGFzRmlsdGVyU2VjdGlvbjogYm9vbGVhbjtcclxuICBwdWJsaWMgaGFzVG9vbGJhclNlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIGhhc0Zvb3RlclNlY3Rpb246IGJvb2xlYW47XHJcbiAgcHVibGljIGhhc0RldGFpbFRlbXBsYXRlOiBib29sZWFuO1xyXG4gIHB1YmxpYyBoYXNQYWdlU2l6ZUNob29zZXI6IGJvb2xlYW47XHJcbiAgcHVibGljIGNoYW5nZVBhZ2UkOiBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoMCk7XHJcbiAgcHVibGljIGNoYW5nZWRSb3dzOiBDaGFuZ2VkUm93W10gPSBbXTtcclxuICBwdWJsaWMgbG9jYWxGaWx0ZXI6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgcmVxdWVzdDogYW55ID0ge307XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1JlcXVlc3Q6IGFueSA9IHt9O1xyXG4gIHByaXZhdGUgcmVjdXJzaXZlQ291bnRlcjogbnVtYmVyID0gMDtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuICBwcm90ZWN0ZWQgZWRpdHRlZEZpZWxkczogRWRpdHRlZEZpZWxkW10gPSBbXTtcclxuICBwcm90ZWN0ZWQgcHJldmlvdXNJdGVtczogYW55W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHRoaXNFbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIHByb3RlY3RlZCBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXHJcbiAgICBwcm90ZWN0ZWQgdmFsaWRhdGlvblNlcnZpY2U6IFZhbGlkYXRpb25TZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIGV4Y2VsRXhwb3J0ZXJTZXJ2aWNlOiBJZ3hFeGNlbEV4cG9ydGVyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBhY3Rpb25TZXJ2aWNlOiBBY3Rpb25TZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9yZW5kZXIgPSByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgY29uc3QgY2hhbmdlUGFnZVN1YnNjcmlwdGlvbiA9IHRoaXMuY2hhbmdlUGFnZSQucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKS5zdWJzY3JpYmUocGFnZUluZGV4ID0+IHtcclxuICAgICAgaWYgKHBhZ2VJbmRleCA8IDAgfHwgcGFnZUluZGV4ID49IHRoaXMudG90YWxQYWdlcy5sZW5ndGgpIHJldHVybjtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2VJbmRleDtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5yZXF1ZXN0KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb24ucmVxdWVzdCA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gdGhpcy5jdXJyZW50UGFnZTtcclxuICAgICAgdGhpcy5zZWFyY2hBc3luYyhudWxsLCBudWxsLCB0cnVlKS5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChjaGFuZ2VQYWdlU3Vic2NyaXB0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgIHRoaXMuaW5pdFZhbGlkYXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uc2VsZWN0ZWRJdGVtcyAmJiB0aGlzLm9wdGlvbi5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkSXRlbXMpIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICB0aGlzLm9wdGlvbi5zZWxlY3RlZEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5tb2RlKSB0aGlzLm9wdGlvbi5tb2RlID0gVGFibGVNb2RlLmZ1bGw7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmFjdGlvbnMpIHRoaXMub3B0aW9uLmFjdGlvbnMgPSBbXTtcclxuICAgIGlmICghdGhpcy5vcHRpb24ua2V5KSB0aGlzLm9wdGlvbi5rZXkgPSBUYWJsZUNvbnN0YW50LktleTtcclxuICAgIGlmICghdGhpcy5vcHRpb24udG90YWxUb29sYmFySXRlbSkgdGhpcy5vcHRpb24udG90YWxUb29sYmFySXRlbSA9IDU7XHJcbiAgICBpZiAodGhpcy5vcHRpb24ubWF4UGFnZSkgdGhpcy5tYXhQYWdlID0gdGhpcy5vcHRpb24ubWF4UGFnZTtcclxuICAgIGlmICghdGhpcy5vcHRpb24uZGVmYXVsdE9yZGVyQnkpIHRoaXMub3B0aW9uLmRlZmF1bHRPcmRlckJ5ID0gJ0NyZWF0ZWREYXRlJztcclxuICAgIGlmICghdGhpcy5vcHRpb24uZGVmYXV0T3JkZXJEaXJlY3Rpb24pIHRoaXMub3B0aW9uLmRlZmF1dE9yZGVyRGlyZWN0aW9uID0gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uREVTQztcclxuICAgIGlmICghdGhpcy5vcHRpb24uY29tcG9uZW50Q2xhc3MpIHtcclxuICAgICAgdGhpcy5vcHRpb24uY29tcG9uZW50Q2xhc3MgPSBUYWJsZUNvbnN0YW50LkNvbXBvbmVudENsYXNzO1xyXG4gICAgICB0aGlzLnRoaXNFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLm9wdGlvbi5jb21wb25lbnRDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9uLm1heExlbmdodGV4dCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub3B0aW9uLm1heExlbmdodGV4dCA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5tYXhMZW5naHRleHQgPSAxNTA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbml0VGFibGVUYWJsZVRleHRzKCk7XHJcbiAgICB0aGlzLmluaXRUYWJsZVRhYmxlTWVzc2FnZXMoKTtcclxuICAgIHRoaXMuaW5pdE1haW5Db2x1bW5zKCk7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uYWN0aW9ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbi5hY3Rpb25zLmZvckVhY2goKGFjdGlvbikgPT4ge1xyXG4gICAgICAgIGlmICghYWN0aW9uLnR5cGUpIGFjdGlvbi50eXBlID0gVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLklubGluZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRvb2xiYXJBY3Rpb25zID0gdGhpcy5vcHRpb24uYWN0aW9ucy5maWx0ZXIoeCA9PiBbVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLkJvdGgsIFRhYmxlQ29uc3RhbnQuQWN0aW9uVHlwZS5Ub29sYmFyXS5pbmRleE9mKHgudHlwZSkgPj0gMCk7XHJcbiAgICB0aGlzLmlubGluZUFjdGlvbnMgPSB0aGlzLm9wdGlvbi5hY3Rpb25zLmZpbHRlcih4ID0+IFtUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuQm90aCwgVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLklubGluZV0uaW5kZXhPZih4LnR5cGUpID49IDApO1xyXG5cclxuICAgIGNvbnN0IGluRnVsbE1vZGUgPSB0aGlzLm9wdGlvbi5tb2RlID09PSBUYWJsZU1vZGUuZnVsbDtcclxuICAgIHRoaXMuZmlsdGVyQ29sdW1ucyA9IHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLmFsbG93RmlsdGVyKVxyXG4gICAgICAuc29ydCgoYTogVGFibGVDb2x1bW4sIGI6IFRhYmxlQ29sdW1uKSA9PiBhLm9yZGVyID4gYi5vcmRlciA/IDEgOiBhLm9yZGVyID09PSBiLm9yZGVyID8gMCA6IC0xKTtcclxuICAgIHRoaXMuaGFzRmlsdGVyU2VjdGlvbiA9IGluRnVsbE1vZGU7XHJcblxyXG4gICAgaWYgKHRoaXMub3B0aW9uLnBhZ2luZyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLnBhZ2luZyA9IGluRnVsbE1vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGluRnVsbE1vZGUpIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5wYWdlU2l6ZXMpIHRoaXMub3B0aW9uLnBhZ2VTaXplcyA9IFRhYmxlQ29uc3RhbnQuUGFnZVNpemVzO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRlZmF1bHRQYWdlU2l6ZSkgdGhpcy5vcHRpb24uZGVmYXVsdFBhZ2VTaXplID0gVGFibGVDb25zdGFudC5QYWdlU2l6ZXNbMF07XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWZhdWx0UGFnZVNpemUpIHRoaXMuZGVmYXVsdFBhZ2VTaXplID0gdGhpcy5vcHRpb24uZGVmYXVsdFBhZ2VTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc1Rvb2xiYXJBY3Rpb25zID0gdGhpcy5vcHRpb24uYWN0aW9ucyAmJiB0aGlzLm9wdGlvbi5hY3Rpb25zLmZpbHRlcih4ID0+IFtUYWJsZUNvbnN0YW50LkFjdGlvblR5cGUuVG9vbGJhciwgVGFibGVDb25zdGFudC5BY3Rpb25UeXBlLkJvdGhdLmluZGV4T2YoeC50eXBlKSA+PSAwKS5sZW5ndGggPiAwO1xyXG4gICAgY29uc3QgaGFzVG9wQnV0dG9ucyA9IHRoaXMub3B0aW9uLnRvcEJ1dHRvbnMgJiYgdGhpcy5vcHRpb24udG9wQnV0dG9ucy5sZW5ndGggPiAwO1xyXG5cclxuICAgIHRoaXMuaGFzVG9vbGJhclNlY3Rpb24gPSBpbkZ1bGxNb2RlIHx8IGhhc1Rvb2xiYXJBY3Rpb25zIHx8IGhhc1RvcEJ1dHRvbnM7XHJcbiAgICB0aGlzLmhhc0Zvb3RlclNlY3Rpb24gPSBpbkZ1bGxNb2RlIHx8IHRoaXMub3B0aW9uLnBhZ2luZztcclxuICAgIHRoaXMuaGFzUGFnZVNpemVDaG9vc2VyID0gdGhpcy5vcHRpb24ucGFnaW5nO1xyXG4gICAgaWYgKHRoaXMub3B0aW9uLmhpZGVDaGVja2JveENvbHVtbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLmhpZGVDaGVja2JveENvbHVtbiA9ICFoYXNUb29sYmFyQWN0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLnJlcXVlc3QpIHtcclxuICAgICAgdGhpcy5vcHRpb24ucmVxdWVzdCA9IHtcclxuICAgICAgICBwYWdlSW5kZXg6IDAsXHJcbiAgICAgICAgcGFnZVNpemU6IHRoaXMuZGVmYXVsdFBhZ2VTaXplXHJcbiAgICAgIH07XHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWZhdWx0UGFnZVNpemUpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplID0gdGhpcy5vcHRpb24uZGVmYXVsdFBhZ2VTaXplO1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2VhcmNoQXN5bmMoKS5zdWJzY3JpYmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZSkge1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLmRlZmF1bHRQYWdlU2l6ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlYXJjaEFzeW5jKCkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FsbGJhY2soKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybiBvZih0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvcHkoaXRlbTogYW55LCByZWZyZXNoOiBib29sZWFuID0gdHJ1ZSwgZXhlY3V0ZT86IChpdGVtOiBhbnkpID0+IHZvaWQsIGNhbGxiYWNrPzogKGNvcHlJdGVtOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pdGVtcykgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgdmFyIGNvcHlJdGVtID0gdGhpcy5kYXRhU2VydmljZS5jbG9uZUl0ZW0oaXRlbSk7XHJcbiAgICBpZiAoY29weUl0ZW0uaWQpIGNvcHlJdGVtLmlkID0gdGhpcy5kYXRhU2VydmljZS5uZXdHdWlkKCk7XHJcbiAgICBpZiAoZXhlY3V0ZSkge1xyXG4gICAgICBleGVjdXRlKGNvcHlJdGVtKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbi5sb2NhbERhdGEpIHtcclxuICAgICAgdGhpcy5sb2NhbERhdGEucHVzaChjb3B5SXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLml0ZW1zLnB1c2goY29weUl0ZW0pO1xyXG4gICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhjb3B5SXRlbSk7XHJcbiAgICBpZiAocmVmcmVzaCA9PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQXN5bmModHJ1ZSkuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhwb3J0VG9FeGNlbChmaWxlTmFtZT86IHN0cmluZywgY2FsbGJhY2s/OiAoKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMgfHwgdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG4gICAgdmFyIHJlcXVlc3QgPSB0aGlzLmJ1aWxkUmVxdWVzdCgwLCB0cnVlKTtcclxuICAgIHJlcXVlc3QucGFnZVNpemUgPSA5OTk5OTk5O1xyXG4gICAgbGV0IHNlYXJjaCA9IHRoaXMub3B0aW9uLmxvY2FsRGF0YSA/IChyZXEpID0+IHsgcmV0dXJuIHRoaXMuc2VhcmNoTG9jYWxJdGVtcyhyZXEpOyB9IDogKHJlcSkgPT4geyByZXR1cm4gdGhpcy5vcHRpb24uc2VydmljZVByb3ZpZGVyLnNlYXJjaEFzeW5jKHJlcSkgfTtcclxuICAgIGlmIChzZWFyY2gpIHtcclxuICAgICAgdmFyIGRhdGEgPSBbXTtcclxuICAgICAgc2VhcmNoKHJlcXVlc3QpLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXNwb25zZS5pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICB2YXIgZXhwb3J0ZWRJdGVtID0ge307XHJcbiAgICAgICAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbi52YWx1ZVJlZikge1xyXG4gICAgICAgICAgICAgIGV4cG9ydGVkSXRlbVtjb2x1bW4udGl0bGUoKV0gPSBpdGVtW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkYXRhLnB1c2goZXhwb3J0ZWRJdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmV4Y2VsRXhwb3J0ZXJTZXJ2aWNlLmV4cG9ydERhdGEoZGF0YSwgbmV3IElneEV4Y2VsRXhwb3J0ZXJPcHRpb25zKGZpbGVOYW1lID8gZmlsZU5hbWUgOiBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpKSk7XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyByZXNldENoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnByZXZpb3VzSXRlbXMgPSBbXTtcclxuICAgIHRoaXMuY2hhbmdlZFJvd3MgPSBbXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjaGFuZ2VFZGl0b3IodmFsdWU6IHN0cmluZywgaXRlbTogYW55LCBmaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyLCByZWY/OiBhbnksIHZhbGlkYXRpb25PcHRpb24/OiBWYWxpZGF0aW9uT3B0aW9uLCBjYWxsYmFjaz86IChpdGVtOiBhbnksIGZpZWxkOiBzdHJpbmcpID0+IGFueSk6IHZvaWQge1xyXG4gICAgdmFyIHZhbCA9IHRoaXMuZGF0YVNlcnZpY2UucmVtb3ZlSFRNTCh2YWx1ZSk7XHJcbiAgICBpdGVtW2ZpZWxkXSA9IHZhbDtcclxuICAgIHRoaXMuYWNjZXB0SW5saW5lRWRpdChpdGVtLCBmaWVsZCwgaW5kZXgsIHJlZiwgdmFsaWRhdGlvbk9wdGlvbiwgY2FsbGJhY2ssIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhY2NlcHRJbmxpbmVFZGl0KGl0ZW06IGFueSwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlciwgcmVmPzogYW55LCB2YWxpZGF0aW9uT3B0aW9uPzogVmFsaWRhdGlvbk9wdGlvbiwgY2FsbGJhY2s/OiAoaXRlbTogYW55LCBmaWVsZDogc3RyaW5nKSA9PiBhbnksIGF1dG9DbG9zZTogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGlmICghdmFsaWRhdGlvbk9wdGlvbikge1xyXG4gICAgICBpZiAoYXV0b0Nsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKGl0ZW0sIGZpZWxkKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9O1xyXG4gICAgdmFyIGVsZW1lbnQgPSByZWYuZ2V0RWxlbWVudCgpO1xyXG4gICAgdmFsaWRhdGlvbk9wdGlvbi5pdGVtUmVmID0gaXRlbTtcclxuICAgIGlmICghdmFsaWRhdGlvbk9wdGlvbi52YWx1ZVJlc29sdmVyKSB7XHJcbiAgICAgIHZhbGlkYXRpb25PcHRpb24udmFsdWVSZXNvbHZlciA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1bZmllbGRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnZhbGlkYXRlRWxlbWVudEFzeW5jKGVsZW1lbnQsIHZhbGlkYXRpb25PcHRpb24pLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKCFyZXNwb25zZSB8fCByZXNwb25zZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHZhciBjdXJyZW50SXRlbSA9IHRoaXMuY2hhbmdlZFJvd3MuZmluZChzID0+IHMuY3VycmVudEl0ZW0uaWQgPT0gaXRlbS5pZCk7XHJcbiAgICAgICAgdmFyIHByZXZpb3VzSXRlbSA9IHRoaXMucHJldmlvdXNJdGVtcy5maW5kKHMgPT4gcy5pZCA9PSBpdGVtLmlkKTtcclxuICAgICAgICBpZiAoIWN1cnJlbnRJdGVtKSB7XHJcbiAgICAgICAgICBpZiAoaXRlbVtmaWVsZF0gIT0gcHJldmlvdXNJdGVtW2ZpZWxkXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWRSb3dzLnB1c2gobmV3IENoYW5nZWRSb3coe1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRJdGVtOiB0aGlzLmRhdGFTZXJ2aWNlLmNsb25lSXRlbShpdGVtKSxcclxuICAgICAgICAgICAgICBvbGRJdGVtOiBwcmV2aW91c0l0ZW0sXHJcbiAgICAgICAgICAgICAgY2VsbHM6IFtcclxuICAgICAgICAgICAgICAgIG5ldyBDaGFuZ2VkQ2VsbCh7XHJcbiAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgY3VycmVudFZhbHVlOiBpdGVtW2ZpZWxkXSxcclxuICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IHByZXZpb3VzSXRlbVtmaWVsZF1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBjdXJyZW50RmllbGQgPSBjdXJyZW50SXRlbS5jZWxscy5maW5kKHMgPT4gcy5maWVsZCA9PSBmaWVsZCk7XHJcbiAgICAgICAgICBpZiAoIWN1cnJlbnRGaWVsZCkge1xyXG4gICAgICAgICAgICBjdXJyZW50SXRlbS5jZWxscy5wdXNoKG5ldyBDaGFuZ2VkQ2VsbCh7XHJcbiAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxyXG4gICAgICAgICAgICAgIGN1cnJlbnRWYWx1ZTogaXRlbVtmaWVsZF0sXHJcbiAgICAgICAgICAgICAgb2xkVmFsdWU6IHByZXZpb3VzSXRlbVtmaWVsZF1cclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW1bZmllbGRdICE9IG51bGwgJiYgaXRlbVtmaWVsZF0gIT0gdW5kZWZpbmVkICYmIGl0ZW1bZmllbGRdICE9ICcnICYmXHJcbiAgICAgICAgICAgICAgY3VycmVudEZpZWxkLm9sZFZhbHVlICE9IG51bGwgJiYgY3VycmVudEZpZWxkLm9sZFZhbHVlICE9IHVuZGVmaW5lZCAmJiBjdXJyZW50RmllbGQub2xkVmFsdWUgIT0gJycpIHtcclxuICAgICAgICAgICAgICBpZiAoaXRlbVtmaWVsZF0udG9TdHJpbmcoKSAhPSBjdXJyZW50RmllbGQub2xkVmFsdWUudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEZpZWxkLmN1cnJlbnRWYWx1ZSA9IGl0ZW1bZmllbGRdO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2VsbEluZGV4ID0gY3VycmVudEl0ZW0uY2VsbHMuZmluZEluZGV4KHMgPT4gcy5maWVsZCA9PSBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50SXRlbS5jZWxscy5zcGxpY2UoY2VsbEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SXRlbS5jZWxscy5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICB2YXIgY3VycmVudEl0ZW1JbmRleCA9IHRoaXMuY2hhbmdlZFJvd3MuZmluZEluZGV4KHMgPT4gcy5jdXJyZW50SXRlbS5pZCA9PSBpdGVtLmlkKTtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VkUm93cy5zcGxpY2UoY3VycmVudEl0ZW1JbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGN1cnJlbnRGaWVsZC5jdXJyZW50VmFsdWUgPSBpdGVtW2ZpZWxkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYXV0b0Nsb3NlKSB7XHJcbiAgICAgICAgICB0aGlzLmNsb3NlSW5saW5lRWRpdChmaWVsZCwgaW5kZXgpO1xyXG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjayhpdGVtLCBmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYW5jZWxJbmxpbmVFZGl0KGl0ZW06IGFueSwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5yZXRyaWV2ZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICAgIGlmICghY3VycmVudEl0ZW0pIHJldHVybjtcclxuICAgIGl0ZW1bZmllbGRdID0gY3VycmVudEl0ZW0uaXRlbVtmaWVsZF07XHJcbiAgICB0aGlzLmNsb3NlSW5saW5lRWRpdChmaWVsZCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsb3NlSW5saW5lRWRpdChmaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB2YXIgaXRlbUluZGV4ID0gdGhpcy5lZGl0dGVkRmllbGRzLmZpbmRJbmRleChzID0+IHMuZmllbGQgPT0gZmllbGQgJiYgcy5pbmRleCA9PSBpbmRleCk7XHJcbiAgICBpZiAoaXRlbUluZGV4ID4gLTEpIHRoaXMuZWRpdHRlZEZpZWxkcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlZGl0SW5saW5lKGl0ZW06IGFueSwgZmllbGQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCFpdGVtKSByZXR1cm47XHJcbiAgICBpZiAodGhpcy5wcmV2aW91c0l0ZW1zLmZpbmRJbmRleChzID0+IHMuaWQgPT0gaXRlbS5pZCkgPT0gLTEpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c0l0ZW1zLnB1c2godGhpcy5kYXRhU2VydmljZS5jbG9uZUl0ZW0oaXRlbSkpO1xyXG4gICAgfVxyXG4gICAgdmFyIGN1cnJlbnRJdGVtID0gdGhpcy5yZXRyaWV2ZUlubGluZUVkaXQoZmllbGQsIGluZGV4KTtcclxuICAgIGlmICghY3VycmVudEl0ZW0pIHtcclxuICAgICAgdGhpcy5lZGl0dGVkRmllbGRzLnB1c2goe1xyXG4gICAgICAgIGl0ZW06IHRoaXMuZGF0YVNlcnZpY2UuY2xvbmVJdGVtKGl0ZW0pLFxyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICBmaWVsZDogZmllbGRcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50SXRlbS5pdGVtID0gdGhpcy5kYXRhU2VydmljZS5jbG9uZUl0ZW0oaXRlbSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbGlkYXRpb25TZXJ2aWNlLnVwZGF0ZUFzeW5jKG51bGwsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGhhc0lubGluZUVkaXQoaXRlbTogYW55LCBmaWVsZDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uIHx8IHRoaXMub3B0aW9uLmlubGluZUVkaXQgIT0gdHJ1ZSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIGNvbHVtbiA9IHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLmZpbmQocyA9PiBzLnZhbHVlUmVmKCkgPT0gZmllbGQpO1xyXG4gICAgaWYgKCFjb2x1bW4gfHwgY29sdW1uLmlubGluZUVkaXQgPT0gZmFsc2UpIHJldHVybiBmYWxzZTtcclxuICAgIGlmICghaXRlbSB8fCAhdGhpcy5lZGl0dGVkRmllbGRzIHx8IHRoaXMuZWRpdHRlZEZpZWxkcy5sZW5ndGggPT0gMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuICg8RWRpdHRlZEZpZWxkW10+dGhpcy5lZGl0dGVkRmllbGRzKS5maW5kSW5kZXgocyA9PiBzLmZpZWxkID09IGZpZWxkICYmIHMuaW5kZXggPT0gaW5kZXgpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmV0cmlldmVJbmxpbmVFZGl0KGZpZWxkOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBFZGl0dGVkRmllbGQge1xyXG4gICAgaWYgKCF0aGlzLmVkaXR0ZWRGaWVsZHMgfHwgdGhpcy5lZGl0dGVkRmllbGRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiAoPEVkaXR0ZWRGaWVsZFtdPnRoaXMuZWRpdHRlZEZpZWxkcykuZmluZChzID0+IHMuZmllbGQgPT0gZmllbGQgJiYgcy5pbmRleCA9PSBpbmRleCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVzZXRGaWx0ZXJzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWx0ZXIgPSB7fTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgdGhpcy5zZWxlY3RlZEFsbCA9IGZhbHNlO1xyXG4gICAgdGhpcy5maWx0ZXJTZWN0aW9uVG9nZ2xlID0gZmFsc2U7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSBbXTtcclxuICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gMDtcclxuICAgIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplKSB7XHJcbiAgICAgIHRoaXMucGFnZVNpemUgPSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IHRoaXMuZGVmYXVsdFBhZ2VTaXplO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZSA9IHRoaXMucGFnZVNpemU7XHJcbiAgICB0aGlzLnNlYXJjaEFzeW5jKCkuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNob3dSZXNldCA9IGZhbHNlO1xyXG4gICAgdGhpcy5yZXF1ZXN0ID0ge307XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VG9vbGJhckFjdGlvbnMoc3RhbmRhcmQ6IGJvb2xlYW4pOiBUYWJsZUFjdGlvbltdIHtcclxuICAgIGxldCBhY3Rpb25zOiBUYWJsZUFjdGlvbltdID0gW107XHJcbiAgICBpZiAodGhpcy50b29sYmFyQWN0aW9ucykge1xyXG4gICAgICB0aGlzLnRvb2xiYXJBY3Rpb25zLmZvckVhY2goKGFjdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoIXN0YW5kYXJkKSB7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5vcHRpb24udG90YWxUb29sYmFySXRlbSkge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5vcHRpb24udG90YWxUb29sYmFySXRlbSkge1xyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjdGlvbnM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2hhbmdlUGFnZVNpemUoKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplID0gdGhpcy5wYWdlU2l6ZTtcclxuICAgIHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4ID0gMDtcclxuICAgIHRoaXMuc2VhcmNoQXN5bmMoKS5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5ka2VLZXlwcmVzcygkZXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICgkZXZlbnQgJiYgJGV2ZW50LndoaWNoID09IDEzKSB7XHJcbiAgICAgIHRoaXMuc2VhcmNoQXN5bmMoKS5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBnb3RvKCRldmVudDogYW55LCBibHVyPzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCRldmVudC53aGljaCA9PSAxMyB8fCBibHVyID09IHRydWUpIHtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9ICRldmVudC50YXJnZXQudmFsdWUgLSAxO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IDApIHRoaXMuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA+PSB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHRoaXMudG90YWxQYWdlcy5sZW5ndGggLSAxO1xyXG4gICAgICB9XHJcbiAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSB0aGlzLmN1cnJlbnRQYWdlICsgMTtcclxuICAgICAgdGhpcy5jaGFuZ2VQYWdlJC5uZXh0KHRoaXMuY3VycmVudFBhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCRldmVudC53aGljaCA8IDQ4IHx8ICRldmVudC53aGljaCA+IDU3KSAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVGaWx0ZXJTZWN0aW9uKCkge1xyXG4gICAgdGhpcy5maWx0ZXJTZWN0aW9uVG9nZ2xlID0gIXRoaXMuZmlsdGVyU2VjdGlvblRvZ2dsZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzaG93U29ydGVyKGNvbHVtbjogVGFibGVDb2x1bW4sIGRpcmVjdGlvbjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gY29sdW1uLmRpcmVjdGlvbiA9PT0gZGlyZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvZ2dsZVJvd0RldGFpbChpdGVtOiBhbnkpIHtcclxuICAgIGl0ZW0udG9nZ2xlID0gIWl0ZW0udG9nZ2xlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNvcnRBc3luYyhjb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XHJcbiAgICBpZiAoIWNvbHVtbi52YWx1ZVJlZikgcmV0dXJuO1xyXG4gICAgdGhpcy5yZXNldFNvcnRBc3luYyhjb2x1bW4pO1xyXG4gICAgaWYgKGNvbHVtbiAmJiBjb2x1bW4uYWxsb3dTb3J0ICE9IGZhbHNlKSB7XHJcbiAgICAgIGlmICghY29sdW1uLmRpcmVjdGlvbikge1xyXG4gICAgICAgIGNvbHVtbi5kaXJlY3Rpb24gPSBUYWJsZUNvbnN0YW50LkRpcmVjdGlvbi5BU0M7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29sdW1uLmRpcmVjdGlvbiA9IGNvbHVtbi5kaXJlY3Rpb24gPT0gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uQVNDID8gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uREVTQyA6IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkFTQztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5vcmRlckJ5ID0gdGhpcy5kYXRhU2VydmljZS50b1Bhc2NhbENhc2UoY29sdW1uLnZhbHVlUmVmKCkpO1xyXG4gICAgdGhpcy5kaXJlY3Rpb24gPSBjb2x1bW4uZGlyZWN0aW9uO1xyXG4gICAgdGhpcy5zZWFyY2hBc3luYyhudWxsLCBudWxsLCBmYWxzZSkuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0QWxsKHNlbGVjdGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBzZWxlY3RlZCA/IFsuLi50aGlzLml0ZW1zXSA6IFtdO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkQWxsID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uc2VsZWN0ZWRDaGFuZ2UpIHRoaXMub3B0aW9uLnNlbGVjdGVkQ2hhbmdlKG51bGwpO1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2VsZWN0SXRlbShpdGVtOiBhbnkpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHguaWQpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdJdGVtSW5kZXggPSBzZWxlY3RlZElkcy5pbmRleE9mKGl0ZW0uaWQpO1xyXG4gICAgaWYgKGV4aXN0aW5nSXRlbUluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnNwbGljZShleGlzdGluZ0l0ZW1JbmRleCwgMSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIGlmICghdGhpcy5vcHRpb24ubXVsdGlwbGUpIHtcclxuICAgICAgY29uc3QgY3VycmVudEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXMuZmluZChzID0+IHMuaWQgPT0gaXRlbS5pZCk7XHJcbiAgICAgIGlmIChjdXJyZW50SXRlbSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtjdXJyZW50SXRlbV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2VsZWN0ZWRDaGFuZ2UuZW1pdChpdGVtKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5zZWxlY3RlZENoYW5nZSkgdGhpcy5vcHRpb24uc2VsZWN0ZWRDaGFuZ2UoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNSb3dTZWxlY3RlZChpdGVtOiBhbnkpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSWRzID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcCh4ID0+IHguaWQpO1xyXG4gICAgcmV0dXJuIHNlbGVjdGVkSWRzLmluZGV4T2YoaXRlbS5pZCkgPj0gMDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYXNBbnlBY3Rpb24oaXRlbT86IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgYWxpdmVBY3Rpb25zID0gdGhpcy5pbmxpbmVBY3Rpb25zLmZpbHRlcih4ID0+ICF4LmhpZGUgfHwgIXguaGlkZShpdGVtKSk7XHJcbiAgICByZXR1cm4gYWxpdmVBY3Rpb25zLmxlbmd0aCA+IDA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZXhlY3V0ZUFjdGlvbkFzeW5jKGFjdGlvbjogVGFibGVBY3Rpb24sIGl0ZW0/OiBhbnksICRldmVudD86IGFueSwgaW5kZXg/OiBudW1iZXIsIGxvYWRlZENhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50ID8gJGV2ZW50LnRhcmdldCA6IG51bGw7XHJcbiAgICAgIGFjdGlvbi5leGVjdXRlQXN5bmMoaXRlbSwgdGFyZ2V0LCB0aGlzLCBpbmRleCwgbG9hZGVkQ2FsbGJhY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzQWN0aXZlKGl0ZW06IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGggPT09IDApIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kKHMgPT4gcy5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICByZXR1cm4gY3VycmVudEl0ZW0gJiYgY3VycmVudEl0ZW0uY2hlY2tlZFJvdztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDdXJyZW50SW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5vcHRpb24ucmVxdWVzdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlSW5kZXggKiB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VTaXplICsgaW5kZXggKyAxO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIC0xO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldERyb3Bkb3duRGlzcGxheVRleHQoY29sdW1uOiBUYWJsZUNvbHVtbiwgaXRlbTogYW55KSB7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBpdGVtW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgIGlmICghdmFsdWVzKSByZXR1cm4gJyc7XHJcblxyXG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IDxzdHJpbmdbXT52YWx1ZXMuZmlsdGVyKHggPT4geCkubWFwKHggPT4geFtjb2x1bW4uZHJvcGRvd25Db25maWd1cmF0aW9uLmJpbmRMYWJlbF0pO1xyXG4gICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJywgJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWVzW2NvbHVtbi5kcm9wZG93bkNvbmZpZ3VyYXRpb24uYmluZExhYmVsXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQYWdlcyhuOiBudW1iZXIpOiBudW1iZXJbXSB7XHJcbiAgICBsZXQgcGFnZXMgPSBbXTtcclxuICAgIGlmICh0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIDwgbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgcGFnZXMucHVzaChpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcGFnZXM7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jdXJyZW50UGFnZSA8IG4pIHtcclxuICAgICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHBhZ2VzLnB1c2goaSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5mbG9vcihuIC8gMik7XHJcbiAgICAgIGNvbnN0IG1heCA9IHRoaXMuY3VycmVudFBhZ2UgKyBjb3VudCA+PSB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoID8gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCAtIDEgOiB0aGlzLmN1cnJlbnRQYWdlICsgY291bnQ7XHJcbiAgICAgIGZvciAobGV0IGkgPSBtYXg7IGkgPj0gdGhpcy5jdXJyZW50UGFnZSAtIGNvdW50OyBpLS0pIHtcclxuICAgICAgICBwYWdlcy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcmVsb2FkKGtlZXBTZWxlY3RlZEl0ZW1zOiBib29sZWFuID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLnNlYXJjaEFzeW5jKG51bGwsIG51bGwsIGtlZXBTZWxlY3RlZEl0ZW1zKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBmaWx0ZXJCeUNvbHVtbihzdGF0dXM6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChzdGF0dXMpIHtcclxuICAgICAgdGhpcy5zZWFyY2goZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHNlYXJjaChhZHZhbmNlZEZpbHRlcj86IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2VhcmNoQXN5bmMoYWR2YW5jZWRGaWx0ZXIpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHRyYWNrUmVjb3JkcyhyZWNvcmQ6IGFueSkge1xyXG4gICAgcmV0dXJuIHJlY29yZCA/IHJlY29yZC5pZCA6IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZWFyY2hBc3luYyhhZHZhbmNlZEZpbHRlcj86IGJvb2xlYW4sIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBrZWVwU2VsZWN0ZWRJdGVtczogYm9vbGVhbiA9IHRydWUpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICBjb25zdCByZXF1ZXN0ID0gdGhpcy5idWlsZFJlcXVlc3QoY3VycmVudFBhZ2UsIGFkdmFuY2VkRmlsdGVyKTtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5sb2NhbERhdGEpIHtcclxuICAgICAgdGhpcy5vcHRpb24ubG9jYWxEYXRhKCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5sb2NhbERhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoTG9jYWxJdGVtcyhyZXF1ZXN0KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJpbmRSZXN1bHREYXRhKHJlc3BvbnNlLCBrZWVwU2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5zZXJ2aWNlUHJvdmlkZXIgfHwgIXRoaXMub3B0aW9uLnNlcnZpY2VQcm92aWRlci5zZWFyY2hBc3luYykgdGhyb3cgbmV3IEVycm9yKCchdGhpcy5vcHRpb24uc2VydmljZVByb3ZpZGVyLnNlYXJjaEFzeW5jJyk7XHJcbiAgICAgIHRoaXMub3B0aW9uLnNlcnZpY2VQcm92aWRlci5zZWFyY2hBc3luYyhyZXF1ZXN0KS5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5iaW5kUmVzdWx0RGF0YShyZXNwb25zZSwga2VlcFNlbGVjdGVkSXRlbXMpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvZih0cnVlKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tlZEFsbFBhZ2VJdGVtcygpOiBib29sZWFuIHtcclxuICAgIGlmICghdGhpcy5zZWxlY3RlZEl0ZW1zIHx8ICF0aGlzLml0ZW1zIHx8IHRoaXMuaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5maW5kKHMgPT4gcy5pZCA9PT0gaXRlbS5pZCk7XHJcbiAgICAgIGlmICghY3VycmVudEl0ZW0pIHtcclxuICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjaGVjaztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gY2hlY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldERlZmF1bHRPcmRlcihyZXF1ZXN0OiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbi5kZWZhdWx0T3JkZXJCeSkgdGhpcy5vcmRlckJ5ID0gdGhpcy5vcHRpb24uZGVmYXVsdE9yZGVyQnk7XHJcbiAgICBpZiAodGhpcy5vcHRpb24uZGVmYXV0T3JkZXJEaXJlY3Rpb24pIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5vcHRpb24uZGVmYXV0T3JkZXJEaXJlY3Rpb247XHJcbiAgICByZXF1ZXN0Lm9yZGVyQnkgPSB0aGlzLm9yZGVyQnk7XHJcbiAgICByZXF1ZXN0LmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xyXG4gICAgaWYgKCF0aGlzLm9yZGVyQnkpIHtcclxuICAgICAgdGhpcy5vcmRlckJ5ID0gXCJJZFwiO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IFRhYmxlQ29uc3RhbnQuRGlyZWN0aW9uLkFTQztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRGaWx0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIHRoaXMucmVxdWVzdFtrZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgIHRoaXMuZmlsdGVyW2tleV0gPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm9wdGlvbiAmJiB0aGlzLm9wdGlvbi5yZXF1ZXN0KSB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJldHJpZXZlQWR2YW5jZWRGaWx0ZXJzKGFkdmFuY2VkRmlsdGVyOiBib29sZWFuLCByZXF1ZXN0OiBhbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuZmlsdGVyQ29sdW1ucy5mb3JFYWNoKChjb2x1bW46IFRhYmxlQ29sdW1uKSA9PiB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZmlsdGVyW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgICAgaWYgKHRoaXMub3B0aW9uLmhhc0NvbHVtbkZpbHRlcikgdmFsdWUgPSB0aGlzLmxvY2FsRmlsdGVyW2NvbHVtbi52YWx1ZVJlZigpXTtcclxuICAgICAgaWYgKHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHZhbHVlID0gJyc7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFkdmFuY2VkRmlsdGVyID09IHRydWUpIHtcclxuICAgICAgICBpZiAoY29sdW1uLnR5cGUgJiYgKGNvbHVtbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ2RhdGUnIHx8IGNvbHVtbi50eXBlLnRvTG93ZXJDYXNlKCkgPT0gJ2RhdGV0aW1lJyB8fCBjb2x1bW4udHlwZS50b0xvd2VyQ2FzZSgpID09ICd0aW1lJykpIHtcclxuICAgICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZSAhPSAnJykge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRldGltZVZhbHVlcyA9IDxEYXRlW10+dmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChkYXRldGltZVZhbHVlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RbY29sdW1uLnZhbHVlUmVmKCkgKyAnRnJvbSddID0gdGhpcy5jb252ZXJ0RGF0ZXRpbWUoZGF0ZXRpbWVWYWx1ZXNbMF0sICdGcm9tJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0ZXRpbWVWYWx1ZXMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpICsgJ0Zyb20nXSA9IHRoaXMuY29udmVydERhdGV0aW1lKGRhdGV0aW1lVmFsdWVzWzBdLCAnRnJvbScpO1xyXG4gICAgICAgICAgICAgIHJlcXVlc3RbY29sdW1uLnZhbHVlUmVmKCkgKyAnVG8nXSA9IHRoaXMuY29udmVydERhdGV0aW1lKGRhdGV0aW1lVmFsdWVzWzFdLCAnVG8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXF1ZXN0W2NvbHVtbi52YWx1ZVJlZigpXSA9IHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYnVpbGRSZXF1ZXN0KGN1cnJlbnRQYWdlPzogbnVtYmVyLCBhZHZhbmNlZEZpbHRlcj86IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgdGhpcy5wcmV2aW91c1JlcXVlc3QgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnJlcXVlc3QpO1xyXG4gICAgbGV0IHNlYXJjaFRleHQgPSB0aGlzLmZpbHRlci5zZWFyY2hUZXh0O1xyXG4gICAgdGhpcy50ZXh0U2VhcmNoZWQgPSB0aGlzLmZpbHRlci5zZWFyY2hUZXh0O1xyXG4gICAgaWYgKHNlYXJjaFRleHQgPT0gdW5kZWZpbmVkIHx8IHNlYXJjaFRleHQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgc2VhcmNoVGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXF1ZXN0LnBhZ2VTaXplID0gdGhpcy5vcHRpb24ucmVxdWVzdC5wYWdlU2l6ZTtcclxuICAgIGlmICghdGhpcy5vcHRpb24ucGFnaW5nKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdC5wYWdlU2l6ZSA9IDk5OTk5OTtcclxuICAgICAgdGhpcy5wYWdlU2l6ZSA9IDk5OTk5OTtcclxuICAgIH1cclxuICAgIHRoaXMucmVxdWVzdC5zZWFyY2hUZXh0ID0gc2VhcmNoVGV4dDtcclxuICAgIHRoaXMucmVxdWVzdC5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgIHRoaXMucmVxdWVzdC5vcmRlckJ5ID0gdGhpcy5vcmRlckJ5O1xyXG4gICAgaWYgKCF0aGlzLm9yZGVyQnkpIHRoaXMuc2V0RGVmYXVsdE9yZGVyKHRoaXMucmVxdWVzdCk7XHJcbiAgICB0aGlzLnJldHJpZXZlQWR2YW5jZWRGaWx0ZXJzKGFkdmFuY2VkRmlsdGVyLCB0aGlzLnJlcXVlc3QpO1xyXG4gICAgdGhpcy5yZXF1ZXN0LnBhZ2VJbmRleCA9IHRoaXMub3B0aW9uLnJlcXVlc3QucGFnZUluZGV4O1xyXG4gICAgaWYgKGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgIHRoaXMucmVxdWVzdC5wYWdlSW5kZXggPSBjdXJyZW50UGFnZTtcclxuICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hhbmdlcyA9IHRoaXMuZGF0YVNlcnZpY2UuY29tcGFyZU9iamVjdHModGhpcy5wcmV2aW91c1JlcXVlc3QsIHRoaXMucmVxdWVzdCk7XHJcbiAgICBjb25zdCBpc0NoYW5nZWQgPSBjaGFuZ2VzLmZpbHRlcih4ID0+IFsncGFnZUluZGV4JywgJ3BhZ2VTaXplJ10uaW5kZXhPZih4LnByb3BlcnR5TmFtZSkgPCAwKS5sZW5ndGggPiAwO1xyXG4gICAgaWYgKGlzQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5yZXF1ZXN0LnBhZ2VJbmRleCA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdC5wYWdlSW5kZXggPSAwO1xyXG4gICAgICB0aGlzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm9wdGlvbi5oYXNDb2x1bW5GaWx0ZXIpIHtcclxuICAgICAgY29uc3QgZmllbGRzID0gT2JqZWN0LmtleXModGhpcy5sb2NhbEZpbHRlcik7XHJcbiAgICAgIGlmIChmaWVsZHMpIHtcclxuICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcclxuICAgICAgICAgIGlmICghdGhpcy5vcHRpb24uc2VhcmNoRmllbGRzKSB0aGlzLm9wdGlvbi5zZWFyY2hGaWVsZHMgPSBbXTtcclxuICAgICAgICAgIGlmICghdGhpcy5vcHRpb24uc2VhcmNoRmllbGRzLmZpbmQocyA9PiBzID09IGZpZWxkKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbi5zZWFyY2hGaWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3RbZmllbGRdID0gdGhpcy5sb2NhbEZpbHRlcltmaWVsZF07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnJlcXVlc3Q7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnREYXRldGltZShkdDogRGF0ZSwgdHlwZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICghZHQpIHJldHVybiAnJztcclxuICAgIGxldCBjb252ZXJ0ZWREYXRldGltZSA9IG5ldyBEYXRlKGR0KTtcclxuICAgIGxldCBkYXlzID0gY29udmVydGVkRGF0ZXRpbWUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoZGF5cy5sZW5ndGggPCAyKSBkYXlzID0gJzAnICsgZGF5cztcclxuICAgIGxldCBtb250aHMgPSAoY29udmVydGVkRGF0ZXRpbWUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICBpZiAobW9udGhzLmxlbmd0aCA8IDIpIG1vbnRocyA9ICcwJyArIG1vbnRocztcclxuICAgIGxldCBob3VycyA9IGNvbnZlcnRlZERhdGV0aW1lLmdldEhvdXJzKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChob3Vycy5sZW5ndGggPCAyKSBob3VycyA9ICcwJyArIGhvdXJzO1xyXG4gICAgbGV0IG1pbnV0ZXMgPSBjb252ZXJ0ZWREYXRldGltZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKTtcclxuICAgIGlmIChtaW51dGVzLmxlbmd0aCA8IDIpIG1pbnV0ZXMgPSAnMCcgKyBtaW51dGVzO1xyXG4gICAgY29uc3QgeWVhciA9IGNvbnZlcnRlZERhdGV0aW1lLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLm9wdGlvbi5kYXRldGltZUZvcm1hdC5mb3JtYXQpIHtcclxuICAgICAgY2FzZSAnZGQvTU0veXl5eSc6XHJcbiAgICAgICAgcmV0dXJuIGRheXMgKyAnLycgKyBtb250aHMgKyAnLycgKyB5ZWFyICsgKHR5cGUgPT0gJ0Zyb20nID8gJyAwMDowMCcgOiAnIDIzOjU5Jyk7XHJcbiAgICAgIGNhc2UgJ2RkL01NL3l5eXkgSEg6bW0nOlxyXG4gICAgICAgIHJldHVybiBkYXlzICsgJy8nICsgbW9udGhzICsgJy8nICsgeWVhciArICcgJyArIGhvdXJzICsgJzonICsgbWludXRlcztcclxuICAgICAgY2FzZSAnTU0vZGQveXl5eSc6XHJcbiAgICAgICAgcmV0dXJuIG1vbnRocyArICcvJyArIGRheXMgKyAnLycgKyB5ZWFyICsgKHR5cGUgPT0gJ0Zyb20nID8gJyAwMDowMCcgOiAnIDIzOjU5Jyk7XHJcbiAgICAgIGNhc2UgJ01NL2RkL3l5eXkgSEg6bW0nOlxyXG4gICAgICAgIHJldHVybiBtb250aHMgKyAnLycgKyBkYXlzICsgJy8nICsgeWVhciArICcgJyArIGhvdXJzICsgJzonICsgbWludXRlcztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2VhcmNoTG9jYWxJdGVtcyhyZXF1ZXN0OiBhbnkpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgbGV0IHJlc3VsdDogYW55W10gPSB0aGlzLmxvY2FsRGF0YTtcclxuICAgIGNvbnN0IG9yZGVyQnkgPSB0aGlzLmRhdGFTZXJ2aWNlLmdldEZpZWxkKHJlcXVlc3Qub3JkZXJCeSwgdHJ1ZSk7XHJcbiAgICBpZiAocmVxdWVzdC5kaXJlY3Rpb24gPT0gVGFibGVDb25zdGFudC5EaXJlY3Rpb24uQVNDKSB7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uc29ydCkge1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYVtvcmRlckJ5XSA+IGJbb3JkZXJCeV0gPyAxIDogYVtvcmRlckJ5XSA9PT0gYltvcmRlckJ5XSA/IDAgOiAtMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB0aGlzLm9wdGlvbi5zb3J0KGEsIGIsIG9yZGVyQnkpKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5zb3J0KSB7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoKGI6IGFueSwgYTogYW55KSA9PiBhW29yZGVyQnldID4gYltvcmRlckJ5XSA/IDEgOiBhW29yZGVyQnldID09PSBiW29yZGVyQnldID8gMCA6IC0xKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgoYjogYW55LCBhOiBhbnkpID0+IHRoaXMub3B0aW9uLnNvcnQoYSwgYiwgb3JkZXJCeSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGl0ZW1zOiBhbnlbXSA9IFtdO1xyXG4gICAgaWYgKHJlcXVlc3QucGFnZUluZGV4ID49IDAgJiYgcmVxdWVzdC5wYWdlU2l6ZSA+IDApIHtcclxuICAgICAgY29uc3QgbG9jYWxSZXN1bHQgPSBbXTtcclxuICAgICAgaWYgKChyZXF1ZXN0LnNlYXJjaFRleHQpICYmIHRoaXMub3B0aW9uLnNlYXJjaEZpZWxkcyAmJiB0aGlzLm9wdGlvbi5zZWFyY2hGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9uLnNlYXJjaEZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzdWx0LmZpbHRlcihzID0+IHRoaXMuZnV6enlzZWFyY2gocmVxdWVzdC5zZWFyY2hUZXh0LCBzW2ZpZWxkXSkpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICBpZiAobG9jYWxSZXN1bHQuZmluZEluZGV4KHMgPT4gcy5pZCA9PSBpdGVtLmlkKSA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxSZXN1bHQucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdCA9IGxvY2FsUmVzdWx0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZmlsdGVyID0ge307XHJcbiAgICAgIHRoaXMucmV0cmlldmVBZHZhbmNlZEZpbHRlcnModHJ1ZSwgZmlsdGVyKTtcclxuICAgICAgaWYgKHRoaXMuZmlsdGVyQ29sdW1ucykge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29sdW1ucy5mb3JFYWNoKChjb2x1bW4pID0+IHtcclxuICAgICAgICAgIHZhciB2YWx1ZSA9IGZpbHRlcltjb2x1bW4udmFsdWVSZWYoKV07XHJcbiAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihzID0+IHRoaXMuZnV6enlzZWFyY2godmFsdWUsIHNbY29sdW1uLnZhbHVlUmVmKCldKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGl0ZW1zID0gcmVzdWx0LmZpbHRlcihzID0+IChyZXN1bHQuaW5kZXhPZihzKSA+PSByZXF1ZXN0LnBhZ2VJbmRleCAqIHJlcXVlc3QucGFnZVNpemUpICYmIChyZXN1bHQuaW5kZXhPZihzKSA8IChyZXF1ZXN0LnBhZ2VJbmRleCArIDEpICogcmVxdWVzdC5wYWdlU2l6ZSkpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzcG9uc2U6IFRhYmxlUmVzcG9uc2U8YW55PiA9IHtcclxuICAgICAgaXRlbXM6IGl0ZW1zLFxyXG4gICAgICB0b3RhbFJlY29yZHM6IHJlc3VsdC5sZW5ndGhcclxuICAgIH07XHJcbiAgICByZXR1cm4gb2YocmVzcG9uc2UpLnBpcGUoZGVsYXkoMjUwKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnZlcnRVQ29kZShjOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCdhw6PhuqHDoMOh4bqjxIPEg+G6teG6t+G6seG6s8Oi4bqr4bqt4bqn4bql4bqpJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnYSc7XHJcbiAgICBpZiAoJ2TEkScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ2QnO1xyXG4gICAgaWYgKCdvw7Xhu43DssOz4buPw7Thu5fhu5nhu5Phu5HGoeG7oeG7o+G7neG7m+G7nycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ28nO1xyXG4gICAgaWYgKCd1xanhu6XDucO64bunxrDhu6/hu7Hhu6vhu6nhu63GsOG7r+G7seG7q+G7qeG7rScuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ3UnO1xyXG4gICAgaWYgKCdpxKnhu4vDrMOt4buJJy5pbmRleE9mKGMpID4gLTEpIHJldHVybiAnaSc7XHJcbiAgICBpZiAoJ3nhu7nhu7Xhu7PDveG7tycuaW5kZXhPZihjKSA+IC0xKSByZXR1cm4gJ3knO1xyXG4gICAgaWYgKCdl4bq94bq5w6jDqeG6vcOq4buF4buH4buBw6rhu4MnLmluZGV4T2YoYykgPiAtMSkgcmV0dXJuICdlJztcclxuICAgIHJldHVybiBjO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmdXp6eXNlYXJjaChuZWVkbGU6IGFueSwgaGF5c3RhY2s6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCFuZWVkbGUgfHwgIWhheXN0YWNrKSByZXR1cm4gZmFsc2U7XHJcbiAgICBjb25zdCBoYXlzdGFja0xDID0gdGhpcy5yZW1vdmVBbGxTcGFjZXMoaGF5c3RhY2sudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnN0IG5lZWRsZUxDID0gdGhpcy5yZW1vdmVBbGxTcGFjZXMobmVlZGxlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBjb25zdCBobGVuID0gaGF5c3RhY2sudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICBjb25zdCBubGVuID0gbmVlZGxlTEMudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICBpZiAobmxlbiA+IGhsZW4pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKG5sZW4gPT09IGhsZW4pIHtcclxuICAgICAgcmV0dXJuIG5lZWRsZUxDID09PSBoYXlzdGFja0xDO1xyXG4gICAgfVxyXG4gICAgb3V0ZXI6IGZvciAobGV0IGkgPSAwLCBqID0gMDsgaSA8IG5sZW47IGkrKykge1xyXG4gICAgICBjb25zdCBuY2ggPSB0aGlzLmNvbnZlcnRVQ29kZShuZWVkbGVMQ1tpXSk7XHJcbiAgICAgIHdoaWxlIChqIDwgaGxlbikge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnZlcnRVQ29kZShoYXlzdGFja0xDW2orK10pID09PSBuY2gpIHtcclxuICAgICAgICAgIGNvbnRpbnVlIG91dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlQWxsU3BhY2VzKHN0cj86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXN0cikgcmV0dXJuICcnO1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBiaW5kUmVzdWx0RGF0YShyZXNwb25zZTogVGFibGVSZXNwb25zZTxhbnk+LCBrZWVwU2VsZWN0ZWRJdGVtczogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aW9uU2VydmljZS5leGVjdXRlQXN5bmMoKCkgPT4ge1xyXG4gICAgICB0aGlzLml0ZW1zID0gcmVzcG9uc2UuaXRlbXM7XHJcbiAgICAgIHRoaXMudG90YWxSZWNvcmRzID0gcmVzcG9uc2UudG90YWxSZWNvcmRzO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZVBhZ2VzKCk7XHJcblxyXG4gICAgICBpZiAoIWtlZXBTZWxlY3RlZEl0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRBbGwgPSB0aGlzLmNoZWNrZWRBbGxQYWdlSXRlbXMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlID4gdGhpcy50b3RhbFBhZ2VzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICB0aGlzLnJlY3Vyc2l2ZUNvdW50ZXIrKztcclxuICAgICAgICBpZiAodGhpcy5yZWN1cnNpdmVDb3VudGVyIDwgMykge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hBc3luYyhudWxsLCB0aGlzLnRvdGFsUGFnZXMubGVuZ3RoIC0gMSkuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVBhZ2VzKCk6IHZvaWQge1xyXG4gICAgbGV0IHBhZ2VzID0gTWF0aC5mbG9vcih0aGlzLnRvdGFsUmVjb3JkcyAvIHRoaXMucGFnZVNpemUpO1xyXG4gICAgaWYgKHBhZ2VzIDw9IDApIHtcclxuICAgICAgcGFnZXMgPSAxO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudG90YWxSZWNvcmRzICUgdGhpcy5wYWdlU2l6ZSA+IDApIHtcclxuICAgICAgcGFnZXMgKz0gMTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnRvdGFsUmVjb3JkcyA8IHRoaXMucGFnZVNpemUpIHtcclxuICAgICAgcGFnZXMgPSAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhZ2VzOyBpKyspIHtcclxuICAgICAgdGhpcy50b3RhbFBhZ2VzLnB1c2goaSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0U29ydEFzeW5jKGN1cnJlbnRDb2x1bW46IFRhYmxlQ29sdW1uKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucyA9IHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICBpZiAoY29sdW1uLmlkICE9PSBjdXJyZW50Q29sdW1uLmlkKSBjb2x1bW4uZGlyZWN0aW9uID0gdW5kZWZpbmVkO1xyXG4gICAgICByZXR1cm4gY29sdW1uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRUYWJsZVRhYmxlVGV4dHMoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0KSB7XHJcbiAgICAgIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0ID0gbmV3IFRhYmxlVGV4dCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dCkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQucGxhY2Vob2xkZXJTZWFyY2ggPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LlBsYWNlaG9sZGVyU2VhcmNoO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0blNlYXJjaCkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuU2VhcmNoID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5TZWFyY2g7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuUmVzZXQpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0blJlc2V0ID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5CdG5SZXNldDtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hY3Rpb24pIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFjdGlvbiA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWN0aW9uO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LnNlbGVjdFBhZ2VTaXplKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5zZWxlY3RQYWdlU2l6ZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuU2VsZWN0UGFnZVNpemU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZGVsZXRlVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmRlbGV0ZVRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZWxldGVUaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5BY2NlcHRUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYnRuQWNjZXB0VGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkJ0bkFjY2VwdFRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmJ0bkNhbmNlbFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5idG5DYW5jZWxUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQnRuQ2FuY2VsVGl0bGVcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5maWx0ZXJUaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZmlsdGVyVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkZpbHRlclRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFwcGx5RmlsdGVyKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hcHBseUZpbHRlciA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQXBwbHlGaWx0ZXI7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuZGV0YWlsVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmRldGFpbFRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5EZXRhaWxUaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5wYWdlVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LnBhZ2VUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuUGFnZVRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFkdmFuY2VkU2VhcmNoVGl0bGUpIHRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFkdmFuY2VkU2VhcmNoVGl0bGUgPSBUYWJsZUNvbnN0YW50LkRpc3BsYXlUZXh0LkFkdmFuY2VkU2VhcmNoVGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWR2YW5jZWRCdG5UaXRsZSkgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWR2YW5jZWRCdG5UaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWR2YW5jZWRCdG5UaXRsZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hZHZhbmNlZEJ0bkNhbmNlbFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hZHZhbmNlZEJ0bkNhbmNlbFRpdGxlID0gVGFibGVDb25zdGFudC5EaXNwbGF5VGV4dC5BZHZhbmNlZEJ0bkNhbmNlbFRpdGxlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLmRpc3BsYXlUZXh0LmFsbFRpdGxlKSB0aGlzLm9wdGlvbi5kaXNwbGF5VGV4dC5hbGxUaXRsZSA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWxsVGl0bGU7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWN0aW9uSWNvbikgdGhpcy5vcHRpb24uZGlzcGxheVRleHQuYWN0aW9uSWNvbiA9IFRhYmxlQ29uc3RhbnQuRGlzcGxheVRleHQuQWN0aW9uSWNvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdFRhYmxlVGFibGVNZXNzYWdlcygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbi5tZXNzYWdlID0gbmV3IFRhYmxlTWVzc2FnZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLm5vdEZvdW5kTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5ub3RGb3VuZE1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTm90Rm91bmRNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UuZm91bmRNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLmZvdW5kTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Gb3VuZE1lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5pbnZhbGlkRm9ybWF0TWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5pbnZhbGlkRm9ybWF0TWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5JbnZhbGlkRm9ybWF0TWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLnNlbGVjdGVkSXRlbXNNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLnNlbGVjdGVkSXRlbXNNZXNzYWdlID0gVGFibGVDb25zdGFudC5NZXNzYWdlLlNlbGVjdGVkSXRlbXNNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UuY29uZmlybVNlbGVjdEFsbFJlY29yZHNNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLmNvbmZpcm1TZWxlY3RBbGxSZWNvcmRzTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Db25maXJtU2VsZWN0QWxsUmVjb3Jkc01lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5jb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZSkgdGhpcy5vcHRpb24ubWVzc2FnZS5jb25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5Db25maXJtQ2xlYXJBbGxSZWNvcmRzTWVzc2FnZTtcclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbi5tZXNzYWdlLmRlbGV0ZU1lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2UuZGVsZXRlTWVzc2FnZSA9IFRhYmxlQ29uc3RhbnQuTWVzc2FnZS5EZWxldGVNZXNzYWdlO1xyXG4gICAgICBpZiAoIXRoaXMub3B0aW9uLm1lc3NhZ2UubG9hZGluZ01lc3NhZ2UpIHRoaXMub3B0aW9uLm1lc3NhZ2UubG9hZGluZ01lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuTG9hZGluZ01lc3NhZ2U7XHJcbiAgICAgIGlmICghdGhpcy5vcHRpb24ubWVzc2FnZS5yZWZNZXNzYWdlKSB0aGlzLm9wdGlvbi5tZXNzYWdlLnJlZk1lc3NhZ2UgPSBUYWJsZUNvbnN0YW50Lk1lc3NhZ2UuUmVmTWVzc2FnZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdE1haW5Db2x1bW5zKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm9wdGlvbi5tYWluQ29sdW1ucykge1xyXG4gICAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucyA9IFtdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgIGlmICghY29sdW1uLnRleHRBbGlnbikgY29sdW1uLnRleHRBbGlnbiA9IFRhYmxlQ29uc3RhbnQuVGV4dEFsaWduLkxlZnQ7XHJcbiAgICAgIGlmIChjb2x1bW4gJiYgIWNvbHVtbi5pZCkge1xyXG4gICAgICAgIGNvbHVtbi5pZCA9IHRoaXMuZGF0YVNlcnZpY2UubmV3R3VpZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChjb2x1bW4uYWxsb3dGaWx0ZXIpIHtcclxuICAgICAgICBpZiAoY29sdW1uLnR5cGUgPT09IFRhYmxlQ29sdW1uVHlwZS5Ecm9wZG93bikge1xyXG4gICAgICAgICAgaWYgKCFjb2x1bW4uZHJvcGRvd25Db25maWd1cmF0aW9uKSB0aHJvdyBuZXcgRXJyb3IoJyFjb2x1bW4uZHJvcGRvd25Db25maWd1cmF0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsdGVyQ29sdW1ucy5wdXNoKGNvbHVtbik7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJbY29sdW1uLnZhbHVlUmVmKCldID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucyA9IHRoaXMub3B0aW9uLm1haW5Db2x1bW5zLnNvcnQoKGE6IFRhYmxlQ29sdW1uLCBiOiBUYWJsZUNvbHVtbikgPT4gYS5vcmRlciA+IGIub3JkZXIgPyAxIDogYS5vcmRlciA9PT0gYi5vcmRlciA/IDAgOiAtMSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXRWYWxpZGF0aW9ucygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbiAmJiB0aGlzLm9wdGlvbi5tYWluQ29sdW1ucykge1xyXG4gICAgICB2YXIgdmFsaWRhdGlvbk9wdGlvbnMgPSBbXTtcclxuICAgICAgdGhpcy5vcHRpb24ubWFpbkNvbHVtbnMuZm9yRWFjaCgoY29sdW1uKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbi52YWxpZGF0aW9uT3B0aW9uKSB7XHJcbiAgICAgICAgICBjb2x1bW4udmFsaWRhdGlvbk9wdGlvbi5keW5hbWljID0gdHJ1ZTtcclxuICAgICAgICAgIGlmICghY29sdW1uLnZhbGlkYXRpb25PcHRpb24udmFsaWRhdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgY29sdW1uLnZhbGlkYXRpb25PcHRpb24udmFsaWRhdGlvbk5hbWUgPSBjb2x1bW4udmFsdWVSZWYoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZhbGlkYXRpb25PcHRpb25zLnB1c2goY29sdW1uLnZhbGlkYXRpb25PcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGlmICh2YWxpZGF0aW9uT3B0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRvciA9IG5ldyBDbGllbnRWYWxpZGF0b3Ioe1xyXG4gICAgICAgICAgZm9ybVJlZjogdGhpcy53cmFwcGVyLFxyXG4gICAgICAgICAgb3B0aW9uczogdmFsaWRhdGlvbk9wdGlvbnMsXHJcbiAgICAgICAgICBwYXlsb2FkUmVmOiAoKSA9PiB0aGlzLml0ZW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uU2VydmljZS5pbml0KHsgdmFsaWRhdG9yIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZ2lzdGVyRXZlbnRzKCkge1xyXG4gICAgaWYgKHRoaXMuZ290b1JlZikge1xyXG4gICAgICB0aGlzLl9yZW5kZXIubGlzdGVuKHRoaXMuZ290b1JlZi5uYXRpdmVFbGVtZW50LCAna2V5ZG93bicsICgkZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9ICRldmVudC53aGljaDtcclxuICAgICAgICBsZXQgbWF4ID0gJzk5OTk5OTknO1xyXG4gICAgICAgIGlmICh0aGlzLmdvdG9SZWYubmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzWydtYXgnXSkge1xyXG4gICAgICAgICAgbWF4ID0gdGhpcy5nb3RvUmVmLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlc1snbWF4J10udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgodmFsdWUgPj0gNDggJiYgdmFsdWUgPD0gNTcpIHx8ICh2YWx1ZSA+PSA5NiAmJiB2YWx1ZSA8PSAxMDUpIHx8IHZhbHVlID09IDggfHwgdmFsdWUgPT0gMTMpIHtcclxuICAgICAgICAgIGlmICh2YWx1ZSA+PSA0OCAmJiB2YWx1ZSA8PSA1Nykge1xyXG4gICAgICAgICAgICBpZiAocGFyc2VJbnQobWF4KSA8IHBhcnNlSW50KCRldmVudC50YXJnZXQudmFsdWUgKyAocGFyc2VJbnQodmFsdWUpIC0gNDgpKSkge1xyXG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICRldmVudC50YXJnZXQudmFsdWUgPSBtYXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPj0gOTYgJiYgdmFsdWUgPD0gMTA1KSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJzZUludChtYXgpIDwgcGFyc2VJbnQoJGV2ZW50LnRhcmdldC52YWx1ZSArIChwYXJzZUludCh2YWx1ZSkgLSA5NikpKSB7XHJcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZSA9IG1heDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==