import { createStore } from 'redux';
import reducer from './reducer.jsx';
import state from './state.jsx';
const store = createStore(reducer, state);
export default store;