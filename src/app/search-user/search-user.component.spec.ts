import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { SearchUserComponent } from "./search-user.component";

describe('SearchUserComponent', () => {
  let component: SearchUserComponent;
  let fixture: ComponentFixture<SearchUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUserComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUserComponent); //Crea instancias de GitHub
    component = fixture.componentInstance; //componentInstance:: Crea una instancia del componente para acceder a la clase - modulo
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSearchClick', () => {
    component.userName = 'alfredo';
    component.onSearchUser.subscribe(x => {
      expect(x).toEqual('alfredo');
    });
    component.onSearchClick();
  });  

  it('should call onSearchClick in view', () => {
    component.userName = 'alfredo';
    component.onSearchUser.subscribe(x => {
      expect(x).toEqual('alfredo');
    });
    
    let compiled = fixture.nativeElement;
    compiled.querySelector('button').click();
  });  
});