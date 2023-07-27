import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions/action_types';

const initialState = {
  myFavorites: [], //? --> es lo que MOSTRAMOS en pantalla y donde filtramos y ordenamos los characters
  allCharacters: [], //? --> es la copia de seguridad que NO se modifica
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state, //* esta COPIA del state es OBLIGATORIA cuando tenemos + de 1 propiedad (en este caso "myFavorites y allCharacters")
        myFavorites: payload,
        allCharacters: payload,
      };

    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };

    case FILTER:
      let copy2 = [...state.allCharacters];
      let filterGender = copy2.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: payload === 'All' ? [...state.allCharacters] : filterGender,
      };
   

    case ORDER:
      const copy3 = [...state.myFavorites]; //* solucion mía
      return {
        ...state,
        myFavorites:
          payload === 'A'
            ? copy3.sort((a, b) => a.id - b.id)
            : copy3.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
