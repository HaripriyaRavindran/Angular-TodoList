import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {

  @Input() todo!:Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter()
  constructor(){

  }
  
  deleteTodo(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("on click")
  }

}
