import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(
    private db : BdServiceService, 
    public formBuilder: FormBuilder, 
    public dp : DatePipe) { }

  user : any = {}
  ionicForm!: FormGroup;
  isSubmitted = false;
  filePic: string | undefined;
  showPic: string = '';
  date : any;
  ext : string = '';
  flagPic : boolean = false;
  flagFile : boolean = false;

  ngOnInit(): void {
    this.db.getDatosUsuario().subscribe(res => {this.user = res});
    this.ionicForm = this.formBuilder.group({
      id: new FormControl('', []),
      img: new FormControl('', []),
      ext: new FormControl('', [])
    })
  }

   onSubmit(f: NgForm) {
    console.log("Submit")
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    this.ionicForm.controls['id'].setValue(this.dp.transform((new Date), 'ddMMyyyyhmmss'));
    this.ionicForm.controls['ext'].setValue(this.ext);

  if (!this.ionicForm.valid || (this.filePic == null)) {
      console.log('Llene todos los campos')
      return false;
    } else {
      console.log(this.ionicForm.value)
      console.log(this.ionicForm.get('id')?.value);
      console.log(this.filePic);

      if(this.flagPic){
        this.db.upPicture(this.ionicForm.get('id')?.value,this.filePic).then(resp => {
          console.log(resp);
  
          this.db.downImage(this.ionicForm.get('id')?.value).then(respues => {
            console.log(respues);
            this.showPic = respues;
            this.ionicForm.controls['img'].setValue(respues);
  
            this.db.posPost(this.ionicForm.value).subscribe(res => {console.log(res);window.location.href="/perfil";});
          }).catch(mist => console.log(mist));
        }).catch(err => console.log(err))
      }
      if(this.flagFile){
        this.db.upFile(this.ionicForm.get('id')?.value,this.filePic).then(resp => {
          console.log(resp);

          this.db.downImage(this.ionicForm.get('id')?.value).then(box => {
            console.log(box);
            this.showPic=box;
            this.ionicForm.controls['img'].setValue(box);
            this.db.posPost(this.ionicForm.value).subscribe(answ => {console.log(answ);window.location.href="/perfil";});
          }).catch(mist => console.log(mist));
        }).catch(err => console.log(err))
      }
      
      return true;
    }
  }

  async takePic(){
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType : CameraResultType.DataUrl
    });
    this.flagPic = true;
    this.flagFile = false;
    this.ext = '';
    this.filePic = image.dataUrl;
    console.log(this.filePic);
  }

  uploadPic($event : any){
    const file = $event.target.files[0];
    console.log(`${file}`);
    console.log(`${file.type}`);
    console.log((`${file.name}`).split(".")[0]);
    console.log(`${file.name}`);

    this.flagPic = false;
    this.flagFile = true;
    this.ext ='';
    this.filePic = file;
  }
}