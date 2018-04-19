import { Injectable } from "@angular/core";
import { HttpClient  } from "@angular/common/http"; //Permite hacer llamadas de rest
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const  _getUsersUrl = 'http://10.11.1.100:8080/users';
// const  _getUsersUrl = 'https://api.github.com/users';
@Injectable()
export class GitHubServices {
    
    constructor(private _httpClient: HttpClient){
    }

    getUserInfo(userName: string){ //Obtiene el JSON de la api de github y regresa un objeto gitHubObj
        return this._httpClient
            .get(`${_getUsersUrl}/${userName}`,{responseType: 'json'})
            .map((x: any) => {
                let gitHubObj = new GitHubModel();
                gitHubObj.avatar_url = x.avatar_url;
                gitHubObj.login = x.login;
                gitHubObj.name = x.name;
                gitHubObj.followers = x.followers;
                gitHubObj.following = x.following;
                return gitHubObj;
            }) 
            .catch(this.handleError);
    }
    handleError(error: any){
        console.log('Error: ');
        return Observable.throw(error.json() || 'Server error')
    }
}