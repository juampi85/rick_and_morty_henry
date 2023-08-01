import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './action_types';
import axios from 'axios';

export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character); //* 'CHARACTER' es un OBJETO, al cual lo recibimos por el BODY

      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      alert(error.message)
    }
  };
};

export const removeFav = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint)
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
    } catch (error) {
      alert(error.message)
    }
  };
};

export const filterCards = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const orderCards = (order) => ({
  type: ORDER,
  payload: order,
});
