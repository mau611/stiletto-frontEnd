import { useState } from "react";
import {
  TextField,
  Button,
  DialogActions,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormLabel,
} from "@mui/material";

const FormularioAgenda = ({
  scheduler,
  pacientes,
  tipo_Consulta,
  tratamientos,
  profesionales,
}) => {
  const [paciente, setPaciente] = useState(null);
  const [observaciones, setObservaciones] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [estadoConsulta, setEstadoConsulta] = useState("");
  const [profesional, setProfesional] = useState("");
  const [horaCita, setHoraCita] = useState(
    scheduler.state.start.value.toString().split(" ")[4].split(":")[0]
  );
  const [minutoCita, setMinutoCita] = useState(
    scheduler.state.start.value.toString().split(" ")[4].split(":")[1]
  );
  const [horaFinCita, setHoraFinCita] = useState(
    parseInt(
      scheduler.state.start.value.toString().split(" ")[4].split(":")[0]
    ) + 1
  );
  const [minutoFinCita, setMinutoFinCita] = useState(
    scheduler.state.start.value.toString().split(" ")[4].split(":")[1]
  );

  const [error, setError] = useState(null);

  const modificarHora = (valor) => {
    setHoraCita(valor.split(":")[0]);
    setMinutoCita(valor.split(":")[1]);
  };

  const handleSubmit = async () => {
    // Your own validation
    if (
      paciente.length < 3 &&
      observaciones.length < 3 &&
      tratamiento.length < 3 &&
      tipoConsulta.length < 3 &&
      estadoConsulta.length < 3
    ) {
      return setError({ ...error, title: "Min 3 letters" });
    }

    try {
      scheduler.loading(true);

      /**Simulate remote data saving */
      const added_updated_event = await new Promise((res) => {
        /**
         * Make sure the event have 4 mandatory fields
         * event_id: string|number
         * title: string
         * start: Date|string
         * end: Date|string
         */
        setTimeout(() => {
          res({
            event_id: Math.random(),
            title: paciente,
            start: scheduler.state.start.value,
            end: scheduler.state.end.value,
            description: paciente,
            admin_id: 1,
          });
        }, 3000);
      });

      // eslint-disable-next-line no-restricted-globals
      scheduler.onConfirm(added_updated_event, event ? "edit" : "create");
      scheduler.close();
    } finally {
      scheduler.loading(false);
    }
  };

  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <h3>Agregar cita</h3>
        <Autocomplete
          freeSolo
          id="pacientes"
          value={paciente}
          onChange={(e, value) => setPaciente(value)}
          disableClearable
          options={pacientes.map((option) => option.nombre)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Paciente"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
        <br />
        <FormControl>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { marginBottom: 2, width: "3.5cm" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormLabel>Hora cita</FormLabel>
            <TextField
              style={{ marginLeft: "-1cm" }}
              label="Hora"
              type={"time"}
              value={horaCita + ":" + minutoCita}
              helperText={!!error && error["observaciones"]}
              fullWidth
              onChange={(e) => modificarHora(e.target.value)}
            />
            <FormLabel
              className="label-hora-Fin"
              style={{ marginLeft: "0.5cm" }}
            >
              Hora fin
            </FormLabel>
            <TextField
              style={{ marginLeft: "-1cm" }}
              label="Hora"
              type={"time"}
              value={horaFinCita + ":" + minutoFinCita}
              helperText={!!error && error["observaciones"]}
              fullWidth
              onChange={(e) => modificarHora(e.target.value)}
            />
          </Box>
        </FormControl>
        <br />
        <TextField
          label="Observaciones"
          value={observaciones}
          helperText={!!error && error["observaciones"]}
          fullWidth
          onChange={(e) => {
            setObservaciones(e.target.value);
          }}
        />
        <FormControl
          style={{ width: "5cm", margin: "0.3cm", marginTop: "0.5cm" }}
          margin="normal"
        >
          <InputLabel id="tratamientos-label">Tratamiento</InputLabel>
          <Select
            labelId="tratamientos-label"
            id="tipo-tratamiento"
            value={tratamiento}
            label="Tratamientos"
            onChange={(e) => {
              setTratamiento(e.target.value);
            }}
          >
            {tratamientos.map((tratamiento) => (
              <MenuItem
                key={tratamiento.tratamiento_id}
                value={tratamiento.nombre}
              >
                {tratamiento.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          style={{ width: "5cm", margin: "0.3cm", marginTop: "0.5cm" }}
          margin="normal"
        >
          <InputLabel id="tipoConsulta-label">Tipo consulta</InputLabel>
          <Select
            labelId="tipoConsulta-label"
            id="tipo-consulta"
            value={tipoConsulta}
            label="Tipo consulta"
            onChange={(e) => setTipoConsulta(e.target.value)}
          >
            {tipo_Consulta.map((tipo) => (
              <MenuItem key={tipo.tipoConsulta_id} value={tipo.nombre}>
                {tipo.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          style={{ width: "5cm", margin: "0.3cm", marginTop: "0.5cm" }}
          margin="normal"
        >
          <InputLabel id="estadoConsulta-label">Estado consulta</InputLabel>
          <Select
            labelId="estadoConsulta-label"
            id="estado-consulta"
            value={estadoConsulta}
            label="Estado consulta"
            onChange={(e) => setEstadoConsulta(e.target.value)}
          >
            <MenuItem value={"Cancelada"}>Cancelada</MenuItem>
            <MenuItem value={"Por llegar"}>Por llegar</MenuItem>
            <MenuItem value={"En espera"}>En espera</MenuItem>
            <MenuItem value={"Finalizada"}>Finalizada</MenuItem>
            <MenuItem value={"Reprogramada"}>Reprogramada</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          style={{ width: "5cm", margin: "0.3cm", marginTop: "0.5cm" }}
          margin="normal"
        >
          <InputLabel id="profesional-label">Lic a cargo</InputLabel>
          <Select
            labelId="profesional-label"
            id="profesional"
            value={profesional}
            label="Lic. a cargo"
            onChange={(e) => setProfesional(e.target.value)}
          >
            {profesionales.map((lic) => (
              <MenuItem key={lic.profesional_id} value={lic.nombre}>
                {lic.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancelar</Button>
        <Button onClick={handleSubmit}>Guardar</Button>
      </DialogActions>
    </div>
  );
};

export default FormularioAgenda;
