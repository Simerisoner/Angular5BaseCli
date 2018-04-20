import { Component, OnInit, OnDestroy, Input } from "@angular/core";
// import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-principal',
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css']
})

export class PrincipalComponent implements OnInit, OnDestroy {
    
    // @Input('github-data') gitHubData: GitHubModel; //INPUT Envia informacion de padre a hijo
    constructor() {}

    ngOnInit() {}
    ngOnDestroy() {}   
}