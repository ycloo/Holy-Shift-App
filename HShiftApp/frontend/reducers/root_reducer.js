import {combineReducers} from 'redux';
import organizationsReducer from './organizations_reducer';
import userReducer from './user_reducer';
import shiftsReducer from './shifts_reducer';

const rootReducer = combineReducers({
  organizations: organizationsReducer,
  currentUser: userReducer,
  shifts: shiftsReducer
});

export default rootReducer;
