import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
// import { Amplify } from 'aws-amplify';
// import outputs from '../../amplify_outputs.json';
// Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
  title = 'amplify-angular-template';
}
