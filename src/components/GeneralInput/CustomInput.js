import React from "react";
import "./CustomInput.scss";

export const CustomInput = ({ placeholder, icon, state, setState }) => {

    return (
        <div className="CustomInput">
            <div className="CustomInput-Container">
                <div className="CustomInput-Content">
                    <img src={
                        icon === 'people'
                            ? require('../../assets/people.svg')
                            : require('../../assets/Vector.svg')
                    } alt={placeholder} />
                    <input className="InputCero" type="number" />

                </div>
            </div>
        </div>
    )

}