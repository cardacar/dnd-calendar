import React, { useEffect, Fragment, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Alert, Collapse, Button } from "@mui/material";
import { Box } from "@mui/system";
import Close from "@mui/icons-material/Close";
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import CachedIcon from '@mui/icons-material/Cached';
import {getTimePeriods} from '../services/CalendarService'

const FullCalendarCustom = ({ event, setEvent }) => {
  const [open, setOpen] = useState(false);
  const [range, setRange] = useState({maxMonth: 0, minMonth: 0, maxYear: 0, minYear: 0});

  const [mouseCoord, setMouseCoord] = useState({
    coordX: 0,
    coordY: 0,
  });

  useEffect(() => {

    getTimePeriods().then(res => setRange(res))
    
    let draggableItems = document.getElementById("external-events");
    new Draggable(draggableItems, {
      itemSelector: ".fc-event",
      eventData: function (eventItem) {
        let id = eventItem.getAttribute("id");
        let title = eventItem.getAttribute("title");
        let color = `#${eventItem.getAttribute("color")}`;
        return {
          id: id,
          title: title,
          color: color,
        };
      },
    });
  }, []);

  const eventClick = (event) => {
    console.log(`${range.minYear}-0${range.minMonth}-01`)
    console.log(`${range.maxYear}-${range.maxMonth}-31`)
    setMouseCoord({
      coordX: event.jsEvent.x,
      coordY: event.jsEvent.y - 140,
    });

    console.log(mouseCoord);
    console.log(event);
  };

  const eventReceive = (eventClick) => {
    let id = eventClick.draggedEl.id;
    let date = eventClick.dateStr;
    setEvent(event.concat({ "idus": parseInt(id, 10), "fecha": date }));
    console.log({ id, date });
  };

  return (
    <Fragment>
      <FullCalendar
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        height={650}
        rerenderDelay={10}
        eventDurationEditable={false}
        editable={true}
        selectable={false}
        locale="es"
        droppable={true}
        plugins={[dayGridPlugin, interactionPlugin]}
        validRange={{
          start: `${range.minYear}-0${range.minMonth}-01`,
          end: `${range.maxYear}-${range.maxMonth}-31`,
        }}
        dragScroll={false}
        dayMaxEventRows={3}
        Click
        drop={eventReceive}
        eventClick={(e) => {
          eventClick(e);
          setOpen(!open);
        }}
      />
      <Box sx={{ width: "100%" }}>
        <Collapse in={open}>
          <Alert
            icon={false}
            sx={{
              mb: 2,
              zIndex: 10,
              position: "absolute",
              top: mouseCoord.coordY,
              left: mouseCoord.coordX,
              bgcolor: "#eee",
            }}
          >
            <div>
              <Button color="inherit" sx={{fontSize: 10, width: '100%', justifyContent: "flex-start"}} size="small" endIcon={<NoteAltIcon />}>
                Editar
              </Button>
            </div>
            <div>
              <Button color="inherit" sx={{fontSize: 10, width: '100%', justifyContent: "flex-start"}} size="small" endIcon={<CachedIcon />}>
                Reprogramar
              </Button>
            </div>
            <div>
              <Button color="inherit" sx={{fontSize: 10, width: '100%', justifyContent: "flex-start"}} size="small" endIcon={<DeleteIcon />}>
                Eliminar
              </Button>
            </div>
            <div>
              <Button onClick={()=>setOpen(false)} color="inherit" sx={{fontSize: 10, width: '100%', justifyContent: "flex-start"}} size="small" endIcon={<Close />}>
                Cerrar
              </Button>
            </div>
          </Alert>
        </Collapse>
      </Box>
    </Fragment>
  );
};

export default FullCalendarCustom;
