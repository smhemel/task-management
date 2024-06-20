import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId?: string;
  @Input() name?: string;

  tasks = DUMMY_TASKS;
  isAddingTask: boolean = false;

  get selectedUserTasks() {
    return this.tasks.filter((t) => t.userId === this.userId);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }

  onAddingTask() {
    this.isAddingTask = true;
  }

  onAddTask(taskData: { title: string; summary: string; dueDate: string }) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.userId!,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    this.isAddingTask = false;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
