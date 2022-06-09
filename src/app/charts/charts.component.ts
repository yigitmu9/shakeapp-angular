import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {Chart} from 'chart.js';


@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent {

  //phone0
  data$: any;
  dataX: number[] = [];
  dataY: number[] = [];
  dataZ: number[] = [];
  date: string[] = [];

  //phone1
  data$$: any;
  dataX1: number[] = [];
  dataY1: number[] = [];
  dataZ1: number[] = [];
  date1: string[] = [];


  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    //phone1
    /*
    this.db.list('/Yiğit’s iPad').valueChanges().subscribe((a) => {
      a.forEach((element: any) => {


        this.dataX1.push(element.accx)
        this.dataY1.push(element.accy)
        this.dataZ1.push(element.accz)
        this.date1.push(element.date)


      });

     */

      //phone0
      this.db.list('/Yiğit\'s iPhone').valueChanges().subscribe((t) => {
        t.forEach((element: any) => {


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
              label: 'X Acceleration(G)',
              data: this.dataX,

              borderWidth: 1
            },
              {
                label: 'Y Acceleration(G)',
                data: this.dataY,

                borderWidth: 1
              },

              {
                label: 'Z Acceleration(G)',
                data: this.dataZ,

                borderWidth: 1
              },
              /*
              {
                label: 'X Acceleration(G) Mac',
                data: this.dataX1,

                borderWidth: 1
              },
              {
                label: 'Y Acceleration(G) Mac',
                data: this.dataY1,

                borderWidth: 1
              },
              {
                label: 'Z Acceleration(G) Mac',
                data: this.dataZ1,

                borderWidth: 1
              }

               */

            ],






          }


          ,
          options: {
            scales: {
              y: {
                beginAtZero: true

              },

            },


          }
        });
        this.data$ = t
        //this.data$$ = a


      })


    //})
  }
}
