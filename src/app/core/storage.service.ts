import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) {
  }

  set(key, value): Promise<any> {
    return this.storage.create().then(() => {
      // console.log('ready for set');
      return this.storage.set(key, value);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  get(key): Promise<any> {
    return this.storage.create().then(() => {
      // console.log('ready for get',this.storage.driver);
      return this.storage.get(key);
    }).catch(error => {
      return Promise.reject(error);
    });
  }


  remove(key): Promise<any> {
    return this.storage.create().then(() => {
      // console.log('ready for remove');
      return this.storage.remove(key);
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  clear(): Promise<void> {
    return this.storage.create().then(() => {
      // console.log('ready for clear');
      return this.storage.clear();
    }).catch(error => {
      return Promise.reject(error);
    });
  }

  forEach(iteratorCallback: (value: any, key: string, iterationNumber: Number) => any): Promise<void> {
    return this.storage.create().then(() => {
      // console.log('ready for foreach', this.storage.driver);
      return this.storage.forEach(iteratorCallback);
    }).catch(error => {
      return Promise.reject(error);
    });

  }

}
