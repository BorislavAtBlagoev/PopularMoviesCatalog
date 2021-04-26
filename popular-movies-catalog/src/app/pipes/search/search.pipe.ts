import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (items && items.length) {
      return items.filter(element => {
        if (searchText &&
          element.name.toUpperCase().indexOf(searchText.toUpperCase()) === -1) {
          return false;
        }

        return true;
      })
    }

    return items;
  }

}
