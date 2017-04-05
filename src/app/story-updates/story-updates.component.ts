import { Component, OnInit } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Contribution } from '../contribution.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FundraisersService } from '../fundraisers.service';

@Component({
  selector: 'story-updates',
  templateUrl: './story-updates.component.html',
  styleUrls: ['./story-updates.component.css']
})
export class StoryUpdatesComponent implements OnInit {
  fundraiserId: number;
  fundraiser;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private fundraisersService: FundraisersService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundraiserId = urlParameters['id'];
    });
    this.fundraiser = this.fundraisersService.getFundraiserById(this.fundraiserId);
  }
}
