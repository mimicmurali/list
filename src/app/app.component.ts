import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Product ';
  //prodList: String[] = ['Dazler','LAkme','Eyeconics','Eyetex','Lotus']
  prodList: String[] = [];

ngOnInit(): void {
  if(localStorage.getItem('item')){
//  this.prodList=JSON.parse( localStorage.getItem('item'))||'{}'
this.prodList=JSON.parse( localStorage.getItem('item')!)
}
}
}
