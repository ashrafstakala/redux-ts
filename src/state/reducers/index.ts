import { combineReducers } from 'redux';
import respositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  respositories: respositoriesReducer,
});

export default reducers;
