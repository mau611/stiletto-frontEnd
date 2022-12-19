import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

import { Scheduler } from "@aldabil/react-scheduler";
import NavBar from "../estructura/NavBar";

import DetallesPaciente from "./DetallesPaciente";

const endpoint = "http://localhost:8000/api";

function Agenda() {
  const [eventos, setEventos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [gabinetes, setGabinetes] = useState([]);
  const [tipoConsulta, setTipoConsultas] = useState([]);
  const [estadosCita, setEstados] = useState([]);
  const [licenciados, setLicenciados] = useState([]);
  useEffect(() => {
    getPacientes();
    getGabinetes();
    getTipoConsultas();
    getEstados();
    getLicenciados();
    getEventos();
  }, []);

  const getEventos = async () => {
    const response = await axios.get(`${endpoint}/consultas`);
    setEventos(response.data);
  };
  const getPacientes = async () => {
    const response = await axios.get(`${endpoint}/pacientes`);
    setPacientes(response.data);
  };
  const getGabinetes = async () => {
    const response = await axios.get(`${endpoint}/consultorios`);
    setGabinetes(response.data);
  };
  const getTipoConsultas = async () => {
    const response = await axios.get(`${endpoint}/tipoConsultas`);
    setTipoConsultas(response.data);
  };
  const getEstados = async () => {
    const response = await axios.get(`${endpoint}/estadoCitas`);
    setEstados(response.data);
  };
  const getLicenciados = async () => {
    const response = await axios.get(`${endpoint}/profesionales`);
    setLicenciados(response.data);
  };

  const handleConfirm = async (event, action) => {
    console.log(event.title);
    await axios.post(`${endpoint}/consulta`, {
      title: event.title,
      start: event.start,
      end: event.end,
      estado: "",
      paciente_id: event.paciente_id,
      tipoConsulta_id: event.tipoConsulta_id,
      id: event.id,
      estadoConsulta_id: event.estadoConsulta_id,
    });
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({
          ...event,
          event_id: event.event_id || Math.random(),
        });
      }, 3000);
    });
  };

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
            events={eventos}
            resources={gabinetes}
            direction={"ltr"}
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
                title: "Tratamiento",
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
              weekDays: [0, 1, 2, 3, 4, 5, 6],
              weekStartOn: 1,
              startHour: 6,
              endHour: 21,
              step: 60,
              navigation: true,
            }}
            resourceFields={{
              idField: "id",
              textField: "nombre",
              subTextField: "mobile",
              avatarField: "title",
              colorField: "color",
            }}
            resourceViewMode={mode}
            fields={[
              {
                name: "paciente_id",
                type: "select",
                options: pacientes.map((res) => {
                  return {
                    id: res.id,
                    key: `${res.nombre} `,
                    text: `${res.nombres} ${res.apellidos} `,
                    value: res.id, //Should match "name" property
                  };
                }),
                config: { label: "Paciente", required: true },
              },
              {
                name: "id",
                type: "select",
                options: gabinetes.map((res) => {
                  return {
                    id: res.id,
                    key: `${res.nombre} `,
                    text: `${res.nombre}`,
                    value: res.id, //Should match "name" property
                  };
                }),
                config: { label: "Gabinete", required: true },
              },
              {
                name: "title",
                type: "input",
                label: "Tratamiento",
                config: {
                  multiline: true,
                  rows: 4,
                  required: true,
                  min: 3,
                  errMsg: "Por favor, escribe el tratamiento del/la paciente",
                },
              },
              {
                name: "tipoConsulta_id",
                type: "select",
                options: tipoConsulta.map((res) => {
                  return {
                    id: res.id,
                    key: `${res.nombre} `,
                    text: `${res.nombre}`,
                    value: res.id, //Should match "name" property
                  };
                }),
                config: { label: "Tipo Consulta", required: true },
              },
              {
                name: "estadoConsulta_id",
                type: "select",
                options: estadosCita.map((res) => {
                  return {
                    id: res.id,
                    key: `${res.nombre} `,
                    text: `${res.estado}`,
                    value: res.id, //Should match "name" property
                  };
                }),
                config: { label: "Estado", required: true },
              },
              {
                name: "profesional_id",
                type: "select",
                options: licenciados.map((res) => {
                  return {
                    id: res.id,
                    key: `${res.nombre} `,
                    text: `${res.nombre} `,
                    value: res.id, //Should match "name" property
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
                        <DetallesPaciente
                          key={i}
                          nombrePaciente={paciente.text}
                        />
                      );
                    } else {
                      return "";
                    }
                  })}
                </div>
              );
            }}
            onConfirm={handleConfirm}
          />
        </Fragment>
      </NavBar>
    </div>
  );
}

export default Agenda;
