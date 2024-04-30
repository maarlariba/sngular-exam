import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCompComponent } from './result-comp.component';

describe('ResultCompComponent', () => {
  let component: ResultCompComponent;
  let fixture: ComponentFixture<ResultCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultCompComponent]
    });
    fixture = TestBed.createComponent(ResultCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
