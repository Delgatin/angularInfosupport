import { Component } from '@angular/core';
import { Contact } from './models/contact';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ContactNamePipe} from './pipes/contact-name.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bd2020angular';

  contacts: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];
  newContact = {} as Contact;

  reactiveFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^.+@.+\\.nl$')])
  });
  propertyToDisplay: 'firstName';

  addReactiveFormContact() {
    this.contacts.push(this.reactiveFormGroup.value);
  }

  addContact() {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact;
    console.log(this.contacts);
  }

  removeContact(contact) {
    this.contacts.splice(contact, 1);
    console.log('delete');
  }

  itemSelectedEvent(itemSelected: any) {
    console.log(itemSelected);
  }
}
