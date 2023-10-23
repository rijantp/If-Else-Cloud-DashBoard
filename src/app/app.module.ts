import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule,FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faCamera,faHouse,faSquarePollVertical, faLayerGroup, faSquareCheck, faChartPie, faUserGroup, faCircleUser, faGear, faMagnifyingGlass, faSliders, faCloudArrowDown, faBox } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailedButtonComponent } from './shared/detailed-button/detailed-button.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    DashboardComponent,
    DetailedButtonComponent,
    BarChartComponent,
    DoughnutChartComponent,
    CardComponent
  ],
  imports: [
    NgChartsModule,
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  public constructor(library: FaIconLibrary){
    library.addIcons(faCamera,
      faHouse,
      faSquarePollVertical,
      faLayerGroup,
      faSquareCheck,
      faChartPie,
      faUserGroup,
      faCircleUser,
      faGear,
      faMagnifyingGlass,
      faSliders,
      faCloudArrowDown,
      faBox
      );
  }
 }
