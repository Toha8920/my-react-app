import { useState } from 'react';
import BoilingVerdict from './BoilingVerdict';

const Calculator = () => {
    const [temperature, setTemperature] = useState('');
    const handleChange = (e) => {
        setTemperature(e.target.value);
        console.log(e.target.value)
    }
    return (
        <div>
            <fieldset>
                <legend>Enter your temperature</legend>
                <input type="text" value={temperature} onChange={handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </fieldset>
        </div>
    );
};

export default Calculator;