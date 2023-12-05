import {Injectable} from '@angular/core';

import {CoreHttpClient} from '@core/http/http.module';
import {RestService} from '@core/http/rest.service';
import GetBlastListsByUserAccount = BlastsRequests.GetBlastListsByUserAccount;
import GetBlastListItemsByBlastList = BlastsRequests.GetBlastListItemsByBlastList;
import GetBlastList = BlastsRequests.GetBlastList;
import GetAllBlastPackages = BlastsRequests.GetAllBlastPackages;
import CreateBlastList = BlastsRequests.CreateBlastList;
import CreateEventBlast = BlastsRequests.CreateEventBlast;
import StartEventBlast = BlastsRequests.StartEventBlast;
import GetEventBlastByBlastList = BlastsRequests.GetEventBlastByBlastList;
import AddEventBlastRecipients = BlastsRequests.AddEventBlastRecipients;
import CreateBlastListItem = BlastsRequests.CreateBlastListItem;
import CopyBlastList = BlastsRequests.CopyBlastList;
import {BlastsConstants} from './blasts.constants';
import {BlastsRequests} from './blasts.models';
import CreateBlastListAndBlastListItemsByUserContacts = BlastsRequests.CreateBlastListAndBlastListItemsByUserContacts;

@Injectable({
  providedIn: 'root'
})
export class BlastsService extends RestService {

  constructor(httpClient: CoreHttpClient) {
    super(httpClient);
    this.end_point = BlastsConstants.BLASTS_ENDPOINT;
    this.secured_end_point = BlastsConstants.BLASTS_SECURED_ENDPOINT;
  }

  getBlastListsByUserAccount(request: GetBlastListsByUserAccount.Request) {
    return this.httpClient.get(`${this.getEndPoint()}/blastlists/useraccount`, {params: this.serialize(request)});
  }

  getBlastListItemsByBlastList(request: GetBlastListItemsByBlastList.Request) {
    return this.httpClient.get(`${this.getEndPoint()}/blastlistitems/blastlist`, {params: this.serialize(request)});
  }

  getBlastList(request: GetBlastList.Request) {
    return this.httpClient.get(`${this.getEndPoint()}/blastlists/${request.blast_list_id}`);
  }

  getAllBlastPackages(request: GetAllBlastPackages.Request) {
    return this.httpClient.get(`${this.getEndPoint()}/blastpackage/all`, {params: this.serialize(request)});
  }

  createBlastList(request: CreateBlastList.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/blastlists`, this.serialize(request));
  }

  createEventBlast(request: CreateEventBlast.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/eventblasts`, this.serialize(request));
  }

  getEventBlastByBlastList(request: GetEventBlastByBlastList.Request) {
    return this.httpClient.get(`${this.getEndPoint()}/eventblasts/blastlist`, {params: this.serialize(request)});
  }

  startEventBlast(request: StartEventBlast.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/eventblasts/start`, this.serialize(request));
  }

  addEventBlastRecipients(request: AddEventBlastRecipients.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/eventblasts/addblastrecipients`, this.serialize(request));
  }

  createBlastListItem(request: CreateBlastListItem.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/blastlistitems`, this.serialize(request));
  }

  copyBlastList(request: CopyBlastList.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/blastlist/copyblastlist`, this.serialize(request));
  }

  createBlastListAndBlastListItemsByUserContacts(request: CreateBlastListAndBlastListItemsByUserContacts.Request) {
    return this.httpClient.post(`${this.getSecuredEndPoint()}/blastlistitems/usercontacts`, this.serialize(request));
  }
}
