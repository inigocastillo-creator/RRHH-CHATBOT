function addMessage(text, sender) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;
  msg.innerHTML = text.replace(/\n/g, "<br>");
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreMatch(userText, keywords) {
  let score = 0;
  for (const keyword of keywords) {
    const normalizedKeyword = normalizeText(keyword);
    if (userText.includes(normalizedKeyword)) {
      score += normalizedKeyword.split(" ").length > 1 ? 3 : 1;
    }
  }
  return score;
}

function findBestAnswer(input) {
  const normalizedInput = normalizeText(input);
  let bestItem = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    const currentScore = scoreMatch(normalizedInput, item.keywords);
    if (currentScore > bestScore) {
      bestScore = currentScore;
      bestItem = item;
    }
  }

  if (!bestItem || bestScore === 0) {
    return null;
  }

  return bestItem;
}

function getBotReply(input) {
  const result = findBestAnswer(input);

  if (result) {
    return `
      <strong>${result.topic.charAt(0).toUpperCase() + result.topic.slice(1)}</strong><br><br>
      ${result.answer}<br><br>
      <em>Fuente: ${result.source}</em>
    `;
  }

  return `
    <strong>No tengo una respuesta cerrada para eso</strong><br><br>
    No he encontrado una coincidencia clara en la normativa cargada.<br><br>
    Puedes escribir a:
    <br>• rrhh@selectra.com para dudas generales
    <br>• gestiones.corporativo@selectra.com para ausencias o permisos dudosos
    <br>• nominas@selectra.com para temas de nómina
  `;
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const value = input.value.trim();
  if (!value) return;

  addMessage(value, "user");
  const reply = getBotReply(value);
  setTimeout(() => addMessage(reply, "bot"), 250);
  input.value = "";
}

function askPreset(question) {
  document.getElementById("userInput").value = question;
  sendMessage();
}

document.addEventListener("DOMContentLoaded", () => {
  const userInput = document.getElementById("userInput");
  if (userInput) {
    userInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });
  }
});
