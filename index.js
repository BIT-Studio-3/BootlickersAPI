// Import the Express module
import express, {urlencoded, json} from 'express';
import cors from "cors";

import { validateRequests } from "./middleware/validation.js";

// Import routes here

import userRoutes from "./routes/user.js";
import shoeRoutes from "./routes/shoe.js";
import shoeModelRoutes from "./routes/shoeModel.js";

// Create an Express application
const app = express();

// Create app.use requests here
app.use(cors()); // Enable all cors requests

app.use(urlencoded({ extended: false })); // To parse the incoming requests with urlencoded payloads. For example, form data

app.use(json()); // To parse the incoming requests with JSON payloads. For example, REST API requests


app.use("/api/users", validateRequests(), userRoutes);
app.use("/api/shoes", validateRequests(), shoeRoutes);
app.use("/api/shoemodels", validateRequests(), shoeModelRoutes);

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000.');
});

// Export the Express application. May be used by other modules. For example, API testing
export default app;