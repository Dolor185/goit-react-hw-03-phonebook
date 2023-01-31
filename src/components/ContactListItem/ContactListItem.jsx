import PropTypes from 'prop-types';
import { Item, Button } from './ContactListItem.jstyled';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <Item>
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
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
