import React, { useState } from "react";

import "./styles.scss";
import axios from "axios";

function MainPage() {
const [number, setNumber] = useState(0);
const [result, setResult] = useState();
const api = axios.create({
    baseURL: `http://localhost:8080/alticci`,
});

function generateSequence() {
    if (number) {
        api
            .get(`/${number}`)
            .then((response) => setResult(response.data))
            .catch((err) => {
                setResult("Inexpected Error! Verify the API and try again!")
            console.error("Inexpected Error!" + err);
            });
    }
}

function clear() {
    setResult(null);
    setNumber(0);
}

return (
    <>
        <div className="container">
        <h5 className="text-center top-padding font-weight-bold">Alticci Sequence Generator</h5>
            <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card">
                <div className="card-body">
                    <div className="row">
                    <div className="col-1" />
                    <div className="col-10">
                         <h5 className="text-center">Enter the index to generate the Alticci sequence number</h5>
                        <input
                        type="number"
                        className="form-control"
                        id="index"
                        placeholder="Alticci Index"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        />
                        <div className="col text-center top-padding">
                        <button
                            onClick={clear}
                            type="submit"
                            className="btn btn-secondary center">
                            clear
                        </button>
                        <button
                            onClick={generateSequence}
                            type="submit"
                            className="btn btn-primary center space-left "
                            disabled={!number}>
                            submit
                        </button>
                        </div>
                    </div>
                    <div className="col-1" />
                    </div>
                    <h2 className="text-center top-padding-response">{result ? result : null}</h2>
                </div>
                </div>
            </div>
            <div className="col-md-3"></div>
            </div>
        </div>
        </>
    );
}

export default MainPage;
