import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Crepes', 'Delicious french pancakes', 'https://hips.hearstapps.com/hmg-prod/images/delish-basic-crepes-horizontal-1545245797.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

