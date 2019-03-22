import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainingObservableComponent } from './containing-observable.component';

describe('ContainingObservableComponent', () => {
  let component: ContainingObservableComponent;
  let fixture: ComponentFixture<ContainingObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainingObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainingObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
