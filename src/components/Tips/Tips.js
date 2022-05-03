import React from 'react'
import './Tips.scss'
import TipButton from '../TipButton'
import GeneralInput from '../GeneralInput'

const Tips = () => {
    return (
        <div className="Tips">
            <div className="Tips-Container">
                <div className="Tips-Content">
                    <TipButton />
                    <GeneralInput />
                </div>
            </div>
        </div>
    )
}

export default Tips