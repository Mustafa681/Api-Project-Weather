class Forecast {
  constructor() {
    this.key = 's9WO7F47V9XiGh6kdSBDDijiHjoBCWj4'

    this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/'

    this.cityURI =
      'https://dataservice.accuweather.com/locations/v1/cities/search'
  }
  async updateCity(city) {
    const cityDets = await this.getCity(city)
    const weather = await this.getWeather(cityDets.Key)
    return { cityDets, weather }
  }
  async getCity(city) {
    const query = `?apikey=${this.key}&q=${city}`
    const response = await fetch(this.cityURI + query)
    const data = await response.json()

    return data[0]
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.key}`
    const response = await fetch(this.weatherURI + query)
    const data = await response.json()
    return data[0]
  }
}

// getCity('amsterdam')
//   .then((data) => {
//     return getWeather(data.Key)
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => console.log(err))





