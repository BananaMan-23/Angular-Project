import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AvatarComponent } from '../avatar/avatar.component';
import { CardComponent } from '../card/card.component';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [FormsModule,
    CommonModule,
    MatDialogModule,
    AvatarComponent,
    CardComponent,
    UserComponent
  ],
  standalone: true,
})
export class MainComponent {
  constructor(public dialog: MatDialog) {}

  openAvatar(): void {
    const dialogRef = this.dialog.open(AvatarComponent);
  }

  openCard(): void {
    const dialogRef = this.dialog.open(CardComponent);
  }

  openUserInfo(): void {
    const dialogRef = this.dialog.open(UserComponent);
  }

  name: string = 'Жак-ив-кусто';
  about: string = 'Первооткрыватель';
  url: string = '../../../assets/images/avatar.png';
  title: string = 'Домбай'

  likeEvent() {
    const like = document.querySelector('.element__group-like')
    like?.classList.toggle('element__group-like_active')
  }
}

