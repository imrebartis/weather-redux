import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
  // add with spread the new city to a new state array (DON'T USE state.push!!!!)
  // state.push manipulates existing state array (not good in redux)
    return [ action.payload.data, ...state ];
  }
  return state;
}