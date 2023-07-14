import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions/action_types';

const initialState = {
  myFavorites: [], //? --> es lo que MOSTRAMOS en pantalla y donde filtramos y ordenamos los characters
  allCharacters: [], //? --> es la copia de seguridad que NO se modifica
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAV:
      let copy = state.myFavorites.filter(
        (character) => parseInt(character.id) !== parseInt(action.payload, 10)
      );
      return {
        ...state,
        myFavorites: copy,
        allCharacters: copy,
      };

    case FILTER:
      // // const allCharactersFiltered = state.allCharacters.filter(
      // //   (character) => character.gender === action.payload
      // // );
      // let copy2 = [...state.allCharacters];
      // let allCharactersFiltered = copy2.filter(
      //   (character) => character.gender === action.payload
      // );
      // return {
      //   ...state,
      //   myFavorites:
      //     action.payload === 'All' ? [...state.allCharacters] : allCharactersFiltered,
      // };
      let allCharactersFiltered = [];

      if (action.payload === 'All') {
        allCharactersFiltered = [...state.allCharacters];
      } else {
        allCharactersFiltered = state.allCharacters.filter(
          (character) => character.gender === action.payload
        );
      }

      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };

    case ORDER:
      // const allCharactersCopy = [...state.allCharacters];
      // return {
      //   ...state,
      //   myFavorites:
      //     action.payload === 'A'
      //       ? allCharactersCopy.sort((a, b) => a.id - b.id)
      //       : allCharactersCopy.sort((a, b) => b.id - a.id),
      // };
      const myFavoritesCopy = [...state.myFavorites];

      return {
        ...state,
        myFavorites:
          action.payload === 'A'
            ? myFavoritesCopy.sort((a, b) => a.id - b.id)
            : myFavoritesCopy.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
