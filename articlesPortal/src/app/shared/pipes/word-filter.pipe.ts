import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wordFilter',
    pure: false
})
export class WordFilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }

        return items.filter(item => item.title.indexOf(filter) !== -1);
    }
}