import './App.css';
import LayoutLP from './components/landingPage/layoutLP';
import Home from './components/shared/Dasboard';
import Layout from './components/shared/layout';
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from 'react-router-dom';
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

const token = localStorage.getItem('token');

function App() {
  return (
    <Provider store={Store}>
      <div>
        <Router>
          <Routes>
            <Route path='/hehe' element={<DashboardComp />} />
            <Route path="/" element={<LayoutLP />} />
            <Route path="Dasboard" element={<Layout />}>
              <Route path="" element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route
                path="lahanSatu"
                element={
                  token !== null ? (
                    <LahanSatu />
                  ) : (
                    <Navigate to="/Dasboard/login" replace />
                  )
                }
              />
              <Route path="lahanDua" 
              element={
                token !== null ? (
                  <LahanDua />
                ) : (
                  <Navigate to="/Dasboard/login" replace />
                )
              } />
              <Route path="lahanTiga" 
              element={
                token !== null ? (
                  <LahanTiga />
                ) : (
                  <Navigate to="/Dasboard/login" replace />
                )
              } />
              <Route path="lahanEmpat" 
              element={
                token !== null ? (
                  <LahanEmpat />
                ) : (
                  <Navigate to="/Dasboard/login" replace />
                )
              } />
              <Route path="logdata" 
              element={
                token !== null ? (
                  <TabelData />
                ) : (
                  <Navigate to="/Dasboard/login" replace />
                )
              } />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
