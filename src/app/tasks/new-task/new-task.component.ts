import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<{
    title: string;
    summary: string;
    dueDate: string;
  }>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  // Using Signal
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }

  onCancel() {
    this.cancel.emit();
  }
}
