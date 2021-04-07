import React from 'react'
import Installment from './Installment';

export default function Installments({installments}) {
    return (
        <div className="installments">
            {installments.map(installment => {
                const {id, value, discount, percentage} = installment;
                return <Installment 
                key={id} 
                id={id}
                value={value}
                discount={discount}
                percentage={percentage}
                />

            })}
        </div>
    )
}
