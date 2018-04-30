import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from "rxjs/Rx";

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
    let opt = true;
    var testPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{5,15}$/g;

    this.validaUsername(username);
    // this.validaPassword(password);
    // this.validaCPassword(password,cpassword);
    // this.validaEmail(email);
    // this.validaNombre(nombre);
    
 //Regex Javascript
    //85
    return opt;
  }

  validaUsername (username){
    let opt = true;
    let testUsername = /^(?=(?:.*[a-z]){1})\S{5,15}$/g;
    console.log("username: "+testUsername.test(username));
    return testUsername.test(username);
  }

  validaPassword (password){
    let opt = true;
    var testPass = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{5,15}$/g;
    console.log("password: "+testPass.test(password));
    return testPass.test(password);
  }
  validaCPassword (password, cpassword){
    console.log(password === cpassword);
    return password === cpassword;
  }
  validaEmail (email){
    var testPass = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("email: "+testPass.test(email));
    return testPass.test(email);
  }
  validaNombre (nombre){
    var testPass = /(?=(?:.*[a-z]){1})/;
    console.log("nombre: "+testPass.test(nombre));
    return testPass.test(nombre);
  }

}
