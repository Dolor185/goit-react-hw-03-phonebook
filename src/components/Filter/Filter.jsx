import { Input, Label } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ filter, findContact }) => {
  return (
    <Label>
      Find contacts by name
      <Input name="filter" value={filter} onChange={findContact}></Input>
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  findContact: PropTypes.func.isRequired,
};
