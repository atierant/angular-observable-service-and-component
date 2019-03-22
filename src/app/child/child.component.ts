import {Component, OnInit} from '@angular/core';
import {ObservableService} from 'src/app/service/observable.service';
import {ObservableComponent} from 'src/app/observable/observable.component';
import {Subscription} from 'rxjs';
import {ContainingObservableComponent} from 'src/app/containing-observable/containing-observable.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private observableServiceSubscription: Subscription;
  private observableComponentSubscription: Subscription;
  private containingObservableComponentSubscription: Subscription;
  private content;

  constructor(
    private observableService: ObservableService,
    private observableComponent: ObservableComponent,
    private containingObservableComponent: ContainingObservableComponent
  ) {
  }

  ngOnInit(): void {
    this.observableServiceSubscription = this.observableService.subscribe({
      next: (event: any) => {
        this.content = event;
      }
    });
    this.observableComponentSubscription = this.observableComponent.subscribe({
      next: (event: any) => {
        this.content = event;
      }
    });
    this.containingObservableComponentSubscription = this.containingObservableComponent.eventEmitter.subscribe({
      next: (event: any) => {
        this.content = event;
      }
    });
  }
}
