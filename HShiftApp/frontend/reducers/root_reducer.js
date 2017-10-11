import {combineReducers} from 'redux';
import teamsReducer from './teams_reducer';
import sessionReducer from './session_reducer';
import shiftsReducer from './shifts_reducer';

const rootReducer = combineReducers({
  teams: teamsReducer,
  session: sessionReducer,
  shifts: shiftsReducer
});

export default rootReducer;
