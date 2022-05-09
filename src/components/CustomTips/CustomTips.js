import './CustomTips.scss'
import React from 'react'

const CustomTips = () => {
    return (
        <div className='CustomTips'>
            <div className='CustomTips-Container'>
                <div className='CustomTips-Content'>
                    {<p>
                        $0.00
                    </p>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomTips