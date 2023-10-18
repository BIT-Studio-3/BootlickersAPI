import createRouter from "./base.js"

import {
    getShoeModel,
    getShoeModels,
    createShoeModel,
    updateShoeModel,
    deleteShoeModel,
} from "../controllers/shoeModel.js";

const shoeModelController = {
    get: getShoeModels,
    getById: getShoeModel,
    create: createShoeModel,
    update: updateShoeModel,
    delete: deleteShoeModel,
};

const shoeModelRouter = createRouter(shoeModelController);

export default shoeModelRouter;