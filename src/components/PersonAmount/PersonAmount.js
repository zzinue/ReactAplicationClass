import React from 'react'
import '././PersonAmount.scss'
import CustomTips from '../CustomTips'

const PersonAmount = ({ label, total }) => {

    return (
        <div className="PersonAmount">
            <div className="PersonAmount-Container">
                <div className="PersonAmount-Content">
                    <div className='PersonAmount-Content-Amount'>
                        <div className='PersonAmount-Text' >
                            <h2>{label}</h2>
                            <span>/ person</span>
                        </div>
                        <div className='PersonAmount-Price'>
                            <CustomTips total={total} />

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default PersonAmount