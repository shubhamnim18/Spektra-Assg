import { Component,OnInit } from '@angular/core';
import { ProdService } from '../prod.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  products:any[] =[];
  constructor(private prod:ProdService){}

  ngOnInit(): void {
    this.products=this.prod.getProducts();
  }
  totalAmount: number = 0;

  updateTotal() {
    this.totalAmount = this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
  setTotal(){
    this.prod.set(this.totalAmount);
  }
}
