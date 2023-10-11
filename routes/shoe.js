import createRouter from "./base.js"

import {
    getShoe,
    getShoes,
    createShoe,
    updateShoe,
    deleteShoe,
} from "../controllers/shoe.js";

const shoeController = {
    get: getShoes,
    getById: getShoe,
    create: createShoe,
    update: updateShoe,
    delete: deleteShoe,
};

const shoeRouter = createRouter(shoeController);

export default shoeRouter;