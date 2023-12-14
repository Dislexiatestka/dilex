const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

const app = express();

// Configuración de la carpeta de archivos estáticos (tu aplicación Vue.js compilada)
const staticPath = path.join(__dirname, 'dist');
app.use(express.static(staticPath));

// Middleware para manejar el historial de HTML5
app.use(history());

// Configuración del puerto (puedes ajustar el puerto según tus necesidades)
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
