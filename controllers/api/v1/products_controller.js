const Product = require('../../../models/products');

module.exports.createProduct = async function(req,res){
    try{
        let product = await Product.create({name : req.body.name, quantity : req.body.quantity});
        return res.status(200).json({
            data : {
                product: {
                    name: product.name,
                    quantity: product.quantity
                }
            }
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.getProducts = async function(req, res){
    try{
        let products = await Product.find({});
        if(products){
            return res.status(200).json({
                products: products
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports.deleteProduct = async function(req, res){

    try{
        await Product.deleteOne({_id: req.params.id});
        return res.status(200).json({
            data:{
                message: "Product deleted"
            }
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


module.exports.updateQuantity = async function(req, res){

    console.log(req.params);
    console.log(typeof req.query.number);
    try{
        let product = await Product.findById(req.params.id);
        product.quantity = product.quantity + parseInt(req.query.number);
        product.save();

        return res.status(200).json({
            data: {
                product: {
                    id : product._id,
                    name : product.name,
                    quantity : product.quantity
                },
                message: "Updated Successfully"
            }
        });
    }
    catch(err){
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
    
}