import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  barra1: string = 'Progress Azul';
  barra2: string = 'Progress Verde';
  progreso1:number = 5;
  progreso2:number = 50;

  constructor() { }

  ngOnInit(): void {
  }
}
