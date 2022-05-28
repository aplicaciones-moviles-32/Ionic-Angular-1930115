import { Component } from '@angular/core';
import { BdServiceService } from './bd-service.service';


@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppsMoviles032';
  constructor(private bd: BdServiceService) {}

  usuario: string = "";
  avatar: string = "";

  imagenes = [
  "assets/gusta.jpg",
  "assets/cheems.jpg",
  "assets/gusta.jpg",
  "assets/cheems.jpg",
  "assets/gusta.jpg"
  ];

  ngOnInit(): void {
    this.bd.getDatosUsuario().subscribe(res => {
      console.log(res);
      
    })
  }

}
