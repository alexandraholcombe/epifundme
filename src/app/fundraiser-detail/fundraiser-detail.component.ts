import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Contribution } from '../contribution.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FundraisersService } from '../fundraisers.service';

@Component({
  selector: 'fundraiser-detail',
  templateUrl: './fundraiser-detail.component.html',
  styleUrls: ['./fundraiser-detail.component.css'],
  providers: [FundraisersService]
})
export class FundraiserDetailComponent implements OnInit {
  fundraiserId: number = null;
  fundraiserToDisplay: any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundraisersService: FundraisersService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundraiserId = urlParameters['id'];
    });
    this.fundraiserToDisplay = this.fundraisersService.getFundraiserById(this.fundraiserId);
  }

}
