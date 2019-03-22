import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {ObservableService} from 'src/app/service/observable.service';
import {ObservableComponent} from 'src/app/observable/observable.component';
import {ChildComponent} from 'src/app/child/child.component';
import {BrowserModule} from '@angular/platform-browser';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ContainingObservableComponent} from 'src/app/containing-observable/containing-observable.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      declarations: [AppComponent],
      providers: [ObservableService, ObservableComponent, ContainingObservableComponent],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Test Observable Component/Service');
  });
});
