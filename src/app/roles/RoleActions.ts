export class RoleActions {
    id?: number;
    actionId:number;
    roleId:number;
    constructor(init?: Partial<RoleActions>) {
        Object.assign(this, init);
    }
}