import { Component } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';
//Importación de la interfaz
import {Estudiante} from 'src/app/interfaces/estudiante';
//Importación del servicio
import { DataService } from 'src/app/providers/data.service';

import {MatSelectModule} from '@angular/material/select';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, NgFor} from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgIf, NgFor, FormsModule],
})

export class ReportComponent {

  dataStudents: Estudiante[] = [];
  studentsSelect = new FormControl('');
  constructor(private dataProvider: DataService) { }
  
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.dataStudents = (response as Estudiante[]); 
    })
  }


}
