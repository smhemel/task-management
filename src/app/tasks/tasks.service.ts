import { DUMMY_TASKS } from '../dummy-tasks';

export class TasksService {
  tasks = DUMMY_TASKS;

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
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
