import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos: Todo[] = [
    { text: "This is a test", completed: false},
    { text: "This is a second test", completed: false }
  ];

  constructor() { }


  getAllTodos(){
    return this.todos;
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number){
    this.todos.splice(index, 1);
  }


}
