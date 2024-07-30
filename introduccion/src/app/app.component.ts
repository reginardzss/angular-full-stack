import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola mundo!';
  users: string[] = ['Pepe','Juan', 'Maria', 'Gin'];
  //users!: string[] 
  visible: boolean = false;

  setVisible(): void{
    this.visible = this.visible? false:true;
    console.log('hemos hecho click en setvisible');
  }

}
