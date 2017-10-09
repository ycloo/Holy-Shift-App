import {combineReducers} from 'redux';
import teamsReducer from './teams_reducer';
import sessionReducer from './session_reducer';
import shiftsReducer from './shifts_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  teams: teamsReducer,
  session: sessionReducer,
  shifts: shiftsReducer
});

export default rootReducer;
