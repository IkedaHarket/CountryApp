import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public countriesList:Country[] = [];

  constructor(
    private countryService: CountryService
    ){}
  

  ngOnInit(){
    //Se subscribe al getCountriesHttp() y llena el arreglo countriesList
    this.countryService.getCountriesHttp().subscribe((resp)=>{
      this.countriesList = resp
    })
  }
}
