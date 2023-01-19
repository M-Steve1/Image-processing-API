import express from 'express';
import { logger } from './middleware/logger';
import resizeRoutes from './routes/resizeImgRoute';

const app = express();
const port = 8000;

app.use(logger);
app.use('/api', resizeRoutes);

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
