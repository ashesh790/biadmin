import { Component } from '@angular/core';

@Component({
  selector: 'app-add-update-property-form',
  templateUrl: './add-update-property-form.component.html',
  styleUrls: ['./add-update-property-form.component.css']
})
export class AddUpdatePropertyFormComponent {

  submit(login: any) {
    console.log("For is submitted", login);
  }
}
