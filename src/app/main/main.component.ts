import { Component, OnInit } from '@angular/core';
import { GitHubServices } from "../services/git-hub.service";
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  gitHubData: GitHubModel;
  gitHudDataList: Array<GitHubModel>;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private _gitHubServices: GitHubServices) { 
    this.gitHudDataList = new Array<GitHubModel>();
  }

  ngOnInit() {
  }

  onSearchUser(userName: string){ //Metodo para obtener el array con los 
    this._gitHubServices
    .getUserInfo(userName)
     .subscribe(x => {
      this.gitHudDataList.push(x);
     });
  }
  
  onChildClick(obj: GitHubModel){
    this.gitHudDataList = this.gitHudDataList.filter(x => x != obj);
  }
}