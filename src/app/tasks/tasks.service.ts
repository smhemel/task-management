import { DUMMY_TASKS } from '../dummy-tasks';

export class TasksService {
  tasks = DUMMY_TASKS;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((t) => t.userId === userId);
  }

  addTask(
    taskData: { title: string; summary: string; dueDate: string },
    userId: string
  ) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate,
    });

    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
