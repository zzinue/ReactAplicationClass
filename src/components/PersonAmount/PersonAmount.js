import React from 'react'
import '././PersonAmount.scss'

const PersonAmount = () => {
    const total = 0;
    const label = 'Tips'
    return (
        <div className="PersonAmount">
            <div className="PersonAmount-Container">
                <div className="PersonAmount-Content">
                    <div className='PersonAmount-Content-Amount'>
                        <div className='PersonAmount-Text' >
                            <p>{label}</p>
                            <span>/ person</span>
                        </div>
                        <div className='PersonAmount-Price'>
                            <p>{total === 0 ? '$0.00 MXN' : `$ ${total} MXN`}</p>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default PersonAmount