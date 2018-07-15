import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-betapage',
  templateUrl: './betapage.component.html',
  styleUrls: ['./betapage.component.scss']
})
export class BetapageComponent implements OnInit {


  questions: any[];

  form: FormGroup;
  thankYou = false;

  private itemDoc: AngularFirestoreDocument<any>;
  private itemsCollection: AngularFirestoreCollection<any>;

  item: Observable<any>;
  items: Observable<any[]>;
  questionNo:number=0;
  question:string;

  constructor(public fb: FormBuilder, private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.createForm();
    this.questions = [
      { question: "Which aspects of your property management activity currently causes you the most pain?" },
      { question: "What are the most important things our platfom should be able to do for you?" },
      { question: "Do you currently use cloud based software, If you dont, why is that?" },
    ]

    this.itemsCollection = afs.collection<any>('survey');
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(response => {
      console.log(response);

    })
    this.questionNo=this.getRandomInt(0,this.questions.length);
    this.question=this.questions[this.questionNo].question;

  }

  ngOnInit() {
    
  }


  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  createForm() {
    this.form = this.fb.group({
      answer: ['', [Validators.required]]
    });
  }


  onSubmit(event) {
    console.log(event.answer);
    this.form.reset();
    this.thankYou = true;
    this.itemsCollection.add({ question: this.question, answer: event.answer, dateTime: new Date(), publish: false });
  }

}
