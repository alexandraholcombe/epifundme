import { Component, OnInit, Input } from '@angular/core';
import { Fundraiser } from '../fundraiser.model';

@Component({
  selector: 'fundraiser-tile',
  templateUrl: './fundraiser-tile.component.html',
  styleUrls: ['./fundraiser-tile.component.css']
})
export class FundraiserTileComponent implements OnInit {
  @Input() fundraiser: Fundraiser;

  constructor() { }

  ngOnInit() {
  }

}
