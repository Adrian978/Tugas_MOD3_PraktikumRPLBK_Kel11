import React, { Component } from "react";

class Meja extends Component {
    constructor() {
        super();
    }

    state = {
        meja: "",
    };

    handleMeja = (event) => {
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
                    <div style={{ width: "100%", margin: "20px" }}>
                        <label for="meja">Nomor Meja</label>
                        <br />
                        <input
                            type="number"
                            onChange={this.handleMeja}
                            name="meja"
                            value={this.state.meja}
                        />
                    </div>
                </div>
                <div>
                    <label for="kode meja:">Nomor Meja:</label>
                    {this.state.meja}
                </div>
            </>
        );
    }
}

export default Meja;