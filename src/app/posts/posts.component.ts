import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  constructor(private http: HttpClient, private db: BdServiceService) { }

  prueba : any = [];
  posts : any = [];

  ngOnInit(): void {
    this.db.getPostsUser().subscribe(resp => {
      this.prueba = Object.values(resp);
      console.log(this.prueba);
      for(let test of this.prueba){
        if(test != null){
          let posts : Post = {id: '', imagen: ''};;
            posts.id = test.id;
            posts.imagen = test.imagen;
            console.log(posts);
            this.posts.push(posts);
        }
      }
    })
  }

}