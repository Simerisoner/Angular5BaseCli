import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  constructor(private router: Router) { }  

  setValidacion(usuario: string, contra: string){
    console.log(`${usuario} - ${contra}`);
    let opt = false;
    if(usuario == 'alfredo' && contra == 'simerax'){
      return true;
    }
    return opt;
  }
}
