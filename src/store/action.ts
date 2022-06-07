import { ActionType, CitySelectionActon } from '../types/action';


export const citySelection = (): CitySelectionActon => ({
  type: ActionType.CitySelection,
});
