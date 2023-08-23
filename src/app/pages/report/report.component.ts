import { Component } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';

//Importación de la interfaz
import { Profesor } from 'src/app/interfaces/profesor';
import { Curso } from 'src/app/interfaces/curso';
//Importación del servicio
import { DataProfesorService } from 'src/app/providers/data-profesor.service';
import { DataCursoService } from 'src/app/providers/data-curso.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, ReactiveFormsModule, NgIf, NgFor, FormsModule, MatTableModule],
})

export class ReportComponent {

  public dataTeachers: Profesor[] = [];
  public dataCurso: Curso[] = [];
  public filteredCurso: Curso[] = [];

  /* LISTA CON LOS ATRIBUTOS DE LA INTERFAZ */
  displayedColumns: string[] = ['idcurso', 'nombre_curso', 'descripcion_curso', 'nivel_dificultad', 'profesor'];
  teachersSelect = new FormControl('');

  // Función para filtrar estudiantes en base a la selección
  filterCurso(selectedValue: string) {
    //this.filteredTeachers = this.dataTeachers.filter(teacher => teacher.nombre === selectedValue);
   if (selectedValue === '') {
      this.filteredCurso = this.dataCurso;
    } else {
      // Filtrar cursos en función del profesor seleccionado
      this.filteredCurso = this.dataCurso.filter(teacher => teacher.profesor === selectedValue);
    }
  }
  
  constructor(private dataProvider: DataProfesorService, private dataCursoProvider: DataCursoService) { }

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.dataTeachers = (response as Profesor[]);
     
    })
    this.dataCursoProvider.getResponse().subscribe((response) => {
      this.dataCurso = (response as Curso[]);
      this.filteredCurso = this.dataCurso;
    })

    // Suscribirse a los cambios en el FormControl
    this.teachersSelect.valueChanges.subscribe((selectedValue) => {
      if (selectedValue !== null) {
        this.filterCurso(selectedValue);
      } else {
        this.filteredCurso = this.dataCurso;
      }
    });

  }



}
