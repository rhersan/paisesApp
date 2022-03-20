import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi: string = 'https://restcountries.com/v3.1'

  

  constructor(private http: HttpClient) { }

  searchCounty( txtSearch: string):Observable<Country[]>{

    const url = `${ this.urlApi }/name/${txtSearch}`;
    
    return this.http.get<Country[]>( url );
  }

  getCapital(txtSeach: string):Observable<Country[]>{
    const url = `${ this.urlApi }/capital/${txtSeach}`;
    return this.http.get<Country[]>(url);
  }

  getCountryById(id: string):Observable<Country[]>{
    const url = `${this.urlApi}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

}
