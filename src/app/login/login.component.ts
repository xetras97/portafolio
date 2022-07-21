import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router, private appcomponent:AppComponent) {
    this.form=this.formBuilder.group(
      {
        "username":['', [Validators.required]],
        "password":['', [Validators.required]]
      }
    )
  }

  ngOnInit(): void {
  }

  get Username(){
    return this.form.get("username");
  }

  get Password(){
    return this.form.get("password");
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data => {
      console.log("DATA:" + JSON.stringify(data));
      window.location.reload();
    }
    )
  }


  checked = true;

  checkLogIn () {
    setTimeout(() => {
      if (sessionStorage.getItem("currentUser")){
        this.checked = true;
      } else {
        this.checked = false;
      }
    }, 3000);
  }

}
