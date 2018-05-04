import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

@Injectable()
export class LoginService {
  patronUsername: RegExp = /^[a-zA-Z]*$/;
  comparacionUsername: boolean;
  
  constructor(private router: Router) { }  
  
  setValidacion(usuario: string, contra: string){
    console.log(`${usuario} - ${contra}`);
    let opt = false;
    if(usuario == 'alfredo' && contra == 'simerax'){
      return true;
    }
    return opt;
  }

  validarRegistro(username: string, password: string,cpassword: string, email: string,nombre: string, terminos: boolean){
    return ((this.validaUsername(username))&&
            (this.validaPassword(password))&&
            (this.validaCPassword(password,cpassword))&&
            (this.validaEmail(email))&&
            (this.validaNombre(nombre))&&
            (this.validaTerminos(terminos))
          );
  }
//  Alfredo
  validaUsername(username: string): Boolean{
    let testUsername = /^(?=(?:.*[a-z]){1})\S{5,15}$/g;
    return (testUsername.test(username));
  }
// Alfredo92
  validaPassword (password){
    let opt = true;
    var testPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{5,15}$/g;
    return testPass.test(password);
  }
// Alfredo92
  validaCPassword (password, cpassword){
    console.log(password === cpassword);
    return password === cpassword;
  }
// simerax@hotmail.com
  validaEmail (email){
    var testPass = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("email: "+testPass.test(email));
    return testPass.test(email);
  }
// Alfredo
  validaNombre (nombre){
    var testPass = /(?=(?:.*[a-z]){1})/;
    console.log("nombre: "+testPass.test(nombre));
    return testPass.test(nombre);
  }

  validaTerminos (terminos){
    return terminos;
  }

}
