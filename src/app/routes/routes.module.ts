import { NgModule } from '@angular/core';
import { FeedComponent } from '../feed/feed.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { RouterModule, Routes } from '@angular/router';
import { PublicacionComponent } from '../publicacion/publicacion.component';
import { PostComponent } from '../post/post.component';

const routes: Routes=[
  { path: 'feed', component: FeedComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'publicacion/:id', component: PublicacionComponent},
  { path: 'post', component: PostComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }