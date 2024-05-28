import React from 'react'

import Agents from './screens/agents'
import HomeScreen from './screens/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Maps from './screens/maps'
import { useTranslation } from 'react-i18next'



function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Burada Layout yapılanması kurduk. */}
          <Route path="/" element={<Layout changeLang={changeLanguage} />}>
            <Route element={<HomeScreen />} index />
            <Route element={<Agents />} path="/agents" />
            <Route element={<Maps />} path="/maps" />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App