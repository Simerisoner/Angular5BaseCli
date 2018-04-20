import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { LoginService } from "../services/valida-login.service";
// import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
    user: string;
    pass: string;
    constructor(private _login: LoginService) {}

    ngOnInit() {}
    ngOnDestroy() {}   

    iniciarSesion(){
        this._login.setValida(this.user,this.pass);
    }
}