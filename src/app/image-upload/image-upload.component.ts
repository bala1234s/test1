import { Component, HostListener } from '@angular/core';
import { ImageUploadService } from '../image-upload.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  
    

  
  // uploadImage(): void {
  //   // Call your service to upload the image here
  //   // You'll implement this in the next steps
  // }

  constructor(private imageUploadService: ImageUploadService,private form : FormBuilder) { }
  
  selectedFile: File | undefined;
  textData: string="";

  image: any;
  email: any;

  myForm = this.form.group({
    email: ['']
  })

  onFileSelected(event:any): void {
    this.selectedFile = event.target.files ? event.target.files[0] : null;
    console.log(this.selectedFile);
    this.image = this.selectedFile?.name;  
  }
  


  uploadImage(event:any) {
    console.log(event);
    this.email = this.myForm.value['email'];
    event.preventDefault();
    console.log(this.selectedFile?.name);
    if (this.selectedFile ) {
      this.imageUploadService.uploadData(this.selectedFile,this.email).subscribe((res:any) => {
        console.log('Image uploaded successfully', res);
      }, (err:any) => {
        console.error('Error uploading image', err);

      }
      );

    }
  }



}
