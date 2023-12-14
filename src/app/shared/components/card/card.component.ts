import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  effect,
  inject,
} from '@angular/core';
import { Matches } from '../../../types/measures';
import { MemotestService } from '../../../services/memotest.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() index!: number;
  @Output() indexActive: EventEmitter<number> = new EventEmitter<number>();
  isActive!: number | null;
  isMatch!: number | null;

  public memoServices = inject(MemotestService);

  constructor() {
    effect(() => {
      if (Object.keys(this.memoServices.isMatches()).length === 0) {
        this.isMatch = null;
      }
      if (this.memoServices.isMatches()[this.index]) {
        this.isActive = this.index;
        this.isMatch = this.index;
      } else {
        setTimeout(() => {
          this.isActive = null;
        }, 300);
      }
    });
  }

  setActive() {
    this.isActive = this.index;
    this.indexActive.next(this.index);
  }
}
