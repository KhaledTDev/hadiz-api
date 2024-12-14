const app = require('./app');  // Importa tu aplicación
const config = require('./config/config');  // Configuración personalizada (si la tienes)

const port = process.env.PORT || config.port || 3000;  // Asegúrate de usar el puerto dinámico de Vercel o uno predeterminado

// Inicia el servidor
const server = app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

// Manejo de promesas no capturadas (unhandled rejections)
process.on('unhandledRejection', (err) => {
  console.error('UNHANDLED REJECTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});

// Manejo de excepciones no capturadas (uncaught exceptions)
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
