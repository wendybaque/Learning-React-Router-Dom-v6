import './App.css';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';
import Installation from './components/Installation';
import Fondamentaux from './components/Fondamentaux';
import Hooks from './components/Hooks';
import Users from './components/Users';
import Profile from './components/Profile';
import NoteUSers from './components/NoteUSers';
// Navigate sert à rediriger vers un chemin pas forcément logique (ici le / vers docs et pas la page d'accueil)

function App() {
  const [construction, setConstruction] = useState({Docs:false, Tutorials:true, Community:true});
  
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Navigate to="/docs" replace />} />
        <Route path="/docs" element={<Docs />}>
          {/* Nested routes cf dans le composant docs */}
          {/* L'index détermine celui qui est automatiquement affiché au chargement de la page (au lieu de rien). */}
          <Route index element={<Installation/>}/>
          <Route path="installation" element={<Installation />}></Route>
          <Route path="fondamentaux" element={<Fondamentaux />}></Route>
          <Route path="hooks" element={<Hooks />}></Route>
        </Route>
        <Route path="/tutorial" element={construction.Tutorials ? <Navigate to="/tutorial"/> : <Tutorials />}/>
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<ErrorPage />} />
        {/* Pour récupérer la data dans l'url en nested routes : */}
        <Route path="users" element={<Users/>}>
          <Route index element={<Profile/>}/>
          <Route path=":profileId" element={<Profile/>} />
          <Route path="noteUsers" element={<NoteUSers/>} />
        </Route>
      </Routes>
      
    </>
  );
}

export default App;
