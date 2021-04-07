import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Installments from './components/Installments'

function App() {

  const [capital, setCapital] = useState(0);
  const [tax, setTax] = useState(0);
  const [time, setTime] = useState(0);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    if(capital && tax){

      const newInstallments = [];
      for(let i = 1; i <= time; i++){
        const value = (capital * (Math.pow(1 + (tax / 100), i)));
        const discount = value - capital;
        const percentage = (discount * 100) / capital;
        const newInstallment = {
          value,
          discount,
          percentage,
          id: i
        }
        newInstallments.push(newInstallment);
      }

      setInstallments(newInstallments);
    }
   
  }, [capital, tax, time])



  return (
    <>
    <div>
      <h1>Juros Compostos</h1>
      <Form 
      onChangeCapital={setCapital}
      onChangeTax={setTax}
      onChangeTime={setTime}
      />

      <Installments 
        installments={installments}
      />
    
    </div>
    </>
  );
}
export default App;