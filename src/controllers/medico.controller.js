// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MEDICO

module.exports = {

    listarUno: async (req, res) => { 
    },

    crear: async (req, res) => {
    },

    listarTodos: async (req, res) => {
        try {
            console.log('ejecutando Medico listarTodos')

            res.json({
                message: "Listado de Medicos "
            })

        } catch (err) {
            console.log(err)
        }

    }

}