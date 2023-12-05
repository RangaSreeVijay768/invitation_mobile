import {UsersRequests} from '@users/users.models';
import GetUserAccount = UsersRequests.GetUserAccount;
import {UsersService} from '@users/users.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {AuthService} from '@core/auth.service';

@Injectable()
export class GetUserAccountResolver implements Resolve<Observable<GetUserAccount.Response>> {

  constructor(protected usersService: UsersService, protected authService: AuthService,) {
  }

  resolve(route: ActivatedRouteSnapshot) {
    const request = new GetUserAccount.Request();
    request.id = this.authService.loggedAccount.user_account_id;
    return this.usersService.getUserAccount(request).pipe(CommonsService.deserializeMap(GetUserAccount.Response));
  }
}
