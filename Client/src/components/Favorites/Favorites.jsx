import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { filterCards, orderCards } from '../../redux/actions/actions';
import style from './Favorites.module.css'


const Favorites = () => {
  const [aux, setAux] = useState(false)
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };

  const handleFilter = (event) => { 
    dispatch(filterCards(event.target.value)); 
  };

  return (
    <>
      <div className={style.divSelect}>
        <select onChange={handleOrder} className={style.selectFavorites}>
          {/* <option value={null} className={style.optionFavorites}>
            Elija la opción
          </option> */}
          <option value="A" className={style.optionFavorites}>
            Ascendente
          </option>
          <option value="D" className={style.optionFavorites}>
            Descendente
          </option>
        </select>
        <select onChange={handleFilter} className={style.selectFavorites}>
          {/* <option value={null} className={style.optionFavorites}>
            Elija el género
          </option> */}
          <option value="Male" className={style.optionFavorites}>
            Male
          </option>
          <option value="Female" className={style.optionFavorites}>
            Female
          </option>
          <option value="Genderless" className={style.optionFavorites}>
            Genderless
          </option>
          <option value="unknown" className={style.optionFavorites}>
            unknown
          </option>
          <option value="All" className={style.optionFavorites}>
            All Characters
          </option>
        </select>
      </div>
      <div className={style.divFavorites}>
        {myFavorites.map((character) => {
          return (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin?.name}
              image={character.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;