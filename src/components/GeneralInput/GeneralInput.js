import React from 'react'
import './GeneralInput.scss'
import Vector from '../../assets/Vector.svg'

const GeneralInput = () => {
    return (
        <div className="GeneralInput">
            <div className="GeneralInput-Container">
                <div className="GeneralInput-Content">
                    <h4>Bill</h4>
                    <div className='subdiv'>

                        <img src={Vector} alt="" />
                        <input text='' value='0'>
                        </input>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default GeneralInput
