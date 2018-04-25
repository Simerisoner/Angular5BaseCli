import { TestBed, async } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_PROVIDERS } from './app.providers';
import { MATERIAL_COMPONENTS } from "./app.module";
import { AppComponent, routes } from './app.component';
import { PrincipalComponent } from "./principal/principal.component";
import { MainComponent  } from "./main/main.component";
import { AboutComponent  } from "./about/about.component";
import { ContactComponent  } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";
import { SearchUserComponent } from "./search-user/search-user.component";
import { GitHubCardComponents } from "./git-hub-card/git-hub-card.component";
import { PasivoComponent } from "./pasivo/pasivo.component";
import { ReactivoComponent } from "./reactivo/reactivo.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PrincipalComponent,
        MainComponent,
        AboutComponent,
        ContactComponent,
        LoginComponent,
        SearchUserComponent,
        GitHubCardComponents,
        PasivoComponent,
        ReactivoComponent
      ],
      imports: [
        MATERIAL_COMPONENTS,
        RouterModule.forRoot(routes),
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'}
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a mat-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('mat-toolbar').textContent).toContain('Menu');
  }));
});
