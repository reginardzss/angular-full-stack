import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharingDataService {
  //emite
  private _idProductEventEmitter: EventEmitter<number> = new EventEmitter();


  constructor() { }

  //se subscribe al evento de arriba
  get idProductEventEmitter(){
    return this._idProductEventEmitter;
  }
}
