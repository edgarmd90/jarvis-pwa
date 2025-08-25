self.addEventListener("install", (e) => {
  console.log("Service Worker instalado");
});

self.addEventListener("fetch", (e) => {
  // Aquí puedes manejar caché si quieres
});
