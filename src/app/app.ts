import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Inventory } from './AppComponents/inventory/inventory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, Inventory],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('sammy-gadget-store');
}
