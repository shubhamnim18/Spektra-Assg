import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit{
  constructor(){

  }
  ngOnInit(): void {
      
  }
  name:string ="Shubham"
  send():void{
    alert("Hello  "+this.name);
  }
}
