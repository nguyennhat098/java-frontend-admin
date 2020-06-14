import { Actions } from './Actions';
import { Roles } from './Role';
export class RoleActions {
    id?: number;
    actionId:Actions;
    roleId:Roles;
    constructor(init?: Partial<RoleActions>) {
        Object.assign(this, init);
    }
}