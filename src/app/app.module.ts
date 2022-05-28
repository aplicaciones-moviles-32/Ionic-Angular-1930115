import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from './perfil/perfil.component';
import { PostsComponent } from './posts/posts.component';
import { TabsComponent } from './tabs/tabs.component';
import { PostComponent } from './post/post.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutesModule } from './routes.module';
import { PopoverContentComponent } from './popover-content/popover-content.component';
import { HistoriasComponent } from './historias/historias.component';
import { HistoriaContenidoComponent } from './historia-contenido/historia-contenido.component';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from './popover/popover.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { DatePipe } from '@angular/common';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    PerfilComponent,
    TabsComponent,
    PopoverContentComponent,
    PopoverComponent,
    HistoriasComponent,
    HistoriaContenidoComponent,
    PostComponent,
    PublicacionComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    RoutesModule,
    ReactiveFormsModule, 
    provideStorage(() => getStorage()), 
    provideFirebaseApp( () => initializeApp(environment.firebase))
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [RoutesModule]
})
export class AppModule { }
