import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap,tap } from 'rxjs/operators';




import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  // propiedad puede ser null
  pais     !:Country;

  constructor(
    private activetedRoute: ActivatedRoute,
    private paisService: PaisService
  )  {}

  ngOnInit(): void {

    this.activetedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getCountryById( id ) ),
        tap( console.log ) // resp => console.log
      )
      .subscribe((pais)=> this.pais = pais[0]);

    // this.activetedRoute.params
    //   .subscribe( ({id}) => {
    //     this.paisService.getCountryById(id)
    //       .subscribe((pais)=>{
    //         //this.country = pais;
    //         console.log(pais);
    //       },
    //       (err) => {
    //         //this.country = {};
    //       }
    //       );
    //   });

  }

}
