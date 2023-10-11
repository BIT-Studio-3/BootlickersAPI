import createRouter from "./base.js";

import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } from "../controllers/user.js";
  
  import validateRequests from "../middleware/validation.js";
  
  const institutionController = {
    get: getUsers,
    getById: getUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser,
  };
  
  const institutionRouter = createRouter(
    institutionController,
    validateRequests
  );
  
  export default institutionRouter;