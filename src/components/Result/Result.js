import React from "react";
import PersonAmount from "../PersonAmount";
import ResetButton from "../ResetButton";
import './Result.scss'

const Result = () => {

    return (
        <div className="Result">
            <div className="Result-Container">
                <div className="Result-Content">
                    <section>
                        <PersonAmount label='Tips' price='$ 0.00' />
                        <PersonAmount label='Total' price='$ 0.00' />
                        <ResetButton />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Result