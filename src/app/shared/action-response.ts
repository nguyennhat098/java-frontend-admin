import { ActionItem } from './action-item';


export class ActionResponse<TViewModel>{
    status?: boolean;
    successItems?: ActionItem<TViewModel>[];
    failureItems?: ActionItem<TViewModel>[];
    constructor(init?: Partial<ActionResponse<TViewModel>>) {
        Object.assign(this, init);
    }
}
