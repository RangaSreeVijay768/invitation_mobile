import {Injectable} from '@angular/core';
import {Users} from '@core/core.models';
import {Params} from '@angular/router';
import {StorageService} from '@core/storage.service';
import {CommonsService} from '@core/commons.service';
import UserAccount = Users.UserAccount;
import UserAuthToken = Users.UserAuthToken;


export const SESSION_KEYS = {
    SESSION_USER_ACCOUNT: 'user_account',
    SESSION_USER_AUTH_TOKEN: 'user_auth_token',
    REDIRECT_STATE: 'redirectstate',
};

@Injectable({
    providedIn: 'root'
})
export class AuthStorage {
    MEMORY_KEY_PREFIX = '@RADStorage:';
    dataMemory: any = {};

    syncPromise: Promise<any> | null = null;


    constructor(protected storageService: StorageService) {
    }

    /**
     * This is used to set a specific item in storage
     * @param {string} key - the key for the item
     * @param {object} value - the value
     * @returns {string} value that was set
     */
    setItem(key: any, value: any) {
        this.storageService.set(this.MEMORY_KEY_PREFIX + key, value);
        this.dataMemory[key] = value;
        return this.dataMemory[key];
    }

    /**
     * This is used to get a specific key from storage
     * @param {string} key - the key for the item
     * This is used to clear the storage
     * @returns {string} the data item
     */
    getItem(key: string) {
        return Object.prototype.hasOwnProperty.call(this.dataMemory, key)
            ? this.dataMemory[key]
            : undefined;
    }

    /**
     * This is used to remove an item from storage
     * @param {string} key - the key being set
     * @returns {string} value - value that was deleted
     */
    removeItem(key: string) {
        this.storageService.remove(this.MEMORY_KEY_PREFIX + key);
        return delete this.dataMemory[key];
    }

    /**
     * This is used to clear the storage
     * @returns {string} nothing
     */
    clear() {
        this.dataMemory = {};
        this.storageService.clear();
        return this.dataMemory;
    }

    /**
     * Will sync the MemoryStorage data from AsyncStorage to storageWindow MemoryStorage
     * @returns {void}
     */
    sync() {
        if (!this.syncPromise) {
            this.syncPromise = new Promise<void>((resolve, reject) => {
                this.storageService.forEach((value, key) => {
                    const memoryKey = key.replace(this.MEMORY_KEY_PREFIX, '');
                    this.dataMemory[memoryKey] = value;

                }).then(value => {
                    resolve();
                });
            });
        }
        return this.syncPromise;
    }
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loggedAccount: UserAccount;
    userAuthToken: UserAuthToken;

    redirectState: RedirectState;
    userLoggedIn: boolean = false;


    // constructor() {
    // }
    constructor(protected storageService: StorageService) {
    }

    getAuthToken(): Promise<string> {
        if (this.userAuthToken) {
            return Promise.resolve(this.userAuthToken.user_auth_token);
        }
        return Promise.resolve(undefined);
    }


    async setUserAuthToken(response: UserAuthToken) {
        if (response) {
            this.userAuthToken = response;
            console.log(CommonsService.serialize(response));
            await this.setLoggedAccount(response.user_account);
            return await this.storageService.set(SESSION_KEYS.SESSION_USER_AUTH_TOKEN,
                CommonsService.serialize(response));
        }
    }

    async getUserAuthToken(): Promise<UserAuthToken> {

        return this.storageService.get(SESSION_KEYS.SESSION_USER_AUTH_TOKEN)
            .then((success) => {
                if (success) {
                    return Promise.resolve(CommonsService.deserialize(success, UserAuthToken));
                }
                return Promise.resolve(undefined);
            });
    }

    async getLoggedAccount(): Promise<UserAccount> {
        const user_account = await this.storageService.get(SESSION_KEYS.SESSION_USER_ACCOUNT)
            .then((success) => {
                if (success) {
                    return Promise.resolve(CommonsService.deserialize(success, UserAccount));
                }
                return Promise.resolve(undefined);
            });
        this.loggedAccount = user_account;
        return Promise.resolve(this.loggedAccount);

    }

    async setLoggedAccount(user_account: UserAccount): Promise<void> {
        this.loggedAccount = user_account;
        return await this.storageService.set(SESSION_KEYS.SESSION_USER_ACCOUNT, CommonsService.serialize(user_account));
    }

    // get userAuthToken(): UserAuthToken {
    //     if (this._userAuthToken) {
    //         return CommonsService.deserialize(this._userAuthToken, UserAuthToken);
    //     }
    //     return undefined;
    // }

    async clearAll(): Promise<void> {
        this.redirectState = null;
        this.loggedAccount = null;
        this.userLoggedIn = false;
        await this.setLoggedAccount(null);
        await this.storageService.clear();
        await this.setUserAuthToken(null);
    }


}

export class RedirectState {
    url: string;
    queryParams: Params;


    constructor(url?: string, queryParams?: Params) {
        this.url = url;
        this.queryParams = queryParams;
    }
}
