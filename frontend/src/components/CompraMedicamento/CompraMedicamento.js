import React, { Component } from 'react';
import styles from './CompraMedicamento.module.css';

class CompraMedicameneto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero1: 0,
            numero2: 0,
            numero3: 0,
            numero4: 0,
            numero5: 0,
            numero6: 0
        };
    }

    sumarNumero1 = () => {
        this.setState((prevState) => ({ numero1: prevState.numero1 + 1 }));
    };

    restarNumero1 = () => {
        this.setState((prevState) => ({ numero1: prevState.numero1 - 1 }));
    };

    sumarNumero2 = () => {
        this.setState((prevState) => ({ numero2: prevState.numero2 + 1 }));
    };

    restarNumero2 = () => {
        this.setState((prevState) => ({ numero2: prevState.numero2 - 1 }));
    };

    sumarNumero3 = () => {
        this.setState((prevState) => ({ numero3: prevState.numero3 + 1 }));
    };

    restarNumero3 = () => {
        this.setState((prevState) => ({ numero3: prevState.numero3 - 1 }));
    }

    sumarNumero4 = () => {
        this.setState((prevState) => ({ numero4: prevState.numero4 + 1 }));
    }

    restaNumero4 = () => {
        this.setState((prevState) => ({ numero4: prevState.numero4 - 1 }));
    }

    sumarNumero5 = () => {
        this.setState((prevState) => ({ numero5: prevState.numero5 + 1 }));
    }

    restarNumero5 = () => {
        this.setState((prevState) => ({ numero5: prevState.numero5 - 1 }));
    }

    sumarNumero6 = () => {
        this.setState((prevState) => ({ numero6: prevState.numero6 + 1 }));
    }

    restarNumero6 = () => {
        this.setState((prevState) => ({ numero6: prevState.numero6 - 1 }));
    }

    render() {
        return (
            <div>
                <h1 className={styles.centradotexto}>Compra de Medicamentos</h1>
                <table className={styles.centrar}>
                    <tr>
                        <td className={styles.borde}>
                            Panadol
                        </td>
                        <td  className={styles.sizetablatd }>Para el alivio sintomático del dolor ocasional moderado , como el dolor de cabeza, dental, muscular (contracturas) o de espalda, y estados febriles.</td>
                        <td className={styles.borde}>
                            <button onClick={this.restarNumero1}>-</button>
                        </td>
                        <td className={styles.borde}>
                            <span> Seleccionados: {this.state.numero1}</span>
                        </td>
                        <td className={styles.borde}>
                            <button onClick={this.sumarNumero1}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.borde}>
                            Omeprazol
                        </td>
                        <td  className={styles.sizetablatd }>El omeprazol es un medicamento que inhibe la producción de acidez por el estómago.</td>
                        <td className={styles.borde}>
                            <button onClick={this.restarNumero2}>-</button>
                        </td>
                        <td className={styles.borde}>
                            <span> Seleccionados: {this.state.numero2}</span>
                        </td>
                        <td className={styles.borde}>
                            <button onClick={this.sumarNumero2}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.borde}>
                            Paracetamol
                        </td>
                        <td  className={styles.sizetablatd }> es un analgésico y antipirético eficaz para el control del dolor leve o moderado causado
                        por afecciones articulares, otalgias, cefaleas, dolor odontogénico, neuralgias, procedimientos quirúrgicos menores</td>
                        <td className={styles.borde}>
                            <button onClick={this.restarNumero3}>-</button>
                        </td>
                        <td className={styles.borde}>
                            <span> Seleccionados: {this.state.numero3}</span>
                        </td>
                        <td className={styles.borde}>
                            <button onClick={this.sumarNumero3}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.borde}>
                        Simvastatina 
                        </td>
                        <td  className={styles.sizetablatd }>Se emplea para reducir el colesterol y los triglicéridos (tipo de grasa) en la sangre.</td>
                        <td className={styles.borde}>
                            <button onClick={this.restarNumero4}>-</button>
                        </td>
                        <td className={styles.borde}>
                            <span> Seleccionados: {this.state.numero4}</span>
                        </td>
                        <td className={styles.borde}>
                            <button onClick={this.sumarNumero4}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.borde}>
                        Aspirina 
                        </td>
                        <td  className={styles.sizetablatd }>Reduce las sustancias en el cuerpo que producen dolor, fiebre e inflamación.</td>
                        <td className={styles.borde}>
                            <button onClick={this.restarNumero5}>-</button>
                        </td>
                        <td className={styles.borde}>
                            <span> Seleccionados: {this.state.numero5}</span>
                        </td>
                        <td className={styles.borde}>
                            <button onClick={this.sumarNumero5}>+</button>
                        </td>
                    </tr>
                    <tr>
                        <td className={styles.borde}>
                        Ramipril 
                        </td>
                        <td  className={styles.sizetablatd }>Mejora la supervivencia después de un infarto de miocardio y previene la insuficiencia renal por presión alterial alta y diabetes.</td>
                        <td className={styles.borde}>
                            <button onClick={this.restarNumero6}>-</button>
                        </td>
                        <td className={styles.borde}>
                            <span> Seleccionados: {this.state.numero6}</span>
                        </td>
                        <td className={styles.borde}>
                            <button onClick={this.sumarNumero6}>+</button>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default CompraMedicameneto;