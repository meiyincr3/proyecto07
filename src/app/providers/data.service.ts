import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private URL: string = 'https://resthci-production.up.railway.app/rest/webhci/findAll/json';

  constructor(private http: HttpClient) { }
  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }

}
