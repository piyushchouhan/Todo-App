import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styleUrls: ['./todos-item.component.scss']
})

export class TodosItemComponent implements OnInit {

  @Input() todo! : Todo
  @Output() todoClicked : EventEmitter<void> = new EventEmitter
  @Output() editClicked : EventEmitter<void> = new EventEmitter
  @Output() deleteClicked : EventEmitter<void> = new EventEmitter

  ngOnInit(): void{
  
  }

  onTodoClicked(){
    this.todoClicked.emit()
  }
  OnEditClicked(){
    this.editClicked.emit()
  }

  onDeleteClicked(){
    this.deleteClicked.emit()
  }


}
