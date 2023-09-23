const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola, esta es una aplicación Node.js dentro de Docker.");
});

app.listen(PORT, () => {
  console.log(`La aplicación está escuchando en el puerto ${PORT}`);
});
