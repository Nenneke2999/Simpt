import './Login.css'
import {useForm} from 'react-hook-form'

function Login(){

    const {register} = useForm()

    return(
        
        <div className="login_box" id="login" aria-hidden="true">
        <h3 className='h3_login'> Вход </h3>

        <iframe name="login" width='0' height='0'></iframe>

        <form method='POST' action='http://127.0.0.1:8000/token/' target='login'>
                
                <input className='form_login'
                    {...register('username')} 
                    placeholder='Логин' required/>
                
                <input type='password' className='form_password'
                    {...register('password')} 
                    placeholder='Пароль' required/>

                <a className='forgetpassword' href> забыли пароль? </a>
                
                <input type={'submit'} className='login_button' value='Войти'/>

            </form>
	    <div className='text_login'> или войдите через </div>
        <a className="close" onclick="close()" href="/">×</a>
        </div>
    )
}

export default Login