import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  imports: [FormsModule, CommonModule],
  standalone: true,
})
export class MainComponent {
  item = [
    {
      image: './../../assets/images/dombai.png',
      title: 'Домбай',
    }
  ]
  ttl: string = ''
  img: string = ''
  name: string = 'Жак-ив-кусто';
  about: string = 'Первооткрыватель';
  avatar: string = '';
  url: string = '../../../assets/images/avatar.png';
  openPopup() {
    const popup = document.querySelector('.popup_open-edit');
    popup?.classList.add('popup_opened');
  }
  closePopup() {
    const popup = document.querySelector('.popup');
    popup?.classList.remove('popup_opened');
  }
  openPopupCardAdd() {
    const popup = document.querySelector('.popup_card-add');
    popup?.classList.add('popup_opened');
  }
  closePopupCardAdd() {
    const popup = document.querySelector('.popup_card-add');
    popup?.classList.remove('popup_opened');
  }
  openPopupAvatar() {
    const popup = document.querySelector('.popup_avatar');
    popup?.classList.add('popup_opened');
  }
  closePopupAvatar() {
    const popup = document.querySelector('.popup_avatar');
    popup?.classList.remove('popup_opened');
  }
  userInfo(name: string, about: string) {
    name = name;
    about = about;
    this.closePopup();
  }

  likeEvent() {
    const like = document.querySelector('.element__group-like')
    like?.classList.toggle('element__group-like_active')
  }

  updateAvatar() {
    this.url = this.avatar;
    this.closePopupAvatar();
  }
  addCard() {
    this.item.push({image: this.img, title: this.ttl})
    this.closePopupCardAdd()
  }
}
