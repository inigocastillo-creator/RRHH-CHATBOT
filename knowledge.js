const knowledgeBase = [
  {
    id: "tramites_general",
    topic: "trámites generales",
    keywords: [
      "factorial", "tramites", "trámites", "portal del empleado",
      "vacaciones", "permisos", "cambio de datos", "nominas", "nóminas"
    ],
    answer:
      "Para tramitar vacaciones, permisos, cambios de datos, consultar nóminas y realizar trámites del trabajador debes usar Factorial. Si tienes dudas con el portal del empleado, escribe a rrhh@selectra.com.",
    source: "Normativa RRHH 2024 - Información general"
  },

  {
    id: "horario_general",
    topic: "horario y jornada",
    keywords: [
      "horario", "jornada", "hora de entrada", "hora de salida",
      "viernes", "40 horas", "jornada completa"
    ],
    answer:
      "El horario general es de lunes a jueves de 09:00 a 18:15 con una hora de comida y media hora de descanso. La entrada de lunes a jueves puede hacerse entre las 08:00 y las 09:30, y la salida mínima será a partir de las 17:15, manteniendo siempre una hora de comida. Los viernes el horario es de 08:00 a 15:00, con una jornada mínima de 7 horas. Deben realizarse siempre 40 horas semanales en jornada completa. El tiempo trabajado antes de las 08:00 no computa dentro de la jornada.",
    source: "Normativa RRHH 2024 - Horario y jornada laboral"
  },

  {
    id: "fichaje",
    topic: "fichaje",
    keywords: [
      "fichaje", "fichar", "entrada", "salida", "descanso",
      "pausa comida", "factorial app", "movil", "móvil"
    ],
    answer:
      "Es obligatorio registrar la jornada laboral en Factorial. Debes fichar entrada, descanso, comida y salida. Está prohibido fichar desde la web de Factorial en el móvil; si fichas con el móvil debe ser obligatoriamente desde la app. Los managers revisan y aprueban mensualmente los fichajes de su equipo.",
    source: "Normativa RRHH 2024 - Fichaje"
  },

  {
    id: "teletrabajo_dias",
    topic: "teletrabajo - días por antigüedad",
    keywords: [
      "teletrabajo", "dias de teletrabajo", "días de teletrabajo",
      "cuantos dias de teletrabajo", "cuántos días de teletrabajo",
      "antiguedad teletrabajo", "antigüedad teletrabajo"
    ],
    answer:
      "Los días de teletrabajo al año dependen de la antigüedad: a partir de 1 año, 6 días; a partir de 2 años, 9 días; a partir de 3 años en adelante, 12 días.",
    source: "Normativa RRHH 2024 - Teletrabajo"
  },

  {
    id: "teletrabajo_condiciones",
    topic: "teletrabajo - condiciones",
    keywords: [
      "como pedir teletrabajo", "cómo pedir teletrabajo", "condiciones teletrabajo",
      "48 horas teletrabajo", "dias seguidos teletrabajo", "días seguidos teletrabajo",
      "otra sede", "desplazamiento", "teletrabajar"
    ],
    answer:
      "La modalidad habitual es presencial. El teletrabajo debe solicitarse por Factorial y requiere aprobación del manager y de RRHH con un mínimo de 48 horas de antelación. No se pueden juntar más de 2 días seguidos, no es acumulable y debe disfrutarse durante el periodo de vigencia. Trabajar voluntariamente desde otra sede se considera teletrabajo y puede solicitarse hasta 4 días seguidos. Si es por motivos plenamente laborales, no se considera teletrabajo, sino desplazamiento, y debe comunicarse al manager y a RRHH.",
    source: "Normativa RRHH 2024 - Teletrabajo"
  },

  {
    id: "vacaciones_dias",
    topic: "vacaciones - días",
    keywords: [
      "cuantos dias de vacaciones", "cuántos días de vacaciones",
      "dias de vacaciones", "días de vacaciones",
      "23 dias", "23 días", "vacaciones año"
    ],
    answer:
      "Los empleados tienen derecho a 23 días laborables de vacaciones por año natural, de enero a diciembre. Esto equivale a una generación aproximada de 1,91 días al mes.",
    source: "Normativa RRHH 2024 - Vacaciones"
  },

  {
    id: "vacaciones_solicitud",
    topic: "vacaciones - solicitud",
    keywords: [
      "como pedir vacaciones", "cómo pedir vacaciones",
      "solicitar vacaciones", "pedir vacaciones",
      "antelacion vacaciones", "antelación vacaciones"
    ],
    answer:
      "Las vacaciones se solicitan por Factorial. La normativa indica como criterio general una antelación mínima de 15 días para la organización del departamento. En otro punto también menciona un mínimo de una semana de antelación, así que si tu caso es ajustado conviene confirmarlo con RRHH para evitar dudas.",
    source: "Normativa RRHH 2024 - Vacaciones"
  },

  {
    id: "vacaciones_arrastre",
    topic: "vacaciones - arrastre al año siguiente",
    keywords: [
      "pasar vacaciones al año siguiente", "arrastrar vacaciones",
      "traspasar vacaciones", "31 de marzo", "5 dias vacaciones", "5 días vacaciones"
    ],
    answer:
      "Se pueden traspasar como máximo 5 días de vacaciones al año siguiente y deben disfrutarse antes del 31 de marzo. Como excepción, si por maternidad o paternidad el colaborador acumula muchos días, podrán pasarse al año siguiente y disfrutarse durante todo ese año; si no se usan entonces, se pierden.",
    source: "Normativa RRHH 2024 - Vacaciones"
  },

  {
    id: "vacaciones_no_generadas",
    topic: "vacaciones - días no generados",
    keywords: [
      "vacaciones no generadas", "dias no generados", "días no generados",
      "30% dias generados", "30% días generados"
    ],
    answer:
      "Si aún no has generado las vacaciones que deseas solicitar, como máximo se podrán aceptar el 30% de los días generados.",
    source: "Normativa RRHH 2024 - Vacaciones"
  },

  {
    id: "permisos_general",
    topic: "permisos - general",
    keywords: [
      "permisos", "ausencias", "permiso retribuido", "permiso remunerado"
    ],
    answer:
      "Los permisos y ausencias se solicitan por Factorial y siempre requieren dos validaciones: la del manager y la de RRHH. Si tu ausencia no aparece reflejada en la guía o genera dudas, debes escribir a gestiones.corporativo@selectra.com con copia a tu manager indicando el motivo.",
    source: "Normativa RRHH 2024 - Permisos retribuidos"
  },

  {
    id: "enfermedad",
    topic: "enfermedad",
    keywords: [
      "enfermedad", "estoy enfermo", "baja medica", "baja médica",
      "indispuesto", "justificante medico", "justificante médico"
    ],
    answer:
      "Si te encuentras mal, el tratamiento depende de la situación: si te marchas del puesto y continúas trabajando desde casa, no hace falta solicitar ausencia en Factorial. Si te marchas y no puedes seguir trabajando desde casa, debes enviar justificante médico; sin acreditación se genera deuda de horas a compensar ese mes. Si estás enfermo pero puedes teletrabajar, debes escribir a RRHH y a tu manager indicando cuándo te ausentas y presentar justificante; si no lo presentas contará como día de teletrabajo y tendrás que solicitarlo por Factorial. Si la situación dura dos días o más, debes presentar parte de baja y alta, solicitar la ausencia por enfermedad en Factorial y adjuntar documentación. Si no estás en condiciones de trabajar, debes pedir parte de baja a tu médico, solicitar la ausencia por enfermedad en Factorial y adjuntar la documentación. A partir del día 2 es obligatorio entregar el parte médico.",
    source: "Normativa RRHH 2024 - Enfermedad"
  },

  {
    id: "examen_formacion",
    topic: "exámenes de formación reglada",
    keywords: [
      "examen", "formacion reglada", "formación reglada",
      "carrera", "modulo", "módulo", "examen relativo"
    ],
    answer:
      "Para exámenes de formación reglada puedes solicitar ausencia por Factorial indicando el número de horas y adjuntando justificante. El permiso cubre los días u horas del examen. Lo aprueba el manager y RRHH valida la documentación definitivamente.",
    source: "Normativa RRHH 2024 - Exámenes de relativa importancia, carreras o módulos públicos"
  },

  {
    id: "mudanza",
    topic: "mudanza",
    keywords: [
      "mudanza", "cambio de residencia", "permiso por mudanza"
    ],
    answer:
      "El permiso por mudanza aplica al propio trabajador y da derecho a 2 días. Debe solicitarse por Factorial indicando el número de días y adjuntando justificante, por ejemplo contrato de arrendamiento o compra, o factura de mudanza con nombre del trabajador y fecha.",
    source: "Normativa RRHH 2024 - Mudanza"
  },

  {
    id: "acompanamiento_familiares_madrid",
    topic: "acompañamiento familiares Madrid",
    keywords: [
      "acompañamiento familiar", "acompanamiento familiar", "cita medica familiar",
      "cita médica familiar", "intervencion familiar", "intervención familiar",
      "hijo menor de 14", "mayores de primer grado", "acompañamiento madrid"
    ],
    answer:
      "En Madrid existe un permiso para acompañar a un familiar a una cita o intervención médica importante. Aplica a hijos o hijas menores de 14 años y a familiares mayores de primer grado de consanguinidad y afinidad que no pueden valerse por sí mismos. El tiempo disponible es de 10 horas al año. Se solicita por Factorial indicando horas y adjuntando justificante.",
    source: "Normativa RRHH 2024 - Acompañamiento familiares (MADRID)"
  },

  {
    id: "consultas_medicas_madrid",
    topic: "consultas médicas propias o de hijos menores Madrid",
    keywords: [
      "consulta medica", "consulta médica", "medico", "médico",
      "prueba medica", "prueba médica", "hijo menor", "consultas madrid"
    ],
    answer:
      "En Madrid existe un permiso para consultas médicas propias o de hijos menores. Aplica al propio trabajador y concede 8 horas al año. Debe solicitarse por Factorial indicando el número de horas y adjuntando justificante. La guía añade que, cuando sea posible, las visitas médicas deben adaptarse a los tiempos de descanso.",
    source: "Normativa RRHH 2024 - Consultas médicas propias o de hijos menores (MADRID)"
  },

  {
    id: "fuerza_mayor",
    topic: "permiso de fuerza mayor",
    keywords: [
      "fuerza mayor", "motivos familiares urgentes", "urgencia familiar",
      "conviviente enfermo", "accidente familiar"
    ],
    answer:
      "El permiso de fuerza mayor cubre motivos familiares urgentes vinculados a familiares o convivientes, en casos de enfermedad o accidente que requieran presencia inmediata. Aplica a familiares de primer grado de consanguinidad y a personas convivientes. Concede 4 días al año y se solicita por Factorial, adjuntando justificante cuando se tenga.",
    source: "Normativa RRHH 2024 - Permiso de fuerza mayor"
  },

  {
    id: "juicio",
    topic: "juicio o deber inexcusable",
    keywords: [
      "juicio", "deber inexcusable", "deber legal", "citación judicial"
    ],
    answer:
      "Si debes asistir a un juicio o cumplir un deber legalmente inexcusable, puedes solicitar el permiso por el tiempo de la gestión. Debe tramitarse por Factorial indicando el número de horas y adjuntando justificante.",
    source: "Normativa RRHH 2024 - Juicio/Deber inexcusable"
  },

  {
    id: "matrimonio",
    topic: "matrimonio o pareja de hecho",
    keywords: [
      "matrimonio", "me caso", "pareja de hecho", "permiso por matrimonio"
    ],
    answer:
      "Si te casas o te haces pareja de hecho, tienes derecho a 15 días. Debes solicitarlo por Factorial con un mínimo de un mes de antelación y adjuntar el justificante en la solicitud cuando lo tengas.",
    source: "Normativa RRHH 2024 - Matrimonio"
  },

  {
    id: "matrimonio_familiares",
    topic: "matrimonio de familiares",
    keywords: [
      "se casa mi hermano", "se casa mi hermana", "se casa mi hijo",
      "se casa mi hija", "se casa mi padre", "se casa mi madre",
      "matrimonio familiar", "boda familiar", "hermano politico", "hermano político"
    ],
    answer:
      "Si se casan tus padres, hijos, hermanos o hermanos políticos, tienes derecho a 1 día en la fecha de la celebración de la ceremonia. Debe solicitarse por Factorial y adjuntar justificante cuando se tenga.",
    source: "Normativa RRHH 2024 - Matrimonio de padres, hijos, hermanos o hermanos políticos"
  },

  {
    id: "hospitalizacion_fallecimiento",
    topic: "hospitalización, enfermedad grave o fallecimiento",
    keywords: [
      "hospitalizacion", "hospitalización", "reposo domiciliario",
      "enfermedad grave familiar", "fallecimiento familiar", "duelo",
      "pariente segundo grado"
    ],
    answer:
      "Para hospitalización, enfermedad grave con reposo domiciliario o fallecimiento de parientes hasta segundo grado de consanguinidad, el permiso es de 5 días. Si es programado, se solicita por Factorial indicando los días y adjuntando justificante. Si no es programado, se solicita por Factorial y el justificante se adjunta cuando esté disponible.",
    source: "Normativa RRHH 2024 - Hospitalización o enfermedad grave con reposo domiciliario o fallecimiento de parientes hasta segundo grado de consanguinidad"
  },

  {
    id: "examen_oficial",
    topic: "exámenes oficiales",
    keywords: [
      "examen oficial", "titulo academico", "título académico",
      "titulo profesional", "título profesional"
    ],
    answer:
      "Para exámenes oficiales de título académico o profesional, el permiso cubre el tiempo de la prueba. Debes solicitarlo por Factorial indicando el número de horas y adjuntando justificante.",
    source: "Normativa RRHH 2024 - Exámenes oficiales"
  },

  {
    id: "prenatales",
    topic: "exámenes prenatales",
    keywords: [
      "examen prenatal", "prueba prenatal", "embarazo examen", "embarazo prueba"
    ],
    answer:
      "Los exámenes prenatales pueden solicitarse por el tiempo de la prueba. Deben tramitarse por Factorial indicando las horas y adjuntando justificante.",
    source: "Normativa RRHH 2024 - Exámenes prenatales"
  },

  {
    id: "maternidad_paternidad",
    topic: "maternidad y paternidad",
    keywords: [
      "maternidad", "paternidad", "nacimiento hijo", "adopcion", "adopción"
    ],
    answer:
      "El permiso de maternidad o paternidad es de 112 días. Debe solicitarse por Factorial con un mínimo de un mes de antelación. Cuando se produzca el nacimiento, el empleado debe escribir a RRHH aportando la documentación y la partida de nacimiento para la inscripción y comunicación a la Seguridad Social.",
    source: "Normativa RRHH 2024 - Maternidad/Paternidad"
  },

  {
    id: "lactancia",
    topic: "lactancia",
    keywords: [
      "lactancia", "permiso lactancia"
    ],
    answer:
      "El permiso de lactancia es de 15 días laborables y se solicita por Factorial. Lo aprueba el manager y RRHH lo valida definitivamente.",
    source: "Normativa RRHH 2024 - Lactancia"
  },

  {
    id: "mesa_electoral",
    topic: "mesa electoral",
    keywords: [
      "mesa electoral", "elecciones", "citación mesa electoral"
    ],
    answer:
      "Si te citan para mesa electoral, el permiso incluye el día de la mesa más 5 horas de reducción de jornada al día siguiente. Debe solicitarse por Factorial indicando las horas y adjuntando justificante.",
    source: "Normativa RRHH 2024 - Mesa electoral"
  },

  {
    id: "asuntos_propios_sevilla",
    topic: "asuntos propios Sevilla",
    keywords: [
      "asuntos propios", "asuntos propios sevilla", "sevilla asuntos propios"
    ],
    answer:
      "En Sevilla existe un día de asuntos propios equivalente a 8 horas al año en jornada completa. Se solicita por Factorial y no requiere justificación del motivo personal.",
    source: "Normativa RRHH 2024 - Día de asuntos propios (SEVILLA)"
  },

  {
    id: "festivos",
    topic: "festivos",
    keywords: [
      "festivos", "dias festivos", "días festivos", "festivos portugal",
      "festivos mexico", "festivos méxico", "latam festivos"
    ],
    answer:
      "Con carácter general, se disfrutan los festivos de la ciudad en la que se trabaja, salvo excepciones acordadas por beneficio del proyecto. En departamentos de Portugal, México y LATAM hay reglas específicas: comercial se rige por los festivos de esos países y, si fueran menos de 14, se completan con festivos españoles pactados con el responsable. En estructura, esos trabajadores pueden regirse por los festivos del país correspondiente o por los españoles.",
    source: "Normativa RRHH 2024 - Festivos"
  },

  {
    id: "accidente_trabajo",
    topic: "accidente de trabajo",
    keywords: [
      "accidente trabajo", "accidente laboral", "fremap", "mutua"
    ],
    answer:
      "Si tienes un accidente laboral, debes informar de manera inmediata a tu responsable y a RRHH en rrhh@selectra.com. Para la atención médica debes dirigirte a la mutua FREMAP.",
    source: "Normativa RRHH 2024 - Accidente de trabajo"
  },

  {
    id: "cambio_cuenta",
    topic: "cambio de cuenta bancaria",
    keywords: [
      "cambiar cuenta", "cambio cuenta bancaria", "domiciliacion bancaria",
      "domiciliación bancaria", "numero de cuenta", "número de cuenta"
    ],
    answer:
      "Para cambiar la cuenta donde se domicilia la nómina debes escribir a rrhh@selectra.com solicitando el cambio y adjuntar un pantallazo del número de cuenta para comprobar que eres titular.",
    source: "Normativa RRHH 2024 - Cambio de número de cuenta / domiciliación bancaria"
  },

  {
    id: "cambio_irpf",
    topic: "cambio de IRPF o situación personal/familiar",
    keywords: [
      "irpf", "cambio irpf", "modificacion familiar", "modificación familiar",
      "modificacion personal", "modificación personal"
    ],
    answer:
      "Para solicitar un cambio de IRPF o una modificación familiar o personal, debes escribir a rrhh@selectra.com detallando la solicitud.",
    source: "Normativa RRHH 2024 - Cambio de IRPF / modificación familiar o personal"
  },

  {
    id: "nominas",
    topic: "nóminas",
    keywords: [
      "nomina", "nómina", "ver nomina", "ver nómina",
      "descargar nomina", "descargar nómina", "mis documentos"
    ],
    answer:
      "Antes del penúltimo día de cada mes recibirás un correo de RRHH avisando de que las nóminas ya han sido publicadas. Desde ese momento puedes consultarlas en Factorial entrando en Mis documentos > Nómina, donde también podrás descargarlas en PDF. Para cualquier duda sobre nóminas, escribe a nominas@selectra.com.",
    source: "Normativa RRHH 2024 - Envío de nóminas"
  },

  {
    id: "contacto_rrhh",
    topic: "contacto RRHH",
    keywords: [
      "contacto rrhh", "email rrhh", "correo rrhh", "rrhh"
    ],
    answer:
      "Para dudas generales sobre portal del empleado y gestiones comunes puedes escribir a rrhh@selectra.com. Si tienes una duda sobre ausencias no recogidas en la guía, escribe a gestiones.corporativo@selectra.com con copia a tu manager. Para consultas sobre nómina, el correo es nominas@selectra.com.",
    source: "Normativa RRHH 2024 - Información general / Permisos / Nóminas"
  }
];
