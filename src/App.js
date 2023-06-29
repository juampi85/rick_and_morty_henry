import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Error404 from './components/Error404';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);

  const EMAIL = 'juampi@gmail.com';
  const PASSWORD = 'juampi85';
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      alert('El usuario y/o contraseña NO son correctos');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function logOut() {
    setCharacters([]);
    setAccess(false);
  }

  function onSearch(id) {
    if (!id) alert('Debe ingresar un ID...');

    if (characters.find((char) => char.id === parseInt(id))) {
      alert(`Ya existe el personaje con el id ${id}`);
    } else {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        })
        .catch((err) =>
          alert(
            `${err.response.data.error} --> traducción: le pifiaste al ID...`
          )
        );
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== parseInt(id)));
  };

  function closeAll() {
    setCharacters([]);
  }

  return (
    <div className="App">
      {location.pathname !== '/' ? (
        <Nav onSearch={onSearch} logOut={logOut} closeAll={closeAll} />
      ) : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
