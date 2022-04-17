import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';

export default function ContactList({ contacts, onDelContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li kei={id} className={css.contactItem}>
          <ContactItem
            name={name}
            number={number}
            onDelContact={() => onDelContact(id)}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelContact: PropTypes.func.isRequired,
};
