import './App.css';
import Search from '../src/components/search'
import WeatherComponent from './components/currentWeather';
function App() {
  const handleSelectedCity = (selectedCity) => {
    console.log({selectedCity})
  } 
  return (
    <div className="container">
      <Search handleSelectedCity={handleSelectedCity}/>
      <WeatherComponent />
    </div> 
  );
}

export default App;
