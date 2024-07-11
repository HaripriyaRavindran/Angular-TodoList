import { Component } from '@angular/core';
import { Todo } from '../../Todos';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from '../add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {

  todos:Todo[];

  constructor() {
    this.todos=[
      {
        sno:1,
        title:"Angular",
        desc: "Learn angular",
        active: true
      },
      {
        sno:2,
        title:"Job",
        desc: "Apply for jobs",
        active: true
      },
      {
        sno:3,
        title:"Gym",
        desc: "Go to gym",
        active: true
      },
      {
        sno:4,
        title:"Books",
        desc: "Read books",
        active: true
      }
    ]
  }

  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo)
    this.todos.splice(index,1)
  }
  addTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.push(todo)
  }
}
