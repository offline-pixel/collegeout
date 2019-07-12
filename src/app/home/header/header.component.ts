import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  constructor(private camera: Camera) {
    
  }

  ngOnInit() { }

  image(){
    this.camera.getPicture(this.options).then((imageData) => {
      alert(true)
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      alert(err)
      // Handle error
     });
  }
}
