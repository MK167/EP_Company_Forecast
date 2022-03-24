import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/HomePage/home/home.component';
import { BGHeaderComponent } from './Components/HomePage/bg-header/bg-header.component';
import { AboutSectionComponent } from './Components/HomePage/about-section/about-section.component';
import { OurSponsersComponent } from './Components/HomePage/our-sponsers/our-sponsers.component';
import { OurPrizesComponent } from './Components/HomePage/our-prizes/our-prizes.component';
import { FeesComponent } from './Components/HomePage/fees/fees.component';
import { WeatherComponent } from './Components/HomePage/weather/weather.component';
import { NavbarComponent } from './Core/navbar/navbar.component';
import { TopNavBarComponent } from './Core/top-nav-bar/top-nav-bar.component';
import { FooterComponent } from './Core/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherWidgetMainComponent } from './Components/Forecast/weather-widget-main/weather-widget-main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BGHeaderComponent,
    AboutSectionComponent,
    OurSponsersComponent,
    OurPrizesComponent,
    FeesComponent,
    WeatherComponent,
    NavbarComponent,
    TopNavBarComponent,
    FooterComponent,
    WeatherWidgetMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
