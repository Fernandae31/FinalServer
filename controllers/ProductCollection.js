const ProductCollection = require("../models/ProductCollection")
const Product = require("../models/Product")


exports.getProductCollections = async (req, res) => {
	const ProductCollections = await Product.find()
	res.json(ProductCollections)
}

exports.getProductCollectionByID = async (req, res) => {
	const { id } = req.params
	const collection = await ProductCollection.findById(id)
	const products = await Product.find({ folder: id })
	res.json({ collection, products })
}


exports.createProductCollection = async (req, res) => {
	const { title, description } = req.body
	const collection = await ProductCollection.create({ title, description })
	res.json(collection)
}


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


exports.deleteProductCollection = async (req, res) => {
	const { id } = req.params
	await Product.findByIdAndDelete(id)
	res.json({ message: "deleted" })
}
