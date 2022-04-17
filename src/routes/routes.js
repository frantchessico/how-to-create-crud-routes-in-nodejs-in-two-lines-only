import { Router } from "express";
import { deleteProducts, getProducts, setProducts, updateProducts } from "../controllers/productsController";


const router = Router();

router.route('/').get(getProducts).post(setProducts);
router.route('/:id').put(updateProducts).delete(deleteProducts)

export { router }



