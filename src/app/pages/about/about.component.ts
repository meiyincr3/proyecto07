import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  description: string = 'Datos de un curso de HCI-Proyecto Final C & C'; /* Cambie el texto con la descripción de su proyecto */
}
