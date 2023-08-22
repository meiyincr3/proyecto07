import { Component } from '@angular/core';
//Importación de la interfaz
import {Estudiante} from 'src/app/interfaces/estudiante';

//Importación del servicio
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  public data: Estudiante[] = [];
  
  /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
  displayedColumns: string[] = ['nombre','email'];

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataService) { }
  
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.data = (response as Estudiante[]); 
    })
  }

}
