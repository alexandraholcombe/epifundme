import { Contribution } from './contribution.model';

export class Fundraiser {
  constructor(public title: string,
              public organizer: string,
              public goal: number,
              public currentFunding: number,
              public story: string,
              public photoKey: string,
              public contributions: Contribution[]){}
}
