import React, { Suspense, lazy } from 'react'

const Agents = lazy(() => import("./screens/agents"))
const HomeScreen = lazy(() => import("./screens/home"))
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './screens/_layout'
const Maps = lazy(() => import("./screens/maps"))
const Weapons = lazy(() => import("./screens/weapons"))
import { useTranslation } from 'react-i18next'
import GameModes from './screens/gamemodes'



function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading Data...</div>}>
          <Routes>
            {/* Burada Layout yapılanması kurduk. */}
            <Route path="/" element={<Layout changeLang={changeLanguage} />}>
              <Route element={<HomeScreen />} index />
              <Route element={<Agents />} path="/agents" />
              <Route element={<Maps />} path="/maps" />
              <Route element={<Weapons />} path="/weapons" />
              <Route element={<GameModes />} path="/gamemodes" />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>

    </>
  )
}

export default App