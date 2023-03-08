import './Signup.css'
import {useForm} from 'react-hook-form'
import { Component } from 'react'

function Signup(){

    const {register} = useForm()

    return(
        
        <div className="signup_box" id="signup" aria-hidden="true">
        <h3 className='h3'> Регистрация </h3>

        <iframe name="signup" width='0' height='0'></iframe>
        
        <form method='POST' action='http://127.0.0.1:8000/users/register/' target='signup'>
                
                <input type="email" className='email'
                    {...register('email')} 
                    placeholder='Электронная почта' 
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    title='Почта должна быть действительной' required/>
                
                <input className='form_signup'
                    {...register('username')} 
                    placeholder='Логин' required/>

                <input type='password' className='form_password_signup' name='password'
                    {...register('password')} 
                    placeholder='Пароль' pattern="(?=.*\d)(?=.*[a-z]).{8,}" 
                    title="Ваш пароль должен содержать хотя бы одну цифру, одну букву латинского алфавита
                    и быть в длину не менее 8 символов" required/> 

                <input type='password' className='form_passwordd' name='password2'
                    {...register('password2')} 
                    placeholder='Повторите пароль' required/>

                <input type="checkbox" name="agree" value="yes" className='chekbox' required/>
                <label for="agree" className='agree'>Согласие на обработку персональных данных</label>

                <input type='submit' className='submit' value='Зарегистироваться'/> 
        </form>

	    <div className='text_signup'> или войдите через </div>
        <a className="close" onclick="close()" href="/">×</a>
        </div>
    )
}

export default Signup