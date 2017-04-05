import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FundraisersService } from '../fundraisers.service';

@Component({
  selector: 'fundraiser-list',
  templateUrl: './fundraiser-list.component.html',
  styleUrls: ['./fundraiser-list.component.css'],
  providers: [FundraisersService]
})
export class FundraiserListComponent implements OnInit {
  allFundraisers: FirebaseListObservable<any[]>;

  constructor(private fundraisersService: FundraisersService){}

  ngOnInit() {
    this.allFundraisers = this.fundraisersService.getFundraisers();
  }

}
