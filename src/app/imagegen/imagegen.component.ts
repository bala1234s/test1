import { Component } from '@angular/core';
import { ImageUploadComponent } from '../image-upload/image-upload.component';

@Component({
  selector: 'app-imagegen',
  templateUrl: './imagegen.component.html',
  styleUrls: ['./imagegen.component.css']
})
export class ImagegenComponent {
  constructor(private imageUploadService: ImageUploadComponent) { }
  
  // selectedFile: File | null=null;
  // textData: string | null=null;

  // onFileSelected(event:any): void {
  //   this.selectedFile = event.target.files ? event.target.files[0] : null;

    
  // }


  // uploadImage(): void {

  //   // console.log(this.selectedFile);
  //   // if (this.selectedFile && this.textData) {
  //   //   this.imageUploadService.uploadImage(this.selectedFile,this.textData).subscribe((res) => {
  //   //     console.log('Image uploaded successfully', res);
  //   //   }, (err) => {
  //   //     console.error('Error uploading image', err);

  //   //   }
  //   //   );

  //   // }
  // }

}
