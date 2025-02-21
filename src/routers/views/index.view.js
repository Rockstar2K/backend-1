import { Router } from 'express'
import productsViewRouter from './products.view.js';
import usersViewRouter from './users.view.js';
import cartsViewRouter from './carts.view.js';

import { showProductsInIndex } from '../../controllers/products.controllers.js';


const viewRouter = Router()


viewRouter.get("/", showProductsInIndex);
viewRouter.use("/products", productsViewRouter);
viewRouter.use("/users", usersViewRouter);
viewRouter.use("/carts", cartsViewRouter);


export default viewRouter