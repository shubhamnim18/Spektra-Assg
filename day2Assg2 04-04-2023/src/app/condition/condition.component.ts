import { Component } from '@angular/core';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent {
  valid:boolean=false;
  invalid:boolean=false;
  val():void{
    this.valid=true;
    this.invalid=false;
  }
  inval():void{
    this.valid=false;
    this.invalid=true;
  }

  
}
