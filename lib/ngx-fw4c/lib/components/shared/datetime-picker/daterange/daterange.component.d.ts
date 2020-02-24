import { OnDestroy, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
export declare class DaterangePickerComponent implements OnDestroy {
    protected dataService: DataService;
    title: string;
    model: Date[];
    disabled: boolean;
    minValue: Date;
    maxValue: Date;
    placeholder: string;
    startView: 'month' | 'years' | 'multi-years';
    pickerType: 'calendar' | 'timer' | 'both';
    pickerMode: 'popup' | 'dialog';
    selectMode: 'range' | 'single' | 'rangeFrom' | 'rangeTo';
    validationName: string;
    validationScope: string;
    emitNullOnDestroy: boolean;
    modelChange: EventEmitter<Date[]>;
    id: string;
    constructor(dataService: DataService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getElement(): any;
}
