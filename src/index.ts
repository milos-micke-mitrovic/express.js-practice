import { PORT } from "./config/config";
import app from "./server";

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
});
