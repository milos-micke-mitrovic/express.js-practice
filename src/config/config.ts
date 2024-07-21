import dotenv from "dotenv";

dotenv.config();

export const NODE_ENV = process.env.NODE_ENV || "development";
export const JWT_SECRET = process.env.JWT_SECRET!;

export const PORT =
  NODE_ENV === "production"
    ? process.env.PROD_PORT || 8080
    : process.env.DEV_PORT || 3003;

export const DATABASE_URL =
  NODE_ENV === "production"
    ? process.env.PROD_DATABASE_URL
    : process.env.DEV_DATABASE_URL;

export const SERVER_URL =
  NODE_ENV === "production"
    ? process.env.PROD_SERVER_URL
    : process.env.DEV_SERVER_URL;

export const LOG_LEVEL = NODE_ENV === "production" ? "error" : "debug";
