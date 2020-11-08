import { useState } from "../../../node_modules/react";
import axios from "../../../node_modules/axios";

const API_Key = "3c7b076b3faa858080569f619e9e3da5";

function useWeatherState() {
  const [state, setState] = useState({});
  const getWeather = city => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
      );
      console.log(res.data)
      setState({
        temp: Math.floor(res.data.main.temp - 272.15),
        skye: res.data.weather[0].id,
        wind: res.data.wind.speed,
        visibility: res.data.visibility / 1000
      });
    };
    fetchData();
  };
  return [state, getWeather];
}

export default useWeatherState;
