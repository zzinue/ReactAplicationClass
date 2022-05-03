import React from "react";
import './Calculator.scss'
import Result from "../Result";
import FormTips from "../FormTips";

const Calculator = () => {
    return (
        <div className="Calculator">
            <div className="Calculator-Container">
                <div className="Calculator-Content">
                    <FormTips />
                </div>
                <div className="Calculator-Content-Result">
                    <Result />

                </div>
            </div>
        </div>

    )
}

export default Calculator