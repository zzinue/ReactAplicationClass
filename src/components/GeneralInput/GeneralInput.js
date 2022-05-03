import React from 'react'
import './GeneralInput.scss'
import { ReactComponent as Vector } from '../../assets/Vector.svg'

const GeneralInput = () => {
    return (
        <div className="GeneralInput">
            <div className="GeneralInput-Container">
                <div className="GeneralInput-Content">
                    <h4>Bill</h4>
                    <div className='subdiv'>
                        <Vector />
                        <h3>0 </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GeneralInput
