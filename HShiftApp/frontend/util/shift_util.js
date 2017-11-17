import SHIFTS_URL from '../api';
import SHIFT_URL from '../api';

export const fetchShifts = teamId => {
  return fetch(SHIFTS_URL(teamId), {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}

export const updateShift = (shiftId, shift) => {
  return fetch(SHIFT_URL(shiftId), {
    method: "PATCH",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shift
    })
  })
}

export const createShift = (shift) => {
  return fetch(SHIFTS_URL, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      shift
    })
  })
}

export const deleteShift = shiftId => {
  return fetch(SHIFT_URL(shiftId), {
    method: "DELETE",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
}
