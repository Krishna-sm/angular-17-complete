import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormComponent } from './form/form.component';
import { TodosComponent } from './todos/todos.component';
import { Todo } from './models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Krishna';
 
}




