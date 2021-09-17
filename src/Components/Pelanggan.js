import React, { Component } from "react";
import Meja from "./Meja";

class Pelanggan extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        alert("Silahkan Mengisi Nama dan Meja");
    }

    state = {
        meja: false,
        nama: "",
    };

    showComponentMeja = () => {
        this.setState(() => {
            return {
                meja: !this.state.meja,
            };
        });
    };

    handleNama = (event) => {
        const { name, value } = event.target;
        this.setState((state) => {
            return {
                [name]: value,
            };
        });
    };

    render() {
        return (
            <>
                <div style={{ display: "flex" }}>
                    <div style={{ width: "100%" }}>
                        <label for="nama">Masukan Nama</label>
                        <br />
                        <input
                            onChange={this.handleNama}
                            name="nama"
                            value={this.state.nama}
                        />
                    </div>
                </div>
                <div>
                    <label for="nama pelanggan:">Atas Nama:</label>
                    {this.state.nama}
                </div>

                <div style={{ width: "90%", margin: "5%" }}>
                    <button
                        style={{
                            backgroundColor: "#0dcaf0",
                            color: "#f4f6f9",
                            padding: "8px",
                            cursor: "pointer",
                        }}
                        onClick={this.showComponentMeja}
                    >
                        {this.state.meja ? "Tutup Nomor Meja" : "Tampilkan Nomor Meja"}
                    </button>
                    <br />
                    {this.state.meja && <Meja />}
                </div>
            </>
        );
    }
}

export default Pelanggan;