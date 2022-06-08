export enum ActionType {
  CitySelection = 'citySelection',
}

export type CitySelectionAction = {
  type: ActionType.CitySelection,
  payload: number,
};

export type Actions = CitySelectionAction;
