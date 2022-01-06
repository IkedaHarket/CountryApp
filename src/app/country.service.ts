import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators'

import { Country } from './country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

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
  getCountriesHttp(): Observable<Country[]>{
    return this.http.get<Country[]>(this._url)
  }
  
}
