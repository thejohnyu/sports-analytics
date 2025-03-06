import { CommonModule } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface Deal {
  title: string;
  description: string;
  discount: string;
  imageUrl: string;
}

interface PricingOption {
  tier: string;
  price: string;
  features: string[];
}

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingComponent implements OnInit {
  deals: Deal[] = [];
  pricingOptions: PricingOption[] = [];

  ngOnInit(): void {
    // Mock data for 10 deal cards
    this.deals = [
      {
        title: '50% Off Sports Analytics',
        description:
          'Get half off our premium analytics tool for a limited time.',
        discount: '50% OFF',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'Buy 1 Get 1 Free Insights',
        description:
          'Exclusive offer on our AI-powered betting insights service.',
        discount: 'BOGO',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: '30-Day Free Trial',
        description:
          'Experience full access to our suite of tools at no cost for 30 days.',
        discount: 'Free Trial',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: '25% Annual Subscription Discount',
        description: 'Save big with an annual subscription discount.',
        discount: '25% OFF',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'Exclusive Webinar Access',
        description: 'Join our expert-led webinar for insider betting tips.',
        discount: 'Free Access',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'Limited Edition Dashboard',
        description:
          'Upgrade your toolkit with our limited edition analytics dashboard.',
        discount: 'Exclusive',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'Special Bundle Offer',
        description: 'Bundle our analytics tools and save more.',
        discount: 'Bundle & Save',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'Referral Bonus',
        description: 'Refer a friend and earn exclusive bonuses.',
        discount: 'Bonus',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'Early Feature Access',
        description: 'Be the first to try out our new features.',
        discount: 'Early Access',
        imageUrl: '../../assets/ravens.png',
      },
      {
        title: 'VIP Support Package',
        description: 'Get personalized support from our expert team.',
        discount: 'VIP Support',
        imageUrl: '../../assets/ravens.png',
      },
    ];

    // Mock data for pricing options
    this.pricingOptions = [
      {
        tier: 'Free',
        price: '$0',
        features: [
          'Basic Analytics',
          'Limited AI Predictions',
          'Community Support',
        ],
      },
      {
        tier: 'Pro',
        price: '$29.99/month',
        features: [
          'Advanced Analytics',
          'Premium AI Predictions',
          '24/7 Expert Support',
          'Customizable Dashboards',
        ],
      },
    ];
  }
}
