import { Component, effect, inject } from '@angular/core';
import { MemotestService } from '../../../services/memotest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  isOpen = false;
  quantityMoves = 0;
  time!: string;

  public memoServices = inject(MemotestService);
  public navigate = inject(Router);

  constructor(private router: ActivatedRoute) {
    effect(() => {
      this.isOpen = this.memoServices.isOpenModal();
      this.quantityMoves = this.memoServices.quantityMoves();
      this.time = this.memoServices.time();
    });
  }

  toHome() {
    this.navigate.navigate(['/']);
    this.memoServices.closeModal();
  }
}
