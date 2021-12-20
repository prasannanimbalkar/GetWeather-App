import './App.css'
import './bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import React from 'react'
import Weather from './components/weather-component'
import Form from './components/weatherapp'

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API}
const Api_Key = '560df12b999c10603197e18b2002d12a'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      city: undefined,
      favicon: undefined,
      main: undefined,
      cel: undefined,
      max: undefined,
      min: undefined,
      description: '',
      error: false,
    }
    //this.getWeather()

    this.weatherfavicon = {
      Thunderstorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Clear: 'wi-day-sunny',
      Clouds: 'wi-day-fog',
      Atmosphere: 'wi-fog',
    }
  }
  celcius(temp) {
    let cel = Math.floor(temp - 273.15)
    return cel
  }

  getweatherfavicon(favicon, id) {
    switch (true) {
      case id >= 200 && id <= 232:
        this.setState({ favicon: this.weatherfavicon.Thunderstorm })
        break
      case id >= 300 && id <= 321:
        this.setState({ favicon: this.weatherfavicon.Drizzle })
        break
      case id >= 500 && id <= 531:
        this.setState({ favicon: this.weatherfavicon.Rain })
        break
      case id >= 600 && id <= 622:
        this.setState({ favicon: this.weatherfavicon.Snow })
        break
      case id >= 701 && id <= 781:
        this.setState({ favicon: this.weatherfavicon.Atmosphere })
        break
      case id === 800:
        this.setState({ favicon: this.weatherfavicon.Clear })
        break
      case id >= 801 && id <= 804:
        this.setState({ favicon: this.weatherfavicon.Clouds })
        break
      default:
        this.setState({ favicon: this.weatherfavicon.Clear })
    }
  }

  getWeather = async (e) => {
    e.preventDefault()

    const city = e.target.elements.city.value
    const country = e.target.elements.country.value

    console.log(city + ' ' + country)
    if (city && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
      )
      const response = await api_call.json()
      console.log(response)

      this.setState({
        city: `${response.name},${response.sys.country}`,
        cel: this.celcius(response.main.temp),
        max: this.celcius(response.main.temp_max),
        min: this.celcius(response.main.temp_min),
        description: response.weather[0].description,
        favicon: this.weatherfavicon.Thunderstorm,
      })

      this.getweatherfavicon(this.weatherfavicon, response.weather[0].id)
    } else {
      this.setState({ error: true })
    }
  }
  render() {
    return (
      <div className='App'>
        <Form loadweatherdetails={this.getWeather} error={this.state.error} />
        <Weather
          city={this.state.city}
          cel={this.state.cel}
          max={this.state.max}
          min={this.state.min}
          description={this.state.description}
          favicon={this.state.favicon}
        />
      </div>
    )
  }
}

export default App
