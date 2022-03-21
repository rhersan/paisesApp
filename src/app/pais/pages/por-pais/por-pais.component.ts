import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
      li{
        cursor: pointer;
      }

  `]
})
export class PorPaisComponent {

  termino     : string = '';
  responseHttp: boolean= false;  
  statusSugerencias: boolean = false;
  countries   : Country[] = [];

  paisesSugeridos   : Country[] = [];


  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    if(!(termino.trim().length > 0)){return;}
    this.responseHttp = false;
    this.statusSugerencias = false;
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
    if(!(termino.trim().length > 0)){return;}
    this.responseHttp = false;
    this.termino = termino;
    this.statusSugerencias = true;
    
    // TODO: crear sugerencias
    this.paisService.searchCounty(termino)
      .subscribe(
        (paises)=>{
          this.paisesSugeridos = paises.splice(0,5);
        },
        (err) => {
          this.paisesSugeridos = [];
        }
      );
    
  }

  buscarSugerido(termino:string){
    this.buscar(termino);
  }
}
