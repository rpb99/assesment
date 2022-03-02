import React from 'react';
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Header from './components/Header';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import Ship from './pages/Ship';
import Create from './pages/Ship/Create';
import Edit from './pages/Ship/Edit';
import { useSelector, RootStateOrAny } from 'react-redux'

function App() {
  const { user } = useSelector((state: RootStateOrAny) => state)
  const navigate = useNavigate()


  const PrivateRoute = ({ children }: any) => {
    if (Object.keys(user).length === 0) navigate("/");

    return children
  };
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/admin" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/ships" element={<PrivateRoute><Ship /></PrivateRoute>} />
          <Route path="/ships/new" element={<PrivateRoute><Create /></PrivateRoute>} />
          <Route path="/ships/edit" element={<PrivateRoute><Edit /></PrivateRoute>} />
        </Route>
      </Routes>
    </div>
  );
}


const Layout = () => {
  return (
    <div className="flex bg-gray-600">
      <Sidebar />
      <div className="p-6 m-6 bg-white w-full rounded-xl "><Outlet /></div>
    </div>
  )
};

export default App;
