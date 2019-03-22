import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {ObservableService} from 'src/app/service/observable.service';
import {ObservableComponent} from './observable/observable.component';
import { ContainingObservableComponent } from './containing-observable/containing-observable.component';


@NgModule({
  declarations: [AppComponent, ChildComponent, ObservableComponent, ContainingObservableComponent],
  imports: [BrowserModule],
  providers: [ObservableService, ObservableComponent, ContainingObservableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
