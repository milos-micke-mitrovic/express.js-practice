import { Server } from "http";

export const shutdown = (server: Server) => () => {
  server.close(() => {
    console.log("Closed out remaining connections.");
    process.exit(1);
  });

  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down."
    );
    process.exit(1);
  }, 10000);
};
