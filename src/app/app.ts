import { Component, signal } from '@angular/core';
import { TodoContainer } from './todo-container/todo-container';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  imports: [TodoContainer, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ITI-Task-TodoList');
}
