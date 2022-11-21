import { Fragment } from "react";
import { Typography } from "@mui/material";
import { Scheduler } from "@aldabil/react-scheduler";
import { RESOURCES, EVENTS, PERSONAS, TipoConsulta } from "./data";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import FormularioAgenda from "./FormularioAgenda";

const Agenda = () => {
  return (
    <Fragment>
      <Scheduler
        view="day"
        day={{
          startHour: 6,
          endHour: 21,
          step: 60,
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
        resourceViewMode={"tabs"}
        customEditor={(scheduler) => <FormularioAgenda scheduler={scheduler} pacientes={PERSONAS} tipo_Consulta={TipoConsulta} />}
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
