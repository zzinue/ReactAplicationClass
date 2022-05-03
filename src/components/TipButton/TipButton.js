import React from 'react'
import './TipButton.scss'

const Percent = [
    {
        label: '5%',
        value: 5
    },
    {
        label: '10%',
        value: 10
    },
    {
        label: '15%',
        value: 15
    },
    {
        label: '25%',
        value: 25
    },
    {
        label: '50%',
        value: 50
    },
    {
        label: 'Custom',
        value: 1
    },
]


function TipButton() {
    return (
        <div className="TipButton">
            <div className="TipButton-Container"></div>
            <div className='TipButton-Content'>
                <h2>Select Tip %</h2>
                <div>
                    {Percent.map(percent => (
                        <button key={percent.value}>{percent.label}</button>
                    ))}
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default TipButton