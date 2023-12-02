import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { HttpClient } from '@angular/common/http';

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
  


  ngOnInit() {
    // Contenido del método ngOnInit del archivo original
  }

  aplicarFiltro() {
    // Contenido del método aplicarFiltro del archivo original
  }

  async getData(urlParams: any) {
    // Contenido del método getData del archivo original
  }

  toggleLed() {
    // Contenido del método toggleLed del archivo original
  }
}
