import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})

export class GitHubCardComponents implements OnInit, OnDestroy {
    
    @Input('github-data') gitHubData: GitHubModel; //INPUT Envia informacion de padre a hijo
    constructor() {}

    ngOnInit() {}
    ngOnDestroy() {}   
}