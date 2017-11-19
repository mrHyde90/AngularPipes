import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortName'
})
export class SortNamePipe implements PipeTransform {

  transform(value: any): any {
  	value.sort(function(a, b){
  		if(a.name > b.name){
  			return 1;
  		}
  		if(a.name < b.name){
  			return -1;
  		}
  		return 0;
  	});
    return value;
  }

}
