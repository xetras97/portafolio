import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicios/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'naon-frontend';

  mySocialNet:any;
  constructor(private socialNet:ApiService ) { }

  ngOnInit(): void {
    this.socialNet.obtenerDatosPersonales("desarrollador").subscribe(data =>{
      this.mySocialNet=data[0];
    });
  }

  validarFormulario(){
    // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event:Event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
  }
}
