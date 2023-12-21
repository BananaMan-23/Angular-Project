import { Component, Inject,  EventEmitter, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent {
  constructor(
    public dialogRef: MatDialogRef<AvatarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {avatar: string},
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateAvatar() {
    this.dialogRef.close(this.data.avatar);
  }

}
