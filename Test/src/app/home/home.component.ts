import { Component, OnInit } from '@angular/core';
import { MobileService } from '../mobile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobiles: { image: string, name: string, price: number, color: string, spec: string, camera: string, ram: string, battery: string }[] = [];

  constructor(private mobile: MobileService) {

  }

  ngOnInit(): void {
    this.mobiles = this.mobile.getMobiles();
  }

  setDetails(mob: { image: string, name: string, price: number, color: string, spec: string, camera: string, ram: string, battery: string }) {
    this.mobile.setDetails(mob);
  }
}
