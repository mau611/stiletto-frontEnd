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
} from "@mui/material";

const FormularioAgenda = ({ scheduler, pacientes, tipo_Consulta }) => {
  const [paciente, setPaciente] = useState(null);
  const [observaciones, setObservaciones] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [estadoConsulta, setEstadoConsulta] = useState("");


  const [error, setError] = useState(null);
  console.log(paciente)

  return (
    <div>
      <div style={{ padding: "1rem" }}>
        <p>Load your custom form/fields</p>
        <Autocomplete
          freeSolo
          id="pacientes"
          value={paciente}
          onChange={(e, value)=> setPaciente(value)}
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
        <TextField
          label="Observaciones"
          value={observaciones}
          helperText={!!error && error["observaciones"]}
          fullWidth
          onChange={(e)=>{setObservaciones(e.target.value);console.log(observaciones)}}
        />
        <TextField
          label="Tratamientos"
          value={""}
          fullWidth
        />
        <FormControl fullWidth>
          <InputLabel id="tipoConsulta-label">Tipo consulta</InputLabel>
          <Select
            labelId="tipoConsulta-label"
            id="tipo-consulta"
            value={""}
            label="Tipo consulta"
          >
            {tipo_Consulta.map((tipo) => (
              <MenuItem key={tipo.tipoConsulta_id} value={tipo.tipoConsulta_id}>
                {tipo.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="estadoConsulta-label">Estado consulta</InputLabel>
          <Select
            labelId="estadoConsulta-label"
            id="estado-consulta"
            value={""}
            label="Estado consulta"
          >
            <MenuItem value={"Cancelada"}>Cancelada</MenuItem>
            <MenuItem value={"Por llegar"}>Por llegar</MenuItem>
            <MenuItem value={"En espera"}>En espera</MenuItem>
            <MenuItem value={"Finalizada"}>Finalizada</MenuItem>
            <MenuItem value={"Reprogramada"}>Reprogramada</MenuItem>
          </Select>
        </FormControl>
      </div>
      <DialogActions>
        <Button onClick={scheduler.close}>Cancel</Button>
        <Button onClick={(e)=>(e)}>Confirm</Button>
      </DialogActions>
    </div>
  );
};

export default FormularioAgenda;
