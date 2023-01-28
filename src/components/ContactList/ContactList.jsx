import { List, Item, Button } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredList = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return filteredList ? (
    <List>
      {filteredList.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  ) : (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {name}: {number}
            <Button
              onClick={() => {
                onDelete(id);
              }}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
