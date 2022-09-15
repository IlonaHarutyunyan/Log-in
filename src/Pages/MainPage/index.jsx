import React , {useState} from 'react'
//components
import { Input } from '../../Components/Input'
import { Button } from '../../Components/Button'
import { AccessBox } from '../../Components/AccessBox/index'
//style
import './style.css'
//icons
import { MdAddShoppingCart } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import { AiOutlineLock } from 'react-icons/ai';
//data
import {dataBase} from './../../DataBase/index'

export const MainPage =  () => {
    const [access,setAccess] = useState(false)
    const [noAccess,setNoAccess] = useState()
    const [emailPass,setEmailPass] = useState(
        {

        }   
    )
    const pass = dataBase.find(
        (el) => el.email == emailPass.email && el.password == emailPass.password
    )
  return (
    <>
        <div className = 'wrapper'>
            <MdAddShoppingCart className = 'mainIcon'/>
            <form>
            <div>
                <BiUser className = 'iconStyle'/>
                <Input 
                    name = 'email'
                    type = 'email' 
                    placeholder = 'USERNAME' 
                    backgroundColor = 'transparent' 
                    border = '1px solid white' 
                    borderRadius = '5px'
                    color = 'white' 
                    padding  =' 5px 30px'
                    margin = '10px 0'
                    onInputChange = {(e) =>{
                            setEmailPass({...emailPass,
                                [e.target.name]: e.target.value
                            })
                    }}
                />
            </div>
            <div>
                <AiOutlineLock className = 'iconStyle'/>
                <Input 
                    name = 'password'
                    type = 'password' 
                    placeholder = 'PASSWORD' 
                    backgroundColor = 'transparent' 
                    border = '1px solid white' 
                    borderRadius = '5px'
                    color = 'white'
                    padding  = '5px 30px'
                    margin = '10px 0'
                    onInputChange = {(e) =>{
                            setEmailPass({...emailPass,
                                [e.target.name]: e.target.value
                            })
                    }}
                />
            </div>
            <Button 
                text = 'LOGIN'
                backgroundColor = 'white'
                color = 'rgba(148,187,233,1)'
                height = '30px'
                width = '225px'
                borderRadius = '5px'
                margin = '20px 0 20px 15px'
                cursor = 'pointer'
                onButtonClick = {(e) => {
                    e.preventDefault()
                    if(!pass){
                        setAccess(false)
                        setNoAccess(true)
                    }
                    if(pass){
                        setAccess(true)
                        setNoAccess(false)
                    }
                }    
                }
            /> 
            {access&& 
                <AccessBox 
                        text = 'Access'
                        backgroundColor = 'green'
                        height = '200px'    
                        width = '200px'
                />
            }
            {noAccess&& 
                <AccessBox 
                        text = 'Wrong username or password'
                        backgroundColor = 'red'
                        height = '200px'  
                        width = '200px'  
                />
            }
            </form>
        </div>
    </>
  )
}


