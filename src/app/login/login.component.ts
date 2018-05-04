import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { LoginService } from "../services/valida-login.service";
import { Router } from '@angular/router';
import { RegistroComponent } from "../registro/registro.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    user: string;
    pass: string;
    constructor(private _login: LoginService, public router: Router) {}  

    iniciarSesion(){
        this._login.setValidacion(this.user,this.pass)?(this.router.navigate([''])):alert('login invalid');
    }
    
    ngOnInit() {}
    ngOnDestroy() {} 
}