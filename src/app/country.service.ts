import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Country }    from './country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // URL de la api de dev
  private _url: string = "https://localhost:7250/api/countries";

  private _country: Country[] = []


  constructor(private http: HttpClient) {
    // this.getCountriesApi();
  }

  public getCountries():Country[]{
    return this._country;
  }

  //  getCountriesApi(){
  //     fetch(this._url)
  //     .then(resp => resp.json())
  //     .then(data =>{
  //       this._country.push(...data)
  //     }) 
  //  }

  //Crea un Observable de tipo Country[] con los datos pedidos a la API
  getCountriesHttp(): Observable<Country[]>{
    return this.http.get<Country[]>(this._url)
  }
  
}
