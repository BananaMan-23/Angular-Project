import { Component, Inject,  EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(
    public dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: string; about: string},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updataUserInfo() {
    this.dialogRef.close(this.data);
  }
}
