import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any): any {
  	if(value.length === 0){
  		return value;
  	}
  	var splitArray = value.split("");
  	splitArray.reverse();
  	splitArray = splitArray.join("");
    return splitArray;
  }

}
