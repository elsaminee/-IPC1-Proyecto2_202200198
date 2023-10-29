const express = require('express');
const AppData = require('../AppData');
const router = express.Router();

//Modificar Usuario
router.post('/modificarPerfil', (req, res) => {
    const nombre = req.body.uNombreR;
    const apellido = req.body.uApellido;
    const usurActual = req.body.UserActual;
    const userName = req.body.uUserName;
    const fechaNacimiento = req.body.uFechaNacimiento;
    const password = req.body.uPassword;

    const usuarioExistente = AppData.usuarios.find((usuario) => usuario.userName === userName);
    if (usuarioExistente) {
        return res.status(400).json({
            error: 'Usuario ya registrado.'
        });
    } else {
        for (usuario of AppData.usuarios) {
            if (usuario.userName === usurActual) {
                if (password.length > 7) {
                    usuario.nombre = nombre;
                    usuario.apellido = apellido;
                    usuario.userName = userName;
                    usuario.fechaNacimiento = fechaNacimiento;
                    usuario.password = password;

                    return res.status(200).json({ usuario });

                } else {
                    return res.status(400).json({
                        error: 'La contraseña debe tener al menos 8 caracteres.'
                    });
                }
            }
        }
    }

})

//Solicitar Cita
router.post('/citas', (req, res) => {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4();
    const fecha = req.body.fecha;
    const hora = req.body.hora;
    const motivo = req.body.motivo;
    const estado = req.body.estado;
    //AQUI SE QUEDA VACIO MIENTRAS QUE ENFERMERA NO ACEPTE LA CITA
    const doctor = req.body.doctor;
    const idPaciente = req.body.idPaciente;

    const cita = {
        id,
        fecha,
        hora,
        motivo,
        estado,
        doctor,
        idPaciente
    }
    AppData.citas.push(cita);
    return res.status(200).json({ citas: AppData.citas });

})

router.post('/citasPaciente', (req, res) => {

    const citas = AppData.citas.filter(cita => {
        return cita.idPaciente === req.body.paciente;
    });

    return res.status(200).json({citas: AppData.citas });

})

// Ruta para obtener la lista de citas
router.get('/obtenerCitas', (req, res) => {
    return res.status(200).json({ citas: AppData.citas });
});

router.get('/stockMedicinas', (req, res) => {
    const medicinas = AppData.medicinas.filter(medicina => {
        return medicina.cantDisponible > 0;
    });

    return res.status(200).json({ medicinas });
})

module.exports = router;