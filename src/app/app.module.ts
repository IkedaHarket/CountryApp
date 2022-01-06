import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }      from '@angular/forms';

import { TableModule }      from 'primeng/table';
import { ButtonModule }     from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';
import { CountryService }   from './country.service';
import { TableComponent }   from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    FormsModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
