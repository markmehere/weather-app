import React from 'react';
import './App.css';
import SevenDayForecast from './components/SevenDayForecast/SevenDayForecast';
import WeatherHeader from './components/WeatherHeader/WeatherHeader';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <WeatherHeader />
        <SevenDayForecast />
      </header>
    </div>
  );
}

export default App;
