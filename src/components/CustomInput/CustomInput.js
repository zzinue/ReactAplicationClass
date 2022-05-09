import './CustomInput.scss'
import dolar from '../../assets/dolar.svg'
import people from '../../assets/people.svg'

const CustomInput = ({ placeholder, icon }) => {
    return (
        <div className="CustomInput">
            <div className="CustomInput-Container">
                <div className="CustomInput-Content">
                    <img src={
                        icon === "dolar" ?
                            dolar :
                            people
                    } alt={placeholder} />
                    <input className="InputCero" type="number" />

                </div>
            </div>
        </div>
    )

}
export default CustomInput;