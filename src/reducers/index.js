import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  form: formReducer,
  price: () => 320,
  discount: () => 16,
  tax: () => 60
});
