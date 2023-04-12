import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 847301, name: 'Watch', image:"https://images-cdn.ubuy.co.in/634dd435952dd03a7a049754-men-watches-military-black-steel.jpg",price: 3999, quantity: 0 },
    { id: 730202, name: 'Jeans', image:"https://www.jeanswholesaler.in/4004-thickbox_default/men-s-vintage-denim-tone-jeans-ds118.jpg",price: 2599, quantity: 0 },
    { id: 649273, name: 'T-Shirt', image:"https://5.imimg.com/data5/UM/HM/HM/SELLER-85575430/sports-t-shirt-500x500.jpg",price: 999, quantity: 0 },
    { id: 927384, name: 'Sun Glasses', image:"https://5.imimg.com/data5/ANDROID/Default/2022/7/PK/GH/QJ/19051907/product-jpeg-500x500.jpg",price: 7999, quantity: 0 },
    { id: 727815, name: 'Shirt', image:"https://cdn.shopify.com/s/files/1/2044/6345/products/1_c3e67723-b461-4abf-a112-211053c8348e.jpg?v=1614013160",price: 1299, quantity: 0 },
  ];

  totalAmount: number = 0;

  updateTotal() {
    this.totalAmount = this.products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}
