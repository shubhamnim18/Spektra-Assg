import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor(private dataService:DataServiceService){};
  ngOnInit(): void {
      
  }
  stud=[
    {studentId:101,studentName:'Shubham',gender:'Male',dob:'18/01/2001',coursefee:150000},
    {studentId:102,studentName:'Rajat',gender:'Male',dob:'17/04/2002',coursefee:110000},
    {studentId:103,studentName:'Rakesh',gender:'Male',dob:'01/06/2001',coursefee:160000},
    {studentId:104,studentName:'Shweta',gender:'Female',dob:'01/01/2001',coursefee:140000},
    {studentId:105,studentName:'Swati',gender:'Female',dob:'01/03/2000',coursefee:200000}
  ];
  TotalStudents=0
  TotalMales=0
  TotalFemales=0
  getTotalNoStudent() {
    this.TotalStudents=this.stud.length;
  }

  getTotalMale() {
    this.TotalMales= this.stud.filter(I => I.gender === 'Male').length;
  }

  getTotalFemale(){
    this.TotalFemales= this.stud.filter(I => I.gender === 'Female').length;
  }
  sendData(): void {
    this.dataService.setData(this.TotalStudents,this.TotalMales,this.TotalFemales);
  }
}
