const Usuario = require('./usuario.js');
const Categoria = require('./categoria.js');
const Tarea = require('./tarea.js');

const func = async () => {
    const users = await Usuario.findByPk('example', {
        include: [{
            model: Categoria,
            required: true,
            include: {
                model: Tarea,
                required: true
            }
        }]
    });

    console.log(users.toJSON().CATEGORIAs[0].TAREAs);
};

func();