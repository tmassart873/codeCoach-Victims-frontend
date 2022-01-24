import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { CoachOverviewComponent } from './user-coach-overview/coach-overview.component';
import { CoacheeDetailComponent } from './user-coachee-detail/coachee-detail.component';
import { ApplyForCoachComponent } from './apply-for-coach/apply-for-coach.component';
import { CoachDetailComponent } from './user-coach-detail/coach-detail.component';
import { UserLoginComponent } from './user-login/user-login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    CreateUserComponent,
    CoachOverviewComponent,
    CoacheeDetailComponent,
    ApplyForCoachComponent,
    CoachDetailComponent,
    UserLoginComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule
    ]
})
export class UserModule { }
