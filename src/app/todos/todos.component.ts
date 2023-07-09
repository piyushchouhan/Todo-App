import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import { DataService } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos : Todo[] =  [];
  showValidationError! : boolean;

  constructor(private dataService : DataService, private dialog: MatDialog){
  }

  ngOnInit(): void{
    this.todos = this.dataService.getAllTodos();
  }

  onFormSubmit(form:NgForm): true | undefined{
    if (form.invalid) return this.showValidationError = true
    this.dataService.addTodo({ text: form.value.text, completed: false });
    form.reset();
    return true;
  }

  toggleCompleted(todo:Todo){
    // alert("This todo is clicked")
    // set todo to completed
    todo.completed = !todo.completed;
  }

  editTodo(todo:Todo){
    // we need index of todo
    const index = this.todos.indexOf(todo)

    let dialogRef = this.dialog.open(EditTodoDialogComponent,{
      width: '700px',
      data: todo,
    });

    dialogRef.afterClosed().subscribe((result) => {
        if(result){
          this.dataService.updateTodo(index, result)
        }
   })
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo)
    this.dataService.deleteTodo(index)
  }


}
