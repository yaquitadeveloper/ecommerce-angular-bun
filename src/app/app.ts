import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductsListComponent, HttpClient],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ecommerce-angular-bun');
}
