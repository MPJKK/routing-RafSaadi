import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ApplicationRef} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {SetupComponent} from './setup/setup.component';
import {RoutesComponent} from './routes/routes.component';
import {HttpClientModule} from '@angular/common/http';
import {DigitransitService} from './service/digitransit.service';
import {FormsModule} from '@angular/forms';
import {RouteDirectionPipe} from './pipes/route-direction.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouteColorPipe} from './pipes/route-color.pipe';
import {MatTabsModule} from '@angular/material';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent,
        RouteDirectionPipe,
        RouteColorPipe
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        FlexLayoutModule,
        MatTabsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCQXKU0GUymCjek8hQ7qe_JlU0C5lIDH7I'
        })
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
