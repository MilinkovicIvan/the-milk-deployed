import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Milk';

  //session part,atm hardcoded until its implemented properly in user login

  /* First user (id,fname,lname,email and phone nb)
  userId = sessionStorage.setItem('userId', '12345');
  userFname = sessionStorage.setItem('fname', 'Ivan');
  userLname = sessionStorage.setItem('lname', 'Milinkovic');
  userEmail = sessionStorage.setItem('email', 'ivan.milinkovic91@gmail.com');
  userPhone = sessionStorage.setItem('phone', '0851234567');
  */
  //comment/uncomment users for testing purposes

  // Second user (id,fname,lname,email and phone nb), 
  userId = sessionStorage.setItem('userId', '123456');
  userFname = sessionStorage.setItem('fname', 'Marijana');
  userLname = sessionStorage.setItem('lname', 'Homen');
  userEmail = sessionStorage.setItem('email', 'marijana.homen@gmail.com');
  userPhone = sessionStorage.setItem('phone', '0859876543');
  
}
