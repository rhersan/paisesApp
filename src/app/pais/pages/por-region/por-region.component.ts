import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button{
      margin-right: 9x;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones    : string[] = [
    'Africa','Americas','Asia','Europe','Oceania'
  ];
  regionActiva: string = '';
  responseHttp: boolean= false;
  countries   : Country[] = [];

  constructor(private paisService: PaisService) { 
  }

  ngOnInit(): void {
  }

  getClass(region: string){
    return (region == this.regionActiva) 
            ? 'btn btn-primary mr-1 mb-1' 
            : 'btn btn-outline-primary mr-1 mb-1';
  }

  activarRegion (region: string){
    if(region==this.regionActiva){return};

    this.regionActiva = region;
    this.countries = [];
    this.paisService.getByRegion(region)
      .subscribe(pais => this.countries = pais);

  }
}
