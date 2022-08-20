import './App.css';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
// Navigate sert à rediriger vers un chemin pas forcément logique (ici le / vers docs et pas la page d'accueil)

function App() {
  const [construction, setConstruction] = useState({Docs:false, Tutorials:true, Community:true});
  
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Navigate to="/docs" replace />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/tutorial" element={construction.Tutorials ? <Navigate to="/"/> : <Tutorials />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      
    </>
  );
}

export default App;
