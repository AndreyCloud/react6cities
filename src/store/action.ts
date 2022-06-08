import { ActionType, CitySelectionAction } from '../types/action';


export const citySelection = (id: number): CitySelectionAction => ({
  type: ActionType.CitySelection,
  payload: id,
});
