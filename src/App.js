import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddItems from './components/AddItems/AddItems';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageInventories from './components/ManageInventories/ManageInventories';
import ManageItems from './components/ManageItems/ManageItems';
import MyItems from './components/MyItems/MyItems';
import ProtectRoute from './components/ProtectedRoute/ProtectRoute';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inventory/:itemId' element={
          <ProtectRoute>
            <ManageItems />
          </ProtectRoute>
        }></Route>
        <Route path='/manageInventories' element={
          <ProtectRoute>
            <ManageInventories />
          </ProtectRoute>
        }></Route>
        <Route path='/addItems' element={
          <ProtectRoute>
            <AddItems />
          </ProtectRoute>
        }></Route>
        <Route path='/myItems' element={
          <ProtectRoute>
            <MyItems />
          </ProtectRoute>
        }></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
