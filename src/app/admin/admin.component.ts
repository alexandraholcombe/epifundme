import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Fundraiser } from '../fundraiser.model';
import { FundraisersService } from '../fundraisers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [FundraisersService]
})
export class AdminComponent implements OnInit {

  constructor(private fundraisersService: FundraisersService, private router: Router) { }

  ngOnInit() {
  }

  submitProject(title: string, organizer: string, goal: number, story: string) {
    var newFundraiser: Fundraiser = new Fundraiser(title, organizer, goal, story);
    this.fundraisersService.addFundraiser(newFundraiser);
    this.router.navigate(['']);
  }
}
