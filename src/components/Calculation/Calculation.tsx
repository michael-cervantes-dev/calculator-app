import React from 'react'
import './style.css'
import Button from '../Button.tsx/Button'
import { data } from '../../data/data'

interface CalculationProps {
    equation: string
}

const Calculation: React.FC<CalculationProps> = ({...props})=> {
    const {equation} = props
  return (
    <div className="calculation-container">
        <h1 className="calculation-string">{equation}</h1>
        <Button value={data?.numbers?.one?.value} icon={null} type={data?.numbers?.one?.type}/>
    </div>
  )
}

export default Calculation