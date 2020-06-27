import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  stakeholders:String[]=["Manufacturer","Distributer","Pharmacist"];
  roleType:String;
  username:String;
  password:String;
  name:String;
  mobileNumber:number;
  transportAgency:String;
  modeOfTransport:String;
  registrationId:number;
  address:String;
  location:String;
  verify:number=0;

  gotoLoginPage(){
    this.router.navigate(['/login']);
  }
  
  gotoRegisterPage(){
    this.router.navigate(['/register']);
}

  addUser(form1){
    console.log("User added successfully");
  }
}
