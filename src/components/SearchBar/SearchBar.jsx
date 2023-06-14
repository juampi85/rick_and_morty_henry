import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };


  return (
    //?????????????????????????/
    //? HECHO CON CSS-MODULES //
    //?????????????????????????/
    <div className={styles.divSearch}>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="id..."
        value={id}
        onChange={handleChange}
      />
      <button className={styles.buttonSearch} onClick={() => onSearch(id)}>
        Agregar
      </button>
      <button
        className={styles.buttonSearch}
        onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}
      >
        Agregar random
      </button>
    </div>
  );
}
