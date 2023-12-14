import { Component, inject } from '@angular/core';
import { Measures } from '../../types/measures';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectlength',
  standalone: true,
  imports: [],
  templateUrl: './selectlength.component.html',
  styleUrl: './selectlength.component.css',
})
export class SelectlengthComponent {
  public arrayMeasures!: Measures[];
  public router = inject(Router);

  constructor() {
    this.arrayMeasures = [
      {
        value: 2,
        type: '2x2',
        icon: 'square',
      },
      {
        value: 4,
        type: '4x4',
        icon: 'square',
      },
      {
        value: 6,
        type: '6x6',
        icon: 'square',
      },
    ];
  }

  getRange(count: number): number[] {
    return Array(count)
      .fill(0)
      .map((_, index) => index);
  }

  selectMeasure(id: number): void {
    this.router.navigate([`memotest/${id}`]);
  }
}
