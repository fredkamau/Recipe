import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Nyama choma', 'Nyama choma', 'https://ivyprosper.files.wordpress.com/2017/05/img_20170504_010749_2721.jpg'),
    new Recipe('Nyama choma', 'Nyama choma', 'https://ivyprosper.files.wordpress.com/2017/05/img_20170504_010749_2721.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
