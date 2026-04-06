function addMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  const text = input.toLowerCase();

  if (text.includes("vacaciones")) {
    return "Debes solicitar las vacaciones en la herramienta interna correspondiente. Si tu empresa usa Factorial, revisa la sección de ausencias. Si tienes una excepción, contacta con RRHH.";
  }
  if (text.includes("permiso") || text.includes("mudanza")) {
    return "Los permisos dependen de la política interna y del caso concreto. Revisa la política de permisos o consulta con RRHH si tu situación no es estándar.";
  }
  if (text.includes("nómina") || text.includes("nomina")) {
    return "La nómina suele estar disponible en el portal del empleado o en la plataforma de RRHH. Si no la encuentras, contacta con RRHH.";
  }
  if (text.includes("beneficios")) {
    return "Los beneficios disponibles dependen de la política interna. Consulta el documento de beneficios o escríbenos para revisarlo contigo.";
  }
  if (text.includes("onboarding")) {
    return "En onboarding normalmente debes revisar documentación, accesos y primeros pasos con tu manager. Si te falta algo, contacta con RRHH.";
  }

  return "No tengo una respuesta cerrada para eso todavía. Contacta con RRHH si necesitas revisión humana.";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const value = input.value.trim();
  if (!value) return;

  addMessage(value, "user");
  const reply = getBotReply(value);
  setTimeout(() => addMessage(reply, "bot"), 300);
  input.value = "";
}

function askPreset(question) {
  document.getElementById("userInput").value = question;
  sendMessage();
}
