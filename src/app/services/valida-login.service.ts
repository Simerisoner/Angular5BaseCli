import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  data: Array<string> = ["alfredo", "martinez"];

  constructor(private router: Router) { }  

  setValidacion(usuario: string, contra: string){
    console.log(`${usuario} - ${contra}`);
    let opt = false;
    // if(usuario == this.data[0] && contra == this.data[1]){
    if(1==1){
      return true;
      // opt = true;
    }
    return opt;
  }
}
