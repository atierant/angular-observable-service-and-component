import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-containing-observable',
  templateUrl: './containing-observable.component.html',
  styleUrls: ['./containing-observable.component.css']
})
export class ContainingObservableComponent  implements OnInit {

  @Output() public eventEmitter: EventEmitter<any> = new EventEmitter<boolean>();

  public emitEvent(): void {
    this.eventEmitter.emit('Je suis le composant contenant un observable et j\'émets un événement');
  }

  ngOnInit() {
  }

}
