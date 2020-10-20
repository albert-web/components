import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-special-request',
  templateUrl: './special-request.component.html',
  styleUrls: ['./special-request.component.css']
})
export class SpecialRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public foo = "";
public foo2 = "";
  getspecialRequest = () => {

    this.foo2 = this.foo;


  }
}
