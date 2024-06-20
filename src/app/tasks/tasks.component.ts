import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input() name?: string;

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }
}
