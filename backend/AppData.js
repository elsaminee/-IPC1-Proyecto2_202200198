
//CREACION DE ID UNICO
//const { v4: uuidv4 } = require('uuid');
//console.log(uuidv4());


usuarios = [
    {
        //PACIENTES
        id: "0bd7fdf4-3ec4-4a42-bd73-2c28cb574eeb",
        nombre: 'Jose',
        apellido: 'Perez',
        userName: 'joseperez',
        fechaNacimiento: '1996-01-01',
        genero: 'M',
        password: '12345678',
        telefono: '34821934',
        tipoUsuario: 'PACIENTE'
    },
    {
        nombre: 'Luis',
        apellido: 'Sánchez',
        userName: 'luisd',
        fechaNacimiento: '1985-07-20',
        genero: 'M',
        password: '12345678',
        telefono: '555789012',
        tipoUsuario: 'DOCTOR'
    },
    {
        nombre: 'Diego',
        apellido: 'Ramirez',
        userName: 'dimardo',
        fechaNacimiento: '1988-05-25',
        genero: 'M',
        password: '12345678',
        telefono: '555135792',
        tipoUsuario: 'DOCTOR'
    },

    //ENFERMERAS
    {
        nombre: 'Laura',
        apellido: 'López',
        userName: 'LauLop',
        fechaNacimiento: '1994-12-05',
        genero: 'F',
        password: '12345678',
        telefono: '555987654',
        tipoUsuario: 'ENFERMERA'
    }
    ,
    {
        nombre: 'Diego',
        apellido: 'Martínez',
        userName: 'DiegoMa',
        fechaNacimiento: '1988-05-25',
        genero: 'M',
        password: '12345678',
        telefono: '555135792',
        tipoUsuario: 'ENFERMERA'
    }

]

citas = [
    {
        idCita: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        fecha: "10/10/2023",
        hora: '12 am',
        motivo: 'Dolor de muelas',
        estado: 'PENDIENTE',
        idPaciente: "0bd7fdf4-3ec4-4a42-bd73-2c28cb574eeb"
    },
    {
        idCita: '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed',
        fecha: "10/10/2023",
        hora: '12 am',
        motivo: 'Dolor de muelas',
        estado: 'PENDIENTE',
        idPaciente: "0bd7fdf4-3ec4-4a42-bd73-2c28cb574eb"
    }
]

module.exports = {
    usuarios,
    citas
}