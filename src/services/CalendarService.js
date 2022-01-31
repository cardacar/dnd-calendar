import axios from "axios";
import { randomColorGenerate } from "../utils/randomColorGenerate";


//Api de la url
const API_URL = "http://test.movilbox.co:888/test_mbox/test.php?metodo=";


//Obtengo los usuarios de la api y le asigno un color aleatorio a cada uno
export const getUsers = async () => {
  const response = await axios.get(`${API_URL}usuarios`);
  response.data.map((user) => {
    let color = randomColorGenerate();
    user.color = color;
  });
  return response;
};

//Obtengo el rango de fechas permitidas y filtro el mayor,el menor mes y año
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
  return range;
};

//Guardo la informacion
export const saveEventInfo = async (data)=>{
  const config = {
    method: 'post',
    url: 'http://test.movilbox.co:888/test_mbox/test.php?metodo=guardar',
    headers: { "Conten-Type": "application/json" },
    data : data
  };
    const response = await axios(config)

    return response;

}
