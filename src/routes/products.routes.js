import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getOne,
  showProduct,
  updateProduct,
} from "../controllers/products.controllers";
//import { check } from "express-validator";
import productValidate from "../middleware/productsValidation";
//import productController from "../controllers/products.controllers";

//Crear una instancia del router
const router = Router();

//Crear mis rutas

router
  .route("/products")
  //.get(productController.showProduct)
  .get(showProduct)
  .post([productValidate], createProduct)
  /* .post(
    [
      check("productName", "El nombre del producto es obligatorio").notEmpty(),
      check(
        "productName",
        "El nombre del producto debe tener entre 2 a 100 caracteres"
      ).isLength({ min: 2, max: 10 }),
      check('price', 'El precio es obligatorio').notEmpty(),
      check('price').custom((value)=>{
        if(value >= 0 && value <= 100){
            return true
        }else {
            throw new Error('El precio debe estar entre 0 y 10000');
        }
      }),
    ], */

router
  .route("/products/:id")
  .get(getOne)
  .put(updateProduct)
  .delete(deleteProduct);

export default router;
