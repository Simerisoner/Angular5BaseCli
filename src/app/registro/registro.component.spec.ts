import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { APP_PROVIDERS } from "../app.providers";
import { RegistroComponent } from './registro.component';
import { PrincipalComponent } from '../principal/principal.component';
import { MainComponent } from "../main/main.component";
import { LoginComponent } from "../login/login.component";
import { routes } from '../app.component';
import { LoginService } from "../services/valida-login.service";

import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { SearchUserComponent } from "../search-user/search-user.component";
import { GitHubCardComponents } from "../git-hub-card/git-hub-card.component";
import { MATERIAL_COMPONENTS } from "../app.module";
import { PasivoComponent } from "../pasivo/pasivo.component";
import { ReactivoComponent } from "../reactivo/reactivo.component";
import { APP_BASE_HREF } from "@angular/common";


describe('RegistroComponent', () => {
  let component: RegistroComponent;
  let fixture: ComponentFixture<RegistroComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ RegistroComponent ],
  //     imports: [FormsModule, RouterModule.forRoot(routes)],
  //     providers: [APP_PROVIDERS]
  //   })
  //   .compileComponents();
  // }));
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        PrincipalComponent,
        MainComponent,
        AboutComponent,
        ContactComponent,
        SearchUserComponent,
        GitHubCardComponents,
        PasivoComponent,
        ReactivoComponent,
        RegistroComponent
      ],
      imports: [
        FormsModule,
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes)
      ],
      providers: [
        APP_PROVIDERS,
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

   it('should call onRegisterClick', () => {
      let service: LoginService;
      const compiled = fixture.nativeElement;

      let msg2 = 'Error';
      component.validacion();
      let err = compiled.querySelector('#message').textContent;
      expect(msg2).toContain(err);
    });  

});

