import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Deposit from './pages/DepositPage/DepositPage';
import Home from './pages/HomePage/Homepage';
import Login from './pages/LoginPage/LoginPage';
import SignUp from './pages/SignUpPage/SignUpPage';
import Withdraw from './pages/WithdrawPage/WithdrawPage';

function App() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/nova-entrada" element={<Deposit />} />
            <Route path="/nova-saida" element={<Withdraw />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;