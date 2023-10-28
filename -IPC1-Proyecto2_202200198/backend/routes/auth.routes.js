const express = require('express');
const AppData = require('../AppData');

const router = express.Router();

//Logear Usuario
router.post('/login', (req, res) => {
    const userName = req.body.uNombre;
    const password = req.body.uPassword;
    
    for (usuario of AppData.usuarios) {
        if (usuario.userName === userName && usuario.password === password) {
            return res.status(200).json({ usuario});
        }
    }
    
    return res.status(400).json({
        error: 'Datos incorrectos.'
    })
})

//Registro Usuario
router.post('/registro', (req, res) => {
    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4();
    const nombre = req.body.uNombreR;
    const apellido = req.body.uApellido;
    const userName = req.body.uUserName;
    const fechaNacimiento = req.body.uFechaNacimiento;
    const genero = req.body.uGenero;
    const password = req.body.uPassword;
    const telefono = req.body.uTelefono;
    const tipoUsuario = "PACIENTE";

    const usuarioExistente = AppData.usuarios.find((usuario) => usuario.userName === userName);

    if (usuarioExistente) {
        return res.status(400).json({
            error: 'Usuario ya registrado.'
        });
    } else {

        if (password.length > 7) {
            const nuevoUsuario = {
                id,
                nombre,
                apellido,
                userName,
                fechaNacimiento,
                genero,
                password,
                telefono,
                tipoUsuario
            }
            AppData.usuarios.push(nuevoUsuario);
            return res.status(200).json(nuevoUsuario);
        }else {
            return res.status(400).json({
                error: 'La contraseña debe tener al menos 8 caracteres.'
            });
        }

    }
    
})

module.exports = router;