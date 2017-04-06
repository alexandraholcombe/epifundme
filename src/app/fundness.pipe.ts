import { Pipe, PipeTransform } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import { FundraisersService } from './fundraisers.service';

@Pipe({
  name: "fundness",
  pure: false
})

export class FundnessPipe implements PipeTransform {
  
  transform(input: any [], desiredFunding) {
    var output: any[] = [];
    if(desiredFunding === "incompleteFunding") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].currentFunding < input[i].goal) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFunding === "completeFunding") {
      for(var i = 0; i < input.length; i++) {
        if (input[i].currentFunding >= input[i].goal) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
