import { Component, OnInit } from '@angular/core';
import { Todo } from '../modele/todo';
import { TodoDataService } from '../modele/todo-data.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoData = new TodoDataService();
  public newTask!: string;
  public todos: Todo[] = [];

  constructor() {
    this.todoData.createTodo('yo');
    this.todoData.createTodo('idk');
    this.todoData.createTodo('yeah');
    this.updateList();
  }

  notifyUser(item: string): void {
    // M.toast({ html: item });
  }

  ngOnInit() {}

  updateList() {
    this.todos = this.todoData.getTodos();
  }

  addTask() {
    this.todoData.createTodo(this.newTask);
    this.updateList();
    // M.toast({ html: 'New task added: ' + this.newTask });
    this.newTask = '';
  }
}
