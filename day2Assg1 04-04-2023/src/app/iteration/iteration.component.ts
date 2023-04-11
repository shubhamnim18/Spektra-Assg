import { Component } from '@angular/core';

@Component({
  selector: 'app-iteration',
  templateUrl: './iteration.component.html',
  styleUrls: ['./iteration.component.css']
})
export class IterationComponent {
  user=[{id:1,name:'Shubham',dept:'Dev'},
  {id:2,name:'Rakesh',dept:'ST'},
  {id:3,name:'Shrinath',dept:'Dev'}]
}
