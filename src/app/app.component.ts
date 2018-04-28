import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PrincipalComponent } from './principal/principal.component';
import { RegistroComponent } from './registro/registro.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'; 
}

export const routes: Routes = [
  { path: '',
   component: PrincipalComponent 
  },
  { 
    path: 'registro', 
    component: RegistroComponent
  },
  { 
    path: 'home', 
    component: MainComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'contact', 
    component: ContactComponent 
  }
];
