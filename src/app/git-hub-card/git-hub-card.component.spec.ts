import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { APP_PROVIDERS } from "../app.providers";
import { GitHubModel } from '../model/git-hub-model';
import { GitHubCardComponents } from "./git-hub-card.component";

describe('GitHubCardComponent', () => {
  let component: GitHubCardComponents;
  let fixture: ComponentFixture<GitHubCardComponents>;
  let gitHubData: GitHubModel;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubCardComponents ],
      imports: [FormsModule],
      providers: [APP_PROVIDERS]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    gitHubData = new GitHubModel();
    gitHubData.avatar_url = '';
    gitHubData.followers = 3;
    gitHubData.following = 6;
    gitHubData.login = '';
    gitHubData.name = 'alfredo';

    fixture = TestBed.createComponent(GitHubCardComponents); //Crea instancias de GitHub
    component = fixture.componentInstance; //componentInstance:: Crea una instancia del componente para acceder a la clase - modulo
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should validate model', ()=>{
    component.gitHubData = gitHubData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  })

  it('should validate model in the view', ()=> {
    component.gitHubData = gitHubData;
    const compiled = fixture.nativeElement; //nativeElement:: Crea la vista con los elementos en el html
    fixture.detectChanges();
    expect(compiled.querySelector('#name').textContent).
            toContain(`Name: ${gitHubData.name}`);
  });
});