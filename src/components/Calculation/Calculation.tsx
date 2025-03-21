import React from 'react'
import './style.css'

interface CalculationProps {
    equation: string
}

const Calculation: React.FC<CalculationProps> = ({...props})=> {
    const {equation} = props
  return (
    <div className="calculation-container">
        <h1 className="calculation-string">{equation}</h1>
    </div>
  )
}

export default Calculation