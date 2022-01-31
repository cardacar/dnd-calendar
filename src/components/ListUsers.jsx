import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContentUser from "./CardContentUser";

//Mapeo los usuarios en una lista de cards
const ListUsers = ({users}) => {


  return (
    <Fragment>
      <div id="external-events">
        {users.map((singleUser, index) => (
          <Card
            key={index}
            className="fc-event"
            title={singleUser.nombre}
            id={singleUser.idus}
            color={singleUser.color}
            sx={{
              display: "flex",
              width: "100%",
            }}
            variant="outlined"
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "90%" }}
            >
              <CardContentUser user={singleUser} />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                bgcolor: `#${singleUser.color}`,
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
