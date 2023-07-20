import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo';
  description = '';


  constructor(private firestore: Firestore) {

  }

  addUser() {

  }

}
