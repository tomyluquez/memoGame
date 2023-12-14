import { Injectable, signal } from '@angular/core';
import { createTable } from './createTable';
import { cuonter, resetTime } from './count';

@Injectable({
  providedIn: 'root',
})
export class MemotestService {
  arrayMemotest: number[] = [];
  isMatches = signal<any>({});
  isOpenModal = signal<boolean>(false);
  quantityMoves = signal<number>(0);
  time = signal('00:00');
  intervalId: any;

  stopTime() {
    clearInterval(this.intervalId);
  }

  getTable(quantity: number): number[] {
    this.stopTime();
    resetTime();
    this.isMatches.set({});
    this.arrayMemotest = createTable(quantity);

    for (let i = 0; i < this.arrayMemotest.length; i++) {
      this.isMatches.update((prev) => {
        return {
          ...prev,
          [i]: null,
        };
      });
    }

    this.intervalId = setInterval(() => {
      cuonter(); // Suponiendo que cuonter actualiza el tiempo
      this.time.set(cuonter()); // Actualiza el valor del signal time
    }, 1000);

    return this.arrayMemotest;
  }
  getMatches(arrayCards: number[]) {
    this.quantityMoves.update((prev) => prev + 1);
    if (
      this.arrayMemotest[arrayCards[0]] === this.arrayMemotest[arrayCards[1]]
    ) {
      this.isMatches.update((prev) => {
        return {
          ...prev,
          [arrayCards[0]]: true,
          [arrayCards[1]]: true,
        };
      });

      const allTrue = Object.values(this.isMatches()).every(
        (valor) => valor === true
      );

      if (allTrue) {
        this.endGame();
        return;
      }
    } else {
      this.isMatches.update((prev) => {
        return {
          ...prev,
          [arrayCards[0]]: false,
          [arrayCards[1]]: false,
        };
      });
    }
  }

  openModal() {
    this.isOpenModal.set(true);
  }

  closeModal() {
    this.isOpenModal.set(false);
  }

  endGame() {
    this.openModal();
    this.stopTime();
  }
}
