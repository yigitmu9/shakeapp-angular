import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/compat/database";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  phones0: Observable<any>;
  phones1: Observable<any>;
  phones2: Observable<any>;
  phones3: Observable<any>;


  constructor(private db: AngularFireDatabase) {

  this.phones0=db.list('/Yiğit\'s iPhone').snapshotChanges();
  this.phones1=db.list('/').snapshotChanges();
  this.phones2=db.list('/').snapshotChanges();
  this.phones3=db.list('/').snapshotChanges();
  }


  ngOnInit(): void {}


}
