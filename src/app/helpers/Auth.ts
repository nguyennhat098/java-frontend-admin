import { Roles } from './../roles/Role';
export class Auths {
    id?: number;
    userName?:string;
    password?:string;
    role: Roles;
    token:string;
    constructor(init?: Partial<Auths>) {
        Object.assign(this, init);
    }
}