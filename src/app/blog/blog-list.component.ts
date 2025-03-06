import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-blog-list',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.scss'],
    imports: [RouterModule, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent {
  blogs = [
    { id: '1', title: 'The Ultimate Sports Betting Dashboard', summary: 'Explore key metrics, trends, and insights in this comprehensive dashboard.', date: '2023-09-01', readTime: '8 min read' },
    { id: '2', title: 'How to Maximize Your ROI in Betting', summary: 'Learn strategies to improve your betting ROI with data-driven insights.', date: '2023-08-15', readTime: '7 min read' },
    { id: '3', title: 'Understanding the Trends: Wins & Losses', summary: 'An in-depth look at win/loss trends and what they mean for sports betting.', date: '2023-07-30', readTime: '10 min read' }
  ];
}
