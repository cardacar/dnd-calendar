import React, { Fragment } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";


const CardContentUser = ({user}) => {
  return (
    <Fragment>
      <CardContent>
        <Typography
          sx={{ fontSize: 20}}
          mb={0}
          align="left"
          color="text.primary"
          gutterBottom
        >
          {user.nombre.toUpperCase()}
        </Typography>
        <Typography
          sx={{ fontSize: 16, textTransform: "capitalize" }}
          align="left"
          color="text.primary"
          variant="h5"
          gutterBottom
        >
          {user.perfil}
        </Typography>
        <Grid container>
          <Grid item xs={9}>
            <Typography
              sx={{ fontSize: 13, textTransform: "capitalize" }}
              variant="subtitle1"
              align="left"
              color="text.secondary"
            >
              Dias planificados
            </Typography>
            <Typography
              sx={{ fontSize: 13 }}
              variant="subtitle1"
              align="left"
              color="text.secondary"
            >
              Cant. tiendas planificados
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              sx={{ fontSize: 13 }}
              variant="subtitle1"
              align="left"
              color="text.secondary"
            >
              {user.dias_plani}
            </Typography>
            <Typography
              sx={{ fontSize: 13 }}
              variant="subtitle1"
              align="left"
              color="text.secondary"
            >
              {user.tiendas_plani}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Fragment>
  );
};

export default CardContentUser;
