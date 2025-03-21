import React from 'react'
import './style.css'
import Calculation from './Calculation/Calculation'

function Calculator() {
  return (
    <div className='calculator-container'>
        <Calculation equation={'0'}/>
    </div>
  )
}

export default Calculator