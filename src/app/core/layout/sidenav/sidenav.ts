import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header } from '../header/header';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    Header,
    MatExpansionModule,
  ],
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  private breakpointObserver = inject(BreakpointObserver);

  isMobile = signal(false);
  isOpened = signal(false);
  isCollapsed = signal(false);

  constructor() {
    this.breakpointObserver.observe('(max-width: 768px)').subscribe((result) => {
      this.isMobile.set(result.matches);

      if (result.matches) {
        this.isOpened.set(false);
      } else {
        this.isOpened.set(true);
      }
    });
  }

  toggleMenu() {
    this.isOpened.set(!this.isOpened());
  }
}
