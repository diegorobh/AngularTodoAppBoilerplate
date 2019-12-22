import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
  }

  //set dinamic classes
  setClasses(){
    let classes = {
      //define classname todo and a condition to add (true, always add)
      'todo': true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    todo.completed = !todo.completed;
  }

  onDelete(todo){
    console.log("delete");
  }

}
