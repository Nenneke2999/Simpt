import './Home.css'

function Home(){
    return(
        <div className='lending' href='/home'>
        <div className='header'>
            <a className='logo'> Simpt </a>
            <a className='about' href='/about'> About </a>
            <a className='button_login' href="/login">Log in</a>
            <a className='button_signup' href="/signup"> Sign up </a>
        </div>
        <div className='title'>МЫ СДЕЛАЕМ ВАШИ ЗАДАЧИ ПРОЩЕ</div>
        </div>
    )
}

export default Home