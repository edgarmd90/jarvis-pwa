const output = document.getElementById("output");
const micBtn = document.getElementById("micBtn");

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "es-MX";
recognition.continuous = false;

micBtn.addEventListener("click", () => {
  recognition.start();
  output.innerHTML = "🎤 Escuchando...";
});

recognition.onresult = (event) => {
  const command = event.results[0][0].transcript.toLowerCase();
  output.innerHTML = "Dijiste: " + command;
  speak("Entendido: " + command);

  if (command.includes("hora")) {
    speak("Son las " + new Date().toLocaleTimeString());
  }
  if (command.includes("youtube")) {
    window.open("https://youtube.com", "_blank");
  }
  if (command.includes("clima")) {
    speak("No tengo clima en vivo aún, pero puedo agregarlo después.");
  }
};

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "es-MX";
  speechSynthesis.speak(utterance);
}
