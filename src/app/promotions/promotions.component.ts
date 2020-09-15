import {
  Component,
  OnInit
} from '@angular/core';
import {
  DataService
} from '../data.service'
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component'
import { from } from 'rxjs';
@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent implements OnInit {
  ngOnInit(): void {}
  promotions = ['True Wireless', 'Earbuds', 'Headphones']; //pructos en promociòn
  store = {
    street: 'Chorrillos',
    city: 'Lima'
  }
  posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data =>{
      this.posts = data;
      console.log(this.posts);
    });
  }


  ButtPromotionadd(newPromotion) {
    this.promotions.push(newPromotion.value); // Agrega datos
    newPromotion.value = '';
    return false;

  }

  ButtPromotiondelete(promotion) {

    for (let i = 0; i < this.promotions.length; i++) {
      if (promotion == this.promotions[i]) {
        console.log("se borro correctamente la promocion " + this.promotions[i]);
        this.promotions.splice(i, 1); //Borra datos

      }

    }
  }




}
