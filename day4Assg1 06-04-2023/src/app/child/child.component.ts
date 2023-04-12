import { Component, Input, OnInit} from '@angular/core';
import { DataServiceService } from '../data-service.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  
  constructor(private dataService:DataServiceService){}

  students: number = 0;
  males: number = 0;
  females: number = 0;
  // @Input() totalStudents:number =0;
  // @Input() totalMales:number =0;
  // @Input() totalFemales:number =0
  ngOnInit(): void {
    this.students = this.dataService.getStudent();
    this.males = this.dataService.getMales();
    this.females = this.dataService.getFemales();
  }
}
