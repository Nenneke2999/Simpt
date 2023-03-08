import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "../Pages/Home/Home";
import NotFound from '../Pages/NotFound/NotFound';
import Signup from '../Pages/Forms/Signup/Signup';
import Login from '../Pages/Forms/Login/Login';
import Confirm from '../Pages/Confirm/Confirm';
import Board from '../Pages/Board/Board';
import Addtask from '../Pages/Forms/Addtask/Addtask';


function App(){
    return(
        <div>
           <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup/confirm' element={<Confirm/>}/>
                    <Route path='/board' element={<Board/>}/>
                    <Route path='/board/addtask' element={<Addtask/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
           </Router>
        </div>
    )
}

export default App;