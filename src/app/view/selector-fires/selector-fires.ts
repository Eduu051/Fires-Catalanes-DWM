import { Component, signal, WritableSignal } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { fairs, Fair } from '../../model/fairs';

import { FairList } from '../fair-list/fair-list';

@Component({
  selector: 'app-selector-fires',
  imports: [
    CommonModule,
    FormsModule,
    FairList
  ],
  templateUrl: './selector-fires.html',
  styleUrl: './selector-fires.css'
})
export class SelectorFires {

  public fairs: Fair[] = fairs;

  public selectedComarca: WritableSignal<string> =
    signal('');

  public comarques: string[] = [
    ...new Set(
      this.fairs.map(f => f.regionName)
    )
  ].sort((a, b) => a.localeCompare(b));

}