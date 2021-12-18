import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.scss';

export default function App() {
  return (
    <Layout>
      <Login />
    </Layout>
  )
}