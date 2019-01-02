import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray } from "@angular/forms";
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
      }),
      habits: new FormArray([]),
      eduDetails: new FormArray([])
    });
  }

  pushHabitControls() {
    const fc = new FormControl();
    this.userRegistrationForm.get("habits").push(fc);
  }

  removeHabitFormControl(index) {
    this.userRegistrationForm.get("habits").removeAt(index);
  }
  addEducationDetailsFG() {
    const eduFG = new FormGroup({
      course_name: new FormControl(),
      institution: new FormControl(),
      yearOfStarting: new FormControl(),
      yearOfE: new FormControl(),
      aggregate: new FormControl()
    });

    this.userRegistrationForm.get("eduDetails").push(eduFG);
  }
}
