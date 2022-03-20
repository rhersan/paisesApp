import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino     : string = '';
  responseHttp: boolean= false;
  countries   : Country[] = [];


  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.responseHttp = false;
    // se establece el termino que viene en el input
    this.termino = termino;
    this.paisService.searchCounty(termino)
    .subscribe(
      (paises) => {
        this.countries = paises;
        console.log(paises);
      }, 
      (err) => {
        this.responseHttp = true;
        this.countries = [];
      }
    );
  }

  // crear función de sugerencias
  sugerencias(termino:string){
    this.responseHttp = false;
    // TODO: crear sugerencias
    
  }
}
