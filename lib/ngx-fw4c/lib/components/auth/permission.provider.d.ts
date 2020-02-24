import { UserViewModel } from './auth.model';
import { AuthenticationService } from './auth.service';
export declare class PermisisonProvider {
    protected authenticationService: AuthenticationService;
    constructor(authenticationService: AuthenticationService);
    hasPermisison(user: UserViewModel, permisisonKey: string, activityKey?: string): boolean;
    private retrieveCurrentPermission;
}
