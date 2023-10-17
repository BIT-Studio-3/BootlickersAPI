// Import the Express module
import express from 'express';

import { validateRequests } from "./middleware/validation.js";

// Import routes here

import userRoutes from "./routes/user.js";
import shoeRoutes from "./routes/shoe.js";

// Create an Express application
const app = express();

// Create app.use requests here

app.use("/api/users", validateRequests(), userRoutes);
app.use("/api/shoes", validateRequests(), shoeRoutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});

// Export the Express application. May be used by other modules. For example, API testing
export default app;