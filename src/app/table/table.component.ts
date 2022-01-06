import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  public countriesList:Country[] = [];
  first = 0;
  rows = 5;

  constructor(private countryService: CountryService){}
  

  ngOnInit(){
    // this.countriesList = this.countryService.getCountries();
    this.countryService.getCountriesHttp().subscribe((resp)=>{
      this.countriesList = resp
    })
  }

  next() {
    this.first = this.first + this.rows;
    }

    prev() {
        this.first = this.first - this.rows;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.countriesList ? this.first === (this.countriesList.length - this.rows): true;
    }

    isFirstPage(): boolean {
        return this.countriesList ? this.first === 0 : true;
    }
}
