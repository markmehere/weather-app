import { SetUnitAction } from "./settings";
import { LoadMockForecastAction, GetForecastAction } from "./weather";

export type AppAction =
  SetUnitAction | GetForecastAction | LoadMockForecastAction;