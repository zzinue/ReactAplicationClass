import React from 'react'
import './TipsButton.scss'

const TipsButton = ({ item }) => {
    return (<>
        {item === 'Custom' ? <input placeholder={item} /> : <button>{item}</button>
        }
    </>
    )
}
export default TipsButton