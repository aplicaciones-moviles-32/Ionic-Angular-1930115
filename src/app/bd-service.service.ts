import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage, ref, uploadString, listAll, getDownloadURL, deleteObject } from '@angular/fire/storage';
import { freemem } from 'os';
import { uploadBytes } from 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  objName: string = "";

  constructor(private http: HttpClient, private storage : Storage) { }

  getPosts(): any{
    return this.http.get('https://instaapp-68818-default-rtdb.firebaseio.com/publicaciones.json');
    
  }

  getDatosUsuario(): any{
    return this.http.get('https://instaapp-68818-default-rtdb.firebaseio.com/usuario.json');
  }

  getPostsUser(): any{
    return this.http.get('https://instaapp-68818-default-rtdb.firebaseio.com/usuario/publicaciones.json');
  }

  getPostDetail(id: string): any{
    return this.http.get('https://instaapp-68818-default-rtdb.firebaseio.com/usuario/publicaciones'+ id +'.json');
  }

  postPublicacion(post: any){
    return this.http.post('https://instaapp-68818-default-rtdb.firebaseio.com/usuario/publicaciones.json', post);
  }

  deletePublicacion(id: string){
    return this.http.delete('https://instaapp-68818-default-rtdb.firebaseio.com/publicaciones/'+ id.toString() + '.json')
  }

   updatePublicacion(id: number, nuevosDatos: any) {
    return this.http.put('https://instaapp-68818-default-rtdb.firebaseio.com/publicaciones/'+ id.toString() +'.json', nuevosDatos)
  }

  downImage(id : string){
    return getDownloadURL(ref(this.storage, 'users/'+id));
  }

  getImages(){
    return listAll(ref(this.storage, 'users'));
  }

  delPost(id : string) {
    return this.http.delete('https://instaapp-68818-default-rtdb.firebaseio.com/publicaciones/'+id+'.json');
  }

  delImage(id : string){
    return deleteObject(ref(this.storage,'users/'+id))
  }

  posPost(obj : Object){
    let texto = JSON.stringify(obj);
    return this.http.post('https://instaapp-68818-default-rtdb.firebaseio.com'+'/usuario/publicaciones.json', texto);
  }

  upPicture(imgid : string, file : any){
    const imgRef = ref(this.storage, 'users/'+imgid)

    return uploadString(imgRef, file, 'data_url')
  }

  upFile(imgid: string, file : any){
    const imgRef = ref(this.storage, 'users/'+imgid)

    return uploadBytes(imgRef, file)
  }

}
