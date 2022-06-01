import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {getDatabase, onValue, ref} from "firebase/database";




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  years: Observable<any>;
  constructor(db: AngularFireDatabase) {

  this.years=db.list('/').snapshotChanges();

  }



  ngOnInit(): void {


  }





}
