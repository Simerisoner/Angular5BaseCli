import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { Router } from '@angular/router';
import { LoginService } from "../services/valida-login.service";


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
    nombre: string = "";
    terminos: boolean = false;
    constructor(private _registro: LoginService) {}

   
    validacion(){
        
        // let opt = this._registro.validarRegistro(this.username,this.password,this.cpassword,this.email,this.nombre,this.terminos)?
        // this.message= 'Succesfull' : this.message = 'Error';

        let opt = ((this._registro.validaUsername(this.username))&&(this._registro.validaPassword(this.password)));
       
        // console.log("username: "+this.username);
        console.log("opt: "+opt);
    }
     ngOnInit() {}
    ngOnDestroy() {}   
}