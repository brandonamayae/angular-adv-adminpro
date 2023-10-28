import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {
          menu: 'Main', url: '/'
        },
        {
          menu: 'ProgressBar', url: 'progress'
        },
        {
          menu: 'Graficas', url: 'grafica1'
        },
        {
          menu: 'Promesas', url: 'promesas'
        },
        {
          menu: 'Rxjs', url: 'rxjs'
        }
      ]
    }
  ];

  constructor() { }
}
