import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorralesComponent } from './corrales.component';

describe('CorralesComponent', () => {
  let component: CorralesComponent;
  let fixture: ComponentFixture<CorralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
