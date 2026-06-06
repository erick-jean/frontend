import { Component, output } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [MatToolbar, MatIcon, MatIconModule, MatButtonModule, MatToolbarModule],
})
export class Header {
  menuToggle = output<void>();

  onMenuClick(): void {
    this.menuToggle.emit();
  }
}
