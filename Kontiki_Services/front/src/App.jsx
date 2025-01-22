import { useEffect } from 'react';
import * as React from 'react'
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar/Navbar.jsx';
import Accueil from './components/pages/Accueil/Accueil.jsx';
import Test from './components/pages/Test/Recrutement.jsx';
import Footer from './components/Footer/Footer.jsx';
import Services from './components/pages/Services/Services.jsx'
import Contact from './components/pages/Contact/Contact.jsx'
import A_propos from './components/pages/A_propos/Apropos.jsx';

import './App.scss';

// import EditeurDeCode from './components/pages/Test/allTest/testDev/Code-editor.js';
// import EntretienDev from './components/pages/Test/allTest/testDev/Entretien.js'


// RECRUTEMENT
import EditeurDeCode from './components/pages/Test/allTest/testDev/Code-editor.jsx'
import EntretienDev from './components/pages/Test/allTest/testDev/EntretienDev.jsx'
import Admin from './components/pages/Administration/Admin.jsx';
import EntretienTM from './components/pages/Test/allTest/testTM/EntretienTM.jsx';


//DEPARTEMENTS
// import TraficManager from './components/pages/A_propos/Departements/TM.jsx'

import Commercial from './components/pages/Test/FichePoste/Commercial.jsx'


function App() {


  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/accueil' element={<Accueil />} />
        <Route path='/test' element={<Test />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        

        {/* TESTES */}
        {/* <Route path='testDev' element={<TestDev />} /> */}
        {/* <Route path='testTM' element={<testTM />} /> */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/codeEditor' element={<EditeurDeCode />} />
        <Route path='/entretienDev' element={<EntretienDev />} />
        <Route path='/entretienTM' element={<EntretienTM/>} />


        {/* Fiche de postes */}
        <Route path='/commercial' element={<Commercial />} />


        {/* A PROPOS  */}
        <Route path='A_propos' element={<A_propos />} />


        


        {/* Route protegee */}
        {/* <Route path='/dmin' 
          element={
            <ProtectedRoute>
              <AdminPanel />
            </ProtectedRoute> */}
          {/* } */}

      </Routes>

      <Footer />
    </>
  )
}

export default App
