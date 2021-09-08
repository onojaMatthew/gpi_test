import error from "../config/error";
import inventoryRoutes from "../controllers/router";

export default (app) => {
  app.use("/api/v1", inventoryRoutes);
  app.use(error);
}