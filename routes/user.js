import createRouter from "./base.js";

import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  } from "../controllers/user.js";
  
  const userController = {
    get: getUsers,
    getById: getUser,
    create: createUser,
    update: updateUser,
    delete: deleteUser,
  };
  
  const userRouter = createRouter(
    userController
  );
  
  export default userRouter;