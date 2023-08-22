import { Component } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
//Importación de la interfaz
import {Estudiante} from 'src/app/interfaces/estudiante';

//Importación del servicio
import { DataService } from 'src/app/providers/data.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  
})

export class ReportComponent {
  estudiantes = new FormControl('');

  public data:Estudiante[] = [];

   //Inyección de dependencia del servicio
   constructor(private dataProvider: DataService) { }
  
   ngOnInit() {
     this.dataProvider.getResponse().subscribe((response) => { 
       this.data = (response as Estudiante[]); 
     })
   }
}
