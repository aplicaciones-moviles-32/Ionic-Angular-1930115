import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  arr: any;
  constructor(
    private ruta: ActivatedRoute, 
    private db: BdServiceService) {}

  publicacion = this.ruta.snapshot.params['id'];
  publicacionImprimir: any = [];
  search : string = '';

  ngOnInit(): void {
    this.getDataPost(this.publicacion);
  }

  getDataPost(id : string){
    console.log("Alright");
    this.db.getPostDetail(id).subscribe(resp => {
      console.log(Object.values(resp)[0]);
      console.log(Object.keys(resp));
      this.search = Object.keys(resp).toString();
      console.log(this.search);
      this.publicacionImprimir = Object.values(resp)[0];
      console.log(this.publicacionImprimir.id);
    });
    return this.publicacionImprimir;
  }

  deletePost(){
    this.db.delPost(this.search).subscribe(resp => {
      if(resp == null){
        this.db.delImage(this.publicacionImprimir.id+this.publicacionImprimir.ext).then(msg => {
          console.log(msg + ' eliminado');
          window.location.href="/perfil";
        }).catch(err => console.log(err));
        
      }else{
        console.log('Error');
      }
    });
    console.log(this.publicacionImprimir.id);
   }
  }