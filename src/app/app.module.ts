//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//components
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageHeaderComponent } from './components/message-header/message-header.component';
import { MessageButtonComponent } from './components/message-button/message-button.component';
import { MessagesListComponent } from './components/messages-list/messages-list.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { NewMessageComponent } from './components/new-message/new-message.component';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    MessagesComponent,
    MessageHeaderComponent,
    MessageButtonComponent,
    MessagesListComponent,
    MessageItemComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
