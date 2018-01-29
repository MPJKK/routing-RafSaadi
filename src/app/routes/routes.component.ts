import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../service/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
    reitit: any;
    lat: number;
    lon: number;

    constructor(private digitransit: DigitransitService) {
    }


    ngOnInit() {
        this.digitransit.getRoutes().subscribe((response) => {
            console.log(response.data['stops'][0].patterns);
            this.reitit = response.data['stops'][0].patterns;
            this.lat = response.data['stops'][0].lat;
            this.lon = response.data['stops'][0].lon;
        });
    }

}
