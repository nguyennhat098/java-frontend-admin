export class Actions {
    actionName:string;
    description:string;
    id:number;
    constructor(init?: Partial<Actions>) {
        Object.assign(this, init);
    }
}