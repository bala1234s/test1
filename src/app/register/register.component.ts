import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private form : FormBuilder,private http:HttpClient) { }

  userData = this.form.group({
    name: [''],
    phone: [''],
    email: [''],
    password: [''],
    file: ['']
  });


  submit() { 
    this.http.post<any>("http://localhost:3000/userDetails", this.userData.value).subscribe(() => { 
      alert("Registeration Success");
    })
    this.userData.reset();
    

  }


}
