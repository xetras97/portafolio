import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './servicios/api.service';
import { LoggedService } from './servicios/logged.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'naon-frontend';

  desarrollador:any;
  constructor(private socialNet:ApiService, public logged:LoggedService) { }

  ngOnInit(): void {
    this.socialNet.obtenerDatosPersonales("desarrollador").subscribe(data =>{
      this.desarrollador=data[0];
    });
    this.logged.isLoggedIn();
  }
}
