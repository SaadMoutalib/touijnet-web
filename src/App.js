import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React from 'react'

import AdminLayout from './layouts/AdminLayout';
import MainLayout from './layouts/MainLayout'
import AccountLayout from './layouts/AccountLayout';

import WithAuth from './hoc/withAuth';
import WithAdminAuth from './hoc/withAdminAuth';

import Admin from './pages/Admin'
import Login from './pages/Login'
import AdminUsers from './pages/AdminUsers'
import HomePage from './pages/HomePage'
import Registration from './pages/Registration'
import Account from './pages/Account';
import Recovery from './pages/Recovery';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/"
          element={
            <MainLayout >
              <HomePage />
            </MainLayout>
          } />
        <Route path="/login"
          element={
            <MainLayout >
              <Login />
            </MainLayout>
          } />
        <Route exact path="/account"
          element={
            <WithAuth>
              <AccountLayout>
                <Account />
              </AccountLayout>
            </WithAuth>
          } />
        <Route path="/registration"
          element={
            <MainLayout >
              <Registration />
            </MainLayout>
          } />
        <Route path="/recovery"
          element={
            <MainLayout>
              <Recovery />
            </MainLayout>
          } />
        <Route path="/admin"
          element={
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          } />
        <Route path="/admin/users"
          element={
            <WithAdminAuth>
              <AdminLayout>
                <AdminUsers />
              </AdminLayout>
            </WithAdminAuth>
          } />
      </Routes>
    </div>
  );
}

export default App;
