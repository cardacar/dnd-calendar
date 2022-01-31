import axios from "axios";
import { randomColorGenerate } from "../utils/randomColorGenerate";

const API_URL = "http://test.movilbox.co:888/test_mbox/test.php?metodo=";

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}usuarios`);
  response.data.map((user) => {
    let color = randomColorGenerate();
    user.color = color;
    console.log(color);
  });
  console.log(response.data);
  return response;
};

export const getTimePeriods = async () => {
  const response = await axios.get(`${API_URL}periodos`);
  let months = []
  let years= []
  response.data.map((date) => {
      months.push(parseInt(date.mes, 10))
      years.push(parseInt(date.anio, 10))
    });
    let maxMonth = Math.max.apply(Math,months)
    let minMonth = Math.min.apply(Math,months)
    let maxYear = Math.max.apply(Math,years)
    let minYear = Math.min.apply(Math,years)
  const range = {maxMonth, minMonth, maxYear, minYear}
  console.log(range);
  return range;
};

export const saveEventInfo = async (data)=>{
    const response = await axios.post(`${API_URL}guardar`, data)
    console.log(response)
    return response;
}
