import {Component, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent  extends EventEmitter<any> implements OnInit {

  constructor() {
    super();
  }

  public emitEvent(): void {
  this.emit('Je suis le composant et j\'émets un événement');
}

  ngOnInit(): void {
  }
}
