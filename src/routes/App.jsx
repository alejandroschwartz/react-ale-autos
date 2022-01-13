import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PasswordRecovery from '../pages/PasswordRecovery';
import PasswordCreate from '../pages/PasswordCreate';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState';
import '../styles/global.scss';

export default function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState} >
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={ <Home/> } />  
            <Route path="/login" element={ <Login/> } />
            <Route path="/recovery-password" element={ <PasswordRecovery/> } />
            <Route path="/create-password" element={ <PasswordCreate/> } />
            <Route path="/create-account" element={ <CreateAccount/> } />
            <Route path="/my-account" element={ <MyAccount/> } />
            <Route path="/orders" element={ <Orders/> } />
            <Route path="*" element={ <NotFound/> } />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  )
}