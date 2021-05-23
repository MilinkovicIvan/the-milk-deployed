import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showNewMessage: boolean = false;  //used for showing new message component
  private subject = new Subject<any>();

  constructor() { }

  // toggling showNewMessage
  toggleNewMessage(): void {
    // flip
    this.showNewMessage = !this.showNewMessage;
    // passing value to subject
    this.subject.next(this.showNewMessage);
  }

  // triggered when we use toggle
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
