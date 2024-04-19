import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Todo } from '../models';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
// 
      // todos:Todo[]=[];

      @Input() todosForm!:FormGroup;

      @Output() submitTodos = new EventEmitter();

 

}
