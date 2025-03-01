import { Injectable } from '@angular/core';

export interface Theme {
  '--color-primary': string;
  '--color-secondary': string;
  '--color-background': string;
  '--color-text': string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themes: { [key: string]: Theme } = {
    default: {
      '--color-primary': '#202123',
      '--color-secondary': '#fff',
      '--color-background': '#fff',
      '--color-text': '#333'
    },
    dark: {
      '--color-primary': '#000',
      '--color-secondary': '#444',
      '--color-background': '#222',
      '--color-text': '#eee'
    },
    blue: {
      '--color-primary': '#0d47a1',
      '--color-secondary': '#e3f2fd',
      '--color-background': '#bbdefb',
      '--color-text': '#0d47a1'
    }
  };

  setTheme(themeName: string): void {
    const theme = this.themes[themeName] || this.themes['default'];
    Object.keys(theme).forEach(key => {
      document.documentElement.style.setProperty(key, theme[key]);
    });
    localStorage.setItem('selectedTheme', themeName);
  }

  getAvailableThemes(): string[] {
    return Object.keys(this.themes);
  }
}
