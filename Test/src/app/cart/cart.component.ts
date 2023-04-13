import { Component,OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  mobileDet:{ image: string, name: string, price: number, color: string, spec: string, camera: string, ram: string, battery: string}| undefined;

  constructor(private mobile: MobileService){

  }

  ngOnInit(): void {
    this.mobileDet=this.mobile.getDetails();
      
  }
  msg():void{
    alert('Your Order has been Placed Thanks for Shopping');
  }
}
