import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  mobiles=[
    {image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',name:'Iphone 14 Pro Max',price:149999,color:'Grey',spec:'Released 2022, September 16 240g, 7.9mm thickness iOS 16, up to iOS 16.4.1 128GB/256GB/1TB storage, no card slot',camera:'16MP',ram:'6Gb',battery:'3240mAh'},
    {image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-3.jpg',name:'Iphone 14 Pro',price:129999,color:'Black',spec:'Released 2022, September 16 206g, 7.9mm thickness iOS 16, up to iOS 16.4.1 128GB/256GB/1TB storage, no card slot',camera:'14MP',ram:'4Gb',battery:'3240mAh'},
    {image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-3.jpg',name:'Iphone 14',price:109999,color:'Blue',spec:'Released 2022, September 16 172g, 7.8mm thickness iOS 16, up to iOS 16.4.1 128GB/256GB/512GB storage, no card slot',camera:'12MP',ram:'4Gb',battery:'3240mAh'},
    {image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-max-01.jpg',name:'Iphone 13 Pro Max',price:129999,color:'Grey',spec:'Released 2021, September 24 240g, 7.7mm thickness iOS 15, up to iOS 16.4.1 128GB/256GB/1TB storage, no card slot',camera:'14MP',ram:'6Gb',battery:'3240mAh'},
    {image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',name:'Iphone 13 Pro',price:99999,color:'Grey',spec:'Released 2021, September 24 204g, 7.7mm thickness iOS 15, up to iOS 16.4.1 128GB/256GB/1TB storage, no card slot',camera:'12MP',ram:'4Gb',battery:'3240mAh'},
    {image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-01.jpg',name:'Iphone 13',price:79999,color:'Grey',spec:'Released 2021, September 24 174g, 7.7mm thickness iOS 15, up to iOS 16.4.1 128GB/256GB/512GB storage, no card slot',camera:'12MP',ram:'4Gb',battery:'3240mAh'},
  ]

  mobile:{ image: string, name: string, price: number, color: string, spec: string, camera: string, ram:string, battery:string } | undefined;
  constructor() { }

  getMobiles(){
    return this.mobiles;
  }

  setDetails(mob:{ image: string, name: string, price: number ,color: string, spec: string, camera: string, ram:string, battery:string  }){
    this.mobile=mob;
  }

  getDetails(){
    return this.mobile;
  }

}
