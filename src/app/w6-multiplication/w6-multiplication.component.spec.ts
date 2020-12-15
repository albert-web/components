import { ComponentFixture, TestBed } from '@angular/core/testing';

import { W6MultiplicationComponent } from './w6-multiplication.component';

describe('W6MultiplicationComponent', () => {
  let component: W6MultiplicationComponent;
  let fixture: ComponentFixture<W6MultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ W6MultiplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(W6MultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
