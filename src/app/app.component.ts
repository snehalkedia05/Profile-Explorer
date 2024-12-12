import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ProfileMapApp';
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    if (this.isMenuOpen) {
      navLinks.classList.add('show');
    } else {
      navLinks.classList.remove('show');
    }
  }
}
