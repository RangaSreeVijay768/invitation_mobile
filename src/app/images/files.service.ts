import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
// import {Auth} from '@aws-amplify/auth';
import {CoreHttpClient} from '@core/http/http.module';
import {AuthService} from '@core/auth.service';
import {CommonsService} from '@core/commons.service';
import {environment} from '@environment/environment';
import {catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService extends RestService {

  // copied from
  // https://devdactic.com/ionic-4-image-upload-storage/
  authService: AuthService;

  constructor(httpClient: CoreHttpClient, authService: AuthService) {
    super(httpClient);
    this.authService = authService;
    // this.filesSecureService = super.getService(ImagesConstants.FILES_SECURED_ENDPOINT);
  }

  getFileUploader(file_url: string, file_name: string) {

    console.log(file_url, file_name);
    const blob = this.convertBase64ToBlob(file_url);
    var file = this.blobToFile(blob, file_name, CommonsService.getCurrentTimeAsMoment().toDate());
    // TODO: check trustAllHosts in production
    const form = new FormData();

    form.append('file', file, file_name);

    return this.httpClient.post(environment.apiUrls.filesUrl, form)
        .pipe(catchError((error: any) => Observable.throw(error.json())));

  }


  public convertBase64ToBlob(base64: string) {
    const info = this.getInfoFromBase64(base64);
    const sliceSize = 512;
    const byteCharacters = window.atob(info.rawBase64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      byteArrays.push(new Uint8Array(byteNumbers));
    }

    return new Blob(byteArrays, {type: info.mime});
  }

  private getInfoFromBase64(base64: string) {
    const meta = base64.split(',')[0];
    const rawBase64 = base64.split(',')[1].replace(/\s/g, '');
    const mime = /:([^;]+);/.exec(meta)[1];
    const extension = /\/([^;]+);/.exec(meta)[1];

    return {
      mime,
      extension,
      meta,
      rawBase64
    };
  }

  blobToFile(theBlob: Blob, fileName: string, dateGenerated: Date): File {
    const b: any = theBlob;
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    b.lastModifiedDate = dateGenerated;
    b.name = fileName;

    //Cast to a File() type
    return <File>b;
  }
}





