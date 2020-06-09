import { Roles } from './../roles/Role';
// import { Roles } from 'app/roles';

export class Users {
    id?: number;
    userName?:string;
    password?:string;
    role: Roles;
    token:string;
    constructor(init?: Partial<Users>) {
        Object.assign(this, init);
    }
}
