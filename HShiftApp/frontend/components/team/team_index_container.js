import { connect } from 'react-redux';
import {receiveShift} from '../../actions/shift_actions';
import TeamIndex from './team_index';

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
    teams: state.teams,
    shifts: state.shifts
  };
};

const mapDispatchToProps = dispatch => ({
  receiveShift: shift => dispatch(receiveShift(shift))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamIndex);
