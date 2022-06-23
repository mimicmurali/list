import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  @Input() prodList:any;
  newProduct:any;
 

  add()
  {
    //this.prodList.push(this.newProduct);
    //to insert it in the first place
    this.prodList.unshift(this.newProduct)
    localStorage.setItem('item',JSON.stringify(this.prodList))
    this.newProduct='';
  }


}
