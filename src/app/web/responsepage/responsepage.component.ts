import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-responsepage',
  templateUrl: './responsepage.component.html',
  styleUrls: ['./responsepage.component.scss']
})
export class ResponsepageComponent implements OnInit {


  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;
  responses:any[]=[];

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<any>('survey');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(response => {
      this.responses=response;
    })
  }

  ngOnInit() {
  }

}
