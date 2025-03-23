import React from 'react'
import './styles.css'

interface ButtonProps {
 value?: string | null | number;
 icon?: string | null;
 type: string
}

const Button:React.FC<ButtonProps> = ({...props}) => {
    const {value, icon, type} = props;
  return (
   <div className="calculator_button">
    <p className="calculator_button-value">
        {value ? value : icon}
    </p>
   </div>
  )
}

export default Button