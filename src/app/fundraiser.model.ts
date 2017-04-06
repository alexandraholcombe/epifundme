import { Contribution } from './contribution.model';

export class Fundraiser {
  public currentFunding: number = 0;
  public contributions: Contribution[] = [];

  constructor(public title: string,
              public organizer: string,
              public goal: number,
              public story: string ){}
}
