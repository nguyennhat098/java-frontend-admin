export class ActionItem<TViewModel>{
    item?: TViewModel;
    errorMessage?: string;
    constructor(init?: Partial<ActionItem<TViewModel>>) {
        Object.assign(this, init);
    }
}

export class ActionResponse<TViewModel>{
    status?: boolean;
    successItems?: ActionItem<TViewModel>[];
    failureItems?: ActionItem<TViewModel>[];
    constructor(init?: Partial<ActionResponse<TViewModel>>) {
        Object.assign(this, init);
    }
}
