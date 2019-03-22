import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService extends EventEmitter<any> {

  constructor() {
    super();
  }

  public emitEvent(): void {
    this.emit('Je suis le service et j\'émets un événement');
  }
}
