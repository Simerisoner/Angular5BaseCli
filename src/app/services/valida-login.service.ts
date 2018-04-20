import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  data: Array<string> = ["alfredo", "martinez"];
  constructor(private router: Router) { }  

  setValida(usuario: string, contra: string){
    console.log(`${usuario} - ${contra}`);
    
    if(usuario == this.data[0] && contra == this.data[1]){
      this.router.navigate(['login']);
    }
  }
}
