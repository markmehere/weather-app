import React from "react";
import styles from "./WeatherHeader.module.css";
import { ScaleToggler } from "./ScaleToggler/ScaleToggler";
import { CitySelector } from "./CitySelector/CitySelector";
import { TemperatureScale } from "../../types/TemperatureScale";
import { SetUnitActionCreator, setUnits, SetCityActionCreator, setCity } from "../../redux/actions/settings";
import { AppStore } from "../../redux/reducers";
import { connect } from "react-redux";
import { CityType } from "../../types/CityType";

export interface WeatherHeaderProps {

  // The temperature scale
  scale: TemperatureScale;

  // The city
  city: CityType;

  // The temperature unti action creator
  setUnits: SetUnitActionCreator;

  // The set city action creator
  setCity: SetCityActionCreator;

}

export class WeatherHeaderClass extends React.Component<WeatherHeaderProps>  {

  render() {
    const { scale, city, setUnits, setCity } = this.props;

    return <div className={styles.header}>
      <CitySelector value={city} onChange={setCity} />
      <ScaleToggler value={scale} onToggle={setUnits} />
    </div>;
  }

}

const mapStateToProps = (state: AppStore) => ({
  scale: state.settings.scale,
  city: state.settings.city
});

const mapDispatchToProps = {
  setUnits: setUnits,
  setCity: setCity
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherHeaderClass);
