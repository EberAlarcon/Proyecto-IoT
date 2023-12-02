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
  
  selectedFilter: string | undefined;
  chart: any;
  chart2: any;
temperaturas: number[] = [];
humedad: number[] = [];
date= [];
 dates = new Date();
 day = this.dates.getDate();
  month = this.dates.getMonth() + 1;
  year = this.dates.getFullYear();
filtroFecha: string | undefined='dia';
 urlParams = `?day=${this.day}&month=${this.month}&year=${this.year}`;
 isLedOn = false;

  ngOnInit() {
    // Contenido del método ngOnInit del archivo original
  }

  aplicarFiltro() {
    if (this.filtroFecha === 'dia') {
      const date = new Date();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      this.urlParams = `?day=${day}&month=${month}&year=${year}`;
    } else if (this.filtroFecha === 'mes') {
      const date = new Date();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      this.urlParams = `?month=${month}&year=${year}`;
    } else if (this.filtroFecha === 'año') {
      const date = new Date();
      const year = date.getFullYear();
      this.urlParams = `?year=${year}`;
    } else if (this.filtroFecha === 'hora') {
      const date = new Date();
      const hour = date.toISOString().slice(11, 13); // Obtener la hora (dos dígitos) desde el índice 11 al 13 de la cadena ISO
      this.urlParams = `?hour=${hour}`;
    }
    this.ngOnInit();
    // Contenido del método aplicarFiltro del archivo original
  }

  async getData(urlParams: any) {
    // Contenido del método getData del archivo original
  }

  toggleLed() {
    // Contenido del método toggleLed del archivo original
  }
}
