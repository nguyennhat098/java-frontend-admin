import { Users } from './../users/user';
export class Orders {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    status: number;
    message: string;
    verifyCode: string;
    userId: Users;
    userName:string;
    statusName:string;
    constructor(init?: Partial<Orders>) {
        Object.assign(this, init);
    }
}