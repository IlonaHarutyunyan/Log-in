import {useState} from 'react'
import './style.css'

export const Input = ({name,type,placeholder,backgroundColor,border,color,padding,borderRadius,margin,onInputChange}) =>{
    return(
        <input 
            name = {name}
            type ={type} 
            placeholder ={placeholder} 
            onChange = {onInputChange}
            style = {{
                backgroundColor : backgroundColor ? backgroundColor : 'black',
                border : border ? border : 'black',
                color : color ? color : 'black',
                padding : padding ? padding : '0',
                borderRadius : borderRadius ? borderRadius : '0',
                margin : margin ? margin : '0'
    
            }}
        />
    )
}