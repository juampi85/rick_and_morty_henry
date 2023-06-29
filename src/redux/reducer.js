import { ADD_FAV, REMOVE_FAV } from './actions/action_types';

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id !== parseInt(action.payload, 10) //? en vez de parsearlo podemos poner "!=" y sirve perfecto
        ),
      };
    default:
      return {...state};
  }
};

export default reducer;
