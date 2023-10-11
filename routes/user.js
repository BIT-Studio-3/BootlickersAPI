import createRouter from "./base.js";

import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } from "../controllers/user.js";
  
  import {
    validatePostUser,
    validatePutUser,
  } from "../middlewares/validation.js";
  
  const institutionController = {
    get: getUsers,
    getById: getUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser,
  };
  
  const institutionRouter = createRouter(
    institutionController,
    validatePostUser,
    validatePutUser
  );
  
  export default institutionRouter;