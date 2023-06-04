import './App.css';
import LayoutLP from './components/landingPage/layoutLP';
import Home from './components/shared/Dasboard';
import Layout from './components/shared/layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TabelData from './components/shared/tabelData';
import DashboardComp from './components/shared/dasboardComp';
import { Provider } from 'react-redux'; 
import Store from './redux/store';
import BelumLogin from './components/shared/belumLogin';
import LahanSatu from './pages/lahanSatu';
import LahanDua from './pages/lahanDua';
import LahanEmpat from './pages/lahanEmpat';
import LahanTiga from './pages/lahanTiga';
import Login from './components/shared/login';
import ContohCard from './pages/contohcard';

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Router>
          <Routes>
            <Route path='/hehe' element={<DashboardComp/>}/>
            <Route path="/" element={<LayoutLP />} />
            <Route path="/Login" element={<BelumLogin />} />
            <Route path="Dasboard" element={<Layout />}>
              <Route path="" element={<Home/>} />
              <Route path="lahanSatu" element={<LahanSatu />} />
              <Route path="lahanDua" element={<LahanDua />} />
              <Route path="lahanTiga" element={<LahanTiga />} />
              <Route path="lahanEmpat" element={<LahanEmpat />} />
              <Route path="logdata" element={<TabelData />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
