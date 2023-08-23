import { Injectable } from '@angular/core';

//Importación del HttpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProfesorService {
  private URL: string = 'http://localhost:3000/rest/profesor/findAll/json';

  constructor(private http: HttpClient) { }
  //Método con la petición HTTP
  getResponse() {
    return this.http.get(this.URL);
  }

}
