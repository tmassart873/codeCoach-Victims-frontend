import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {SessionService} from "../../service/session.service";
import {FormBuilder, FormControl, Validators,} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-request-session',
  templateUrl: './request-session.component.html',
  styleUrls: ['./request-session.component.css']
})
export class RequestSessionComponent implements OnInit {

  private coacheeId!: string;
  private coachId!: string


  requestSessionForm = this.formBuilder.group({
      coacheeId: `${this.coacheeId}`,
      coachId: `${this.coachId}`,
      subject: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{2}[\\/][0-9]{2}[\\/][0-9]{4}"),
      ]),
      time: new FormControl('', [
        Validators.required
      ]),
      location: new FormControl('', [
        Validators.required
      ]),
      remarks: '',
    }
  );

  constructor(private formBuilder: FormBuilder,
              private sessionService: SessionService,
              private userService: UserService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  createSession() {
    this.coacheeId = this.userService.user.id;
    this.coachId = this.userService.getSelectedCoachId();
    console.log(this.requestSessionForm.value);
    this.sessionService.requestSession(this.requestSessionForm.value).subscribe();
  }

  onSubmit() {
    this.createSession();
  }

  getFormAttribute(formControlName: string): any {
    return this.requestSessionForm.get(`${formControlName}`)
  }
}
