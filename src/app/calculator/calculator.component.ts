import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  imports: [CommonModule],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent {
  activeCalculator: 'moneyline' | 'convert' | 'parlay' = 'moneyline';

  setActive(calculator: 'moneyline' | 'convert' | 'parlay'): void {
    this.activeCalculator = calculator;
  }
}
