import { TemperatureScale } from "../../types/TemperatureScale";
import { AppAction } from "../actions";
import { SET_UNITS, SET_CITY } from "../actions/settings";
import { CityType } from "../../types/CityType";

export interface SettingsStore {
  scale: TemperatureScale;
  city: CityType;
}

const initialState: SettingsStore = {
  scale: TemperatureScale.Celsius,
  city: {
    value: 1103816,
    label: 'Melbourne, AU'
  }
};

function settingsReducer(state = initialState, action: AppAction) {
  switch (action.type) {
    case SET_UNITS:
      return {
        ...state,
        scale: action.payload
      };
    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };
  }

  return state;
}

export default settingsReducer;
