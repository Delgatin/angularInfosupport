import { ContactNamePipe } from './contact-name.pipe';
import { Contact } from '../models/contact';

describe('ContactNamePipe', () => {
  let contactNamePipe;

  beforeEach(() => {
    contactNamePipe = new ContactNamePipe();
  });

  it('create an instance', () => {
    const contact = {} as Contact;
    contact.firstName = 'nino';
    contact.surname = 'pipo';
    contact.email = 'email';
    expect(contactNamePipe.transform(contact)).toEqual('nino pipo');
  });
});
