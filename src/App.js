import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import UpdateItems from './components/Home/UpdateItems/UpdateItems';
import Login from './components/Login/Login';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory/:id' element={<UpdateItems/>}></Route>
        <Route path='/manageItems' element={<ManageItems />}></Route>
        <Route path='/addItems' element={<AddItems />}></Route>
        <Route path='/myItems' element={<MyItems/>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
