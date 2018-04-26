import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { APP_BASE_HREF } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { APP_PROVIDERS } from "../app.providers";
import { LoginComponent } from "./login.component";
import { routes } from '../app.component';
import { PrincipalComponent } from "../principal/principal.component";
import { MainComponent  } from "../main/main.component";
import { AboutComponent } from "../about/about.component";
import { ContactComponent } from "../contact/contact.component";
import { SearchUserComponent } from "../search-user/search-user.component";
import { GitHubCardComponents } from "../git-hub-card/git-hub-card.component";
import { MATERIAL_COMPONENTS } from "../app.module";
import { PasivoComponent } from "../pasivo/pasivo.component";
import { ReactivoComponent } from "../reactivo/reactivo.component";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

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
        ReactivoComponent
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  // it('should call onSearchClick', () => {
  //   component.user = 'alfredo';
  //   component.pass = 'simerax';
  //   let navigateSpy = spyOn((<any>component).router, 'navigate');
  //   component.iniciarSesion();
  //   expect(navigateSpy).toHaveBeenCalledWith(['']);
  // });  

  it('should call onSearchClick', () => {
    component.user = 'alfredo';
    component.pass = 'simerax';
    let navigateSpy = spyOn((<any>component).router, 'navigate');

    const compiled = fixture.nativeElement;
    compiled.querySelector('#logear').click();
    expect(navigateSpy).toHaveBeenCalledWith(['']);
  });  

  it('Login sucessfull', () => {
    expect(component).toBeTruthy();
  });
  // expect(window.alert).toHaveBeenCalledWith('login invalid');

  it('login invalid', () => {
    component.user = 'alfredo';
    component.pass = 'simeraxxx';

    let spy = spyOn(window, 'alert');
    const compiled = fixture.nativeElement;
    compiled.querySelector('#logear').click();
    expect(spy).toHaveBeenCalledWith('login invalid');
  });  


  it('should create', () => {
    expect(component).toBeTruthy();
  });

});