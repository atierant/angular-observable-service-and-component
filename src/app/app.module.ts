import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ChildComponent} from './child/child.component';
import {ObservableService} from 'src/app/service/observable.service';
import {ObservableComponent} from './observable/observable.component';


@NgModule({
  declarations: [AppComponent, ChildComponent, ObservableComponent],
  imports: [BrowserModule],
  exports: [ChildComponent, ObservableComponent],
  providers: [ObservableService, ObservableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
