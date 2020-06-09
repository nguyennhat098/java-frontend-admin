export class ActionItem<TViewModel>{
    item?: TViewModel;
    errorMessage?: string;
    constructor(init?: Partial<ActionItem<TViewModel>>) {
        Object.assign(this, init);
    }
}