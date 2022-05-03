import React from 'react'
import '././PersonAmount.scss'

const PersonAmount = () => {
    return (
        <div className="PersonAmount">
            <div className="PersonAmount-Container">
                <div className="PersonAmount-Content">
                    <h4>Tip Amount</h4>
                    <h4>$ 0.00</h4>
                </div>
                <div className='PersonAmount-Content-Reset'>
                    <h4>Total</h4>
                    <h4>$ 0.00</h4>

                </div>
            </div>
        </div>
    )
}

export default PersonAmount