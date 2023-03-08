import './Addtask.css'
import {useForm} from 'react-hook-form'

function Addtask(){

    const {register} = useForm()

    return(
        
        <div className="addtask" id="addtask" aria-hidden="true">
        <h3 className='h3task'> Создать задачу </h3>
        
        <form method='POST' action='http://127.0.0.1:8000/api/tasks/' 
            >
                
                <input className='taskname'
                    {...register('title')} 
                    placeholder='Название'/>
                
                <input className='datastart' type='date'
                    {...register('start_datetime')} 
                    placeholder='Начало'/>

                <input className='dataend' type='date'
                    {...register('due_datetime')} 
                    placeholder='Конец'/>

                <a className='priority'>Приоритет</a> 

                <select className="priority_select"
                    {...register('priority')}>
                    <option value="">Приоритет</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <a className='section'>Раздел</a>

                <input className='selectsection'
                    {...register('section')} 
                    placeholder='Раздел'/>

                <a className='status'>Статус</a> 

                <input className='selectstatus'
                    {...register('status')} 
                    placeholder='Статус'/>

                <a className='describe'>Описание задачи</a>

                <textarea className='task_describe' type='text'
                    {...register('describe')} 
                    placeholder='Введите описание задачи'/>

                <input type='submit' className='submittask' value='Добавить задачу'/>

        </form>

        <a className="close" onclick="close()" href="/">×</a>
        </div>
    )
}

export default Addtask