import { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import FloatingButtons from './components/ShareButton/ShareButton'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Career } from './portfolio'
import NotFound from './NotFound'
import './App.css'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <Router>
      <div id='top' className={`${themeName} app`}>
        <Header />

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About />
                  <Projects />
                  <Skills />
                  <Career />
                  <Contact />
                </>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <FloatingButtons />
        {/* <ScrollToTop /> */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
