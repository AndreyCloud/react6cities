import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';


const initialState: State = {
  city: 'Paris',
  reviews: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.CitySelection:
      return{...state, city: 'Paris'};
    default:
      return state;
  }
};

export {reducer};
