import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../../../services/food.service";
import {Food} from "../../../shared/models/Food";
import {CartService} from "../../../services/cart.service";


@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit {
  food!:Food;

  constructor(activeRoute: ActivatedRoute, private foodService: FoodService, private cartService: CartService, private router: Router) {
    activeRoute.params.subscribe((params) => {
      if(params.id)
        foodService.getFoodById(params.id).subscribe((serverFood) =>{
          this.food = serverFood;
        });
    })

  }

  ngOnInit() {
  }

  addToCart(): void {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
