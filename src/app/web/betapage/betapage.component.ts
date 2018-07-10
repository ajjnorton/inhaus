import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-betapage',
  templateUrl: './betapage.component.html',
  styleUrls: ['./betapage.component.scss']
})
export class BetapageComponent implements OnInit {


  questions: any[];

  form: FormGroup;
  thankYou = false;

  constructor(public fb: FormBuilder) {
    this.createForm();
    this.questions = [
      { question: "Which aspects of your property management activity currently causes you the most pain?" },
      { question: "What are the most important things our platfom should be able to do for you?" }
    ]
  }

  ngOnInit() {
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
  }

}
