import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';  //used for toggle of button component
import { Subscription } from 'rxjs';  //used for toggle of button component

@Component({
  selector: 'app-message-header',
  templateUrl: './message-header.component.html',
  styleUrls: ['./message-header.component.css']
})
export class MessageHeaderComponent implements OnInit {
  title = 'Inbox';
  showNewMessage: boolean;  // used for button toggle
  subscription: Subscription;

  // pass service to const so that it can be used
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) =>
      (this.showNewMessage = value));
  }

  ngOnInit(): void {
  }

  // used to toggle new message component,
  // triggered with button click from message header 
  toggleNewMessage() {
    // call toggle method from ui service
    this.uiService.toggleNewMessage();
  }
}
