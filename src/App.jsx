import './App.css'
import Home from './components/pages/Home'
import RootLayOut from './components/layout/RootLayOut'
import { Routes, Route } from 'react-router-dom'
import Features from './components/pages/Features'
import Modules from './components/pages/Modules'
import Themes from './components/pages/Themes'
import MobileApps from './components/pages/MobileApps'
import Demo from './components/pages/Demo'
import Resource from './components/pages/Resource'


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<RootLayOut />}>
          <Route index element={<Home/>} />
          <Route path="features" element={<Features />} />
          <Route path="modules" element={<Modules />} />
          <Route path="themes" element={<Themes />} />
          <Route path="mobile-apps" element={<MobileApps />} />
          <Route path="demo" element={<Demo />} />
          <Route path="resource" element={<Resource />} />

        </Route>
      </Routes>

    </>
  )
}

export default App
