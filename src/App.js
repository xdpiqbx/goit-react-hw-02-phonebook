import s from './App.module.scss';
import { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm ';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const initalState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: initalState,
    filter: '',
  };

  getContact = newContact => {
    if (this.state.contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filterHandler = event => {
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    return (
      <div className={s.AppContainer}>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.getContact} />
        <h2 className={s.contacts__title}>Contacts</h2>
        <Filter filterHandler={this.filterHandler} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

//https://github.com/goitacademy/react-homework/tree/master/homework-02/phonebook
