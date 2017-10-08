import {combineReducers} from 'redux';
import teamsReducer from './teams_reducer';
import userReducer from './user_reducer';
import shiftsReducer from './shifts_reducer';

const rootReducer = combineReducers({
  teams: teamsReducer,
  currentUser: userReducer,
  shifts: shiftsReducer
});

export default rootReducer;
