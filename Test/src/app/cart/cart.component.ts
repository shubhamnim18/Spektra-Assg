import { Component,OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  mobiledet:{ image: string, name: string, price: number, color: string, spec: string, camera: string, ram: string, battery: string, quantity:number}[]=[];

  constructor(private mobile: MobileService){

  }

  ngOnInit(): void {
    this.mobiledet=this.mobile.getDetails();
      
  }
  msg():void{
    this.mobiledet.pop();
    alert('Your Order has been Placed Thanks for Shopping');
  }
}
