import {Component, OnInit} from '@angular/core';
import {ObservableService} from 'src/app/service/observable.service';
import {ObservableComponent} from 'src/app/observable/observable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular';


  constructor(
    private observableService: ObservableService,
    private observableComponent: ObservableComponent
  ) {
  }

  public orderObservableServiceEvent() {
    this.observableService.emitEvent();
  }
  public orderObservableComponentEvent() {
    this.observableComponent.emitEvent();
  }

  public ngOnInit(): void {
  }
}
