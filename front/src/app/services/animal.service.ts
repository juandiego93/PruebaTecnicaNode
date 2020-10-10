import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  serverUrl = `${environment.serverUrl}`

  constructor(private http: HttpClient) { }

  getAllAnimals(idCorral): Promise<any> {
    return this.http.post(`${this.serverUrl}/getAnimals`, idCorral).toPromise();
  }

  getAllAnimalsByIdCorral(idCorral): Promise<any> {
    return this.http.post(`${this.serverUrl}/getAllAnimalsFromACorral`, idCorral).toPromise();
  }

  createNewAnimal(model): Promise<any> {
    return this.http.post(`${this.serverUrl}/createAnimal`, model).toPromise();
  }

}