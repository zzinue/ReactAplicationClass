import React from "react";
import './Calculator.scss'
import Result from "../Result";
import FormTips from "../FormTips";

// Todo componente 
// 1.- tiene un div con el Nombre del componente
// 2.- tiene un div con el nombre del componente-container 
// 3.- tiene un div con el nombre del componente-content

/*App 
    Calculator
        FormTips
             GeneralInput --props label , icon , initialValue
                Tips
                    TipButton --[5,10 ,15,25]
                    GeneralInput  label , icon , initialValue
                Result 
                    ResultButton
    */
const Calculator = () => {
    return (
        <div>
            <FormTips />
            <Result />
        </div>

    )
}

export default Calculator