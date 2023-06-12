// import { styled } from 'styled-components';
import styles from './SearchBar.module.css';

// const DivButton = styled.div`
//   margin-left: 60%;
//   background-color: #aaa;
//   width: 40%;
//   height: fit-content;
//   padding: 0.95rem 0;
//   display: flex;
//   justify-content: space-around;
//   margin-bottom: .8rem;
// `;

// const Input = styled.input`
//   border-radius: .25rem;
//   width: 65%;
//   padding: .25rem .5rem;
// `;

// const Button = styled.button`
//   background-color: #ffeb43;
//   border-radius: 0.25rem;
//   padding: 0.25rem 0.9rem;
// `;

export default function SearchBar({ onSearch }) {
  return (
    //*******************************/
    //* HECHO CON STYLED COMPONENTS //
    //*******************************/
    // <DivButton>
    //   <Input type="search" placeholder="id..." />
    //   <Button onClick={onSearch}>Agregar</Button>
    // </DivButton>

    //?????????????????????????/
    //? HECHO CON CSS-MODULES //
    //?????????????????????????/
    <div className={styles.divSearch}>
      <input type="text" className={styles.inputSearch} placeholder="id..." />
      <button className={styles.buttonSearch}>Agregar</button>
    </div>
  );
}
