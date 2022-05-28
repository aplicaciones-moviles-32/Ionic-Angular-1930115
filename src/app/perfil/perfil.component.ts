import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

   constructor(
    private http: HttpClient,
    private db: BdServiceService
    ) { }

  ngOnInit(): void {
    this.db.getDatosUsuario().subscribe(res => {this.usuario = res});
  }

  usuario : any = {}

  editando = false;
  
    toggleEditar(): void{
    this.editando = !this.editando;
  }

  @Input() bio: string = ""; 

  guardarNuevaBio(): void{
    this.usuario.descripcion = this.bio;
  }

  guardarBio(): void {
    this.usuario.descripcion = this.bio;
    this.toggleEditar();
  } 
  
}