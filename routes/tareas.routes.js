const router= require("express").Router();  //Router es para crear  la ruta

const {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas,
} = require("../controllers/tareas.controllers") //importamos los datos de home controllers


router.get("/acceder", getTareas)
router.post("/leer", postTareas)
router.put("/put", putTareas)
router.delete("/delete", deleteTareas)
// router.put("/actualizar", putTareas)
// router.delete("/eliminar", deleteTareas)

module.exports= router

