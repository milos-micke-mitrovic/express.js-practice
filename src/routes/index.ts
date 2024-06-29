import authRoutes from "./authRoutes";
import productRoutes from "./productRoutes";
import updateRoutes from "./updateRoutes";
import updatePointRoutes from "./updatePointRoutes";
import { protect } from "../middlewares/auth";

export default {
  auth: authRoutes,
  api: [protect, productRoutes, updateRoutes, updatePointRoutes],
};
