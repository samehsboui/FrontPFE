import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SidebarModule } from 'ng-sidebar';
import { AgmCoreModule } from '@agm/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { TachesComponent } from './components/taches/taches.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AuthenticationService } from './services/authentication.service';
import { MenudemoComponent } from './components/menudemo/menudemo.component';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SmartDataTableComponent } from './components/smart-data-table/smart-data-table.component';
import {HomeComponent} from "./components/home/home.component";
import { PansComponent } from './components/pans/pans.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import {
  MatAutocompleteModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {AgmSnazzyInfoWindowModule} from "@agm/snazzy-info-window";
import { ContactComponent } from './components/contact/contact.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { EditPanComponent } from './components/edit-pan/edit-pan.component';
import { NewPanComponent } from './components/new-pan/new-pan.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ContratsComponent } from './components/contrats/contrats.component';
import { ReservPanComponent } from './components/reserv-pan/reserv-pan.component';
import { DetailPanComponent } from './components/detail-pan/detail-pan.component';
import { MessageDetailsComponent } from './components/message-details/message-details.component';

const appRoutes: Routes = [


  { path: 'login', component: LoginComponent},
  { path: 'new-task', component: NewTaskComponent},
  { path: 'register', component: RegistrationComponent},
  { path: 'taches', component: TachesComponent},
  { path: 'toolbar', component: ToolbarComponent},
  { path: 'home', component: HomeComponent},
  { path: 'pans', component: PansComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'users', component: UsersComponent},
  { path: 'new-user', component: NewUserComponent},
  { path: 'new-pan', component: NewPanComponent},
  { path: 'message', component: MessagesComponent},
  { path: 'message', component: MessagesComponent},
  { path: 'reservation', component: ReservationComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'contrat', component: ContratsComponent},
  { path: 'messageDetails/:id', component: MessageDetailsComponent},


  {path: 'editUser/:id' , component: EditUserComponent},
  {path: 'reservPan/:id' , component: ReservPanComponent},
  {path: 'detailPan/:id' , component: DetailPanComponent},

  {path: 'editPan/:id' , component: EditPanComponent} ,
  {path: '' , redirectTo: '/home' , pathMatch: 'full'} ,


];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TachesComponent,
    NewTaskComponent,
    RegistrationComponent,
    MenudemoComponent,
    ToolbarComponent,
    SmartDataTableComponent,
    HomeComponent,
    PansComponent,
    AboutComponent,
    UsersComponent,
    NewUserComponent,
    ContactComponent,
    EditUserComponent,
    EditPanComponent,
    NewPanComponent,
    MessagesComponent,
    ReservationComponent,
    NotificationComponent,
    ContratsComponent,
    ReservPanComponent,
    DetailPanComponent,
    MessageDetailsComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    FormsModule,HttpClientModule,AgmSnazzyInfoWindowModule, BrowserAnimationsModule,MatMenuModule, MatButtonModule, MatIconModule, MatCardModule,
    MatSidenavModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyByPwV5lDMOz77Jt2FPIrq_aPht9OrvEew'}),
    MatToolbarModule,Ng2SmartTableModule,HttpClientModule ,SidebarModule.forRoot(), MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
