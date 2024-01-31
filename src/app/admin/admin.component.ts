import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { FormBuilder } from '@angular/forms';
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  userLogin: any;
  userId: any=[];
  title: any = [];
  image: any = "";
  urlData: any;
  newData: any;
  imageUrl: any;
  hideImage: boolean = false;
  gokulimg: any;


  //store img

  choosedimg: any;
  imageurl: any;
  choosedVarientimage: any;

  // selectedFile: File;
  
  // onFileSelected(event): void {
  //   this.selectedFile = event.target.files[0];
  // }

  


  constructor(private http: HttpClient, private service: UserDetailsService , private form :FormBuilder,private imageupload:ImageUploadService) { 
    http.get<any>('http://localhost:3001/get/poster').subscribe((get) => { 
      console.log(get);
      this.newData = get;
      
    })

    

  //   uploadImage(): void {
  //   // Call your service to upload the image here
  //   // You'll implement this in the next steps
  // }


  //    uploadImage(): void {
  //   if (this.selectedFile) {
  //     this.imageUploadService.uploadImage(this.selectedFile).subscribe(
  //       (response) => {
  //         console.log('Image uploaded successfully', response);
  //       },
  //       (error) => {
  //         console.error('Error uploading image', error);
  //       }
  //     );
  //   }
  // }
    // http.get<any>('http://localhost:3001/poster').subscribe((getImage) => { 
    //   console.log(getImage['']);
    //   this.imageUrl = getImage;
      
    // })
    
   
    
  }

   postData = this.form.group({
    titlename: [''],
    imagename: [''],
     captionname: ['']
    
  })
  
  
  showImage(eventshow:any){
    if (eventshow.target.files && eventshow.target.files[0]) {
      this.choosedimg=true;
      var reader = new FileReader();
      reader.onload = (event: any) => {
          this.imageurl = event.target.result;
        console.log(this.imageurl);
        // this.image = this.imageurl;
        this.hideImage = true;
          this.choosedVarientimage=this.imageurl
      }
      // console.log(reader.readAsDataURL(eventshow.target.files[0]));
      }
    }

  
  



  submit() { 
    this.gokulimg = this.postData.value['imagename'];
    console.log(this.postData.value);
    const newPost = {
      title: this.postData.value['titlename'],
      image: this.postData.value['imagename'],
      caption:this.postData.value['captionname']
    }
 
    console.log(newPost.image);
  
   
this.http.post<any>('http://localhost:3001/post/poster', newPost).subscribe(() => { 
      console.log("post done");
    })

  }

   



    
  // submit() { 
  //   // this.userLogin=sessionStorage.getItem('profile');
  //   // this.service.getUserDetails().subscribe((get) => {
  //   //   console.log(get);
  //   //   console.log(this.userLogin);
  //   // })

  //   // for (var i = 0; i < this.userLogin.length; i++) {
  //   //   console.log(this.userLogin[i].name);
  //   // }

    
  //   // this.http.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe((get) => {
  //   this.http.get<any>('http://localhost:3001/get/poster').subscribe((get) => {

  //     if (!get) {
  //       console.log("error");
  //     }
  //     else {
  //       console.log(get);
  //     }

  //     // this.urlData = get;

  //     // for (var i = 0; i < get.length; i++) { 
  //     //   this.userId= get[i].title;
  //     //   this.title = get[i].caption;
  //     //   console.log(this.userId);

  //     // }
  //     // console.log(this.userId);
      
  //   })
  // }

  logout() { 
    sessionStorage.setItem('isLoggedAdmin', 'adminfalse');
    window.location.reload();
  }

} 
