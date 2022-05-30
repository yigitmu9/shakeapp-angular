import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Chart, ChartDataset, ChartOptions } from 'chart.js';
import { Color} from "chart.js";
import { getDatabase, ref, onValue} from "firebase/database";


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {



  years: Observable<any>;

  constructor(db: AngularFireDatabase) {



    this.years = db.list('/').snapshotChanges();
    //this.years.subscribe(payload => console.log(payload))
    this.years = db.list('/').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const key = a.payload;
        const id = a.payload.val();
       // console.log(id);
      })
    }))



  }
  ngOnInit() {
    const datab = getDatabase();
    const starCountRef = ref(datab, '/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
    });
    const myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'X Acceleration',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        },
          {
            label: 'Y Acceleration',
            data: [9, 10, 13, 15, 12, 13],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          },

          {
            label: 'Z Acceleration',
            data: [1, 2, 3, 4, 5, 6],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }

        ],

      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
