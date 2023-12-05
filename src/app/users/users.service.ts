import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {UsersConstants} from '@users/users.constants';
import {CoreHttpClient} from '@core/http/http.module';
import {UsersRequests} from '@users/users.models';
import SignIn = UsersRequests.SignIn;
import SignUp = UsersRequests.SignUp;
import {Observable} from 'rxjs';
import StartLogin = UsersRequests.StartLogin;
import VerifyUserAccountVerificationLogin = UsersRequests.VerifyUserAccountVerificationLogin;
import VerifyUserAccountVerification = UsersRequests.VerifyUserAccountVerification;
import UpdateUserAccount = UsersRequests.UpdateUserAccount;
import CreateUserFollow = UsersRequests.CreateUserFollow;
import DeleteUserFollow = UsersRequests.DeleteUserFollow;
import GetUserFollowByUserAccount = UsersRequests.GetUserFollowByUserAccount;
import GetUserFollowByUserAccountAndFollowerAccount = UsersRequests.GetUserFollowByUserAccountAndFollowerAccount;
import GetUserFollowByFollowerAccount = UsersRequests.GetUserFollowByFollowerAccount;
import GetUserContactsByUserAccount = UsersRequests.GetUserContactsByUserAccount;
import GetOrCreateUserAccountAndStartLogin = UsersRequests.GetOrCreateUserAccountAndStartLogin;
import GetAllUserContacts = UsersRequests.GetAllUserContacts;
import GetUserAccount = UsersRequests.GetUserAccount;
import CreateUserContact = UsersRequests.CreateUserContact;
import UpdateUserAccountDetails = UsersRequests.UpdateUserAccountDetails;

@Injectable({
    providedIn: 'root'
})
export class UsersService extends RestService {

    constructor(httpClient: CoreHttpClient) {
        super(httpClient);
        this.end_point = UsersConstants.USERS_ENDPOINT;
        this.secured_end_point = UsersConstants.USERS_SECURED_ENDPOINT;
    }

    signIn(request: SignIn.Request) {
        return this.httpClient.post(`${this.getEndPoint()}/signin`, this.serialize(request));
    }

    signUp(request: SignUp.Request) {
        return this.httpClient.post(`${this.getEndPoint()}/signup`, this.serialize(request));
    }

    verifyUserAccountVerification(request: VerifyUserAccountVerification.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/verifyuseraccountverification`, this.serialize(request));
    }

    startLogin(request: StartLogin.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/startLoing`, this.serialize(request));
    }

    verifyUserAccountVerificationLogin(request: VerifyUserAccountVerificationLogin.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/verifyuseraccountverificationlogin`, this.serialize(request));
    }

    updateUserAccount(request: UpdateUserAccount.Request): Observable<any> {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/${request.user_account_id}`, this.serialize(request));
    }

    createUserFollow(request: CreateUserFollow.Request): Observable<any> {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/userfollow`, this.serialize(request));
    }

    deleteUserFollow(request: DeleteUserFollow.Request): Observable<any> {
        return this.httpClient.delete(`${this.getSecuredEndPoint()}/userfollow/${request.id}`, this.serialize(request));
    }

    getUserFollowByUserAccount(request: GetUserFollowByUserAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/userfollow/useraccount`, {params: this.serialize(request)});
    }

    getUserFollowByUserAccountAndFollowerAccount(request: GetUserFollowByUserAccountAndFollowerAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/userfollow/useraccountandfolloweraccount`,
            {params: this.serialize(request)});
    }

    getUserFollowByFollowerAccount(request: GetUserFollowByFollowerAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/userfollow/followerAccount`, {params: this.serialize(request)});
    }

    getUserContactsByUserAccount(request: GetUserContactsByUserAccount.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/usercontacts/useraccount`, {params: this.serialize(request)});
    }

    getOrCreateUserAccountAndStartLogin(request: GetOrCreateUserAccountAndStartLogin.Request): Observable<any> {
        return this.httpClient.get(`${this.getEndPoint()}/getorcreateuseraccountandstartlogin`, {params: this.serialize(request)});
    }

    getUserAccount(request: GetUserAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getEndPoint()}/${request.id}`, {params: this.serialize(request)});
    }
    getAllUserContacts(request: GetAllUserContacts.Request): Observable<any> {
        return this.httpClient.get(`${this.getEndPoint()}/usercontacts/all`, {params: this.serialize(request)});
    }

    createUserContact(request: CreateUserContact.Request): Observable<any> {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/usercontacts`,
            this.serialize(request));
    }

    updateUserAccountDetails(request: UpdateUserAccountDetails.Request): Observable<any> {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/updateUserAccountDetails`,
            this.serialize(request));
    }

}
