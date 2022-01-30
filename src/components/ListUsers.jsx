import React, { Fragment, useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { deepOrange } from "@mui/material/colors";
import CardContentUser from "./CardContentUser";


const users = [
  {
    idus: "94",
    nombre: "Administradora Quenguan",
    perfil: "GERENTE",
    dias_plani: "10",
    tiendas_plani: "5",
  },
  {
    idus: "97",
    nombre: "Administrador Yonier",
    perfil: "EJECUTIVO",
    dias_plani: "8",
    tiendas_plani: "15",
  },
  {
    idus: "42",
    nombre: "BERNARDO ARIAS CORREDOR",
    perfil: "EJECUTIVO",
    dias_plani: "0",
    tiendas_plani: "0",
  },
  {
    idus: "28",
    nombre: "ALEXANDER GALVIZ BUITRAGO",
    perfil: "EJECUTIVO",
    dias_plani: "5",
    tiendas_plani: "8",
  },
  {
    idus: "106",
    nombre: "Jhon Jimenez",
    perfil: "NAVIA",
    dias_plani: "45",
    tiendas_plani: "50",
  },
  {
    idus: "87",
    nombre: "Carlos Palma",
    perfil: "DIRECTOR UNPE",
    dias_plani: "30",
    tiendas_plani: "48",
  },
  {
    idus: "71",
    nombre: "IVAN DARIO RUIZ POLO",
    perfil: "EJECUTIVO",
    dias_plani: "0",
    tiendas_plani: "0",
  },
  {
    idus: "86",
    nombre: "Johana Quintero",
    perfil: "DIRECTOR UNPE",
    dias_plani: "1",
    tiendas_plani: "3",
  },
  {
    idus: "107",
    nombre: "Proculo Olarte",
    perfil: "PERFIL NAVIA",
    dias_plani: "3",
    tiendas_plani: "6",
  },
];

const ListUsers = () => {
  

  return (
    <Fragment>
      <div id="external-events" >
        {users.map((user, index) => (
          <Card
            key={index}
            className="fc-event"
            title={user.nombre}
            id={user.idus}
            sx={{
              display: "flex",
              width: "100%",
            }}
            variant="outlined"
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "90%" }}
            >
              <CardContentUser user={user} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: deepOrange[500],
                width: "10%",
              }}
            ></Box>
          </Card>
        ))}
      </div>
    </Fragment>
  );
};

export default ListUsers;
