import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {receiveTeam} from '../../actions/team_actions';
import {receiveShift} from '../../actions/shift_actions';

const mapStateToProps = state => ({
  user: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  receiveShift: shift => dispatch(receiveShift(shift)),
  receiveTeam: team => dispatch(receiveTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
