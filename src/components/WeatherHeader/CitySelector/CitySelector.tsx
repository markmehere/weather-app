
import React from "react";
import cities from "../../../data/cities.json";
import Select from "react-select";
import styles from "./CitySelector.module.css";
import { CityType } from "../../../types/CityType.js";

export interface CitySelectorProps {

  // The current city
  value: CityType;

  // Callback when city is changed
  onChange: (city: CityType) => void;

}

const options: CityType[] = cities.map(x => ({ value: x.woeid, label: `${x.name}, ${x.countryCode}` }));

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: '#282c34',
    '&:hover': { borderColor: '#2896e4' },
    '&:focus': { borderColor: '#2896e4' }, 
  }),
  input: (provided: any) => ({
    ...provided,
    color: '#fff'
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#fff'
  })
};

export class CitySelector extends React.Component<CitySelectorProps> {

  render() {
    const { value, onChange } = this.props;
    return <div className={styles.picker}>
        <Select options={options} value={value} styles={customStyles} onChange={onChange as any} />
      </div>;
  }
}