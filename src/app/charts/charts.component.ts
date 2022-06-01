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


  data$ : any;
  //years: Observable<any>;
  dataX:number[]  =  [];
  dataY:number[]  =  [];
  dataZ:number[]  =  [];
  date:string[]  =  [];

  constructor(private db: AngularFireDatabase) {


/*
    this.years = db.list('/').snapshotChanges();
    //this.years.subscribe(payload => console.log(payload))
    this.years = db.list('/').snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const key = a.payload;
        const id = a.payload.val();
        // console.log(id);
      })
    }))

 */



  }
  ngOnInit() {
    /*
    const datab = getDatabase();
    const starCountRef = ref(datab, '/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
    });

     */

    this.db.list('/').valueChanges().subscribe((t)=> {
      t.forEach((element: any) => {
        console.log(element.accx)
        this.dataX.push(element.accx)
        this.dataY.push(element.accy)
        this.dataZ.push(element.accz)
        this.date.push(element.date)
      });

      const myChart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: this.date,
          datasets: [{
            label: 'X Acceleration (G)',
            data: this.dataX,

            borderWidth: 1
          },
            {
              label: 'Y Acceleration (G)',
              data: this.dataY,

              borderWidth: 1
            },

            {
              label: 'Z Acceleration (G)',
              data: this.dataZ,

              borderWidth: 1
            }

          ],

        },
        options: {
          scales: {
            y: {
              beginAtZero: true

            },

          },


        }
      });
      this.data$ = t


    })
  }
}
