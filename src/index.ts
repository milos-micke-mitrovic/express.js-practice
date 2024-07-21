import { PORT, SERVER_URL } from "./config/config";
import app from "./server";
import { shutdown } from "./utils/shutdown";

const server = app.listen(PORT, () => {
  console.log(`Server is started on ${SERVER_URL}:${PORT}`);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  shutdown(server)();
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  shutdown(server)();
});
