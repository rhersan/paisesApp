import { Component, Input } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent  {
  //Al crear un input, para usar en el componente html, es lo siguiente
  // <app-pais-tabla [countries]="countries"></app-pais-tabla>
  @Input() countries: Country[] = [];

  constructor(private paisService: PaisService) { }

}
