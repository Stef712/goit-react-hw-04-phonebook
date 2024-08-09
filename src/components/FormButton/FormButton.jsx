import React from 'react';
import styles from './FormButton.module.css';

function FormButton() {
  return (
    <button type="submit" className={styles.button}>
      Add Contact
    </button>
  );
}

export default FormButton;
