import React from 'react'

export default function Installment({id, value, discount, percentage}) {

    function formatNumber(cash){
        return cash.toLocaleString('pt-br', {style: 'currency', currency: 'BRL' });

    }

    function formatPercentage(percent){
        return percent.toLocaleString('pt-br', {maximumFractionDigits: 2, minimumFractionDigits: 2}) + '%';
        
    }

    return (
        <div className={`installments-each ${percentage > 0 ? 'positive' : percentage < 0 ? 'negative' : ''}`}>
            <span className="id-installment">{id}</span> 
            <span>{formatNumber(value)}</span><br />
            <span>{percentage > 0 && '+'}{formatNumber(discount)}</span><br />
            <span>{percentage > 0 && '+'}{formatPercentage(percentage)}</span><br />
        </div>
    )
}
