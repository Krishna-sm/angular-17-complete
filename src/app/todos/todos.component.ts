import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
    @Input() todos:Todo[] =[];

    @Output() updateTodo = new EventEmitter<number>();
    @Output() DeleteTodo = new EventEmitter<number>();

    // heading =`Todos (${this.todos.length})`
}
