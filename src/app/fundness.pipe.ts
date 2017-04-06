import { Pipe, PipeTransform } from '@angular/core';
import { Fundraiser } from './fundraiser.model';
import { FundraisersService } from './fundraisers.service';

@Pipe({
  name: "fundness",
  pure: false
})

export class FundnessPipe implements PipeTransform {
  transform(input: any [], args) {

    var output: any[] = [];
    for (var i = 0; i < input.length; i ++) {
      if (input[i].goal <= 10000){
        output.push(input[i]);
      }
    }
    return output;
  }
}
