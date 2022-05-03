import React from "react";
import PersonAmount from "../PersonAmount";
import ResetButton from "../ResetButton";
import './Result.scss'

const Result = () => {
    return (
        <div className="Result">
            <div className="Result-Container">
                <div className="Result-Content">
                    <PersonAmount />
                    <ResetButton />
                </div>
            </div>
        </div>
    )
}

export default Result