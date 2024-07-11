import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todos';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit{
  title:string;
  desc:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()

  constructor(){
    this.title = ''; 
    this.desc = ''; 
  }

  ngOnInit():void{

  }
  onSubmit(){
   const todo={
    sno:8,
    title:this.title,
    desc:this.desc,
    active:true
   } 
   this.todoAdd.emit(todo);
  }
}
