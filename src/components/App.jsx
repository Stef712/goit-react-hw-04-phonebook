import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import FilterInput from './FilterInput';
import styles from './App.module.css';

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  function addContact(name, number) {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDuplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prevContacts => [...prevContacts, newContact]);
  }

  function deleteContact(contactId) {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <h2 className={styles.subtitle}>Contacts</h2>
      <FilterInput filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
