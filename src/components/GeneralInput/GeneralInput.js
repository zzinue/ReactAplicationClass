import React from 'react'
import './GeneralInput.scss'
import CustomInput from '../CustomInput/CustomInput'

const GeneralInput = ({ label, icon }) => {


    return (
        <div className="GeneralInput">
            <div className="GeneralInput-Container">
                <div className="GeneralInput-Content">
                    <p>{label}</p>
                    <CustomInput icon={icon} />
                </div>
            </div>
        </div >
    )
}

export default GeneralInput
