import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule,FaIconLibrary  } from '@fortawesome/angular-fontawesome';
import { faCamera,faHouse,faSquarePollVertical, faLayerGroup, faSquareCheck, faChartPie, faUserGroup, faCircleUser, faGear, faMagnifyingGlass, faSliders, faCloudArrowDown, faBox, faBolt, faArrowDown, faCircleQuestion, faTrashCan, faPen, faArrowLeft, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DetailedButtonComponent } from './shared/detailed-button/detailed-button.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { CardComponent } from './shared/card/card.component';
import { GridDataComponent } from './components/grid-data/grid-data.component';
import { UserDataComponent } from './components/grid-data/user-data/user-data.component';
import { GridDataTableComponent } from './components/grid-data/grid-data-table/grid-data-table.component';
import { PercentIndicatorComponent } from './shared/percent-indicator/percent-indicator.component';
import { ChipComponent } from './shared/chip/chip.component';
import { UserNamePipe } from './pipes/user-name.pipe';
import { NamePreviewPipe } from './pipes/name-preview.pipe';
import { PaginationComponent } from './components/pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { PopUpComponent } from './shared/pop-up/pop-up.component';
import { PaginationPipe } from './pipes/pagination.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    DashboardComponent,
    DetailedButtonComponent,
    BarChartComponent,
    DoughnutChartComponent,
    CardComponent,
    GridDataComponent,
    UserDataComponent,
    GridDataTableComponent,
    PercentIndicatorComponent,
    ChipComponent,
    UserNamePipe,
    NamePreviewPipe,
    PaginationComponent,
    PopUpComponent,
    PaginationPipe
  ],
  imports: [
    FormsModule,
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
      faXmark,
      faHouse,
      faArrowDown,
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
      faBox,
      faBolt,
      faCircleQuestion,
      faTrashCan,
      faPen,
      faArrowLeft,
      faArrowRight
      );
  }
 }
