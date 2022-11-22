import { Fragment, useState } from "react";
import { Button, Typography } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import { RESOURCES, EVENTS, PERSONAS, TipoConsulta, Tratamientos } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FormularioAgenda from "./FormularioAgenda";

const Agenda = () => {
  const [mode, setMode] = useState("default");
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
        <span>Vista: </span>
        <Button
          color={mode === "default" ? "primary" : "inherit"}
          variant={mode === "default" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("default")}
        >
          Columnas
        </Button>
        <Button
          color={mode === "tabs" ? "success" : "inherit"}
          variant={mode === "tabs" ? "contained" : "text"}
          size="small"
          onClick={() => setMode("tabs")}
        >
          Pestañas
        </Button>
      </div>
      <Scheduler
        view="day"
        day={{
          startHour: 6,
          endHour: 21,
          step: 60,
        }}
        translations={{
          navigation: {
            month: "Mes",
            week: "Semana",
            day: "Dia",
            today: "Hoy",
          },
          event: {

            title: "Titulo",
            start: "Inicia",
            end: "Termina",
          },
          moreEvents: "More...",
        }}
        events={EVENTS}
        resources={RESOURCES}
        direction="ltr"
        resourceFields={{
          idField: "admin_id",
          textField: "title",
          subTextField: "mobile",
          avatarField: "title",
          colorField: "color",
        }}
        resourceViewMode={mode}
        customEditor={(scheduler) => (
          <FormularioAgenda
            scheduler={scheduler}
            pacientes={PERSONAS}
            tipo_Consulta={TipoConsulta}
            tratamientos={Tratamientos}
          />
        )}
        viewerExtraComponent={(fields, event) => {
          return (
            <div>
              {fields.map((field, i) => {
                if (field.name === "admin_id") {
                  const admin = field.options.find(
                    (fe) => fe.id === event.admin_id
                  );
                  return (
                    <Typography
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                      color="textSecondary"
                      variant="caption"
                      noWrap
                    >
                      <PersonRoundedIcon /> {admin.text}
                      <PersonRoundedIcon /> {admin.value}
                    </Typography>
                  );
                } else {
                  return "";
                }
              })}
            </div>
          );
        }}
      />
    </Fragment>
  );
};

export default Agenda;
