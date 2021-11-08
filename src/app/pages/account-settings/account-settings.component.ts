//import { forEach } from '@angular-devkit/schematics';
import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes: SettingsService) { }

  ngOnInit(): void {

    this.colocarCheck();
  }

  cambiarColor(tema:string, link:any) {
    this.aplicarCheck(link);
    //console.log(link.classList[1]);
    this._ajustes.aplicarTema(tema);

  }

  aplicarCheck(link:any) {
    let selectores:any = document.getElementsByClassName('selector');

    for (let sel of selectores) {
      sel.classList.remove('working');
    }
    link.classList.add('working');
  }

  colocarCheck() {
    let selectores:any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    
    for (let sel of selectores) {
      if(sel.getAttribute('data-theme')===tema) {
        sel.classList.add('working');
        break;
      }
    }
  }

}
