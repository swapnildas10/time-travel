import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient) { }
  apiUrl = 'http://timetravel-api.azurewebsites.net/api/trips';
  getItems() {
    return this.http.get(this.apiUrl);
  }
}
