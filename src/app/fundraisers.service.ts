import { Injectable } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import { Contribution } from './contribution.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class FundraisersService {
  allFundraisers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire){
    this.allFundraisers = angularFire.database.list('fundraisers')
  }

  getFundraisers(){
    console.log("ALL FUNDRAISERS: " + this.allFundraisers[0]);
    return this.allFundraisers;
  }

  addFundraiser(newFundraiser) {
    this.allFundraisers.push(newFundraiser);
  }

  getFundraiserById(fundraiserId: number) {
    return this.angularFire.database.object('fundraisers/' + fundraiserId);
  }
}
