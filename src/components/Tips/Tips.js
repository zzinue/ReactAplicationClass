import React from 'react'
import './Tips.scss'
import TipsButton from '../TipsButton'

const TipsNumber = [
    { tip: 5, },
    { tip: 10, },
    { tip: 15, },
    { tip: 25, },
    { tip: 50, },
    { tip: 'Custom', },
]

const Tips = () => {
    return (
        <div className="Tips">
            <div className="Tips-Container">
                <div className="Tips-Content">
                    {
                        TipsNumber.map(item => (<TipsButton key={item.tip} item={item.tip} />))
                    }
                </div>

            </div>
        </div>
    )
}

export default Tips