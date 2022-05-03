import React from "react";
import './FormTips.scss'
import GeneralInput from "../GeneralInput";
import Tips from "../Tips";


const FormTips = () => {
    return (
        <div className="FormTips">
            <div className="FormTips-Container">
                <div className="FormTips-Content">
                    <GeneralInput />
                    <Tips />
                </div>
            </div>
        </div>

    )
}

export default FormTips