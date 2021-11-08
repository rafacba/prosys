import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {
  
  @ViewChild('txtP') 
  txtP!:ElementRef;

  @Input()
  leyenda: string = 'Leyenda';
  @Input()
  porcentaje: number = 50;

  @Output()
  cambioValor: EventEmitter<number>= new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  progreso (value:number) {

    (this.porcentaje>=100) ? this.porcentaje=95 : null ;
    (this.porcentaje<=0) ? this.porcentaje=5: null; 
    this.porcentaje +=value;
    this.cambioValor.emit(this.porcentaje);
    this.txtP.nativeElement.focus();
  }

  onChange( newValue: number) {
    //let elemHTML:any = document.getElementsByName('porcentaje')[0];
    
    (newValue>100)?newValue=100:null;
    (newValue<0)?newValue=0:null;
    this.porcentaje=newValue;
    this.txtP.nativeElement.value = this.porcentaje;
    this.cambioValor.emit(this.porcentaje);
  }

}
