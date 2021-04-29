import { Pipe, PipeTransform } from '@angular/core';
import { isMovie } from 'src/app/interfaces/shared';

@Pipe({
  name: 'mediaSearch'
})
export class MediaSearchPipe implements PipeTransform {

  transform(items: any[] | null, searchText: string): any[] {
    if (items === null) {
      return [];
    }

    if (items && items.length) {
      return items.filter(element => {
        const mediaTitle = isMovie(element) ? element.name : element.title;

        if (searchText &&
          mediaTitle.toUpperCase().indexOf(searchText.toUpperCase()) === -1) {
          return false;
        }

        return true;
      })
    }

    return items;
  }
}
