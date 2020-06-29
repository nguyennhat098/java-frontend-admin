import { Users } from './../users/user';
import { OrderDetail } from './order-detail';
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
    orderDetailsCollection:OrderDetail[];
    constructor(init?: Partial<Orders>) {
        Object.assign(this, init);
    }
}