import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
} from "@mui/material";

import { Scheduler } from "@aldabil/react-scheduler";
import NavBar from "../estructura/NavBar";
import {
  RESOURCES,
  PERSONAS,
  TipoConsulta,
  Tratamientos,
  Profesional,
  EstadoConsulta,
} from "./data";
import DetallesPaciente from "./DetallesPaciente";

const endpoint = "http://localhost:8000/api";

function Agenda() {
  const [pacientes, setPacientes] = useState([])
  useEffect(()=>{
    getPacientes()
  },[])
  const getPacientes = async () => {
    const response = await axios.get(`${endpoint}/pacientes`)
    setPacientes(response.data)
  }

  const [mode, setMode] = useState("tabs");
  return (
    <div>
      <NavBar titulo={"Shanti - Spa"}>
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
            resources={RESOURCES}
            translations={{
              navigation: {
                month: "Mes",
                week: "Semana",
                day: "Dia",
                today: "Hoy",
              },
              form: {
                addTitle: "Crear",
                editTitle: "Editar",
                confirm: "Guardar",
                delete: "Eliminar",
                cancel: "Cancelar",
              },
              event: {
                title: "Titulo",
                start: "Inicia",
                end: "Termina",
                allDay: "Todo el dia",
              },
              moreEvents: "More...",
            }}
            view={"day"}
            day={{
              startHour: 6,
              endHour: 21,
              step: 60,
            }}
            week={{
              weekDays: [0,1,2, 3, 4, 5, 6],
              weekStartOn: 1,
              startHour: 6,
              endHour: 21,
              step: 60,
              navigation: true,
            }}
            resourceFields={{
              idField: "admin_id",
              textField: "title",
              subTextField: "mobile",
              avatarField: "title",
              colorField: "color",
            }}
            resourceViewMode={mode}
            fields={[
              {
                name: "admin_id",
                type: "select",
                default: RESOURCES[0].admin_id,
                options: RESOURCES.map((res) => {
                  return {
                    id: res.admin_id,
                    text: `${res.title} `,
                    value: res.admin_id, //Should match "name" property
                  };
                }),
                config: { label: "Gabinete", required: true },
              },
              {
                name: "paciente_id",
                type: "select",
                options: pacientes.map((res) => {
                  return {
                    id: res.id,
                    text: `${res.nombres} ${res.apellidos} `,
                    value: res.id, //Should match "name" property
                  };
                }),
                config: { label: "Paciente", required: true },
              },
              {
                name: "tratamiento_id",
                type: "select",
                options: Tratamientos.map((res) => {
                  return {
                    id: res.tratamiento_id,
                    text: `${res.nombre} `,
                    value: res.tratamiento_id, //Should match "name" property
                  };
                }),
                config: { label: "Tratamiento", required: true },
              },
              {
                name: "tipoConsulta_id",
                type: "select",
                options: TipoConsulta.map((res) => {
                  return {
                    id: res.tipoConsulta_id,
                    text: `${res.nombre} `,
                    value: res.tipoConsulta_id, //Should match "name" property
                  };
                }),
                config: { label: "Tipo Consulta", required: true },
              },
              {
                name: "estadoConsulta_id",
                type: "select",
                options: EstadoConsulta.map((res) => {
                  return {
                    id: res.estadoConsulta_id,
                    text: `${res.nombre} `,
                    value: res.estadoConsulta_id, //Should match "name" property
                  };
                }),
                config: { label: "Estado", required: true },
              },
              {
                name: "profesional_id",
                type: "select",
                options: Profesional.map((res) => {
                  return {
                    id: res.profesional_id,
                    text: `${res.nombre} `,
                    value: res.profesional_id, //Should match "name" property
                  };
                }),
                config: { label: "Licenciado a cargo", required: true },
              },
            ]}
            viewerExtraComponent={(fields, event) => {
              return (
                <div>
                  {fields.map((field, i) => {
                if (field.name === "paciente_id") {
                  const paciente = field.options.find(
                    (fe) => fe.id === event.paciente_id
                  );
                  return (
                    <DetallesPaciente key={i} nombrePaciente={paciente.text}/>
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
      </NavBar>
    </div>
  );
}

export default Agenda;
