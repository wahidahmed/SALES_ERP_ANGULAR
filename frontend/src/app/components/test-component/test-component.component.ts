import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor() { }

  number=50;
  isClicked=false;

  onClicked(){
    this.isClicked=true;
  }

  ngOnInit() {
  }

}
