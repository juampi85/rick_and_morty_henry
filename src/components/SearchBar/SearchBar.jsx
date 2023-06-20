import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch, closeAll }) {
  const [id, setId] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const search = () => {
    onSearch(id);
    setId('');
  }

  return (
    //?????????????????????????/
    //? HECHO CON CSS-MODULES //
    //?????????????????????????/
    <div className={styles.divSearch}>
      <input
        type="text"
        className={styles.inputSearch}
        placeholder="Ingrese el ID a agregar..."
        value={id}
        onChange={handleChange}
      />
      <button className={styles.buttonSearch} onClick={search}>
        Agregar
      </button>
      <button
        className={styles.buttonSearch}
        onClick={() => onSearch(Math.floor(Math.random() * 826) + 1)}
      >
        Agregar random
      </button>
      <button
        className={styles.deleteAll}
        onClick={closeAll}
      >
        Borrar todos
      </button>
    </div>
  );
}
