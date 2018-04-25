import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MainComponent } from './main.component';
import { GitHubCardComponents } from "../git-hub-card/git-hub-card.component";
import { SearchUserComponent  } from "../search-user/search-user.component";
import { APP_PROVIDERS } from '../app.providers';
import { MATERIAL_COMPONENTS } from "../app.module";
import { GitHubServices } from '../services/git-hub.service';
import { GitHubServicesMock } from '../../mock-services/git-hub.service.mock';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MainComponent,
        GitHubCardComponents,
        SearchUserComponent
      ],
      imports: [
        MATERIAL_COMPONENTS,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [{
        provide: GitHubServices, 
        useClass: GitHubServicesMock
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add three elements to carf array', () =>{
    expect(component.gitHudDataList.length).toEqual(0);
    component.onSearchUser('alfredo');
    component.onSearchUser('alfredo');
    component.onSearchUser('alfredo');
    expect(component.gitHudDataList.length).toEqual(3);
  });

});