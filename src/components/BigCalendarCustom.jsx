import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

import ListUsers from "./ListUsers";
import { Button, Grid } from "@mui/material";
import SearchInput from "./SearchInput";


const BigCalendarCustom = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let draggableItems = document.getElementById("external-events");
    new Draggable(draggableItems, {
      itemSelector: ".fc-event",
      eventData: function (eventItem) {
        let id = eventItem.getAttribute("id");
        let title = eventItem.getAttribute("title");
        
        return {
          id: id,
          title: title,
        };
      },
    });
  }, [events]);


  const eventClick = (eventClick) => {
    console.log(`click in event ${eventClick}`);
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={3} sm={3} md={3} xs={3}>
        <SearchInput/>
        <ListUsers />
      </Grid>
      <Grid item lg={9} sm={9} md={9} xs={9}>
        <FullCalendar
          
          headerToolbar={{
            left: "prev",
            center: "title",
            right: "next",
          }}
          
          rerenderDelay={10}
          eventDurationEditable={false}
          editable={true}
          selectable={true}
          locale="es"
          droppable={true}
          plugins={[dayGridPlugin, interactionPlugin]}
          validRange={{
            start: "2022-06-01",
            end: "2023-01-01",
          }}
          dragScroll={false}
          dayMaxEventRows={3}
          //ref={this.calendarComponentRef}
          //weekends={this.state.calendarWeekends}
          //events={this.state.calendarEvents}
          //eventDrop={this.drop}
          // drop={this.drop}
          //eventReceive={this.eventReceive}
          eventClick={eventClick}

        />
      </Grid>
    </Grid>
  );
};


export default BigCalendarCustom;
