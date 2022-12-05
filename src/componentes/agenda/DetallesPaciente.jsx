import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

import HistoryIcon from '@mui/icons-material/History';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DetallesPaciente({nombrePaciente}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={nombrePaciente}
        subheader="Tiene 10 Sesiones"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://p4.wallpaperbetter.com/wallpaper/757/838/482/bark-brown-macro-nature-wallpaper-preview.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Diagnostico:
          <br />
          Profesional a cargo:
          <br />
          Ultima sesion realizada:
          <br />
          Numero de sesiones Realizadas
          <br />
          Proxima sesion:
          <br />
          Pendiente de cobrar:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <TextField id="outlined-basic" label="Cobrar" variant="outlined" />
        <IconButton aria-label="add to favorites">
          <PriceCheckIcon />
        </IconButton>
        <div>
          <Button onClick={handleOpen}>Ver Historial</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <HistoryIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Evolucion 1" secondary=" Evolucion del paciente"/>
                  <br />
                  <br />Paciente ingresa con detalles
                  <br />asadasd
                  <br />asdasdasd
                  <br />asadasd
                  <br />asdasdasd
                  <br />asadasd
                  <br />asdasdasd
                  <br />asadasd
                  
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <BeachAccessIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
              <Button onClick={handleClose}>Cerrar detalles</Button>
            </Box>
          </Modal>
        </div>
      </CardActions>
    </Card>
  );
}
