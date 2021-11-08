import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styles: [
  ]
})
export class PersonalComponent implements OnInit {

  titulo:string = 'Cantidad';
  dato:number = 80;

  constructor() { }

  ngOnInit(): void {
  }

  variar(e:any) {
    //console.log(e);
    this.dato=e;
  }

}
