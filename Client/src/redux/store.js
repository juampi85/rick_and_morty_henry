import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
);

export default store;