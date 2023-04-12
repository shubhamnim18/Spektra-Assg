import { Component,OnInit } from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  total:number | undefined;
  constructor(private prod:ProdService){}
  ngOnInit(): void {
      this.total=this.prod.get();
  }
  msg():void{
    alert("Order Successfully Placed")
  }

}
