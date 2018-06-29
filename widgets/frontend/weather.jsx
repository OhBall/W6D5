import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Loading...",
      temperature: "Loading..."
    };
    this.weatherCb = this.weatherCb.bind(this);
    this.stateCb = this.stateCb.bind(this);
  }

  weatherCb(position) {
    let {lat, long} = { lat: position.coords.latitude, long: position.coords.longitude };
    $.ajax({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=b16421eacfe90399d0a6be3fee227313`,
    }).then(
      this.stateCb
    );
  }

  toFarenheit(kelvin){
    return (1.8 * (kelvin - 273)) + 32;
  }

  stateCb(response){
    // debugger
    let temp = this.toFarenheit(response.main.temp);
    temp = Math.round(temp*10)/10;
    this.setState({
      city: response.name,
      temperature: temp
    });
  }


  componentDidMount () {
    navigator.geolocation.getCurrentPosition(this.weatherCb);
  }

  render() {
    return (
        <div className='weather'>
          <h1>Weather</h1>
          <div className='weather-content'>
            <h2>City: {this.state.city}</h2>
            <h2>Temperature: {this.state.temperature} deg</h2>
          </div>
        </div>
    );
  }
}

export default Weather;
