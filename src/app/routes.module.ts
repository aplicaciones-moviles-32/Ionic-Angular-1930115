import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';
import { PublicacionComponent } from './publicacion/publicacion.component';


const routes : Routes = [
  { path: 'perfil',  component: PerfilComponent },
  { path: 'feed', component: FeedComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'publicacion', component: PublicacionComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
