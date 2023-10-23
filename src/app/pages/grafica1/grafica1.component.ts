import { Component } from '@angular/core';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  labels1: string[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  data1 = [350, 450, 100];
  labels2: string[] = [
    'Download',
    'In-Store',
    'Mail-Order',
  ];
  data2 = [100, 500, 200];

}
