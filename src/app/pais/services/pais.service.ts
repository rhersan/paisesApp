import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlApi: string = 'https://restcountries.com/v3.1'
  
  get httpParams(){
    return new HttpParams().set('fields','name,capital,cca2,flags,population,cca2');
  }

  

  constructor(private http: HttpClient) { }

  searchCounty( txtSearch: string):Observable<Country[]>{

    const url = `${ this.urlApi }/name/${txtSearch}`;
    
    return this.http.get<Country[]>( url,{params:this.httpParams});
  }

  getCapital(txtSeach: string):Observable<Country[]>{
    const url = `${ this.urlApi }/capital/${txtSeach}`;    
    return this.http.get<Country[]>(url, {params: this.httpParams});
  }

  getCountryById(id: string):Observable<Country[]>{
    const url = `${this.urlApi}/alpha/${id}`
    return this.http.get<Country[]>(url);
  }

  getByRegion(txtTermino:string):Observable<Country[]>{
  
    const url = `${this.urlApi}/region/${txtTermino}`;
    console.log(url);
    console.log(this.httpParams);
    return this.http.get<Country[]>(url,{params: this.httpParams})
            .pipe(
              tap(console.log)
            )
  }

}
