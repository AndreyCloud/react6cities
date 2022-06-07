export enum ActionType {
  CitySelection = 'citySelection',
}

export type CitySelectionActon = {
  type: ActionType.CitySelection,
};

export type Actions = CitySelectionActon;
