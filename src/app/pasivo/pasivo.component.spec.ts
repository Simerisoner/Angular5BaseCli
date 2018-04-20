import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasivoComponent } from './pasivo.component';

describe('PasivoComponent', () => {
  let component: PasivoComponent;
  let fixture: ComponentFixture<PasivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
