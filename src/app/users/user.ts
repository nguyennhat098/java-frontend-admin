import { Roles } from './../roles/Role';

export class Users {
    id?: number;
    userName?: string;
    password?: string;
    password2?: string;
    roleId?: Roles;
    fullName?: string;
    phone?: string;
    email?: string;
    address?: string;
    status?: boolean;
    ressetPasswordCode?: string;
    image?: string;
    gender?: string;
    roleName?:string;
    constructor(init?: Partial<Users>) {
        Object.assign(this, init);
    }
}
