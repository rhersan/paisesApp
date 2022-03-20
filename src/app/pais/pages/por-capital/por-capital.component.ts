import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino     : string = '';
  responseHttp: boolean= false;
  countries   : Country[] = [];


  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.responseHttp = false;
    // se establece el termino que viene en el input
    this.termino = termino;
    this.paisService.getCapital(termino)
    .subscribe(
      (paises) => {
        this.countries = paises;
      }, 
      (err) => {
        this.responseHttp = true;
        this.countries = [];
      }
    );
  }

}
