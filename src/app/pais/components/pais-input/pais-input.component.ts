import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  // Para recibir el placeholder dinamico y msotrar en el input []
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject<string>();

  termino: string = '';

    // Se dispara unica vez cuando el componente es creado.
  ngOnInit(): void {
    this.debouncer
      .pipe(
        debounceTime(300)
      )
      .subscribe((valor)=>{
        // agregar en el componente html por pais: onDebounce
        this.onDebounce.emit(valor);
    });
  }
  // Para el buscador
  buscar(){
    // Para recibir haer que agregar en el componente por pais html 
    // onEnter
    this.onEnter.emit( this.termino );
  }
  // Keypress
  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
  
}
