import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Header } from '../header/header';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    Header,
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
    this.breakpointObserver.observe('(max-width: 768px)').pipe(takeUntilDestroyed()).subscribe((result) => {
      this.isMobile.set(result.matches);

      if (result.matches) {
        this.isOpened.set(false);
      } else {
        this.isOpened.set(true);
      }
    });
  }

  toggleMenu() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}
