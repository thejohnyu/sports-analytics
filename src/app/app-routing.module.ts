import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { FallbackComponent } from './fallback/fallback.component';
// import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'teams',
    loadComponent: () =>
      import('./teams/teams.component').then((m) => m.TeamsComponent),
    // canActivate: [AuthGuard],
  },
  {
    path: 'statistics',
    loadComponent: () =>
      import('./statistics/statistics.component').then(
        (m) => m.StatisticsComponent
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'survey',
    loadComponent: () =>
      import('./survey/survey.component').then((m) => m.SurveyComponent),
    // canActivate: [AuthGuard],
  },
  {
    path: 'canvas',
    loadComponent: () =>
      import('./canvas/canvas.component').then((m) => m.CanvasComponent),
    // canActivate: [AuthGuard],
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./blog/blog-list.component').then((m) => m.BlogListComponent),
    // canActivate: [AuthGuard],
  },
  //   { path: 'blog/:blogId', loadComponent: () => import('./blog/blog-detail.component').then(m => m.BlogDetailComponent), canActivate: [AuthGuard] },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./calculator/calculator.component').then(
        (m) => m.CalculatorComponent
      ),
    // canActivate: [AuthGuard],
  },
  {
    path: 'dynamic-layout',
    loadComponent: () =>
      import('./dynamic-layout/dynamic-layout.component').then(
        (m) => m.DynamicLayoutComponent
      ),
    // canActivate: [AuthGuard],
  },
  { path: '**', component: FallbackComponent },
];
