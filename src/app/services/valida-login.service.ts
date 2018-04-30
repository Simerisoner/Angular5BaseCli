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
    let mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let minisculas = 'abcdefghijklmnñopqrstyvwxyz';
    // let pattern = new RegExp('/[A-Z]/g');

    // var re = new RegExp('ab+c');
    // var myRe = /d(b+)d/g;
    var myRe2 = /([A-Z])+/g;
    var myRe = /^([A-Z]{5,})/g;
    var myArray = myRe.test('cdbbRdRbsbz');

    // var str = "The best things in life are free";
    // var patt = new RegExp("e");
    // var myArray = patt.test(str);

    // str./e/.test(text);

    // var myRe = /([A-Z])/g;
    // var myArray = myRe.exec('mayusculas');
    // let list: Array <any> = [1, 2, 3,"Hola"];
    
    // var myRe = /d(b+)d/g;
    // var myArray = myRe.exec('cdbbdbsbz');
    
    // console.log(`${username} - ${password} - ${cpassword} - ${email} - ${nombre} - ${terminos}`);
    // for(var x = 0; x<username.length; x++){
    //   var letra = username.charAt(x);
    //   if(letra === letra.toUpperCase()){
    //       console.log('Mayuscula');   
    //   }
    // }
    // let user = username
 //Regex Javascript
    //80

    console.log(myArray);
    let opt = false;
    let message = "";
    return opt;
  }

}
