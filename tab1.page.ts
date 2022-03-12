import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() { }

  ngOnInit(): void {
  }

  perrillos = [
    {
      "usuario": "@cheemsfuerte",
      "src": "assets/cheems.jpg",
      "caption": "Puedo correr 5km"
    },
    {
      "usuario": "@megustanmucho",
      "src": "assets/gusta.jpg",
      "caption": "a mi me gustan mucho de esas"
    },
  ]

}