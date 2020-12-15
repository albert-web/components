import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-w6-multiplication',
  templateUrl: './w6-multiplication.component.html',
  styleUrls: ['./w6-multiplication.component.css']
})
export class W6MultiplicationComponent implements OnInit {
  numberOne = 0;
  numberTwo = 0;
  
  answer = 0;
  mulitplyNumbers = () => {
    this.answer = this.numberOne * this.numberTwo;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
