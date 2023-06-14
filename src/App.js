import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';


function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    if (!id) alert('Debe ingresar un ID...');

    if (characters.find((char) => char.id === parseInt(id))) {
      alert(`Ya existe el personaje con el id ${id}`);
      return; //? ---> debe ir para que CORTE la ejecución de la función
    }

    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      })
      .catch(err => alert(`${err.response.data.error} --> traducción: le pifiaste al ID...`))
  }

  const onClose = (id) => { 
    setCharacters(characters.filter((char) => char.id !== parseInt(id)))
  };


  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
