import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from '@angular/router';
import { LoginService } from "../services/valida-login.service";
import { RegistroModel } from '../model/registro-model';


@Component({
    selector: 'app-login',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit, OnDestroy {
    message: string = "";
    username: string = "";
    password: string = "";
    cpassword: string = "";
    email: string = "";
    name: string = "";
    terms: boolean = false;
    regModel: RegistroModel;
    constructor(private _registro: LoginService) {}

   
    validacion(){
        let opt = this.validarRegistro(this.username,this.password,this.cpassword,this.email,this.name,this.terms);
        opt?this.message= 'Succesfull' : this.message = 'Error';
        if(opt){
            this.regModel = new RegistroModel();
            this.regModel.username = this.username;
            this.regModel.password = this.password;
            this.regModel.name = this.name;
            this.regModel.email = this.email;
            console.log(this.regModel.username);
            console.log(this.regModel.password);
            console.log(this.regModel.name);
            console.log(this.regModel.email);
        }
    }

    validarRegistro(username: string, password: string,cpassword: string, email: string,nombre: string, terms: boolean){
        return ((this.validaUsername(username))&&
                (this.validaPassword(password))&&
                (this.validaCPassword(password,cpassword))&&
                (this.validaEmail(email))&&
                (this.validaNombre(nombre))&&
                (this.validaTerminos(terms))
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
        return password === cpassword;
      }
    // simerax@hotmail.com
      validaEmail (email){
        var testPass = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return testPass.test(email);
      }
    // Alfredo
      validaNombre (nombre){
        var testPass = /(?=(?:.*[a-z]){1})/;
        return testPass.test(nombre);
      }
    
      validaTerminos (terminos){
        return terminos;
      }
    ngOnInit() {}
    ngOnDestroy() {}   
}