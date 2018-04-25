import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http"; //Permite hacer llamadas de rest
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../app/model/git-hub-model";

// const  _getUsersUrl = 'http://10.11.1.100:8080/users';
const  _getUsersUrl = 'https://api.github.com/users';
@Injectable()
export class GitHubServicesMock {
    
    constructor(private _httpClient: HttpClient){

    }

    getUserInfo(userName: string){
        let gitHubObj = new GitHubModel();
        gitHubObj.avatar_url = '';
        gitHubObj.login = 'simerisoner';
        gitHubObj.name = 'alfredo';
        gitHubObj.followers = 2;
        gitHubObj.following = 3;
        
        
        return Observable
                    .of(gitHubObj)
                    .catch(this.handleError);
    }

    handleError(error: any){
        console.log('Error: ');
        return Observable.throw(error.json() || 'Server error')
    }
}