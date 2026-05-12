import { Component } from '@angular/core';

import { SelectorFires } from '../selector-fires/selector-fires';
import { Favorites } from '../favorites/favorites';

@Component({
  selector: 'app-home',
  imports: [
    SelectorFires,
    Favorites
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}