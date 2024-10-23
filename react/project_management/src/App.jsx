import { useState } from 'react';
import ProjectPage from './components/ProjectPage';
import { Routes , Route , HashRouter } from "react-router-dom";
import AuthPage from './pages/AuthPage';
import ProtectedRoutes from './protectedRoutes';
import { AuthProvider } from './context';
import './App.css'

function App() {
  
  return (
    <div className='container'>
      {/* <AuthProvider> */}
        <Routes>
          <Route path="/" element={
            // <ProtectedRoutes>
              <ProjectPage/>
            // </ProtectedRoutes>
          }/>
          <Route path="/auth" element={<AuthPage/>}/>
        </Routes>
      {/* </AuthProvider> */}
    </div>
  )
}

export default App
