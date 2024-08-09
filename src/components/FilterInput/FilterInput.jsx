import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterInput.module.css';

function FilterInput({ filter, handleFilterChange }) {
  return (
    <input
      type="text"
      value={filter}
      onChange={handleFilterChange}
      placeholder="Type to search"
      className={styles.input}
    />
  );
}

FilterInput.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default FilterInput;
