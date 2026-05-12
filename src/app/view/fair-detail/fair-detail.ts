import { Component, signal, WritableSignal } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

import { fairs, Fair } from '../../model/fairs';

@Component({
  selector: 'app-fair-detail',
  imports: [
    CommonModule
  ],
  templateUrl: './fair-detail.html',
  styleUrl: './fair-detail.css'
})
export class FairDetail {

  public fair: WritableSignal<Fair | null> =
    signal(null);

  constructor(
    private _route: ActivatedRoute
  ) {

    const id =
      this._route.snapshot.paramMap.get('id');

    const foundFair =
      fairs.find(
        f => f.activityId == id
      );

    if(foundFair) {
      this.fair.set(foundFair);
    }

  }

}