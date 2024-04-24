import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101Angular17AppDemo';
  name = 'Angular';
  nameArr = ['Angular', 'React', 'Vue'];

  constructor() {
    console.log('AppComponent constructor called');
  }
}
