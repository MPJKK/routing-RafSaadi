
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'routeColor'
})
export class RouteColorPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        if (value === 0) {
            return 'going';
        } else {
            return 'comming';
        }
    }

}