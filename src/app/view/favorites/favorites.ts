import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';

import { fairs, Fair } from '../../model/fairs';

@Component({
  selector: 'app-favorites',
  imports: [
    RouterModule
  ],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css'
})
export class Favorites {

  public fairs: Fair[] = fairs;

  public getFavoriteFairs(): Fair[] {

    const data = localStorage.getItem('favorites');

    if (!data) {
      return [];
    }

    const ids: string[] = JSON.parse(data);

    return this.fairs.filter(
      f => ids.includes(f.activityId)
    );

  }

  public getFavorites(): string[] {
    const data = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  }

  public isFavorite(id: string): boolean {
    return this.getFavorites().includes(id);
  }

  public onToggleFavorite(id: string): void {
    let favorites = this.getFavorites();
    if (favorites.includes(id)) {
      favorites = favorites.filter(f => f != id);
    } else {
      favorites.push(id);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}