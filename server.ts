import express, { Express } from 'express';
import userRoutes from './routes/userRoutes';
import { logger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';

const app: Express = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/users', userRoutes);

// Error Handler
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});