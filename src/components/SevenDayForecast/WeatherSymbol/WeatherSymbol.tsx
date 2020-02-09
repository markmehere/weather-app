import React from "react";
import weatherAbbr from "../../../data/weather-abbr.json";
import styles from "./WeatherSymbol.module.css";
import { WeatherKind } from "../../../types/WeatherKind.js";

export interface WeatherSymbolProps {

  // The kind of weather
  kind: WeatherKind;

}

export class WeatherSymbol extends React.Component<WeatherSymbolProps> {

  getSymbol = (kind: WeatherKind) => `/img/${kind as string}.svg`;

  getHumanReadable = (kind: WeatherKind) => weatherAbbr[kind];

  render() {
    return <div className={styles.weatherSymbol}>
      <img src={this.getSymbol(this.props.kind)}
        alt={this.getHumanReadable(this.props.kind)} />
      <p className={styles.weatherDescription}>{this.getHumanReadable(this.props.kind)}</p>
    </div>;
  }

}