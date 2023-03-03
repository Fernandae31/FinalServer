const ProductCollection = require("../models/ProductCollection")
const Product = require("../models/Product")

//1. obtener todas las colecciones
exports.getProductCollections = async (req, res) => {
	const ProductCollections = await Product.find()
	res.json(ProductCollections)
}
//2. Obtener 1 coleccion
exports.getProductCollectionByID = async (req, res) => {
	const { id } = req.params
	const collection = await ProductCollection.findById(id)
	const products = await Product.find({ folder: id })
	res.json({ collection, products })
}

//3. crear una coleccion
exports.createProductCollection = async (req, res) => {
	const { title, description } = req.body
	const collection = await ProductCollection.create({ title, description })
	res.json(collection)
}

//4. actualizar 1 coleccion
exports.updateProductCollection = async (req, res) => {
	const { id } = req.params
	const { title, description } = req.body
	const collection = await ProductCollection.findByIdAndUpdate(
		id,
		{
			title,
			description
		},
		{ new: true }
	)
	res.json(collection)
}

//5. borrar una coleccion
exports.deleteProductCollection = async (req, res) => {
	const { id } = req.params
	await Product.findByIdAndDelete(id)
	res.json({ message: "deleted" })
}
