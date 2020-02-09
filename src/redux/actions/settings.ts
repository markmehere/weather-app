import { TemperatureScale } from "../../types/TemperatureScale";
import { GenericAction } from "../../types/GenericAction";
import { CityType } from "../../types/CityType";
import { GenericThunk } from "../../types/GenericThunk";
import { getForecast, fakeGetForecast } from "./weather";

export const SET_UNITS = 'SET_UNITS';
export const SET_CITY = 'SET_CITY';

export type SetUnitAction = GenericAction<TemperatureScale>;
export type SetCityAction = GenericAction<CityType>;

export type SetUnitActionCreator = (scale: TemperatureScale) => SetUnitAction;
export type SetCityActionCreator = (city: CityType) => GenericThunk;

export const setUnits: SetUnitActionCreator = (scale) => ({
  type: SET_UNITS,
  payload: scale
});

// Redux is happy for you to dispatch "anything you want" here - https://github.com/reduxjs/redux/issues/1738
export const setCity: SetCityActionCreator = (city) => {
  return (dispatch, getState, extra) => {
    dispatch({
      type: SET_CITY,
      payload: city
    });
    if (window.location.href.indexOf('?fake') > 0) {
      fakeGetForecast(city)(dispatch, getState, extra);
    }
    else {
      getForecast(city)(dispatch, getState, extra);
    }
  }
};
