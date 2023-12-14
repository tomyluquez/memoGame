import { Component, OnInit, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemotestService } from '../../services/memotest.service';
import { BackArrowComponent } from '../../shared/components/back-arrow/back-arrow.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { Matches } from '../../types/measures';

@Component({
  selector: 'app-memotest',
  standalone: true,
  imports: [BackArrowComponent, CardComponent],
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
})
export class MemotestComponent implements OnInit {
  param!: number;
  arrayMemotest: number[] = [];
  quantityActives = 0;
  arrayCards: number[] = [];
  quantityMoves = 0;
  time!: string;

  constructor(
    private router: ActivatedRoute,
    private memoServices: MemotestService
  ) {
    this.param = this.router.snapshot.params['id'];

    effect(() => {
      this.quantityMoves = this.memoServices.quantityMoves();
      this.time = this.memoServices.time();
    });
  }

  ngOnInit(): void {
    this.startGame();
  }

  startGame() {
    this.arrayMemotest = [];
    this.arrayMemotest = this.memoServices.getTable(this.param);
  }

  indexActive(index: number) {
    if (this.quantityActives < 2) {
      this.arrayCards.push(index);
    }
    this.quantityActives++;

    if (this.quantityActives === 2) {
      this.quantityActives = 0;
      this.memoServices.getMatches(this.arrayCards);
      this.arrayCards = [];
    }
  }
}
