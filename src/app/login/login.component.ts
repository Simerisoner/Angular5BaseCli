import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { LoginService } from "../services/valida-login.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    user: string;
    pass: string;
    constructor(private _login: LoginService, private router: Router) {}

    ngOnInit() {}
    ngOnDestroy() {}   

    iniciarSesion(){
        this._login
        .setValidacion(this.user,this.pass)?
        (this.router.navigate(['home'])+''+
        alert('!! Welcome '+this.user+' !!')):
        alert('!!Invalid login¡¡');
    }
}