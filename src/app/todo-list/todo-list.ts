import { Component, Input } from '@angular/core';
import { Todo } from '../models/Todo';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    imports: [NgClass],
    templateUrl: './todo-list.html',
    styleUrl: './todo-list.css'
})
export class TodoList {
    @Input() todoListInput!: Todo[]

    handleCheck(id: number) {
        let idx = this.todoListInput.findIndex((todo => todo.id == id));
        this.todoListInput[idx].isCompleted = !this.todoListInput[idx].isCompleted;
    }

    handleDelete(id: number) {
        let idx = this.todoListInput.findIndex((todo => todo.id == id));
        this.todoListInput.splice(idx, 1);
    }
}
