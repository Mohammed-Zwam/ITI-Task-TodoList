import { Component } from '@angular/core';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';
import { Todo } from '../models/Todo';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-todo-container',
  imports: [TodoForm, TodoList],
  templateUrl: './todo-container.html',
  styleUrl: './todo-container.css'
})
export class TodoContainer {
  todoList: Todo[] = [];

  setNewTask($event: string) {
    let newTodo: Todo = {
      id: uuidv4(),
      taskTitle: $event,
      isCompleted: false
    }
    this.todoList.push(newTodo);
  }
}
