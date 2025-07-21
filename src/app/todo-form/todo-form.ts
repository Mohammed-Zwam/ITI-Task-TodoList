import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule, NgClass],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.css',
})
export class TodoForm {
  taskTitle!: string;
  @Output() sendTaskEvent = new EventEmitter<string>();

  onSubmit() {
    if (this.taskTitle.length > 0) {
      this.sendTaskEvent.emit(this.taskTitle);
      this.taskTitle = "";
    }
  }
}
