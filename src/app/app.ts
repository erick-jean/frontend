import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSlideToggle} from '@angular/material/slide-toggle';
import { Sidenav } from "./core/layout/sidenav/sidenav";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatSlideToggle, Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
