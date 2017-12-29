import { AuthGuard } from './guard/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';



import { AppComponent } from './app.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { HeaderComponent } from './page/fragments/header/header.component';
import { FooterComponent } from './page/fragments/footer/footer.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { SpiderChartComponent } from './page/fragments/charts/spider-chart/spider-chart.component';
import { GoogleMapComponent } from './page/fragments/charts/google-map/google-map.component';
import { BarChartComponent } from './page/fragments/charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './page/fragments/charts/line-chart/line-chart.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './service/user/user.service';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/data/data.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  }

]

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    SpiderChartComponent,
    GoogleMapComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhzl6qzvh6FdIIkDviVE39feBkLiBa6Bo'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmSnazzyInfoWindowModule,
    FormsModule
  ],
  providers: [UserService, AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
