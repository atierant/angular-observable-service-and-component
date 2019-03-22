import {Component, OnInit} from '@angular/core';
import {ObservableService} from 'src/app/service/observable.service';
import {ObservableComponent} from 'src/app/observable/observable.component';
import {ContainingObservableComponent} from 'src/app/containing-observable/containing-observable.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private observableService: ObservableService,
    private observableComponent: ObservableComponent,
    private containingObservableComponent: ContainingObservableComponent
  ) {
  }

  public orderObservableServiceEvent() {
    this.observableService.emitEvent();
  }
  public orderObservableComponentEvent() {
    this.observableComponent.emitEvent();
  }
  public orderContainingObservableComponentEvent() {
    this.containingObservableComponent.emitEvent();
  }

  public ngOnInit(): void {
  }
}
