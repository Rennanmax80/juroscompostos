import React from 'react'

export default function Form({onChangeCapital, onChangeTax, onChangeTime}) {
    
    const handleCapital = (event) => {
        const value = event.target.value;
        onChangeCapital(value);
    }

    const handleTax = (event) => {
        const value = event.target.value;
        onChangeTax(value);
    }

    const handleTime = (event) => {
        const value = event.target.value;
        onChangeTime(value);
    }
    
    
    return (
        <div>
            <form>
                <section>
                    <label htmlFor="c">Capital Inicial</label>
                    <input type="number"
                    id="c"
                    onChange={handleCapital}
                    autoComplete="off"
                    min="1"
                    />
                </section>

                <section>
                    <label htmlFor="c">Taxa de Juros %</label>
                    <input type="number"
                    id="i"
                    onChange={handleTax}
                    autoComplete="off"
                    step="0.1"
                    />
                </section>

                <section>
                    <label htmlFor="c">Meses</label>
                    <input type="number"
                    id="i"
                    onChange={handleTime}
                    autoComplete="off"
                    min="1"
                    />
                </section>
            </form>
        </div>
    )
}
