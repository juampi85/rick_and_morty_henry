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
  const navigate = useNavigate();

  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const { data } = await axios(`${URL}?email=${email}&password=${password}`)
        const { access } = data;
        setAccess(access);
        access && navigate('/home');
    } catch (error) {
      alert('La pifiaste feo, perro... Revisá tus credenciales y volvé humildemente...')
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function logOut() {
    setCharacters([]);
    setAccess(false);
  }

  async function onSearch(id) {
    try {
      if (!id) return alert('Debe ingresar un ID...');

      if (characters.find((char) => char.id === id)) {
        alert(`Ya existe el personaje con el id ${id}`);
      } else {
        const { data } = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      }
    } catch (error) {
      alert(
        `${error.response.data.error} --> traducción: le pifiaste al ID...`
      );
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
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
