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


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        SetupComponent,
        RoutesComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCQXKU0GUymCjek8hQ7qe_JlU0C5lIDH7I'
        })
    ],
    providers: [DigitransitService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
