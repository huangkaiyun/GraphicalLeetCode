import { Component, OnInit, Input } from '@angular/core';
import { Difficulty } from '@core/types';

@Component({
  selector: 'app-difficulty',
  templateUrl: './difficulty.component.html',
  styleUrls: ['./difficulty.component.less'],
})
export class DifficultyComponent implements OnInit {
  @Input() difficulty: Difficulty = 'easy';

  color: Record<Difficulty, string> = {
    easy: '#00B8A3',
    medium: '#FFC01E',
    hard: '#FF374F',
  };

  constructor() {}

  ngOnInit(): void {}
}
