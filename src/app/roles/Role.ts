export class Roles {
    id?: number;
    roleName?:string;
    description?:string;
    constructor(init?: Partial<Roles>) {
        Object.assign(this, init);
    }
}
