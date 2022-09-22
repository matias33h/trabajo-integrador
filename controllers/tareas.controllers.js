const task = require("../models/tareas")

const ctrlTareas={}

// Controlador para obtener todos los usuarios de la Base de Datos.
ctrlTareas.getTareas = async (req, res) => {
    // Se consultan todos los documentos de la base de datos.
    const tareas = await task.find();

    // Se devuelve al cliente un arreglo con los datos de los usuarios.
    return res.json(tareas)
};

// Controlador para crear nuevo usuario en la Base de Datos.
ctrlTareas.postTareas = async (req, res) => {
    // Se obtienen los datos enviados por método POST
    const { fecha, categoria, descripcion, titulo } = req.body;

    // Se instancia un nuevo documento de MongoDB para luego ser guardado
    const newTarea = new task({
        fecha,
        categoria,
        descripcion,
        titulo
    })

    // Se almacena en la base de datos con método asícrono .save()
    const tarea = await newTarea.save();
    
    // Se devuelve una respuesta al cliente con un mensaje y los datos del usuario creado.
    
    return res.json({
        msg: 'Tarea creada correctamente',
        tarea
    });
};

// Controlador para actualizar un usuario, requiere que se envíe ID  de usuario.
ctrlTareas.putTareas = async (req, res) => {
    return send.json({
        msg: 'hola mundo'
    })
};

// Controlador para eliminar usuario, requiere ID de usuario.
ctrlTareas.deleteTareas = async (req, res) => {

    return send.json({
        msg: 'estamos eliminando'
    })
};

module.exports = ctrlTareas;