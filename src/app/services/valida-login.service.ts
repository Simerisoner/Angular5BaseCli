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

  validarRegistro(username: string, password: string,cpassword: string, email: string,nombre: string, terminos: string){
    // console.log(`${username} - ${password} - ${cpassword} - ${email} - ${nombre} - ${terminos}`);
    // for(var x = 0; x<username.length; x++){
    //   var letra = username.charAt(x);
    //   if(letra === letra.toUpperCase()){
    //       console.log('Mayuscula');   
    //   }
    // }
    // let user = username

    let opt = false;
    let message = "";
    return opt;
    //Regex Javascript
    //80
  }

}
