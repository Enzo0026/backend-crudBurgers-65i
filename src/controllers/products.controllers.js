/* const productController = {};

productController.showProduct = (req, res)=>{
    res.send('Listar producto')
}

export default productController; */

import Product from "../models/product";

const showProduct = async (req, res) => {
  //res.send("Listar producto");
  try {
    //Recuperar un arreglo con los productos de la BD
    const productsList = await Product.find();
    res.status(200).json(productsList);
  } catch {
    res.satus(400).json({ messagge: 'Error searching for requested products ' });
  }
};

const getOne = async (req, res) => {
  //res.send("El producto encontrado");
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const productFound = await Product.findById(id);
    res.status(200).json(productFound);
    
  } catch (error) {
    res.status(404).json({ message : 'Error searching for requested product'});
  }
};









const createProduct = async (req, res) => {
  //res.send("Se creó el producto");
const { productName, price, urlImg, category } = req.body;

  try {
    //console.log(req.body);
    //Validar

    //Crear un objeto para guardarlo en la BD
    const newProduct = new Product({
        /* productName: req.body.productName,
        price: req.body.price,
        urlImg: req.body.urlImg,
        category: req.body.category  */

        productName,
        price,
        urlImg,
        category 
    })

    //Guardar en la BD
    await newProduct.save()
    res.status(201).json({ message: 'Product created successfully'})
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error creating product ' + error})
  }
};

















const updateProduct = async (req, res) => {
  //res.send("Se actualizó el producto");
  try {
    //Busque el producto por su id en la BD y actualice
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: 'Product successfully updated' })
  } catch (error) {
    res.status(404).json({ message: 'Error searching for requested product' })
  }
};

const deleteProduct = async (req, res) => {
  //res.send("Se borró el producto");
  try {
    //Busque el producto por su id en la BD y lo borre
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Product delete successfully' })
  } catch {
    res.status(404).json({ message: 'Error searching for requested product' })
  }
};

export { showProduct, createProduct, getOne, updateProduct, deleteProduct };
