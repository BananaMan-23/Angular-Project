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

  lists = [
    {
      image: './../../assets/images/dombai.png',
      title: 'Домбай',
    }
  ]

  name: string = 'Жак-ив-кусто';
  about: string = 'Первооткрыватель';
  url: string = '../../../assets/images/avatar.png';

  constructor(public dialog: MatDialog) {}

  openAvatar(): void {
    const dialogRef = this.dialog.open(AvatarComponent, {
      data: {avatar: ''}
    });
    dialogRef.afterClosed().subscribe(results => {
      this.url = results
    })
  }

  openCard(): void {
    const dialogRef = this.dialog.open(CardComponent, {
      data: {title: '', image: ''}
    });
    dialogRef.afterClosed().subscribe(results => {
      this.lists.push({image: results.image, title: results.title})
    })
  }

  openUserInfo(): void {
    const dialogRef = this.dialog.open(UserComponent, {
      data: {name: '', about: ''}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.name = result.name;
      this.about = result.about
    })
  }

  likeEvent() {
    const like = document.querySelector('.element__group-like')
    like?.classList.toggle('element__group-like_active')
  }

  deleteCard() {
    this.lists.pop()
  }
}

