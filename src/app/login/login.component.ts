import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  useremail: any;
  userpassword: any;
  email: any;
  password: any;
  personalData: any;
  

  returl: any;
  
  
  constructor(private form: FormBuilder, private http: HttpClient, private route: Router, private active: ActivatedRoute) {
    
    active.queryParamMap.subscribe((value) => {
      
      this.returl = value.get('returl');
      console.log(this.returl);

      
    })
    
  }
  
  
  loginform = this.form.group({
    email: [''],
    password: ['']
    
  });

  submit() { 
    // localStorage.setItem("mytime", Date.now());
    // sessionStorage.setItem('loginform',JSON.stringify(this.loginform));
    this.http.get<any>('http://localhost:3000/userDetails').subscribe((data) => {

      
      this.useremail = this.loginform.controls['email'].value;
      this.userpassword = this.loginform.controls['password'].value;



      const loginData = data.find((find: any) => { 
        const loginDetails = {
          name: find.name,
          phone: find.phone
        };

        sessionStorage.setItem('profile', JSON.stringify(loginDetails));
        return this.useremail == find.email && this.userpassword == find.password;

      })
      
      
      for (var i = 0; i < data.length; i++) { 
        
        this.email = data[i].email;
        this.password= data[i].password;
        
      
      }

      


      if (this.useremail == "admin@gmail.com" && this.userpassword == "Admin@2023") {
        sessionStorage.setItem('isLoggedAdmin', 'true');
        this.route.navigateByUrl("admin").then(() => {
          
          window.location.reload();
        });;
        
      }

      else if (this.useremail == this.email && this.userpassword == this.password) {
        sessionStorage.setItem('isLoggedUser', 'true');
        this.route.navigateByUrl("user").then(() => {
          window.location.reload();
        });;

      }

      else { 
        alert("not found");
      }
    })
  }

  
}
