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

  //phone2
  data$$$: any;
  dataX2: number[] = [];
  dataY2: number[] = [];
  dataZ2: number[] = [];
  date2: string[] = [];

  //phone3
  data$$$$: any;
  dataX3: number[] = [];
  dataY3: number[] = [];
  dataZ3: number[] = [];
  date3: string[] = [];


  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {



    /*
    //phone3
    this.db.list('/').valueChanges().subscribe((t) => {
      t.forEach((element: any) => {


        this.dataX3.push(element.accx)
        this.dataY3.push(element.accy)
        this.dataZ3.push(element.accz)
        this.date3.push(element.date)


      });

     */

    //phone2
    this.db.list('/').valueChanges().subscribe((t) => {
      t.forEach((element: any) => {


        this.dataX2.push(element.accx)
        this.dataY2.push(element.accy)
        this.dataZ2.push(element.accz)
        this.date2.push(element.date)


      });

    //phone1

    this.db.list('/Ata Baran iPhone’u').valueChanges().subscribe((a) => {
      a.forEach((element: any) => {


        this.dataX1.push(element.accx)
        this.dataY1.push(element.accy)
        this.dataZ1.push(element.accz)
        this.date1.push(element.date)


      });



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
              label: 'X Acceleration(G) - iPhone0',
              data: this.dataX,

              borderWidth: 1
            },
              //Phone0
              {
                label: 'Y Acceleration(G) - iPhone0',
                data: this.dataY,

                borderWidth: 1
              },

              {
                label: 'Z Acceleration(G) - iPhone0',
                data: this.dataZ,

                borderWidth: 1
              },
              //Phone1

              {
                label: 'X Acceleration(G)- iPhone1',
                data: this.dataX1,

                borderWidth: 1
              },
              {
                label: 'Y Acceleration(G) - iPhone1',
                data: this.dataY1,

                borderWidth: 1
              },
              {
                label: 'Z Acceleration(G) - iPhone1',
                data: this.dataZ1,

                borderWidth: 1
              },

              //Phone2

              {
                label: 'X Acceleration(G) - iPhone2',
                data: this.dataX1,

                borderWidth: 1
              },
              {
                label: 'Y Acceleration(G) - iPhone2',
                data: this.dataY1,

                borderWidth: 1
              },
              {
                label: 'Z Acceleration(G) - iPhone2',
                data: this.dataZ1,

                borderWidth: 1
              },

              //Phone3
              /*
              {
                label: 'X Acceleration(G) - iPhone3',
                data: this.dataX1,

                borderWidth: 1
              },
              {
                label: 'Y Acceleration(G) - iPhone3',
                data: this.dataY1,

                borderWidth: 1
              },
              {
                label: 'Z Acceleration(G) - iPhone3',
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
        //this.data$$ = b
        //this.data$$ = c


      })


    })
    })
    //})
  }
}
