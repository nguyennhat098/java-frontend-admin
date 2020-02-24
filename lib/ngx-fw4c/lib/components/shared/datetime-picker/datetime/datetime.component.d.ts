import { OnDestroy, EventEmitter, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
export declare class DatetimePickerComponent implements OnDestroy, OnInit {
    protected dataService: DataService;
    title: string;
    model: Date;
    disabled: boolean;
    minValue: Date;
    maxValue: Date;
    placeholder: string;
    startView: 'month' | 'years' | 'multi-years';
    pickerType: 'calendar' | 'timer' | 'both';
    pickerMode: 'popup' | 'dialog';
    validationName: string;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<Date>;
    id: string;
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getElement(): any;
}
