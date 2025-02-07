import { validationResult } from "express-validator";


const validationResults = (req, res, next)=>{
    //Validar
    const errors = validationResult(req);
    //Pregunta si tengo errores
    if (!errors.isEmpty()) {
        return res.status(400).json({
             errors: errors.array() //Devuelve la lista de errores 
            });
    }
    //Le digo que continúe con el flujo
    next();
} 


export default validationResults