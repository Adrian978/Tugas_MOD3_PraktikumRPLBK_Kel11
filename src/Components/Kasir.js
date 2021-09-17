import React, { Component } from 'react';
import './style.css';
import Menu from './Menu';
import Pelanggan from "./Pelanggan";

class Kasir extends Component {
    componentWillMount() {
        alert(
            "Selamat datang di Kasir Warung Makan Pac Man"
        );
    }

    render() {
        return (
            <div>
                <div style={{ textAlign: "center", display: "flex" }}>
                    <div style={{ width: "30%", margin: "5%" }}>
                        <Pelanggan />
                    </div>
                    <div style={{ width: "40%", margin: "5%" }}>
                        <Menu />
                    </div>
                </div>
            </div>
        );
    }
}

export default Kasir;