import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageUploadService {

  private apiUrl = 'https://connect-kh8w.onrender.com/login/registration';

  // image: any;

  constructor(private http: HttpClient) { 
    
  }

  uploadData(image: File,email:any): any {
   
    console.log(image);
    const formData: FormData = new FormData();
   formData.append('profile_image', image, image.name);
   console.log(image);
   formData.append('uid', "mR4a7ijq1DYeqpp1rM09vdtXj7m1");
    formData.append('email', email);
    formData.append('user_name', "bala");
    formData.append('country', "India");
    formData.append('state', "TamilNadu");
    formData.append('city', "Salem");
    // formData.append('profile_image', "bala@gmail.com");//
   // Add text data as a key-value pair

    return this.http.post(this.apiUrl, formData);
  }
}
