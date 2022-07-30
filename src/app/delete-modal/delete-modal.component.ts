import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
  }
  cambio:boolean = false;
  eliminarEstudio(){
    let id = this.apiService.id;
    let componente = this.apiService.componente;
    return this.apiService.deleteBd(componente, id).subscribe();
  }
}
