import { Component, OnInit, OnDestroy } from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})

export class GitHubCardComponents implements OnInit, OnDestroy {
    
    gitHubData: GitHubModel;

    constructor() {
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatar_url = 'http://cdn.onlinewebfonts.com/svg/img_87237.png';
        this.gitHubData.followers = 1;
        this.gitHubData.following = 1;
        this.gitHubData.login = 'Simerisoner';
        this.gitHubData.name = 'Alfredo Martinez Ramirez';
    }
    ngOnInit() {
            
    }
    ngOnDestroy() {

    }   
}