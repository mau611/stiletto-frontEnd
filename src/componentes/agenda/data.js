export const EVENTS = [
  {
    event_id: 1,
    title: "Event 1",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(30)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(30)),
    admin_id: 1,
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    admin_id: 2,
  },
  {
    event_id: 3,
    title: "Event 3",
    start: new Date(
      new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
    admin_id: 1,
  },
  {
    event_id: 4,
    title: "Event 4",
    start: new Date(
      new Date(new Date(new Date().setHours(9)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    admin_id: 2,
  },
  {
    event_id: 5,
    title: "Event 5",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() + 10
      )
    ),
    admin_id: 4,
  },
  {
    event_id: 6,
    title: "Event 6",
    start: new Date(new Date(new Date().setHours(11)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(12)).setMinutes(0)),
    admin_id: 2,
  },
  {
    event_id: 7,
    title: "Event 7",
    start: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(12)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    admin_id: 3,
  },
  {
    event_id: 8,
    title: "Event 8",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    admin_id: 4,
  },
  {
    event_id: 9,
    title: "Event 11",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(0)).setDate(
        new Date().getDate() + 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(30)).setDate(
        new Date().getDate() + 1
      )
    ),
    admin_id: 1,
  },
  {
    event_id: 10,
    title: "Event 9",
    start: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(0)).setDate(
        new Date().getDate() + 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(16)).setMinutes(30)).setDate(
        new Date().getDate() + 1
      )
    ),
    admin_id: 2,
  },
  {
    event_id: 11,
    title: "Event 10",
    start: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(0)).setDate(
        new Date().getDate() - 1
      )
    ),
    admin_id: 1,
  },
];

export const RESOURCES = [
  {
    admin_id: "Gabinete 1",
    title: "Gabinete 1",
    color: "#ab2d2d",
  },
  {
    admin_id: "Gabinete 2",
    title: "Gabinete 2",
    color: "#58ab2d",
  },
  {
    admin_id: "Gabinete 3",
    title: "Gabinete 3",
    color: "#a001a2",
  },
  {
    admin_id: "Gabinete 4",
    title: "Gabinete 4",
    color: "#08c5bd",
  },
  {
    admin_id: "Camara Hiperbarica",
    title: "Camara Hiperbarica",
    color: "#ccc42e",
  },
  {
    admin_id: "Gabinete 6",
    title: "Gabinete 6",
    color: "#c781ef",
  },
  {
    admin_id: "Imagenologia",
    title: "Imagenologia",
    color: "#910032",
  },
];

export const PERSONAS = [
  {
    paciente_id: 1,
    nombre: "Nombre 1",
  },
  {
    paciente_id: 2,
    nombre: "Nombre 2",
  },
  {
    paciente_id: 3,
    nombre: "Nombre 3",
  },
  {
    paciente_id: 4,
    nombre: "Nombre 4",
  },
  {
    paciente_id: 5,
    nombre: "Nombre 5",
  },
  {
    paciente_id: 6,
    nombre: "Nombre 6",
  },
  {
    paciente_id: 7,
    nombre: "Nombre 7",
  },
];

export const TipoConsulta = [
    {
      tipoConsulta_id: 1,
      nombre: "Consulta 1",
    },
    {
      tipoConsulta_id: 2,
      nombre: "Consulta 2",
    },
    {
      tipoConsulta_id: 3,
      nombre: "Consulta 3",
    },
    {
      tipoConsulta_id: 4,
      nombre: "Consulta 4",
    },
    {
      tipoConsulta_id: 5,
      nombre: "Consulta 5",
    },
    {
      tipoConsulta_id: 6,
      nombre: "Consulta 6",
    },
    {
      tipoConsulta_id: 7,
      nombre: "Consulta 7",
    },
  ];

  export const Tratamientos = [
    {
      tratamiento_id: 1,
      nombre: "Tratamiento 1",
    },
    {
      tratamiento_id: 2,
      nombre: "Tratamiento 2",
    },
    {
      tratamiento_id: 3,
      nombre: "Tratamiento 3",
    },
    {
      tratamiento_id: 4,
      nombre: "Tratamiento 4",
    },
    {
      tratamiento_id: 5,
      nombre: "Tratamiento 5",
    },
    {
      tratamiento_id: 6,
      nombre: "Tratamiento 6",
    },
    {
      tratamiento_id: 7,
      nombre: "Tratamiento 7",
    },
  ];

  export const Profesional = [
    {
      profesional_id: 1,
      nombre: "Profesional 1",
    },
    {
      profesional_id: 2,
      nombre: "Profesional 2",
    },
    {
      profesional_id: 3,
      nombre: "Profesional 3",
    },
    {
      profesional_id: 4,
      nombre: "Profesional 4",
    },
    {
      profesional_id: 5,
      nombre: "Profesional 5",
    },
    {
      profesional_id: 6,
      nombre: "Profesional 6",
    },
    {
      profesional_id: 7,
      nombre: "Profesional 7",
    },
  ];

  export const EstadoConsulta = [
    {
      estadoConsulta_id: 1,
      nombre: "Cancelada",
    },
    {
      estadoConsulta_id: 2,
      nombre: "Por Llegar",
    },
    {
      estadoConsulta_id: 3,
      nombre: "En Espera",
    },
    {
      estadoConsulta_id: 4,
      nombre: "Finalizada",
    },
    {
      estadoConsulta_id: 5,
      nombre: "Reprogramada",
    },
  ];
