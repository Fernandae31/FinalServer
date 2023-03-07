const Figure = require("../models/Figure")

exports.getProduct1 = async (req, res) => {
	const product = await Product1.find().populate("folder")
	res.json({ product })
}

exports.getProductByID = async (req, res) => {
	const { id } = req.params
	const product = await Product.findById(id).populate("folder")
	res.json({ product })
}

exports.createProduct = async (req, res) => {
	const { img, collection } = req.body
	const product = await Product.create({ img, folder: collection })
	res.json({ product })
}

exports.updateProduct = async (req, res) => {
	const { id } = req.params
	const { img, collection } = req.body

	const product = await Product.findByIdAndUpdate(
		id,
		{ img, folder: collection },
		{ new: true }
	)
	res.json({ product })
}

exports.deleteProduct = async (req, res) => {
	const { id } = req.params
	await Product.findByIdAndDelete(id)
	res.json({
		message: "deleted"
	})
}
