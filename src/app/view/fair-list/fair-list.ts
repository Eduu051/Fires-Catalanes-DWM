import {
  Component,
  input,
  InputSignal
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { fairs, Fair } from '../../model/fairs';

@Component({
  selector: 'app-fair-list',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './fair-list.html',
  styleUrl: './fair-list.css'
})
export class FairList {

  public selectedComarca: InputSignal<string> =
    input.required<string>();

  public fairs: Fair[] = fairs;

  public filteredFairs(): Fair[] {

    return this.fairs.filter(
      f => f.regionName == this.selectedComarca()
    );

  }

  public getFavorites(): string[] {

    const data = localStorage.getItem('favorites');

    if(data){
      return JSON.parse(data);
    }

    return [];

  }

  public isFavorite(id: string): boolean {

    return this.getFavorites().includes(id);

  }

  public onToggleFavorite(id: string): void {

    let favorites = this.getFavorites();

    if(favorites.includes(id)){

      favorites = favorites.filter(f => f != id);

    } else {

      favorites.push(id);

    }

    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites)
    );

  }

}