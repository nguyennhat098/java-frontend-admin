export class Permission {
    actionName:string;
    view:string;
    add:string;
    edit:string;
    delete:string;
    nameDb:string;
    constructor(init?: Partial<Permission>) {
        Object.assign(this, init);
    }
}