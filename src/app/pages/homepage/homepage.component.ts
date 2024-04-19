import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../../models';
import { FormComponent } from '../../form/form.component';
import { TodosComponent } from '../../todos/todos.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [FormComponent,TodosComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  todos:Todo[]=[];

  ngOnInit(){
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]")
  }


  todosForm = new FormGroup({
    title: new FormControl('',Validators.required),
    desc: new FormControl('',Validators.required)
  })


  submitTodos (){
        const {desc,title} = this.todosForm.value
      if(!title || !desc){
          alert("please fill all fields")
        return
      }
    const item:Todo ={
        id:new Date().getTime(),
        title,
        desc,
        isComplete:false
    }
    this.todos.push(item);
    localStorage.setItem("todos",JSON.stringify(this.todos));

  
    // console.log(this.todosForm.value);
    this.todosForm.reset()

    console.log(this.todos);
    
    
  }



  updateTodo(id:number){
        // this.todos = this.todos.filter((cur)=>cur.id !==id);
        this.todos = this.todos.map((cur)=>{
            if(cur.id ===id){
              return {
                ...cur,
                [`isComplete`] : true
              }
            }
          return cur
        })
        localStorage.setItem("todos",JSON.stringify(this.todos));
  }


  DeleteTodo(id:number){
    this.todos = this.todos.filter((cur)=>cur.id !==id);
   
    localStorage.setItem("todos",JSON.stringify(this.todos));
}
}
