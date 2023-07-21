import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private firestore: Firestore) { }

  todos = {
    title: '',
    description: ''
  }

  addUser() {
    const todoCollection = collection(this.firestore, 'todos')
    addDoc(todoCollection, this.todos);
  }
}
