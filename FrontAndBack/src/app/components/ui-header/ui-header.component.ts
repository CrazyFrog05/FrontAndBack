import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-header',
  templateUrl: 'ui-header.component.html',
  styleUrls: ['ui-header.component.css'],
  standalone: true,
})
export class UiHeaderComponent {
  constructor(private router: Router) {}

  handleCatalogClick() {
    this.router.navigateByUrl('/catalog');
  }

  handleCartClick() {
    this.router.navigateByUrl('/cart');
  }

  handleProfileClick() {
    this.router.navigateByUrl('/profile');
  }
}
