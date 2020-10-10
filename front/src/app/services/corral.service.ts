import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CorralService {

  serverUrl = `${environment.serverUrl}`

  constructor(private http: HttpClient) { }

  getAllCorrales(): Promise<any> {
    return this.http.get(`${this.serverUrl}/getAllCorrales`).toPromise()
  }

  getAllCorralesByID(): Promise<any> {
    return this.http.get(`${this.serverUrl}/getCorralById`).toPromise()
  }

  createNewCorral(model): Promise<any> {
    return this.http.post(`${this.serverUrl}/createCorral`, model).toPromise()
  }

  removeCorral(id): Promise<any> {
    return this.http.get(`${this.serverUrl}/removeCorral/${id}` ).toPromise()
  }

}
