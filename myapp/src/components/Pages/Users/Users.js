import { useDispatch, useSelector } from 'react-redux'
import { fetchEmployees } from '../../../asyncActions/employees'
import './Users.css'

function Users(){

    const users = useSelector(store => store.empl)
    const dispatch = useDispatch()

    return(
        <div className='users_page'>
            <button onClick={() => dispatch({type: 'ADD_EMPL', payload: prompt()})}>Добавить сотрудника</button>
            <button onClick={() => dispatch(fetchEmployees())}>Добавить список сотрудников</button>
            {users.map(elem =>
                <div key={elem.id}>
                    <p>{elem.name}</p>
                </div>    
            )}
        </div>
    )
}

export default Users