const express = require("express");
const router = express.Router();
const Articulos = require("../models/ProductCollection.model");

router.post("/create", async (req, res) => {
  const { titulo, descripcion, imagen, figuraId, mangaId } = req.body;

  try {
    // Buscamos el documento correspondiente a la figura
    const figura = await Figures.findById(figuraId);

    // Buscamos el documento correspondiente al manga
    const manga = await Mangas.findById(mangaId);

    // Creamos un nuevo artículo con los datos recibidos y las referencias a la figura y al manga
    const nuevoArticulo = new Articulos({
      titulo,
      descripcion,
      imagen,
      figura: figura._id,
      manga: manga._id,
    });

    // Guardamos el nuevo artículo en la base de datos
    await nuevoArticulo.save();

    // Respondemos con el nuevo artículo creado
    res.status(201).json({ nuevoArticulo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear el artículo" });
  }
});

module.exports = router;