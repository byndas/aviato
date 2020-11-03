import { useState } from "react";
import axios from "axios";

const API_Key = "3c7b076b3faa858080569f619e9e3da5";

function useWeatherState() {
  const [state, setState] = useState({});
  const getWeather = city => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}`
      );
      setState({
        temp: Math.floor(res.data.main.temp - 273.15),
        skye: res.data.weather[0].id
      });
    };
    fetchData();
  };
  return [state, getWeather];
}

export default useWeatherState;
