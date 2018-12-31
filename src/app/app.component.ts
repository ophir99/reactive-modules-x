import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "forms-new";
  userRegistrationForm;
  constructor() {
    this.userRegistrationForm = new FormGroup({
      name: new FormControl("Angular"),
      gender: new FormControl("Male"),
      age: new FormControl(2),
      dob: new FormControl("01/01/2019"),
      address: new FormControl(""),
      email: new FormControl("angular@gmail.com"),
      password: new FormControl(),
      confirmPassword: new FormControl(),
      parents: new FormGroup({
        mother: new FormControl(),
        father: new FormControl()
      })
    });
  }
}
