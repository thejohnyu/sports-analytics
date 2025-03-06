import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
    selector: 'app-survey',
    templateUrl: './survey.component.html',
    styleUrls: ['./survey.component.scss'],
    imports: [ReactiveFormsModule, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SurveyComponent implements OnInit {
  surveyForm!: FormGroup;
  currentStep = 0;
  totalSteps = 3;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.surveyForm = this.fb.group({
      question1: ['', Validators.required],
      question2: ['', Validators.required],
      question3: [
        '',
        [Validators.required, Validators.min(1), Validators.max(10)],
      ],
    });
    this.showStep();
  }

  previous(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showStep();
    }
  }

  next(): void {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
      this.showStep();
    }
  }

  isFinalStep(): boolean {
    return this.currentStep === this.totalSteps - 1;
  }

  onSubmit(): void {
    if (this.surveyForm.valid) {
      console.log('Survey submitted:', this.surveyForm.value);
    }
  }

  showStep(): void {
    for (let i = 0; i < this.totalSteps; i++) {
      const stepElem = document.getElementById('step' + i);
      if (stepElem) {
        stepElem.style.display = i === this.currentStep ? 'block' : 'none';
      }
    }
  }
}
