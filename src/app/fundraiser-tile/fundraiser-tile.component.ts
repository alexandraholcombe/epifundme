import { Component, OnInit, Input } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'fundraiser-tile',
  templateUrl: './fundraiser-tile.component.html',
  styleUrls: ['./fundraiser-tile.component.css']
})
export class FundraiserTileComponent implements OnInit {
  @Input() fundraiser: Fundraiser;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  convertToPhotoPath(fundraiser: Fundraiser): string {
    var photoKey = fundraiser.photoKey;
    var photoPath = "images/" + photoKey;
    return photoPath;
  }

  goToDetail(clickedFundraiser: any) {
    this.router.navigate(['fundraisers', clickedFundraiser.$key])
  }

}
