import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './button.css'


const STYLES=['btn--primary','btn--outline']
const SIZE=['btn--medium','btn--large']

export const Button = ({
    children,
    type,
    onClick,
    buttonstyle,
    buttonsize
}) => {
    const checkbuttonstyle=STYLES.includes(buttonstyle)?'buttonstyle':STYLES[0]
    const checkbuttonsize=SIZE.includes(buttonsize)?'buttonsize':SIZE[0]

    return(
        <Link to='sign-up' className="btn-moblie">
            <button
             className={`btn ${checkbuttonstyle} ${checkbuttonsize}`}
             type={type}
             onClick={onClick}
            >
                {children}
            </button>
        </Link>
    )
}