import { Component,OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  mobileDet:{ image: string, name: string, price: number, color: string, spec: string, camera: string, ram:string, battery:string } | undefined;

  constructor(private mobile: MobileService){

  }

  ngOnInit(): void {
    this.mobileDet=this.mobile.getDetails();
      
  }

}
