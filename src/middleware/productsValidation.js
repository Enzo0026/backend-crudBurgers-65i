import { check } from "express-validator";
import validationResults from "../helpers/validationResults";


const productValidate = [
      check("productName")
      .notEmpty()
      .withMessage("El nombre del producto es obligatorio")
      .isLength({ min: 2, max: 10 })
      .widthMesagge("El nombre del producto debe tener entre 2 a 100 caracteres"),
      check('price').notEmpty()
      .widthMesagge('El precio es obligatorio')
      .custom((value)=>{
        if(value >= 0 && value <= 100){
            return true
        }else {
            throw new Error('El precio debe estar entre 0 y 10000');
        }
      }),

      (req, res, next)=>{
        validationResults(req, res, next)
      }

    ]



export default productValidate;