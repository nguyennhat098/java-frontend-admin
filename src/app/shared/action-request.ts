export class ActionRequest<TViewModel>{
    item?: TViewModel;
    items?: TViewModel[];
    deleteId?: string[];
    systemId?: number[];
    token?: string;
    constructor(init?: Partial<ActionRequest<TViewModel>>) {
        Object.assign(this, init);
    }
}