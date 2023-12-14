import { Component } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  standalone: true,
  imports: [],
  templateUrl: './back-arrow.component.html',
  styleUrl: './back-arrow.component.css',
})
export class BackArrowComponent {
  goBack() {
    window.history.back();
  }
}
