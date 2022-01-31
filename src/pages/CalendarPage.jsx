import React, {useEffect, useState} from "react";
import { Button, Grid } from "@mui/material";
import FullCalendarCustom from "../components/FullCalendarCustom";
import ListUsers from "../components/ListUsers";
import SearchInput from "../components/SearchInput";
import {getUsers, saveEventInfo} from '../services/CalendarService'

//Pagina principal que renderiza el calendario

const CalendarPage = () => {
  //estado que guarda los eventos
  const [event, setEvent] = useState([]);
  //Estado que controla el buscador
  const [searchInputValue, setSearchInputValue] = useState("");
  //Estado que contiene los usuarios
  const [users, setUsers] = useState([]);
  
  //Obtengo la informacion de los usuarios de la api
 useEffect(() => {

  getUsers().then(res=>setUsers(res.data))
  
  }, []);

  //Guardo los eventos
  const handleClickButton = ()=>{
    console.log(event)
    saveEventInfo(event)
  }

  //Obtengo la informacion del input de guardar
  const handleChangeInputValue= (e)=>{
    setSearchInputValue(e.target.value)
    search(e.target.value)
  }

  const search = (termino)=>{
    let find = users.filter((element)=>{
      if(element.nombre.toString().toLowerCase().includes(termino.toString().toLowerCase())){
        return element
      }
    })
    
    setUsers(find)
    //return find
  }


  //Renderizo la lista de usuarios, el input de busqueda y el calendario cada uno con las props necesarias
  return (
    <Grid container spacing={3} >
      <Grid item lg={3} sm={3} md={3} xs={3}>
        <SearchInput handleChangeInputValue={handleChangeInputValue} searchInputValue={searchInputValue}/>
        <ListUsers users={users} setUsers={setUsers} searchInputValue={searchInputValue}/>
      </Grid>
      <Grid item lg={9} sm={9} md={9} xs={9}>
        <FullCalendarCustom event={event} setEvent={setEvent}/>
        <Button sx={{mt: 2}} variant="outlined" onClick={()=>{handleClickButton()}}>Guardar</Button>
      </Grid>
    </Grid>
  );
};

export default CalendarPage;
