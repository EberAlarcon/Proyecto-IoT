// dashboard.page.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  folder: string = 'Dashboard'; // Asegúrate de tener esta propiedad definida y asignada

  appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'mail' },
    // ... otras páginas ...
  ];

  constructor() {}

  ngOnInit() {}
}