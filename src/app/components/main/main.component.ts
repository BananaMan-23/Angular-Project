import { Component } from "@angular/core";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  standalone: true
})
export class MainComponent {
   name: string = "Жак-ив-кусто";
   about: string = "Первооткрыватель"
   openPopup() {
    const popup = document.querySelector('.popup_open-edit')
    popup?.classList.add('popup_opened')
   }
   closePopup() {
    const popup = document.querySelector('.popup')
    popup?.classList.remove('popup_opened')
   }
   openPopupCardAdd() {
    const popup = document.querySelector('.popup_card-add')
    popup?.classList.add('popup_opened')
   }
   closePopupCardAdd() {
    const popup = document.querySelector('.popup_card-add')
    popup?.classList.remove('popup_opened')
   }
   openPopupAvatar() {
    const popup = document.querySelector('.popup_avatar')
    popup?.classList.add('popup_opened')
   }
   closePopupAvatar() {
    const popup = document.querySelector('.popup_avatar')
    popup?.classList.remove('popup_opened')
   }
}
