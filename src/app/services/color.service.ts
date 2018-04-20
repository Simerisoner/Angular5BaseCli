import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ColorService {
  private color = new Subject<string>();
  constructor() { }

  setColor(newColor: string){
    this.color.next(newColor);
  }

  getEventColor(){
    return this.color.asObservable();
  }
}

