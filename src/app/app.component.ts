import { Component } from '@angular/core';
import { SessionService } from './service/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Session-App';

  saveUser(){
    this.localStorage.saveData("userID", "adminUser");
  }

  getUserId(){
    console.log(this.localStorage.getData("UserId"));  
}
}
