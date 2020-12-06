import React from 'react';
import Contact from '../Contact';

import s from './ContactList.module.scss';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <Contact
          contact={contact}
          deleteContact={deleteContact}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
