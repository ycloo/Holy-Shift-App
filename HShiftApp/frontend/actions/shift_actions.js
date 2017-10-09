export const RECEIVE_SINGLE_SHIFT = 'RECEIVE_SINGLE_SHIFT';
export const RECEIVE_ALL_SHIFTS = 'RECEIVE_ALL_SHIFTS';

export const receiveShift = shift => {
  return {
    type: RECEIVE_SINGLE_SHIFT,
    shift
  }
}

export const receiveShifts = shifts => {
  return {
    type: RECEIVE_ALL_SHIFTS,
    shifts
  }
}
