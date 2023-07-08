import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action_types';

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => ({
  //? al poner el paréntesis doy por sentado el RETURN
  type: REMOVE_FAV,
  payload: id,
});

export const filterCards = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const orderCards = (order) => ({
    type: ORDER,
    payload: order,
});