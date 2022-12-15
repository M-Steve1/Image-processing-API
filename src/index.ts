import express from "express";
import resizeRoutes from "./routes/resizeImgRoute";

const app = express();
const port = 3000;

app.use("/api", resizeRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
