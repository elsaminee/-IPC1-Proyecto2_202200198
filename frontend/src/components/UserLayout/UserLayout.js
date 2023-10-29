import { useContext } from "react";
import { UserContext } from "../../App";
import PacienteNavBar from "../PacienteNavBar/PacienteNavBar";
import EnfermeraNavBar from "../EnfermeraNavBar/EnfermeraNavBar";
import DoctorNavBar from "../DoctorNavBar/DoctorNavBar";
import { Outlet } from "react-router-dom";

function UserLayout() {
    const usuario = useContext(UserContext);

    let navbar = <PacienteNavBar />;
    switch (usuario.tipoUsuario) {
        case "ENFERMERA":
            navbar = <EnfermeraNavBar />
            break;
        case "DOCTOR":
            navbar = <DoctorNavBar />
            break;
        default:
            navbar = <PacienteNavBar />
            break;
    }


    return (
        <>
            {navbar}
            <Outlet />
        </>
    )
}

export default UserLayout;