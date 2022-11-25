// FUNCIONAMIENTO DE TODAS LAS RUTAS DE MEDICO

module.exports = {

    listarTodos: async (req, res) => {
    },

    crear: async (req, res) => {
    },

    listarInfo: async (req, res) => {
        try {            
            console.log('ejecutando paciente ' + req.params.idPaciente)

            res.json({
                message: "“Información  del paciente  " +  req.params.idPaciente
            })

        } catch (err) {
            console.log(err)
        }
    },

    listarUno: async (req, res) => {
        try {
            console.log('ejecutando paciente ')

            res.json({
                message: "“Información  del paciente  "
            })

        } catch (err) {
            console.log(err)
        }

    }

}