export const receiveShift = shift => {
  return {
    type: 'RECEIVE_SINGLE_SHIFT',
    shift
  }
}

export const receiveShifts = shifts => {
  return {
    type: 'RECEIVE_ALL_SHIFTS',
    shifts
  }
}
