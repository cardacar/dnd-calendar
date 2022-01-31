import React, {useEffect, useState} from "react";
import { Button, Grid } from "@mui/material";
import FullCalendarCustom from "../components/FullCalendarCustom";
import ListUsers from "../components/ListUsers";
import SearchInput from "../components/SearchInput";
import {getUsers, saveEventInfo} from '../services/CalendarService'



const CalendarPage = () => {
  const [event, setEvent] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [users, setUsers] = useState([]);
  
 useEffect(() => {

  getUsers().then(res=>setUsers(res.data))
  
  }, []);
  
  const handleClickButton = ()=>{
    console.log(event)
    saveEventInfo(event)
  }

  const handleChangeInputValue= (e)=>{
    setSearchInputValue(e.target.value)
    
  }


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
